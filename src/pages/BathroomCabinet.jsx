import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const ALL_PRODUCTS = [
  {
    id: 'ez001', code: 'EZ-001', name: 'Eurozak Nova',
    desc: 'Premium PVC cabinet + LED mirror combo. Water-resistant, termite-proof.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',
    pos: 'center top', isNew: true, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#8B5A2B', '#1A1A1A'],
  },
  {
    id: 'al024', code: 'AL-024', name: 'Aura Linea',
    desc: 'Slatted wood design with halo-lit mirror. Matte black contrast panels.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated', 'Matte Black'],
    swatches: ['#8B5A2B', '#1A1A1A'],
  },
  {
    id: 'lm088', code: 'LM-088', name: 'Lumina Minimal',
    desc: 'Ultra-minimalist monolithic vanity with integrated basin and touch-latch storage.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg',
    pos: 'center top', isNew: false, tags: ['Matte Black'],
    swatches: ['#E0E0E0', '#333333'],
  },
  {
    id: 'de102', code: 'DE-102', name: 'Duo Elegance',
    desc: 'Double vanity for master suites — twin LED mirrors, deep storage drawers.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#D2B48C'],
  },
  {
    id: 'uc045', code: 'UC-045', name: 'Urban Compact',
    desc: 'Space-saving design for city apartments and powder rooms.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Matte Black'],
    swatches: ['#3E2723', '#F5F5F5'],
  },
  {
    id: 'sb062', code: 'SB-062', name: 'Studio Basin',
    desc: 'Wall-hung basin cabinet with concealed storage and anti-fog LED mirror.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg',
    pos: 'center center', isNew: true, tags: ['Illuminated'],
    swatches: ['#ffffff'],
  },
  {
    id: 'wn033', code: 'WN-033', name: 'Walnut Reserve',
    desc: 'Rich walnut veneer with brushed gold hardware. A statement piece.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',
    pos: 'center top', isNew: false, tags: ['Wood Finish'],
    swatches: ['#5C3D1E'],
  },
  {
    id: 'ml055', code: 'ML-055', name: 'Mirror Ledge',
    desc: 'LED backlit mirror with integrated storage ledge — spa-like ambiance.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg',
    pos: 'center top', isNew: false, tags: ['Illuminated'],
    swatches: ['#808080'],
  },
  {
    id: 'px099', code: 'PX-099', name: 'Prestige XL',
    desc: 'Extra-large 120cm vanity with twin basins, drawer organizers, ceramic countertop.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#D2B48C', '#1A1A1A'],
  },
  {
    id: 'ct077', code: 'CT-077', name: 'Ceramic Touch',
    desc: 'Seamless ceramic countertop basin with soft-close drawer system.',
    img: '/products/WhatsApp Image 2026-08-27 at 2.03.20 PM.jpeg',
    pos: 'center center', isNew: false, tags: ['Matte Black'],
    swatches: ['#F5F5F5'],
  },
];

const FILTERS = [
  { label: 'All',         tag: 'All' },
  { label: 'Wood Finish', tag: 'Wood Finish' },
  { label: 'Matte Black', tag: 'Matte Black' },
  { label: 'Illuminated', tag: 'Illuminated' },
];

