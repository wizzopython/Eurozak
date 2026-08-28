import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Map real WhatsApp product images to catalog items
const ALL_PRODUCTS = [
  {
    id: 'ez001', code: 'EZ001', name: 'Eurozak Nova',
    description: 'Premium PVC multiwood cabinet with super-bright LED mirror. Water-resistant, termite-proof, 60cm optimized width.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',
    isNew: true, tags: ['Wood Finish', 'Illuminated'],
    finishes: ['#8B5A2B', '#1A1A1A'], finishName: '2 Finishes',
  },
  {
    id: 'al024', code: 'AL024', name: 'Aura Linea',
    description: 'Architectural slatted wood design with a halo-lit circular smart mirror and contrasting matte black panels.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',
    isNew: false, tags: ['Wood Finish', 'Illuminated', 'Matte Black'],
    finishes: ['#8B5A2B'], finishName: 'Wood / Black Accent',
  },
  {
    id: 'lm088', code: 'LM088', name: 'Lumina Minimal',
    description: 'Ultra-minimalist monolithic design with integrated basin and seamless touch-latch storage compartments.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg',
    isNew: false, tags: ['Matte Black'],
    finishes: ['#E0E0E0', '#333333'], finishName: '2 Finishes',
  },
  {
    id: 'de102', code: 'DE102', name: 'Duo Elegance',
    description: 'Expansive double vanity for master suites featuring dual LED mirrors and deep storage drawers.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg',
    isNew: false, tags: ['Wood Finish', 'Illuminated'],
    finishes: ['#D2B48C'], finishName: 'Light Oak',
  },
  {
    id: 'uc045', code: 'UC045', name: 'Urban Compact',
    description: 'Space-saving design for modern urban apartments and powder rooms — luxury in a compact footprint.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg',
    isNew: false, tags: ['Wood Finish', 'Matte Black'],
    finishes: ['#3E2723', '#F5F5F5'], finishName: '2 Finishes',
  },
  {
    id: 'sb062', code: 'SB062', name: 'Studio Basin',
    description: 'Compact wall-hung basin cabinet with concealed storage and anti-fog LED mirror for small bathrooms.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg',
    isNew: true, tags: ['Illuminated'],
    finishes: ['#ffffff'], finishName: 'Pure White',
  },
  {
    id: 'wn033', code: 'WN033', name: 'Walnut Reserve',
    description: 'Rich natural walnut veneer cabinet with brushed gold hardware. A statement piece for premium interiors.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',
    isNew: false, tags: ['Wood Finish'],
    finishes: ['#5C3D1E'], finishName: 'Dark Walnut',
  },
  {
    id: 'ml055', code: 'ML055', name: 'Mirror Ledge',
    description: 'Smart LED backlit mirror with integrated storage ledge and warm lighting for a spa-like ambiance.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg',
    isNew: false, tags: ['Illuminated'],
    finishes: ['#808080'], finishName: 'Matte Silver',
  },
  {
    id: 'px099', code: 'PX099', name: 'Prestige XL',
    description: 'Extra-large 120cm vanity cabinet with twin basins, drawer organizers, and premium ceramic countertop.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg',
    isNew: false, tags: ['Wood Finish', 'Illuminated'],
    finishes: ['#D2B48C', '#1A1A1A'], finishName: '2 Finishes',
  },
  {
    id: 'ct077', code: 'CT077', name: 'Ceramic Touch',
    description: 'Understated elegance with a seamless ceramic countertop basin and soft-close drawer system.',
    img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',
    isNew: false, tags: ['Matte Black'],
    finishes: ['#F5F5F5'], finishName: 'Pure White',
  },
];

const FILTERS = [
  { label: 'All',        tag: 'All' },
  { label: 'Wood',       tag: 'Wood Finish' },
  { label: 'Matte Black',tag: 'Matte Black' },
  { label: 'Illuminated',tag: 'Illuminated' },
];

