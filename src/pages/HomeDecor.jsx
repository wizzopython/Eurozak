import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

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
    <PageTransition style={{ background: 'var(--color-surface)' }}>

      {/* ══════════════════════════════════════════════════════
          HERO — editorial full screen
      ══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '90vh',
        display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden', background: '#f7f3eb',
      }}>
        <img src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg"
          alt="Eurozak Home Decor Vanity"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(253,249,241,1) 0%, rgba(253,249,241,0.65) 40%, rgba(253,249,241,0.1) 80%)',
        }} />

        <div className="container-max" style={{
          position: 'relative', zIndex: 1,
          paddingBottom: 72, paddingTop: 80,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
            <div style={{ width: 40, height: 1.5, background: 'var(--color-secondary)' }} />
            <span className="text-label-lg" style={{ color: 'var(--color-secondary)', letterSpacing: '0.18em' }}>
              Home Décor & Smart Living
            </span>
          </div>
          <h1 className="text-display" style={{ color: 'var(--color-on-surface)', maxWidth: 680, marginBottom: 20 }}>
            The subtle art of<br/>spatial refinement.
          </h1>
          <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: 520, marginBottom: 36, lineHeight: 1.78 }}>
            Architectural accents and functional décor that transform utilitarian spaces into moments of quiet luxury.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <button className="btn-primary" onClick={() => navigate('/bathroom')}>
              Browse Collection
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer"
              className="btn-gold" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>chat</span>
              Enquire
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOCAL FEATURE — vanity with specs
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 64, alignItems: 'center',
        }}>
          {/* Text */}
          <div>
            <span className="text-label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: 16 }}>— Focal Point</span>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 20 }}>
              The Illuminated<br />Vanity Series
            </h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.85, marginBottom: 28 }}>
              Our signature dining hall vanity units integrate seamless LED halos, creating soft ambient glow that elevates every moment — designed for compact footprint without compromising architectural presence.
            </p>

            {/* Spec table */}
            <div style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
              {[
                { icon: 'space_dashboard', label: 'Space Saving Design', value: '60 CM Width' },
                { icon: 'lightbulb',       label: 'LED Integration',      value: 'Warm 3000K' },
                { icon: 'countertops',     label: 'Materiality',          value: 'Ceramic & PVC' },
                { icon: 'water_drop',      label: 'Water Resistance',     value: '100% Proof' },
              ].map(spec => (
                <div key={spec.icon}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '14px 8px',
                    borderBottom: '1px solid var(--color-outline-variant)',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-surface-container)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="material-symbols-outlined" style={{
                      fontSize: 18, color: 'var(--color-outline)',
                      fontVariationSettings: "'wght' 100",
                    }}>{spec.icon}</span>
                    <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{spec.label}</span>
                  </div>
                  <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', fontWeight: 600 }}>{spec.value}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary" onClick={() => navigate('/bathroom')} style={{ marginTop: 28 }}>
              Explore Collection
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </div>

          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img src="/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg"
              alt="Illuminated Vanity"
              style={{
                width: '100%', height: 560,
                objectFit: 'cover', objectPosition: 'center top',
                display: 'block',
                boxShadow: '0 24px 64px rgba(0,0,0,0.14)',
              }}
            />
            {/* Dimension badge */}
            <div style={{
              position: 'absolute', top: 28, left: 28,
              background: 'rgba(253,249,241,0.92)', backdropFilter: 'blur(12px)',
              padding: '10px 18px', border: '1px solid var(--color-outline-variant)',
            }}>
              <span className="text-label-sm" style={{ display: 'block', color: 'var(--color-on-surface-variant)', marginBottom: 2 }}>Dimension</span>
              <span className="text-body-md" style={{ color: 'var(--color-on-surface)', fontWeight: 700 }}>60 CM Width</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCT GALLERY GRID
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{
        background: 'var(--color-surface-container-low)',
        borderTop: '1px solid var(--color-outline-variant)',
      }}>
        <div className="container-max">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            marginBottom: 48, flexWrap: 'wrap', gap: 16,
          }}>
            <div>
              <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 8 }}>Functional Art</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Objects that serve purpose while maintaining sculptural integrity.</p>
            </div>
            <button onClick={() => navigate('/bathroom')} className="text-label-lg"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-secondary)', textDecoration: 'underline', textUnderlineOffset: 5 }}>
              View All Products
            </button>
          </div>

          {/* Asymmetric grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
          }}>
            {[
              { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     title: 'The Vanity Collection',    desc: 'LED mirrors + PVC cabinet units', tall: true },
              { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg', title: 'Wall-Hung Units',          desc: 'Space-maximizing floating designs' },
              { img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', title: 'LED Mirror Cabinets',      desc: 'Smart mirrors with integrated storage' },
              { img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',     title: 'Décor Accents',           desc: 'Curated accessories & artefacts' },
            ].map((card, i) => (
              <div key={card.title}
                onClick={() => navigate('/bathroom')}
                className="product-card"
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ width: '100%', height: card.tall ? 460 : 280, overflow: 'hidden', position: 'relative' }}>
                  <img src={card.img} alt={card.title}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                      transition: 'transform 0.7s ease',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <div style={{ padding: '16px 4px' }}>
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 5 }}>{card.title}</h3>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-inverse-surface)', padding: '80px 0' }}>
        <div className="container-max" style={{
          maxWidth: 600, margin: '0 auto',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center',
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 36, color: 'var(--color-secondary-fixed-dim)' }}>texture</span>
          <h2 className="text-headline-md" style={{ color: 'var(--color-inverse-on-surface)' }}>Stay Updated</h2>
          <p className="text-body-lg" style={{ color: 'rgba(244,240,232,0.68)', maxWidth: 440, lineHeight: 1.75 }}>
            Subscribe for new launches, design inspiration, and exclusive Eurozak offers.
          </p>

          {subscribed ? (
            <div className="animate-fade-in" style={{
              color: 'var(--color-secondary-fixed-dim)',
              padding: '14px 28px',
              border: '1px solid var(--color-secondary-fixed-dim)',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>check_circle</span>
              <span className="text-label-lg">Subscribed! Thank you.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ width: '100%', maxWidth: 440, position: 'relative' }}>
              <input
                type="email" required value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                style={{
                  width: '100%', background: 'transparent', border: 'none',
                  borderBottom: '1.5px solid rgba(244,240,232,0.3)',
                  padding: '14px 100px 14px 6px',
                  fontFamily: 'var(--font-sans)', fontSize: 16,
                  color: 'var(--color-inverse-on-surface)', outline: 'none',
                }}
              />
              <button type="submit" className="text-label-lg"
                style={{
                  position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-secondary-fixed-dim)',
                }}>
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-surface-container)',
        borderTop: '1px solid var(--color-outline-variant)',
        padding: '52px 0',
      }}>
        <div className="container-max" style={{
          display: 'flex', flexWrap: 'wrap', gap: 28,
          justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 8 }}>
              Interested in our Home Décor range?
            </h3>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              Reach us for a full catalogue and pricing — WhatsApp or email.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer"
              className="btn-primary" style={{ textDecoration: 'none' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp Us
            </a>
            <a href="mailto:info@eurozak.in" className="btn-gold" style={{ textDecoration: 'none' }}>
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