export default function BathroomCabinet() {
  const [filter, setFilter] = useState('All');
  const [sort, setSort]     = useState('Newest Arrivals');
  const [products, setProducts] = useState(ALL_PRODUCTS);
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    let res = [...ALL_PRODUCTS];
    if (filter !== 'All') res = res.filter(p => p.tags.includes(filter));
    if (sort === 'Newest Arrivals')  res.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    if (sort === 'Model Code (A-Z)') res.sort((a, b) => a.code.localeCompare(b.code));
    setProducts(res);
  }, [filter, sort]);

  return (
    <PageTransition style={{ background: 'var(--color-surface)' }}>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '72vh',
        display: 'flex', alignItems: 'flex-end',
        overflow: 'hidden', background: '#0d1b3e',
      }}>
        {/* Static fallback */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'brightness(0.4)',
        }} />
        {/* Video */}
        <video autoPlay muted loop playsInline style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
          opacity: 0.65,
        }}>
          <source src="/videos/Man_opening_bathroom_vanity_cabinet_202608271747.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(29,54,127,0.95) 0%, rgba(29,54,127,0.5) 50%, rgba(0,0,0,0.15) 100%)',
        }} />

        <div className="container-max" style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingBottom: 64 }}>
          <span className="text-label-lg" style={{ color: 'var(--color-secondary-fixed-dim)', display: 'block', marginBottom: 14 }}>
            — Premium Vanity Collection
          </span>
          <h1 className="text-display" style={{ color: '#fff', marginBottom: 16, maxWidth: 620 }}>
            Cabinet & Wash<br/>
            <em style={{ fontWeight: 300, opacity: 0.9 }}>Basin Solutions</em>
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 480, marginBottom: 40 }}>
            A perfect blend of modern aesthetics and practical storage — crafted for warmth, durability, and elegance.
          </p>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {[
              { icon: 'diamond',   text: 'Premium Design' },
              { icon: 'verified',  text: '5-Year Warranty' },
              { icon: 'water_drop', text: '100% Waterproof' },
              { icon: 'bug_report', text: 'Termite Proof' },
            ].map(p => (
              <div key={p.text} style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--color-on-primary-container)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--color-secondary-fixed-dim)' }}>{p.icon}</span>
                <span className="text-label-sm">{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          STICKY FILTER BAR
      ══════════════════════════════════════════════════════ */}
      <div style={{
        position: 'sticky', top: 76, zIndex: 50,
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-outline-variant)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        <div className="container-max" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', padding: '12px clamp(20px,5vw,80px)',
          flexWrap: 'wrap', gap: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap' }}>
            <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', marginRight: 8 }}>Filter:</span>
            {FILTERS.map(f => (
              <button key={f.tag}
                onClick={() => setFilter(f.tag)}
                className="text-label-lg"
                style={{
                  background: filter === f.tag ? 'var(--color-primary)' : 'transparent',
                  color: filter === f.tag ? '#fff' : 'var(--color-on-surface-variant)',
                  border: '1px solid ' + (filter === f.tag ? 'var(--color-primary)' : 'var(--color-outline-variant)'),
                  padding: '6px 16px', cursor: 'pointer',
                  transition: 'all 0.2s', fontSize: 12,
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>
              {products.length} product{products.length !== 1 ? 's' : ''}
            </span>
            <span style={{ color: 'var(--color-outline-variant)' }}>|</span>
            <select value={sort} onChange={e => setSort(e.target.value)}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
                color: 'var(--color-on-surface)', cursor: 'pointer',
              }}>
              <option>Newest Arrivals</option>
              <option>Model Code (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          PRODUCT GRID
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface)' }}>
        <div className="container-max">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '36px 28px',
          }}>
            {products.map(p => (
              <div key={p.id}
                className="product-card"
                onClick={() => navigate('/product/ez-6633')}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              >
                {/* Image Container — fixed height for uniform grid */}
                <div style={{
                  width: '100%', height: 340, overflow: 'hidden',
                  background: 'var(--color-surface-container-low)',
                  marginBottom: 16, position: 'relative',
                }}>
                  <img src={p.img} alt={p.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      objectPosition: p.pos,
                      transition: 'transform 0.65s ease',
                    }}
                    onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; }}
                    onMouseLeave={e => { e.target.style.transform = 'scale(1)'; }}
                  />
                  {/* Badges */}
                  <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {p.isNew && (
                      <div style={{ background: 'var(--color-secondary)', padding: '3px 10px' }}>
                        <span className="text-label-sm" style={{ color: '#fff', fontSize: 10 }}>NEW</span>
                      </div>
                    )}
                  </div>
                  {/* Quick Enquire on hover */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    background: 'rgba(29,54,127,0.9)',
                    padding: '12px 16px',
                    transform: 'translateY(100%)',
                    transition: 'transform 0.3s ease',
                    display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center',
                  }}
                    className="product-hover-cta"
                  >
                    <span className="material-symbols-outlined" style={{ color: '#fff', fontSize: 16 }}>chat</span>
                    <span className="text-label-sm" style={{ color: '#fff' }}>Enquire Now</span>
                  </div>
                </div>

                {/* Product Info */}
                <div style={{ padding: '0 4px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <h3 className="text-headline-sm" style={{ color: 'var(--color-on-surface)', fontSize: 18 }}>{p.name}</h3>
                    <span className="text-label-sm" style={{ color: 'var(--color-outline)', marginTop: 3, flexShrink: 0 }}>{p.code}</span>
                  </div>
                  <p className="text-body-md" style={{
                    color: 'var(--color-on-surface-variant)', marginBottom: 12,
                    overflow: 'hidden', display: '-webkit-box',
                    WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                  }}>
                    {p.desc}
                  </p>
                  {/* Swatches */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {p.swatches.map((c, i) => (
                      <div key={i} title={c} style={{
                        width: 18, height: 18, borderRadius: '50%',
                        background: c,
                        border: '1.5px solid rgba(0,0,0,0.12)',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
                      }} />
                    ))}
                    <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', fontSize: 10 }}>
                      {p.swatches.length} Finish{p.swatches.length > 1 ? 'es' : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* B2B CTA Card */}
            <div style={{
              height: 340, background: 'var(--color-primary)',
              display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              padding: 32, position: 'relative', overflow: 'hidden', cursor: 'pointer',
            }}
              onClick={() => window.open('mailto:info@eurozak.in', '_blank')}
            >
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.05,
                backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,1) 0,rgba(255,255,255,1) 1px,transparent 0,transparent 50%)',
                backgroundSize: '20px 20px',
              }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <span className="text-label-sm" style={{ color: 'var(--color-secondary-fixed)', display: 'block', marginBottom: 12 }}>B2B Partners</span>
                <h3 className="text-headline-sm" style={{ color: '#fff', lineHeight: 1.4 }}>Custom Solutions<br/>for Projects</h3>
                <p className="text-body-md" style={{ color: 'rgba(255,255,255,0.7)', marginTop: 12, maxWidth: 220 }}>
                  Scalable cabinetry for large residential & commercial developments.
                </p>
              </div>
              <a href="mailto:info@eurozak.in"
                className="btn-gold"
                style={{
                  color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)',
                  textDecoration: 'none', position: 'relative', zIndex: 1, alignSelf: 'flex-start',
                  padding: '10px 20px', fontSize: 12,
                }}>
                Request Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          QUALITY FEATURE
      ══════════════════════════════════════════════════════ */}
      <section className="section-gap" style={{ background: 'var(--color-surface-container)' }}>
        <div className="container-max" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 56, alignItems: 'center',
        }}>
          <div>
            <span className="text-label-sm" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: 16 }}>— Materials & Build</span>
            <h2 className="text-headline-lg" style={{ color: 'var(--color-on-surface)', marginBottom: 20 }}>Engineered for Longevity</h2>
            <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', lineHeight: 1.8, marginBottom: 28 }}>
              Our PVC multiwood body ensures absolute water resistance and structural integrity — superior density to traditional MDF for a lifetime of reliable use.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: 'water_drop',   text: '100% Water Resistant' },
                { icon: 'bug_report',   text: 'Termite Proof Construction' },
                { icon: 'verified',     text: '5 Year Structural Warranty' },
              ].map(item => (
                <div key={item.icon} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 16px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-outline-variant)',
                }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-tertiary)', fontSize: 22 }}>{item.icon}</span>
                  <span className="text-label-lg" style={{ color: 'var(--color-on-surface)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img src="/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg"
              alt="Cabinet Interior Quality"
              style={{
                width: '100%', height: 460,
                objectFit: 'cover', objectPosition: 'center',
                display: 'block',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ENQUIRY CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--color-primary)', padding: '64px 0' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 className="text-headline-lg" style={{ color: '#fff', marginBottom: 12 }}>Interested in Our Cabinet Solutions?</h2>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: 32 }}>
            Get pricing, dimensions, and our full catalogue via WhatsApp or email.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919744978000" target="_blank" rel="noreferrer"
              className="btn-gold" style={{ textDecoration: 'none', color: 'var(--color-secondary-fixed-dim)', borderColor: 'var(--color-secondary-fixed-dim)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chat</span>
              WhatsApp Us
            </a>
            <a href="mailto:info@eurozak.in"
              className="btn-primary" style={{ textDecoration: 'none', background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.3)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>mail</span>
              Email Enquiry
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .product-card:hover .product-hover-cta {
          transform: translateY(0) !important;
        }
      `}</style>
    </PageTransition>
  );
}