export default function BathroomCabinet() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort]     = useState('Newest Arrivals');
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    let result = [...ALL_PRODUCTS];
    if (filter !== 'All') result = result.filter(p => p.tags.includes(filter));
    if (sort === 'Newest Arrivals')  result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sort === 'Model Code (A-Z)') result.sort((a, b) => a.code.localeCompare(b.code));
    setProducts(result);
  }, [filter, sort]);

  return (
    <div style={{ background: 'var(--color-surface)' }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/videos/Man_opening_bathroom_vanity_cabinet_202608271747.mp4" type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(29,54,127,0.92) 0%, rgba(29,54,127,0.45) 55%, rgba(0,0,0,0.1) 100%)' }} />
        </div>

        <div className="container-max" style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingBottom: 64 }}>
          <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', display: 'block', marginBottom: 16 }}>
            Premium Modern Collection
          </span>
          <h1 className="text-display" style={{ color: '#fff', marginBottom: 16, maxWidth: 640 }}>
            Cabinet Wash Basin<br />
            <em style={{ fontWeight: 300, opacity: 0.88 }}>Solutions</em>
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, marginBottom: 40 }}>
            Designed around you. A perfect blend of modern aesthetics and practical storage — crafted for warmth, durability, and elegance.
          </p>

          {/* Feature Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {[
              { icon: 'diamond',   text: 'Premium Design' },
              { icon: 'layers',    text: 'Quality Materials' },
              { icon: 'handshake', text: 'Reliable Partner' },
              { icon: 'verified',  text: '5-Year Warranty' },
            ].map(pill => (
              <div key={pill.icon} style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--color-on-primary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 20, color: 'var(--color-secondary-fixed-dim)' }}>{pill.icon}</span>
                <span className="text-label-sm">{pill.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────── */}
      <div
        style={{
          position: 'sticky', top: 76, zIndex: 50,
          background: 'var(--color-surface-container)',
          borderBottom: '1px solid var(--color-outline-variant)',
        }}
      >
        <div className="container-max" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px clamp(20px,5vw,80px)', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
            <span className="text-label-sm" style={{ color: 'var(--color-on-surface)', marginRight: 8 }}>Filter:</span>
            {FILTERS.map(f => (
              <button
                key={f.tag}
                onClick={() => setFilter(f.tag)}
                className="text-label-lg"
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '6px 14px',
                  color: filter === f.tag ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                  borderBottom: filter === f.tag ? '2px solid var(--color-secondary)' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>Sort:</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600,
                color: 'var(--color-on-surface)', cursor: 'pointer',
              }}
            >
              <option>Newest Arrivals</option>
              <option>Model Code (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ─────────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 40, rowGap: 60 }}>

            {products.map(p => (
              <div
                key={p.id}
                className="product-card"
                onClick={() => navigate('/product/ez-6633')}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Image */}
                <div style={{
                  width: '100%', aspectRatio: '3/4', overflow: 'hidden',
                  background: 'var(--color-surface-container-low)',
                  marginBottom: 20, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
                }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.65s ease',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                  {p.isNew && (
                    <div style={{
                      position: 'absolute', top: 16, right: 16,
                      background: 'var(--color-surface)', padding: '4px 10px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}>
                      <span className="text-label-sm" style={{ color: 'var(--color-secondary)' }}>New</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ paddingLeft: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)' }}>{p.name}</h3>
                    <span className="text-label-sm" style={{ color: 'var(--color-outline)', marginTop: 4 }}>{p.code}</span>
                  </div>
                  <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 14, WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', display: '-webkit-box' }}>
                    {p.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {p.finishes.map((c, i) => (
                      <div key={i} style={{ width: 16, height: 16, borderRadius: '50%', background: c, border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 1px 4px rgba(0,0,0,0.12)' }} />
                    ))}
                    <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginLeft: 4 }}>{p.finishName}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* B2B CTA Tile */}
            <div style={{
              aspectRatio: '3/4', background: 'var(--color-primary)',
              color: 'var(--color-on-primary)', padding: 40,
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.06,
                backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,.4) 39px,rgba(255,255,255,.4) 40px)',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed)', display: 'block', marginBottom: 16 }}>B2B Partners</span>
                <h3 className="text-headline-md" style={{ lineHeight: 1.3 }}>Custom<br/>Solutions<br/>for Projects</h3>
                <p className="text-body-md" style={{ color: 'var(--color-on-primary-container)', marginTop: 16, maxWidth: 260 }}>
                  Scalable architectural cabinetry for large residential and commercial developments.
                </p>
              </div>
              <a
                href="mailto:info@eurozak.in"
                className="btn-gold"
                style={{
                  color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)',
                  textDecoration: 'none', position: 'relative', zIndex: 1, alignSelf: 'flex-start',
                }}
              >
                Request Catalogue
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── QUALITY SECTION ──────────────────────────────────────── */}
      <section className="section-gap" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 20 }}>Engineered for Longevity</h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 28 }}>
              Every EUROZAK cabinet is constructed with premium PVC multiwood — ensuring absolute water resistance and structural integrity in high-moisture environments.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: 'water_drop',   text: '100% Water Resistant' },
                { icon: 'bug_report',   text: 'Termite Proof Construction' },
                { icon: 'verified',     text: '5 Year Structural Warranty' },
              ].map(item => (
                <div key={item.icon} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: 16, background: 'var(--color-surface)',
                  border: '1px solid rgba(197,197,210,0.3)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: 22 }}>{item.icon}</span>
                  <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src="/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg"
              alt="PVC Multiwood Cabinet Quality"
              style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            />
            <div style={{
              position: 'absolute', bottom: -24, left: -20,
              background: 'var(--color-surface)', padding: 24,
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid var(--color-outline-variant)',
              maxWidth: 280,
            }}>
              <h4 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', marginBottom: 8 }}>PVC Multiwood</h4>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Superior density vs. traditional MDF — a lifetime of reliable use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY CTA ──────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-secondary-container)', padding: '64px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 className="text-headline-lg" style={{ color: 'var(--color-on-secondary-container)', marginBottom: 14 }}>
            Interested in our Cabinet Solutions?
          </h2>
          <p className="text-body-lg" style={{ color: 'var(--color-on-secondary-container)', opacity: 0.8, marginBottom: 32 }}>
            Get pricing, dimensions, and our full catalogue via WhatsApp or email.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer" className="btn-primary"
              style={{ textDecoration: 'none', background: 'var(--color-secondary)', color: '#fff' }}>
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
