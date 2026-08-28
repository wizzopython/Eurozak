import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ThreeCanvas from '../components/ThreeCanvas';

const GALLERY = [
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',     alt: 'Front View' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',     alt: 'Angled View' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', alt: 'Side Profile' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg', alt: 'Close-up Detail' },
];

const SPECS = [
  {
    group: 'Dimensions',
    items: [
      { label: 'Overall Length',    value: '680 mm' },
      { label: 'Overall Width',     value: '380 mm' },
      { label: 'Overall Height',    value: '740 mm' },
      { label: 'Trap Distance',     value: '300 mm (S-Trap)' },
      { label: 'Water Pressure',    value: '2.0 – 5.0 bar' },
    ],
  },
  {
    group: 'Materials & Technology',
    items: [
      { label: 'Body Material',     value: 'Vitreous China (Euro Grade)' },
      { label: 'Flush System',      value: 'Dual Flush — 3L / 4.5L' },
      { label: 'Flush Technology',  value: 'Siphonic Jet' },
      { label: 'Glaze Coating',     value: 'Anti-Stain Nano Glaze' },
      { label: 'Kiln Temperature',  value: '1280°C High-Temp' },
    ],
  },
  {
    group: 'Fittings & Accessories',
    items: [
      { label: 'Seat Cover',        value: 'Soft-Close UF Seat' },
      { label: 'Supply Line',       value: '1/2" BSP Flexible Hose' },
      { label: 'Floor Bolts',       value: 'Stainless Steel' },
      { label: 'Wax Ring',          value: 'Included' },
      { label: 'Color',             value: 'Pure Ceramic White' },
    ],
  },
];

