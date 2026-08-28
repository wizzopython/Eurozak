import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const MARQUEE_ITEMS = [
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',     label: 'Cabinet & Basin' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg',     label: 'LED Mirror Series' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', label: 'Premium Vanity' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     label: 'Smart Living' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg', label: 'Wash Basin' },
];

const FEATURED = [
  {
    label: 'Bathroom Cabinet & Wash Basin',
    sub: 'Complete vanity solutions with integrated basins',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',
    path: '/bathroom',
    large: true,
  },
  {
    label: 'LED Mirrors',
    sub: 'Anti-fog, touch-dimming smart mirrors',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg',
    path: '/bathroom',
    large: false,
  },
  {
    label: 'Sanitaryware',
    sub: 'European one-piece closets & fixtures',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg',
    path: '/product/ez-6633',
    large: false,
  },
];

const SCROLL_CARDS = [
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg', name: 'Nova Cabinet Set', tag: 'New Arrival' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', name: 'Duo Vanity Basin', tag: 'Bestseller' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg', name: 'Compact LED Unit', tag: 'Space Saving' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', name: 'Aura Linea', tag: 'Premium' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg', name: 'Interior Detail', tag: 'Craftsmanship' },
];

export default function Home() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition style={{ background: 'var(--color-surface)' }}>

      {/* ══════════════════════════════════════════════════════
          HERO — full-screen with video + static fallback
      ══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '100dvh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#0d1b3e',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        {/* Static fallback background image (always visible) */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.45)',
        }} />

        {/* Brand video overlay (plays on top when available) */}
        <video
          ref={videoRef}
          autoPlay muted loop playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            opacity: 1, /* Changed from 0.7 so fallback text doesn't bleed through */
          }}
        >
          <source src="/videos/Man_opening_bathroom_vanity_cabinet_202608271747.mp4" type="video/mp4" />
          <source src="/videos/Man_touching_luxury_bathroom_vanity_202608271552.mp4" type="video/mp4" />
        </video>

        {/* Deep gradient overlay — ensures text always readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(160deg, rgba(13,27,62,0.75) 0%, rgba(13,27,62,0.45) 50%, rgba(13,27,62,0.82) 100%)',
        }} />

        {/* Hero Content */}
        <div className="container-max" style={{
          position: 'relative', zIndex: 10,
          width: '100%', paddingBottom: 80, paddingTop: 60,
        }}>
          {/* Eyebrow */}
          <div style={{ marginBottom: 20 }}>
            <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              European Cabinet Systems
            </span>
          </div>

          <h1 className="text-display" style={{ color: '#fff', marginBottom: 22, maxWidth: 680, display: 'flex', flexDirection: 'column' }}>
            <span>Precision in Every</span>
            <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.88)' }}>Living Space.</em>
          </h1>

          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 500, marginBottom: 44, lineHeight: 1.75 }}>
            Premium PVC multiwood cabinetry and intelligent bathroom solutions — engineered for the modern home with a European eye for detail.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', width: '100%' }}>
            <button className="btn-gold"
              style={{ flex: '1 1 200px', justifyContent: 'center', color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}
              onClick={() => navigate('/bathroom')}>
              Browse Collections
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer"
              className="btn-gold" style={{ flex: '1 1 200px', justifyContent: 'center', textDecoration: 'none', color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp Us
            </a>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: 40, marginTop: 64, flexWrap: 'wrap' }}>
            {[
              { num: '500+', label: 'Products' },
              { num: '5yr',  label: 'Warranty' },
              { num: '100%', label: 'Water Proof' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 28, fontWeight: 700, fontFamily: 'var(--font-sans)', color: '#fff' }}>{s.num}</div>
                <div className="text-label-sm" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          opacity: 0.55, animation: 'fadeIn 1.5s ease infinite alternate',
        }}>
          <div style={{ width: 1, height: 36, background: 'rgba(255,255,255,0.5)' }} />
          <span className="text-label-sm" style={{ color: '#fff', letterSpacing: '0.2em' }}>SCROLL</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARQUEE STRIP — scrolling product photos
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: 'var(--color-inverse-surface)', overflow: 'hidden', height: 200 }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
        }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((p, i) => (
            <div key={i} style={{
              position: 'relative', overflow: 'hidden',
              width: 240, height: 200, flexShrink: 0,
            }}>
              <img src={p.img} alt={p.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(49,48,43,0.9) 0%, transparent 100%)',
                padding: '10px 14px',
              }}>
                <span className="text-label-sm" style={{ color: 'var(--color-secondary-fixed-dim)' }}>{p.label}</span>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ══════════════════════════════════════════════════════
          COLLECTIONS GRID
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 48, flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <span className="text-label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: 10 }}>
                — Our Collections
              </span>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>Curated Expressions</h2>
            </div>
            <button onClick={() => navigate('/bathroom')}
              className="text-label-lg"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--color-on-surface)',
                textDecoration: 'underline', textUnderlineOffset: 5,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
              View All
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Responsive Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gridTemplateRows: 'auto',
            gap: 20,
          }}>
            {FEATURED.map((cat, i) => (
              <div
                key={cat.label}
                onClick={() => navigate(cat.path)}
                className="product-card"
                style={{
                  gridRow: i === 0 ? 'span 2' : 'span 1',
                  cursor: 'pointer',
                  position: 'relative', overflow: 'hidden',
                  background: 'var(--color-surface-container-high)',
                }}
              >
                <div style={{
                  width: '100%',
                  height: i === 0 ? 560 : 260,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img src={cat.img} alt={cat.label}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.7s ease',
                      display: 'block',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                  {/* Bottom overlay */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'linear-gradient(to top, rgba(29,54,127,0.88) 0%, transparent 60%)',
                    padding: '32px 24px 24px',
                  }}>
                    <h3 className={i === 0 ? 'text-headline-md' : 'text-headline-sm'} style={{ color: '#fff', marginBottom: 6 }}>
                      {cat.label}
                    </h3>
                    <p className="text-label-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>{cat.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LED MIRROR FEATURE — dark bg with real photo
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-primary)', position: 'relative', overflow: 'hidden' }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '30%', left: '30%', transform: 'translate(-50%,-50%)',
          width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(119,90,25,0.15)', filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        <div className="container-max" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 56, alignItems: 'center',
          position: 'relative', zIndex: 1,
        }}>
          {/* Text */}
          <div>
            <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', display: 'block', marginBottom: 20 }}>
              — Illuminated Series
            </span>
            <h2 className="text-display" style={{ color: '#fff', marginBottom: 24, fontSize: 'clamp(36px,4.5vw,52px)' }}>
              The Smart<br/>LED Mirror
            </h2>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32, maxWidth: 420, lineHeight: 1.8 }}>
              Warm 3000K ambient lighting. Touch-responsive dimming. Anti-fog technology. An integrated centrepiece that transforms any bathroom into a private spa.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 36 }}>
              {[
                { icon: 'wb_incandescent', text: 'Warm 3000K LED — adjustable glow' },
                { icon: 'touch_app',        text: 'Touch-capacitive dimming control' },
                { icon: 'water_drop',       text: 'Anti-fog coating — always clear' },
              ].map(f => (
                <div key={f.icon} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-secondary-fixed-dim)' }}>{f.icon}</span>
                  <span className="text-body-md" style={{ color: 'var(--color-on-primary-container)' }}>{f.text}</span>
                </div>
              ))}
            </div>
            <button className="btn-gold"
              style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)', alignSelf: 'flex-start' }}
              onClick={() => navigate('/bathroom')}>
              View LED Collection
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Real Product Image */}
          <div style={{ position: 'relative' }}>
            {/* Arch frame */}
            <div style={{
              position: 'absolute',
              top: -20, left: 20, right: 20, bottom: 0,
              border: '1px solid rgba(232,193,118,0.2)',
              borderRadius: '50% 50% 0 0',
              pointerEvents: 'none',
            }} />
            <div style={{
              borderRadius: '50% 50% 0 0',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
              position: 'relative', zIndex: 1,
            }}>
              <img
                src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg"
                alt="Eurozak LED Mirror Vanity"
                style={{
                  width: '100%',
                  height: 520,
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCT HORIZONTAL SCROLL
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max" style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>Browse Products</h2>
            <button onClick={() => navigate('/bathroom')}
              className="text-label-lg"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-secondary)', display: 'flex', gap: 8, alignItems: 'center' }}>
              View All Products <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>
        </div>

        <div className="hide-scrollbar" style={{
          display: 'flex', gap: 20, overflowX: 'auto',
          paddingLeft: 'clamp(20px,5vw,80px)',
          paddingRight: 'clamp(20px,5vw,80px)',
          paddingBottom: 12,
          scrollSnapType: 'x mandatory',
        }}>
          {SCROLL_CARDS.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate('/bathroom')}
              className="product-card"
              style={{
                minWidth: 260, maxWidth: 300, flexShrink: 0,
                scrollSnapAlign: 'start', cursor: 'pointer',
              }}
            >
              <div style={{
                width: '100%', height: 340, overflow: 'hidden',
                background: 'var(--color-surface-container)',
                marginBottom: 14, position: 'relative',
              }}>
                <img src={p.img} alt={p.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center top',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; }}
                  onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                />
                {/* Tag */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'var(--color-surface)', padding: '3px 10px',
                }}>
                  <span className="text-label-sm" style={{ color: 'var(--color-secondary)', fontSize: 10 }}>{p.tag}</span>
                </div>
              </div>
              <h4 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 4 }}>{p.name}</h4>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Premium Collection</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          QUALITY SECTION — split layout
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface-container-low)', borderTop: '1px solid var(--color-outline-variant)' }}>
        <div className="container-max" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 56, alignItems: 'center',
        }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img
              src="/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg"
              alt="Eurozak Cabinet Interior Quality"
              style={{
                width: '100%', height: 480,
                objectFit: 'cover', objectPosition: 'center',
                display: 'block',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
              }}
            />
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -20, right: -12,
              background: 'var(--color-primary)', color: 'var(--color-on-primary)',
              padding: '20px 24px',
              boxShadow: '0 8px 32px rgba(29,54,127,0.35)',
            }}>
              <div style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--color-secondary-fixed-dim)' }}>5yr</div>
              <div className="text-label-sm" style={{ color: 'var(--color-on-primary-container)', marginTop: 2 }}>Warranty</div>
            </div>
          </div>

          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <span className="text-label-sm" style={{ color: 'var(--color-secondary)' }}>— Built to Last</span>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)' }}>
              Engineered for<br/>Longevity
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.8 }}>
              Our PVC multiwood cabinet body resists moisture, termites, and warping — delivering structural excellence in the most demanding bathroom environments.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 28px', marginTop: 8 }}>
              {[
                { icon: 'water_drop',   title: '100% Water Resistant', sub: 'PVC Multiwood body' },
                { icon: 'bug_report',   title: 'Termite Proof',        sub: 'Engineered core' },
                { icon: 'verified',     title: '5 Year Warranty',      sub: 'Structural + finish' },
                { icon: 'local_shipping', title: 'India-Wide Delivery', sub: 'Fast & safe shipping' },
              ].map(q => (
                <div key={q.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-tertiary)' }}>{q.icon}</span>
                    <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{q.title}</span>
                  </div>
                  <p className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em' }}>{q.sub}</p>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => navigate('/bathroom')} style={{ alignSelf: 'flex-start', marginTop: 8 }}>
              See All Collections
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BRAND VIDEO SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-inverse-surface)' }}>
        <div className="container-max" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 48, alignItems: 'center',
        }}>
          <div>
            <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', display: 'block', marginBottom: 16 }}>— Experience Eurozak</span>
            <h2 className="text-headline-lg" style={{ color: '#fff', marginBottom: 16 }}>
              See It In Real Life
            </h2>
            <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.68)', marginBottom: 28, lineHeight: 1.8 }}>
              Premium cabinetry and smart LED mirrors — watch how our products transform ordinary bathrooms into extraordinary living spaces.
            </p>
            <button className="btn-gold"
              style={{ color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}
              onClick={() => navigate('/bathroom')}>
              Browse Full Range
            </button>
          </div>

          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 0, boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
            <video autoPlay muted loop playsInline
              style={{ width: '100%', height: 360, objectFit: 'cover', objectPosition: 'center', display: 'block' }}>
              <source src="/videos/Man_interacting_with_bathroom_va…_202608271557.mp4" type="video/mp4" />
              <source src="/videos/EUROZAK_—_MASTER_IMAGE_TO_VIDE.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRUST BADGES
      ══════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-surface-container)',
        borderTop: '1px solid var(--color-outline-variant)',
        borderBottom: '1px solid var(--color-outline-variant)',
        padding: '52px 0',
      }}>
        <div className="container-max">
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '28px 48px', justifyContent: 'center',
          }}>
            {[
              { icon: 'water_drop',    title: 'Water Resistant',    sub: 'PVC Multiwood Body' },
              { icon: 'shield',        title: 'Termite Proof',       sub: 'Engineered Core' },
              { icon: 'verified',      title: '5 Year Warranty',     sub: 'Structural & Finish' },
              { icon: 'local_shipping', title: 'Pan-India Delivery', sub: 'Fast & Safe' },
              { icon: 'support_agent', title: '24/7 Support',        sub: 'WhatsApp Helpline' },
            ].map(b => (
              <div key={b.title} style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 200 }}>
                <div style={{
                  width: 48, height: 48, background: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: 24 }}>{b.icon}</span>
                </div>
                <div>
                  <p className="text-label-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 2 }}>{b.title}</p>
                  <p className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-primary-container)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container-max" style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 className="text-headline-lg" style={{ color: '#fff', marginBottom: 14 }}>Transform Your Space Today</h2>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.78)', marginBottom: 36, lineHeight: 1.75 }}>
            Contact our design consultants for a personalised product recommendation, pricing, and catalogue.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer"
              className="btn-gold" style={{ textDecoration: 'none', color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              Chat on WhatsApp
            </a>
            <a href="mailto:info@eurozak.in"
              className="btn-primary" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.15)', borderColor: 'rgba(255,255,255,0.4)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
