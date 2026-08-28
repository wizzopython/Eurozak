import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { name: 'Home',          path: '/' },
  { name: 'Bathroom',      path: '/bathroom' },
  { name: 'Home Décor',    path: '/home-decor' },
  { name: 'Sanitaryware',  path: '/sanitaryware' },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen]     = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const navigate  = useNavigate();
  const location  = useLocation();

  // Add scroll shadow to header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-surface)' }}>

      {/* ─── HEADER ─────────────────────────────────────────────── */}
      <header
        className="nav-glass"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 2px 24px rgba(29,54,127,0.10)' : 'none',
        }}
      >
        <div className="container-max" style={{ height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Brand */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img
              src="/logo/vectors/EUROZAK_Logo_Exact_Blue_Transparent.svg"
              alt="Eurozak Logo"
              style={{ height: 'clamp(24px, 5vw, 34px)', width: 'auto' }}
              onError={e => { e.target.src = '/logo/logo-gold.png'; }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="desktop-nav">
            {NAV_LINKS.map(link => {
              const active = location.pathname === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="text-label-lg"
                  style={{
                    textDecoration: 'none',
                    color: active ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                    borderBottom: active ? '2px solid var(--color-secondary)' : '2px solid transparent',
                    paddingBottom: 4,
                    letterSpacing: '0.02em',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { if (!active) e.target.style.color = 'var(--color-on-surface)'; }}
                  onMouseLeave={e => { if (!active) e.target.style.color = 'var(--color-on-surface-variant)'; }}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919744978000"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              style={{ padding: '10px 24px', fontSize: 12, display: 'none' }}
              id="header-whatsapp"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp
            </a>

            <a
              href="https://wa.me/919744978000"
              target="_blank"
              rel="noreferrer"
              className="desktop-enquire"
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                color: 'var(--color-secondary)',
                textDecoration: 'none', fontSize: 13, fontWeight: 600,
                fontFamily: 'var(--font-sans)', letterSpacing: '0.08em',
                border: '1.5px solid var(--color-secondary)',
                padding: '9px 20px',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--color-secondary)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-secondary)';
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
              Enquire
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger-btn"
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-on-surface)', padding: 4,
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
                {menuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="mobile-menu-enter"
            style={{
              background: 'var(--color-surface)',
              borderTop: '1px solid var(--color-outline-variant)',
              padding: '24px clamp(20px,5vw,80px) 32px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
              {NAV_LINKS.map(link => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-label-lg"
                    style={{
                      textDecoration: 'none',
                      padding: '12px 16px',
                      color: active ? 'var(--color-secondary)' : 'var(--color-on-surface)',
                      borderLeft: active ? '3px solid var(--color-secondary)' : '3px solid transparent',
                      background: active ? 'rgba(119,90,25,0.06)' : 'transparent',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div style={{ borderTop: '1px solid var(--color-outline-variant)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                📞 <a href="tel:9744978000" style={{ color: 'var(--color-on-surface)' }}>9744978000</a>&nbsp;&nbsp;
                ✉️ <a href="mailto:info@eurozak.in" style={{ color: 'var(--color-on-surface)' }}>info@eurozak.in</a>
              </p>
              <a
                href="https://wa.me/919744978000"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── MAIN ───────────────────────────────────────────────── */}
      <main style={{ flex: 1, paddingTop: 76 }}>
        {children}
      </main>

      {/* ─── FOOTER ─────────────────────────────────────────────── */}
      <footer style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)' }}>
        <div className="container-max" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, marginBottom: 64 }}>

            {/* Brand */}
            <div style={{ gridColumn: 'span 1' }}>
              <img
                src="/logo/vectors/EUROZAK_Logo_Exact_Blue_Transparent.svg"
                alt="Eurozak"
                style={{ height: 44, marginBottom: 20, filter: 'brightness(0) invert(1)' }}
                onError={e => { e.target.src = '/logo/logo-white.png'; e.target.style.filter = 'none'; }}
              />
              <p className="text-headline-sm" style={{ maxWidth: 320, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-serif)' }}>
                Precision. Luxury. Timelessness.<br/>European architectural cabinetry.
              </p>
              {/* Social */}
              <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
                {[
                  { href: 'https://wa.me/919744978000', icon: 'chat', label: 'WhatsApp' },
                  { href: 'mailto:info@eurozak.in',     icon: 'mail', label: 'Email' },
                  { href: 'tel:9744978000',              icon: 'call', label: 'Call' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 42, height: 42, border: '1px solid rgba(255,255,255,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-secondary-fixed-dim)',
                      textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-label-sm" style={{ color: 'var(--color-on-primary-container)', marginBottom: 20 }}>Products</h4>
              {[
                { label: 'Cabinet Wash Basin',     to: '/bathroom' },
                { label: 'LED Mirrors',             to: '/bathroom' },
                { label: 'Sanitaryware',            to: '/product/ez-6633' },
                { label: 'Home Décor',              to: '/home-decor' },
                { label: 'Artificial Plants',       to: '/home-decor' },
              ].map(l => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-body-md"
                  style={{
                    display: 'block', marginBottom: 10, textDecoration: 'none',
                    color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--color-secondary-fixed-dim)'; }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Company */}
            <div>
              <h4 className="text-label-sm" style={{ color: 'var(--color-on-primary-container)', marginBottom: 20 }}>Company</h4>
              {[
                { label: 'About Eurozak', to: '/' },
                { label: 'Catalogue',     to: '/bathroom' },
                { label: 'Inspiration',   to: '/home-decor' },
              ].map(l => (
                <Link
                  key={l.label}
                  to={l.to}
                  className="text-body-md"
                  style={{
                    display: 'block', marginBottom: 10, textDecoration: 'none',
                    color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.color = 'var(--color-secondary-fixed-dim)'; }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-label-sm" style={{ color: 'var(--color-on-primary-container)', marginBottom: 20 }}>Contact</h4>
              <div className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
                <p><a href="mailto:info@eurozak.in" style={{ color: 'var(--color-secondary-fixed-dim)', textDecoration: 'none' }}>info@eurozak.in</a></p>
                <p><a href="mailto:support@eurozak.in" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>support@eurozak.in</a></p>
                <p><a href="tel:9744978000" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>+91 97449 78000</a></p>
              </div>
              <a
                href="https://wa.me/919744978000"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ marginTop: 20, color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)', fontSize: 12, padding: '9px 18px' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 28,
            display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span className="text-label-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>© 2026 EUROZAK. All rights reserved.</span>
            <span className="text-label-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Crafted in Europe · Smart Living</span>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ──────────────────────────────────── */}
      <a
        href="https://wa.me/919744978000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed', bottom: 28, right: 28, zIndex: 200,
          width: 58, height: 58, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" width="30" height="30" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav, .desktop-enquire { display: none !important; }
        }
        @media (min-width: 901px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </div>
  );
}