const RELATED = [
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg', name: 'Studio Basin Unit',  to: '/bathroom' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     name: 'LED Smart Mirror',   to: '/bathroom' },
  { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', name: 'Prestige XL Vanity', to: '/bathroom' },
  { img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',     name: 'Ceramic Touch',      to: '/bathroom' },
];

export default function ProductDetail() {
  const [selected, setSelected]   = useState(0);
  const [openSpec, setOpenSpec]   = useState(0);
  const [requested, setRequested] = useState(false);
  const [saved, setSaved]         = useState(false);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <PageTransition style={{ background: 'var(--color-surface)' }}>

      {/* ══════════════════════════════════════════════════════
          BREADCRUMB
      ══════════════════════════════════════════════════════ */}
      <div className="container-max" style={{ padding: '24px clamp(20px,5vw,80px)' }}>
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {['Collections', 'Bathroom', 'Sanitaryware', 'Nesti EZ-6633'].map((crumb, i, arr) => (
            <React.Fragment key={crumb}>
              <button
                className="text-label-sm"
                style={{
                  background: 'none', border: 'none',
                  cursor: i < arr.length - 1 ? 'pointer' : 'default',
                  color: i < arr.length - 1 ? 'var(--color-outline)' : 'var(--color-on-surface)',
                  padding: 0, textDecoration: i < arr.length - 1 ? 'underline' : 'none',
                  textUnderlineOffset: 3,
                }}
                onClick={() => {
                  if (i === 0) navigate('/');
                  if (i === 1 || i === 2) navigate('/bathroom');
                }}
              >
                {crumb}
              </button>
              {i < arr.length - 1 && <span style={{ color: 'var(--color-outline)', fontSize: 11 }}>/</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* ══════════════════════════════════════════════════════
          PRODUCT DETAIL SPLIT
      ══════════════════════════════════════════════════════ */}
      <section className="container-max" style={{ paddingBottom: 80 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 52,
        }}>

          {/* ─── LEFT: Gallery ─── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

            {/* Main Image */}
            <div style={{
              width: '100%', height: 480,
              background: 'var(--color-surface-container-low)',
              border: '1px solid var(--color-outline-variant)',
              overflow: 'hidden', position: 'relative',
            }}>
              <img src={GALLERY[selected].url} alt={GALLERY[selected].alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  transition: 'opacity 0.3s ease',
                  display: 'block',
                }}
              />
              {/* Badge */}
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: 'var(--color-primary)', padding: '4px 12px',
              }}>
                <span className="text-label-sm" style={{ color: '#fff', fontSize: 10 }}>ISI CERTIFIED</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {GALLERY.map((img, i) => (
                <button key={i} onClick={() => setSelected(i)}
                  style={{
                    border: `2px solid ${selected === i ? 'var(--color-primary)' : 'transparent'}`,
                    background: 'var(--color-surface-container)',
                    cursor: 'pointer', padding: 0, overflow: 'hidden',
                    aspectRatio: '1/1',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <img src={img.url} alt={`Thumbnail ${i + 1}`}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                      opacity: selected === i ? 1 : 0.6,
                      transition: 'opacity 0.2s',
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Brand Video */}
            <div style={{
              width: '100%', height: 200,
              border: '1px solid var(--color-outline-variant)',
              overflow: 'hidden', position: 'relative',
            }}>
              <video autoPlay muted loop playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                <source src="/videos/EUROZAK_—_MASTER_IMAGE_TO_VIDE.mp4" type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(29,54,127,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{
                  background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '8px 20px',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 18 }}>play_circle</span>
                  <span className="text-label-sm" style={{ color: '#fff' }}>Brand Film</span>
                </div>
              </div>
            </div>

            {/* ─── 3D INTERACTIVE VIEWER ─── */}
            <div style={{
                marginTop: 20,
                width: '100%', height: 400,
                background: '#0d1b3e',
                position: 'relative', overflow: 'hidden',
                boxShadow: 'inset 0 10px 40px rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, pointerEvents: 'none' }}>
                    <span className="text-label-sm" style={{ color: 'var(--color-secondary-fixed-dim)', letterSpacing: '0.15em' }}>3D INTERACTIVE MODEL</span>
                    <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>Drag to rotate the geometric abstraction</p>
                </div>
                <ThreeCanvas />
            </div>

          </div>

          {/* ─── RIGHT: Info Panel ─── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

            {/* Model Tag */}
            <p className="text-label-sm" style={{ color: 'var(--color-primary)', letterSpacing: '0.22em' }}>
              MODEL: NESTI &nbsp;·&nbsp; SKU: EZ-6633
            </p>

            {/* Name & Description */}
            <div>
              <h1 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 14 }}>
                One Piece Closet
              </h1>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.85 }}>
                The Nesti one-piece closet combines structural purity with advanced siphonic technology. Cast from premium European porcelain, its seamless silhouette offers visual calm and effortless maintenance for the modern sanctuary.
              </p>
            </div>

            {/* Price */}
            <div style={{
              padding: '20px 0',
              borderTop: '1px solid var(--color-outline-variant)',
              borderBottom: '1px solid var(--color-outline-variant)',
              display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: 32, fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--color-on-surface)' }}>
                ₹13,900
              </span>
              <span className="text-label-sm" style={{ color: 'var(--color-outline)' }}>MRP · Incl. all taxes</span>
            </div>

            {/* Finish */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>Finish</span>
                <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Pure White</span>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div title="Pure White" style={{
                  width: 52, height: 52, background: '#F5F5F5',
                  border: '2.5px solid var(--color-primary)',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }} />
                <div title="Matte Black (Out of Stock)" style={{
                  width: 52, height: 52, background: '#1A1A1A',
                  border: '1px solid var(--color-outline-variant)',
                  cursor: 'not-allowed', opacity: 0.35,
                  position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontSize: 9, color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '0.05em' }}>N/A</span>
                </div>
              </div>
            </div>

            {/* Quick Specs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 32px' }}>
              {[
                { label: 'Flush System',   value: 'Siphonic Jet' },
                { label: 'Trap Distance',  value: '300 MM' },
                { label: 'Material',       value: 'Vitreous China' },
                { label: 'Seat Cover',     value: 'Soft-Close UF' },
              ].map(s => (
                <div key={s.label}>
                  <span className="text-label-sm" style={{ display: 'block', color: 'var(--color-outline)', marginBottom: 4 }}>{s.label}</span>
                  <span className="text-body-md" style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>{s.value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '16px 24px' }}
                onClick={() => setRequested(true)}>
                Request Product Details
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>

              {requested && (
                <div className="animate-fade-in" style={{
                  background: 'rgba(119,90,25,0.07)',
                  border: '1px solid var(--color-secondary)',
                  padding: '12px 16px', display: 'flex', gap: 10, alignItems: 'center',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: 18 }}>check_circle</span>
                  <span className="text-body-md" style={{ color: 'var(--color-secondary)' }}>
                    Enquiry sent! We'll contact you within 24 hours.
                  </span>
                </div>
              )}

              <a href="https://wa.me/919744978000?text=Hi, I'm interested in the Nesti One Piece Closet (EZ-6633). Please share details and pricing."
                target="_blank" rel="noreferrer"
                className="btn-gold"
                style={{ textDecoration: 'none', justifyContent: 'center', width: '100%', padding: '14px 24px' }}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order via WhatsApp
              </a>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 6px' }}>
                <button className="text-label-sm"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-on-surface-variant)', display: 'flex', gap: 6, alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>download</span>
                  Download Spec Sheet
                </button>
                <button className="text-label-sm"
                  onClick={() => setSaved(!saved)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: saved ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                    display: 'flex', gap: 6, alignItems: 'center', transition: 'color 0.2s',
                  }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{saved ? 'favorite' : 'favorite_border'}</span>
                  {saved ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>

            {/* Trust Strip */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: 16,
              padding: '16px 18px',
              background: 'var(--color-surface-container-low)',
              border: '1px solid var(--color-outline-variant)',
            }}>
              {[
                { icon: 'local_shipping', text: 'Free Shipping' },
                { icon: 'verified',       text: 'ISI Certified' },
                { icon: 'support_agent',  text: '24/7 Support' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: 18 }}>{b.icon}</span>
                  <span className="text-label-sm" style={{ color: 'var(--color-on-surface)' }}>{b.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TECHNICAL SPECIFICATIONS
      ══════════════════════════════════════════════════════ */}
      <section style={{
        background: 'var(--color-surface-container)',
        borderTop: '1px solid var(--color-outline-variant)',
        borderBottom: '1px solid var(--color-outline-variant)',
        padding: '80px 0',
      }}>
        <div className="container-max">
          <h2 className="text-headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: 40 }}>Technical Specifications</h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {SPECS.map((section, si) => (
              <div key={section.group} style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
                <button
                  onClick={() => setOpenSpec(openSpec === si ? null : si)}
                  style={{
                    width: '100%', padding: '22px 0',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                  }}
                >
                  <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)' }}>{section.group}</h3>
                  <span className="material-symbols-outlined"
                    style={{
                      color: 'var(--color-outline)', fontSize: 22,
                      transition: 'transform 0.25s',
                      transform: openSpec === si ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}>
                    add
                  </span>
                </button>

                {openSpec === si && (
                  <div className="animate-slide-down" style={{ paddingBottom: 24 }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: 640 }}>
                      <tbody>
                        {section.items.map((item, ii) => (
                          <tr key={item.label} style={{ background: ii % 2 === 0 ? 'var(--color-surface)' : 'transparent' }}>
                            <td className="text-body-md" style={{ padding: '12px 16px', color: 'var(--color-on-surface-variant)', width: '50%' }}>
                              {item.label}
                            </td>
                            <td className="text-body-md" style={{ padding: '12px 16px', color: 'var(--color-on-surface)', fontWeight: 600, textAlign: 'right' }}>
                              {item.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-outline-variant)' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RELATED PRODUCTS
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          <h2 className="text-headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: 36 }}>You May Also Like</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: 24,
          }}>
            {RELATED.map(p => (
              <div key={p.name}
                onClick={() => navigate(p.to)}
                className="product-card"
                style={{ cursor: 'pointer' }}
              >
                <div style={{ width: '100%', height: 280, overflow: 'hidden', marginBottom: 12 }}>
                  <img src={p.img} alt={p.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center top',
                      transition: 'transform 0.6s ease',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <span className="text-headline-sm" style={{ color: 'var(--color-on-surface)', display: 'block' }}>{p.name}</span>
                <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginTop: 4, display: 'block' }}>Premium Collection</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
