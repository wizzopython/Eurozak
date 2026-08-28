import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Real product image array for gallery
const GALLERY_IMAGES = [
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg', alt: 'Nesti One Piece Closet — Front View' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',   alt: 'Nesti One Piece Closet — Angled View' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', alt: 'Nesti One Piece Closet — Side View' },
  { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg', alt: 'Nesti Closet — Close-up Detail' },
];

const SPECS = [
  { group: 'Dimensions & Clearances', items: [
    { label: 'Overall Length',    value: '680 mm' },
    { label: 'Overall Width',     value: '380 mm' },
    { label: 'Overall Height',    value: '740 mm' },
    { label: 'Trap Distance',     value: '300 mm (S-Trap)' },
    { label: 'Water Pressure',    value: '2.0 – 5.0 bar' },
  ]},
  { group: 'Materials & Technology', items: [
    { label: 'Body Material',     value: 'Vitreous China (Euro Grade)' },
    { label: 'Flush System',      value: 'Dual Flush — 3L / 4.5L' },
    { label: 'Flush Technology',  value: 'Siphonic Jet Flush' },
    { label: 'Glaze Coating',     value: 'Anti-Stain Nano Glaze' },
    { label: 'Firing Temp',       value: '1280°C High-Temp Kiln' },
  ]},
  { group: 'Fittings & Accessories', items: [
    { label: 'Seat Cover',        value: 'Soft-Close UF (Urea-Formaldehyde)' },
    { label: 'Supply Line',       value: '1/2" BSP Flexible Hose' },
    { label: 'Floor Bolts',       value: 'Stainless Steel' },
    { label: 'Wax Ring',          value: 'Included' },
    { label: 'Colour',            value: 'Pure Ceramic White' },
  ]},
];

export default function ProductDetail() {
  const [selected, setSelected]           = useState(0);
  const [openSpec, setOpenSpec]           = useState(0);
  const [requested, setRequested]         = useState(false);
  const [savedWishlist, setSavedWishlist] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleRequest = () => {
    setRequested(true);
    setTimeout(() => setRequested(false), 6000);
  };

  return (
    <div style={{ background: 'var(--color-surface)' }}>

      {/* ── BREADCRUMB ────────────────────────────────────────────── */}
      <div className="container-max" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <nav style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {['Collections', 'Bathroom', 'Sanitaryware', 'Nesti EZ-6633'].map((crumb, i, arr) => (
            <React.Fragment key={crumb}>
              <button
                className="text-label-sm"
                style={{
                  background: 'none', border: 'none', cursor: i < arr.length - 1 ? 'pointer' : 'default',
                  color: i < arr.length - 1 ? 'var(--color-outline)' : 'var(--color-on-surface)',
                  padding: 0,
                }}
                onClick={() => {
                  if (i === 0) navigate('/');
                  if (i === 1 || i === 2) navigate('/bathroom');
                }}
              >
                {crumb}
              </button>
              {i < arr.length - 1 && <span style={{ color: 'var(--color-outline)', fontSize: 12 }}>/</span>}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* ── PRODUCT SHOWCASE ─────────────────────────────────────── */}
      <section className="container-max" style={{ paddingBottom: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'start' }}>

          {/* ─ LEFT: Image Gallery ─ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Main Image */}
            <div style={{
              width: '100%', aspectRatio: '1/1',
              background: 'var(--color-surface-container-lowest)',
              border: '1px solid var(--color-outline-variant)',
              overflow: 'hidden', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src={GALLERY_IMAGES[selected].url}
                alt={GALLERY_IMAGES[selected].alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }}
              />
              <div style={{
                position: 'absolute', bottom: 16, right: 16,
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(253,249,241,0.85)', backdropFilter: 'blur(8px)',
                border: '1px solid var(--color-outline-variant)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'zoom-in',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>zoom_in</span>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: 12 }}>
              {GALLERY_IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  style={{
                    flex: 1, aspectRatio: '1/1', overflow: 'hidden', padding: 0,
                    border: `2px solid ${selected === i ? 'var(--color-primary)' : 'transparent'}`,
                    cursor: 'pointer', background: 'var(--color-surface-container-high)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <img
                    src={img.url}
                    alt={`View ${i + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: selected === i ? 1 : 0.65 }}
                  />
                </button>
              ))}
            </div>

            {/* Video Thumbnail */}
            <div
              onClick={() => {/* handled in main video */}}
              style={{
                width: '100%', aspectRatio: '16/9', overflow: 'hidden',
                border: '1px solid var(--color-outline-variant)',
                position: 'relative', cursor: 'pointer',
              }}
            >
              <video
                autoPlay muted loop playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              >
                <source src="/videos/EUROZAK_—_MASTER_IMAGE_TO_VIDE.mp4" type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'rgba(29,54,127,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span className="text-label-lg" style={{ color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '8px 20px' }}>
                  ▶ Brand Video
                </span>
              </div>
            </div>
          </div>

          {/* ─ RIGHT: Product Info ─ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Header */}
            <div>
              <p className="text-label-sm" style={{ color: 'var(--color-primary)', letterSpacing: '0.22em', marginBottom: 12 }}>
                SKU: EZ 6633 — Model: NESTI
              </p>
              <h1 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 16 }}>
                One Piece Closet
              </h1>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.85 }}>
                A masterclass in minimal architectural form. The Nesti one-piece closet combines structural purity with advanced siphonic technology. Cast from premium European porcelain, its seamless silhouette offers both visual calm and effortless maintenance for the modern sanctuary.
              </p>
            </div>

            {/* Price */}
            <div style={{ paddingBottom: 28, borderBottom: '1px solid var(--color-outline-variant)' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
                <span className="text-headline-md" style={{ color: 'var(--color-on-surface)', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>
                  ₹13,900
                </span>
                <span className="text-label-sm" style={{ color: 'var(--color-outline)' }}>
                  MRP · Inclusive of all taxes
                </span>
              </div>
            </div>

            {/* Finish Selector */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>Finish</span>
                <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Pure White</span>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  aria-label="Pure White"
                  style={{ width: 56, height: 56, background: '#F5F5F5', border: '2px solid var(--color-primary)', cursor: 'pointer' }}
                />
                <button
                  aria-label="Matte Black (Out of Stock)"
                  title="Out of Stock"
                  style={{ width: 56, height: 56, background: '#1A1A1A', border: '1px solid var(--color-outline-variant)', cursor: 'not-allowed', opacity: 0.4 }}
                />
              </div>
            </div>

            {/* Quick Specs Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 32px' }}>
              {[
                { label: 'Flush System', value: 'Siphonic Jet' },
                { label: 'Trap Distance', value: '300 MM' },
                { label: 'Material', value: 'Vitreous China' },
                { label: 'Seat Cover', value: 'Soft Close UF' },
              ].map(spec => (
                <div key={spec.label}>
                  <span className="text-label-sm" style={{ color: 'var(--color-outline)', display: 'block', marginBottom: 4 }}>{spec.label}</span>
                  <span className="text-body-md" style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <button
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '16px 24px' }}
                onClick={handleRequest}
              >
                Request Product Details
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>

              {requested && (
                <div className="animate-fade-in" style={{
                  background: 'rgba(119,90,25,0.07)', border: '1px solid var(--color-secondary)',
                  padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary)', fontSize: 18 }}>check_circle</span>
                  <span className="text-body-md" style={{ color: 'var(--color-secondary)' }}>
                    Enquiry sent! We'll contact you within 24 hours.
                  </span>
                </div>
              )}

              <a
                href="https://wa.me/919744978000?text=Hi, I'm interested in the Nesti One Piece Closet (EZ-6633). Please share details."
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ textDecoration: 'none', justifyContent: 'center', width: '100%', padding: '14px 24px' }}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order via WhatsApp
              </a>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 8px' }}>
                <button
                  className="text-label-sm"
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-on-surface-variant)', display: 'flex', gap: 6, alignItems: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span>
                  Download Spec Sheet
                </button>
                <button
                  className="text-label-sm"
                  onClick={() => setSavedWishlist(!savedWishlist)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: savedWishlist ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                    display: 'flex', gap: 6, alignItems: 'center', transition: 'color 0.2s',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{savedWishlist ? 'favorite' : 'favorite_border'}</span>
                  {savedWishlist ? 'Saved' : 'Save'}
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div style={{
              display: 'flex', gap: 16, flexWrap: 'wrap',
              padding: 16, background: 'var(--color-surface-container-low)',
              border: '1px solid var(--color-outline-variant)',
            }}>
              {[
                { icon: 'local_shipping', text: 'Free Shipping' },
                { icon: 'verified',       text: 'ISI Certified' },
                { icon: 'support_agent',  text: '24/7 Support' },
              ].map(b => (
                <div key={b.icon} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: 18 }}>{b.icon}</span>
                  <span className="text-label-sm" style={{ color: 'var(--color-on-surface)' }}>{b.text}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── TECHNICAL SPECIFICATIONS ─────────────────────────────── */}
      <section style={{ background: 'var(--color-surface-container)', borderTop: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)', padding: '80px 0' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
            <div>
              <h2 className="text-headline-md" style={{ color: 'var(--color-on-surface)', position: 'sticky', top: 96 }}>
                Technical<br/>Specifications
              </h2>
            </div>

            <div style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column' }}>
              {SPECS.map((section, si) => (
                <div key={section.group} style={{ borderTop: '1px solid var(--color-outline-variant)' }}>
                  <button
                    onClick={() => setOpenSpec(openSpec === si ? null : si)}
                    style={{
                      width: '100%', padding: '24px 0',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)' }}>{section.group}</h3>
                    <span className="material-symbols-outlined" style={{ color: 'var(--color-outline)', fontSize: 22, transition: 'transform 0.25s' }}>
                      {openSpec === si ? 'remove' : 'add'}
                    </span>
                  </button>

                  {openSpec === si && (
                    <div className="animate-slide-down" style={{ paddingBottom: 24 }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          {section.items.map((item, ii) => (
                            <tr key={item.label} style={{ background: ii % 2 === 0 ? 'var(--color-surface-container-high)' : 'transparent' }}>
                              <td className="text-body-md" style={{ padding: '11px 14px', color: 'var(--color-on-surface-variant)' }}>{item.label}</td>
                              <td className="text-body-md" style={{ padding: '11px 14px', color: 'var(--color-on-surface)', fontWeight: 600, textAlign: 'right' }}>{item.value}</td>
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
        </div>
      </section>

      {/* ── RELATED PRODUCTS ─────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          <h2 className="text-headline-md" style={{ color: 'var(--color-on-surface)', marginBottom: 40 }}>You May Also Like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg', name: 'Studio Basin Unit' },
              { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     name: 'LED Smart Mirror' },
              { img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', name: 'Prestige XL Vanity' },
              { img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',     name: 'Ceramic Touch' },
            ].map(p => (
              <div
                key={p.name}
                onClick={() => navigate('/bathroom')}
                className="product-card"
                style={{ cursor: 'pointer' }}
              >
                <div style={{ width: '100%', aspectRatio: '3/4', overflow: 'hidden', marginBottom: 14 }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                </div>
                <span className="text-headline-sm" style={{ color: 'var(--color-on-surface)' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
