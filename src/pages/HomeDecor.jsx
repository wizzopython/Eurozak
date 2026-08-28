import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeDecor() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 6000);
    }
  };

  return (
    <div style={{ background: 'var(--color-surface)' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img
          src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg"
          alt="Eurozak Home Decor Vanity"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, var(--color-surface) 0%, rgba(253,249,241,0.6) 35%, transparent 70%)',
        }} />

        <div className="container-max" style={{ position: 'relative', zIndex: 1, paddingTop: 80, paddingBottom: 64 }}>
          <span className="text-label-lg" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: 14 }}>
            Home Décor & Smart Living
          </span>
          <h1 className="text-display" style={{ color: 'var(--color-on-surface)', maxWidth: 680, marginBottom: 20 }}>
            The subtle art of<br />spatial refinement.
          </h1>
          <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 520 }}>
            Discover architectural accents and functional décor that transform utilitarian spaces into moments of quiet luxury — where thoughtful design meets effortless living.
          </p>
        </div>
      </section>

      {/* ── FOCAL FEATURE ────────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Text Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span className="text-label-sm" style={{ color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <span style={{ display: 'inline-block', width: 32, height: 1, background: 'var(--color-secondary)' }} />
                Focal Point
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>The Illuminated<br />Vanity Series</h2>
            </div>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.85 }}>
              Redefining the transitional space. Our signature dining hall vanity units integrate seamless LED halos, creating a soft ambient glow that elevates every moment. Designed for compact footprint without compromising architectural presence.
            </p>

            {/* Specs list */}
            <div style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
              {[
                { icon: 'space_dashboard', label: 'Space Saving Design', value: 'Width 60cm' },
                { icon: 'lightbulb',       label: 'Ambient Integration',  value: 'Warm LED (3000K)' },
                { icon: 'countertops',     label: 'Materiality',          value: 'Ceramic & Marble' },
                { icon: 'water_drop',      label: 'Resistance',           value: '100% Waterproof' },
              ].map(spec => (
                <div key={spec.icon} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 8px', borderBottom: '1px solid var(--color-outline-variant)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-surface-container-high)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <span className="text-label-lg" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--color-on-surface)' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-outline)', fontVariationSettings: "'wght' 100" }}>{spec.icon}</span>
                    {spec.label}
                  </span>
                  <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{spec.value}</span>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={() => navigate('/bathroom')}
              style={{ alignSelf: 'flex-start' }}
            >
              Explore the Collection
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Image Side */}
          <div style={{ position: 'relative' }}>
            <img
              src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg"
              alt="Illuminated Vanity Series"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: 0, display: 'block', boxShadow: '0 20px 60px rgba(0,0,0,0.14)' }}
            />
            {/* Dimension tag */}
            <div style={{
              position: 'absolute', top: 32, left: 32,
              background: 'rgba(253,249,241,0.92)', backdropFilter: 'blur(12px)',
              padding: '10px 16px', border: '1px solid rgba(197,197,210,0.3)',
            }}>
              <span className="text-label-sm" style={{ color: 'var(--color-on-surface)', display: 'block' }}>Dimension</span>
              <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}>60 CM Width</span>
            </div>

            {/* Offset accent image */}
            <div style={{
              position: 'absolute', bottom: -48, left: -48,
              width: 220, height: 220,
              overflow: 'hidden',
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              border: '4px solid var(--color-surface)',
              display: 'none',
            }} className="accent-img-desktop">
              <img
                src="/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg"
                alt="Cabinet Detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── PRODUCT GALLERY ───────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface-container-low)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(232,193,118,0.08)', filter: 'blur(80px)',
          transform: 'translate(30%,-30%)', pointerEvents: 'none',
        }} />

        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h2 className="text-display" style={{ fontSize: 'clamp(36px,5vw,56px)', color: 'var(--color-on-surface)', marginBottom: 12 }}>Functional Art.</h2>
              <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>Objects that serve a purpose while maintaining sculptural integrity.</p>
            </div>
            <button
              onClick={() => navigate('/bathroom')}
              className="text-label-lg"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-secondary)',
                borderBottom: '1px solid var(--color-secondary)',
                paddingBottom: 4,
              }}
            >
              View All Products
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
            {/* Large Card */}
            <div
              onClick={() => navigate('/bathroom')}
              style={{ gridColumn: 'span 7', cursor: 'pointer', position: 'relative' }}
              className="product-card"
            >
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden', marginBottom: 20, position: 'relative' }}>
                <img
                  src="/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg"
                  alt="Premium Vanity Collection"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                />
              </div>
              <h3 className="text-headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: 8 }}>The Vanity Collection</h3>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Premium PVC cabinets paired with smart LED mirrors for modern interiors.</p>
            </div>

            {/* Stacked Small Cards */}
            <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                {
                  img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg',
                  title: 'Wall-Hung Units',
                  desc: 'Space-maximizing floating designs.',
                  path: '/bathroom',
                },
                {
                  img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg',
                  title: 'LED Mirror Cabinets',
                  desc: 'Smart mirrors with integrated storage.',
                  path: '/bathroom',
                },
              ].map(card => (
                <div
                  key={card.title}
                  onClick={() => navigate(card.path)}
                  style={{ cursor: 'pointer', position: 'relative' }}
                  className="product-card"
                >
                  <div style={{ width: '100%', height: 200, overflow: 'hidden', marginBottom: 14, position: 'relative' }}>
                    <img
                      src={card.img}
                      alt={card.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                      onMouseEnter={e => { e.target.style.transform = 'scale(1.04)'; }}
                      onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                    />
                  </div>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 6 }}>{card.title}</h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-inverse-surface)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ maxWidth: 620, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--color-secondary-fixed-dim)' }}>texture</span>
          <h2 className="text-headline-lg" style={{ color: 'var(--color-inverse-on-surface)' }}>Materiality & Form</h2>
          <p className="text-body-lg" style={{ color: 'rgba(244,240,232,0.7)', maxWidth: 480 }}>
            Subscribe to our design journal for insights on architectural materials, spatial planning, and new Eurozak releases.
          </p>

          {subscribed ? (
            <div className="animate-fade-in" style={{ color: 'var(--color-secondary-fixed-dim)', padding: '14px 28px', border: '1px solid var(--color-secondary-fixed-dim)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 8 }}>check_circle</span>
              <span className="text-label-lg">Subscribed! Thank you for joining.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ width: '100%', maxWidth: 440, position: 'relative' }}>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  borderBottom: '1px solid rgba(244,240,232,0.35)',
                  padding: '14px 100px 14px 8px',
                  fontFamily: 'var(--font-sans)', fontSize: 16,
                  color: 'var(--color-inverse-on-surface)',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="text-label-lg"
                style={{
                  position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-secondary-fixed-dim)',
                }}
              >
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface-container-low)', padding: '60px 0', borderTop: '1px solid var(--color-outline-variant)' }}>
        <div className="container-max" style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 8 }}>Interested in our Home Décor range?</h3>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Reach us on WhatsApp for a full catalogue and pricing.</p>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp Us
            </a>
            <a href="mailto:info@eurozak.in" className="btn-gold" style={{ textDecoration: 'none' }}>
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
