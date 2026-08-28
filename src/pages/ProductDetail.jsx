import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { PRODUCTS } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected]   = useState(0);
  const [openSpec, setOpenSpec]   = useState(0);
  const [requested, setRequested] = useState(false);
  const [saved, setSaved]         = useState(false);

  // Find the product
  const product = PRODUCTS.find(p => p.id === id);
  
  // Get related products
  const related = product ? PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3) : [];

  useEffect(() => { 
    window.scrollTo(0, 0); 
    setSelected(0); 
  }, [id]);

  if (!product) {
    return (
      <PageTransition style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <h2 className="text-headline-md">Product not found.</h2>
      </PageTransition>
    );
  }

  return (
    <PageTransition style={{ background: 'var(--color-surface)' }}>
      
      {/* ══════════════════════════════════════════════════════
          BREADCRUMBS
      ══════════════════════════════════════════════════════ */}
      <div className="container-max" style={{ paddingTop: 100, paddingBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, color: 'var(--color-on-surface-variant)', marginBottom: 24 }} className="text-label-sm">
          <span>COLLECTIONS</span> /
          <span style={{ cursor: 'pointer', textTransform: 'uppercase' }} onClick={() => navigate(product.category === 'vanity' ? '/bathroom' : '/sanitaryware')}>
            {product.category === 'vanity' ? 'BATHROOM' : 'SANITARYWARE'}
          </span> /
          <span style={{ color: 'var(--color-on-surface)', fontWeight: 600 }}>{product.code.replace('-', ' ')}</span>
        </div>
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
              <img src={product.gallery[selected].url} alt={product.gallery[selected].alt}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center top',
                  transition: 'opacity 0.3s ease',
                  display: 'block',
                }}
              />
              {/* Badge */}
              {product.isNew && (
                <div style={{
                  position: 'absolute', top: 16, left: 16,
                  background: 'var(--color-secondary)', padding: '4px 12px',
                }}>
                  <span className="text-label-sm" style={{ color: '#fff', fontSize: 10 }}>NEW</span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
              {product.gallery.map((img, i) => (
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

          </div>

          {/* ─── RIGHT: Info ─── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="text-label-sm" style={{ color: 'var(--color-primary)', letterSpacing: '0.1em' }}>
              MODEL: {product.code.split('-')[0]} &nbsp;·&nbsp; SKU: {product.code}
            </span>
            <h1 className="text-display" style={{ fontSize: 'clamp(32px, 4vw, 44px)', marginBottom: 20 }}>
              {product.name}
            </h1>
            <p className="text-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginBottom: 32 }}>
              {product.desc}
            </p>

            <div style={{ borderTop: '1px solid var(--color-outline-variant)', borderBottom: '1px solid var(--color-outline-variant)', padding: '24px 0', marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                <span className="text-display" style={{ fontSize: 28, fontWeight: 700 }}>{product.price}</span>
                <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>MRP · INCL. ALL TAXES</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span className="text-label-sm" style={{ letterSpacing: '0.1em' }}>FINISH</span>
              <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Various</span>
            </div>

            {/* Quick Specs Overview */}
            <div style={{ display: 'flex', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
              {product.tags.map(tag => (
                <div key={tag} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)' }}>TAG</span>
                  <span className="text-title-md">{tag}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => setRequested(true)}
              style={{
                width: '100%', padding: '16px', background: requested ? 'var(--color-secondary)' : 'var(--color-primary)',
                color: '#fff', border: 'none', cursor: 'pointer',
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                transition: 'background 0.3s', marginBottom: 12
              }}
            >
              {requested ? (
                <>
                  <span className="material-symbols-outlined">check_circle</span>
                  <span className="text-label-lg">QUOTE REQUESTED</span>
                </>
              ) : (
                <>
                  <span className="text-label-lg">REQUEST PRODUCT DETAILS</span>
                  <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </>
              )}
            </button>

            <button
              onClick={() => setSaved(!saved)}
              style={{
                width: '100%', padding: '16px', background: 'transparent',
                color: 'var(--color-on-surface)', border: '1px solid var(--color-outline-variant)',
                cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8,
                transition: 'all 0.2s',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: saved ? "'FILL' 1" : "'FILL' 0" }}>
                favorite
              </span>
              <span className="text-label-lg">{saved ? 'SAVED TO WISHLIST' : 'SAVE TO WISHLIST'}</span>
            </button>

            {/* Accordion Specs */}
            <div style={{ marginTop: 24 }}>
              {product.specs && product.specs.map((spec, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--color-outline-variant)' }}>
                  <button onClick={() => setOpenSpec(openSpec === i ? -1 : i)}
                    style={{
                      width: '100%', display: 'flex', justifyContent: 'space-between',
                      padding: '16px 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left',
                      color: openSpec === i ? 'var(--color-primary)' : 'var(--color-on-surface)',
                    }}>
                    <span className="text-title-md">{spec.group}</span>
                    <span className="material-symbols-outlined">{openSpec === i ? 'remove' : 'add'}</span>
                  </button>
                  {openSpec === i && (
                    <div style={{ paddingBottom: 16 }}>
                      {spec.items.map((item, j) => (
                        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px dashed var(--color-outline-variant)' }}>
                          <span className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{item.label}</span>
                          <span className="text-body-md" style={{ fontWeight: 500 }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          RELATED PRODUCTS
      ══════════════════════════════════════════════════════ */}
      {related.length > 0 && (
        <section style={{ padding: '80px 0', background: '#f5f4ef' }}>
          <div className="container-max">
            <h2 className="text-display" style={{ marginBottom: 40, fontSize: 36 }}>You May Also Like</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24 }}>
              {related.map((p, i) => (
                <div key={i} style={{ cursor: 'pointer', group: 'true' }} onClick={() => navigate(`/product/${p.id}`)}>
                  <div style={{
                    background: 'var(--color-surface-container-low)', aspectRatio: '1/1',
                    overflow: 'hidden', marginBottom: 12,
                  }}>
                    <img src={p.img} alt={p.name}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                      onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    />
                  </div>
                  <h4 className="text-title-md" style={{ marginBottom: 4 }}>{p.name}</h4>
                  <p className="text-label-sm" style={{ color: 'var(--color-on-surface-variant)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {p.category} COLLECTION
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </PageTransition>
  );
}
