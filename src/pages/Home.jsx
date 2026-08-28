import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeCanvas from '../components/ThreeCanvas';

// Real product images from public/products/
const PRODUCTS = [
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',   label: 'Cabinet & Basin' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', label: 'Premium Vanity' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg', label: 'LED Mirror' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg',   label: 'Wash Basin' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',   label: 'Smart Living' },
  { img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',   label: 'Home Décor' },
];

const CATEGORIES = [
  {
    label: 'Cabinet & Wash Basin Solutions',
    num: '01',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',
    path: '/bathroom',
    span: 8,
    aspect: '4/3',
  },
  {
    label: 'Sanitaryware',
    num: '02',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg',
    path: '/product/ez-6633',
    span: 4,
    aspect: '1/1',
  },
  {
    label: 'Home Décor',
    num: '03',
    img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',
    path: '/home-decor',
    span: 4,
    aspect: '4/3',
  },
];

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={{ background: 'var(--color-surface)' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', height: '100svh', overflow: 'hidden', background: '#0e1a3a' }}>

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.55,
          }}
        >
          <source src="/videos/Man_opening_bathroom_vanity_cabinet_202608271747.mp4" type="video/mp4" />
          <source src="/videos/Man_touching_luxury_bathroom_vanity_202608271552.mp4" type="video/mp4" />
        </video>

        {/* Three.js accent layer */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, mixBlendMode: 'screen', pointerEvents: 'none' }}>
          <ThreeCanvas />
        </div>

        {/* Dark gradient overlay */}
        <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }} />

        {/* Hero Content */}
        <div
          className="container-max"
          style={{
            position: 'relative', zIndex: 10,
            height: '100%', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', paddingBottom: 60,
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
              <span style={{ width: 48, height: 1, background: 'var(--color-secondary)' }} />
              <span className="text-label-lg" style={{ color: 'var(--color-secondary)', letterSpacing: '0.18em' }}>
                Architectural Collection
              </span>
            </div>

            <h1 className="text-display" style={{ color: '#fff', marginBottom: 24 }}>
              Designed for<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.9 }}>Elevated Living.</em>
            </h1>

            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.78)', maxWidth: 520, marginBottom: 44 }}>
              Precision engineering meets timeless European design. Discover cabinetry and fixtures crafted to transform your spaces into sanctuaries of luxury and calm.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <button className="btn-gold" style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}
                onClick={() => navigate('/bathroom')}>
                Explore Collections
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
              <a
                href="https://wa.me/919744978000"
                target="_blank" rel="noreferrer"
                className="btn-primary"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.4)', color: '#fff', textDecoration: 'none' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
                Chat with Us
              </a>
            </div>
          </div>

          {/* Scroll hint */}
          <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.6 }}>
            <span className="text-label-sm" style={{ color: '#fff' }}>Scroll</span>
            <span className="material-symbols-outlined" style={{ color: '#fff', animation: 'fadeIn 1s ease infinite alternate' }}>keyboard_arrow_down</span>
          </div>
        </div>
      </section>

      {/* ── PRODUCT PHOTO STRIP ──────────────────────────────────── */}
      <section style={{ background: 'var(--color-inverse-surface)', padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: '200%', animation: 'marquee 30s linear infinite' }}>
          {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
            <div
              key={i}
              style={{ width: '16.666%', flexShrink: 0, position: 'relative', overflow: 'hidden' }}
            >
              <img
                src={p.img}
                alt={p.label}
                style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(49,48,43,0.85) 0%, transparent 100%)',
                padding: '12px 16px',
              }}>
                <span className="text-label-sm" style={{ color: 'var(--color-secondary-fixed-dim)' }}>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── CURATED COLLECTIONS ──────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 12 }}>Curated Expressions</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 420 }}>
                Our signature collections designed to harmonize seamlessly across your entire home architecture.
              </p>
            </div>
            <button
              onClick={() => navigate('/bathroom')}
              className="text-label-lg"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-on-surface)',
                borderBottom: '1px solid var(--color-on-surface)',
                paddingBottom: 4, display: 'flex', alignItems: 'center', gap: 8,
                transition: 'color 0.2s',
              }}
            >
              View All Collections
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* 12-col grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, gridAutoRows: 'auto' }}>
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.label}
                onClick={() => navigate(cat.path)}
                className="product-card"
                style={{
                  gridColumn: `span ${i === 0 ? 8 : 4}`,
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '100%', aspectRatio: cat.aspect,
                  overflow: 'hidden', background: 'var(--color-surface-container-high)',
                  marginBottom: 16, position: 'relative',
                }}>
                  <img
                    src={cat.img}
                    alt={cat.label}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className={i === 0 ? 'text-headline-md' : 'text-headline-sm'} style={{ color: 'var(--color-on-surface)' }}>
                    {cat.label}
                  </h3>
                  <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{cat.num}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LED MIRRORS FEATURE ───────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-primary)', color: 'var(--color-on-primary)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%,-50%)',
          width: 600, height: 600, borderRadius: '50%',
          background: 'rgba(119,90,25,0.12)', filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)' }}>Illuminated Series</span>
            <h2 className="text-display" style={{ color: '#fff' }}>
              Clarity<br />
              <em style={{ fontWeight: 300, opacity: 0.8 }}>in Design</em>
            </h2>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 420 }}>
              Our integrated LED mirror collections combine flawless reflection with tunable ambient lighting — a focal point that is both highly functional and deeply atmospheric.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: 0, padding: 0, listStyle: 'none' }}>
              {[
                { icon: 'wb_incandescent', text: 'Warm LED Lighting — 3000K Soft Glow' },
                { icon: 'touch_app',        text: 'Touch-Responsive Dimming' },
                { icon: 'water_drop',       text: 'Anti-Fog Technology Built-In' },
              ].map(item => (
                <li key={item.icon} style={{ display: 'flex', gap: 12, alignItems: 'center', color: 'var(--color-on-primary-container)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary-fixed-dim)', fontSize: 22 }}>{item.icon}</span>
                  <span className="text-body-md">{item.text}</span>
                </li>
              ))}
            </ul>
            <button className="btn-gold"
              style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)', alignSelf: 'flex-start', marginTop: 8 }}
              onClick={() => navigate('/bathroom')}>
              View LED Mirrors
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Real product image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -16,
              border: '1px solid rgba(232,193,118,0.25)',
              borderRadius: '50% 50% 4px 4px',
              pointerEvents: 'none',
            }} />
            <img
              src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg"
              alt="Eurozak LED Mirror Vanity"
              style={{
                width: '100%', aspectRatio: '3/4', objectFit: 'cover',
                borderRadius: '50% 50% 0 0',
                boxShadow: '0 24px 80px rgba(0,0,0,0.4)',
                position: 'relative', zIndex: 1,
              }}
            />
          </div>
        </div>
      </section>

      {/* ── INTELLIGENT SPACING ──────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface-container-low)' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>Intelligent Spacing</h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
              True luxury lies in the unseen. Our cabinetry systems are engineered for modern space-saving demands without compromising aesthetic integrity — perfect for dining halls, compact ensuites, or expansive master baths.
            </p>
            <hr style={{ border: 'none', borderTop: '1px solid var(--color-outline-variant)', opacity: 0.4 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              {[
                { num: '60cm', label: 'Optimized Width' },
                { num: '15yr', label: 'Structural Warranty' },
                { num: '100%', label: 'Water Resistant' },
                { num: '5yr',  label: 'Product Warranty' },
              ].map(stat => (
                <div key={stat.label}>
                  <span className="text-display" style={{ fontSize: 40, color: 'var(--color-primary)' }}>{stat.num}</span>
                  <p className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginTop: 4 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg"
              alt="Eurozak Cabinet Interior Quality"
              style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
            />
            {/* Accent bar */}
            <div style={{ position: 'absolute', left: -24, top: '50%', transform: 'translateY(-50%)', width: 48, height: 2, background: 'var(--color-secondary)' }} />
          </div>
        </div>
      </section>

      {/* ── MATERIAL PALETTE ─────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface)', overflow: 'hidden' }}>
        <div className="container-max" style={{ marginBottom: 48 }}>
          <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>Our Real Products</h2>
          <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 480, marginTop: 12 }}>
            A curated selection from our premium collection — crafted for lasting quality and modern aesthetics.
          </p>
        </div>
        <div
          className="hide-scrollbar"
          style={{
            display: 'flex', gap: 24, overflowX: 'auto',
            paddingLeft: 'clamp(20px,5vw,80px)', paddingRight: 'clamp(20px,5vw,80px)',
            paddingBottom: 24, scrollSnapType: 'x mandatory',
          }}
        >
          {[
            { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg', title: 'Nova Cabinet Set' },
            { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', title: 'Duo Vanity Basin' },
            { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg', title: 'Compact Unit' },
            { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     title: 'LED Smart Mirror' },
            { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', title: 'Aura Linea' },
          ].map((p, i) => (
            <div
              key={i}
              onClick={() => navigate('/bathroom')}
              style={{
                minWidth: 280, flexShrink: 0, scrollSnapAlign: 'center',
                cursor: 'pointer',
              }}
              className="product-card"
            >
              <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', background: 'var(--color-surface-container)', marginBottom: 14 }}>
                <img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                />
              </div>
              <h4 className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{p.title}</h4>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginTop: 4 }}>Premium Collection</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST BADGES ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-surface-container)', padding: '56px 0', borderTop: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)' }}>
        <div className="container-max" style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'center' }}>
          {[
            { icon: 'water_drop',   title: '100% Water Resistant',   sub: 'PVC Multiwood Cabinet Body' },
            { icon: 'bug_report',   title: 'Termite Proof',           sub: 'Engineered Material Core' },
            { icon: 'verified',     title: '5 Year Warranty',         sub: 'Structural & Finish Guarantee' },
            { icon: 'local_shipping', title: 'All-India Delivery',    sub: 'Fast & Safe Shipping' },
            { icon: 'support_agent', title: '24/7 Support',           sub: 'Call & WhatsApp Helpline' },
          ].map(badge => (
            <div key={badge.title} style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 220 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 32, color: 'var(--color-tertiary)' }}>{badge.icon}</span>
              <div>
                <p className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{badge.title}</p>
                <p className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginTop: 2 }}>{badge.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BRAND VIDEO ──────────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-inverse-surface)', position: 'relative', overflow: 'hidden' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', marginBottom: 16, display: 'block' }}>Brand Story</span>
            <h2 className="text-headline-lg" style={{ color: '#fff', marginBottom: 16 }}>Experience the<br/>Eurozak Difference</h2>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 28 }}>
              See how our premium cabinet and vanity solutions transform ordinary bathrooms into extraordinary living spaces.
            </p>
            <button className="btn-gold" style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}
              onClick={() => navigate('/bathroom')}>
              Browse Full Collection
            </button>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
            <video
              autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src="/videos/Man_interacting_with_bathroom_va…_202608271557.mp4" type="video/mp4" />
              <source src="/videos/EUROZAK_—_MASTER_IMAGE_TO_VIDE.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-primary-container)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 className="text-headline-lg" style={{ color: '#fff', marginBottom: 16 }}>Ready to Transform Your Space?</h2>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 36 }}>
            Contact us today for a personalised catalogue or speak to our design consultant on WhatsApp.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer" className="btn-gold"
              style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)', textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp Us
            </a>
            <a href="mailto:info@eurozak.in" className="btn-primary"
              style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.4)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
