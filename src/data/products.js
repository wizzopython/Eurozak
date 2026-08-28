export const PRODUCTS = [
  // ==========================================
  // VANITIES (BATHROOM CABINETS)
  // ==========================================
  {
    id: 'ez001', code: 'EZ-001', name: 'Eurozak Nova',
    desc: 'Premium PVC cabinet + LED mirror combo. Water-resistant, termite-proof.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '800 mm' },
          { label: 'Material', value: 'Multiwood PVC' },
          { label: 'Finish', value: 'Wood Finish' },
        ]
      }
    ],
    price: '₹22,500',
    category: 'vanity',
    pos: 'center top', isNew: true, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#8B5A2B', '#1A1A1A'],
  },
  {
    id: 'al024', code: 'AL-024', name: 'Aura Linea',
    desc: 'Slatted wood design with halo-lit mirror. Matte black contrast panels.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM.jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '600 mm' },
          { label: 'Material', value: 'Multiwood PVC' },
          { label: 'Finish', value: 'Matte Black' },
        ]
      }
    ],
    price: '₹18,200',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated', 'Matte Black'],
    swatches: ['#8B5A2B', '#1A1A1A'],
  },
  {
    id: 'lm088', code: 'LM-088', name: 'Lumina Minimal',
    desc: 'Ultra-minimalist monolithic vanity with integrated basin and touch-latch storage.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (1).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '900 mm' },
          { label: 'Material', value: 'Multiwood PVC' },
          { label: 'Finish', value: 'Matte Grey' },
        ]
      }
    ],
    price: '₹26,900',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Matte Black'],
    swatches: ['#E0E0E0', '#333333'],
  },
  {
    id: 'de102', code: 'DE-102', name: 'Duo Elegance',
    desc: 'Double vanity for master suites — twin LED mirrors, deep storage drawers.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (2).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '1200 mm' },
          { label: 'Material', value: 'Multiwood PVC' },
        ]
      }
    ],
    price: '₹34,000',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#D2B48C'],
  },
  {
    id: 'uc045', code: 'UC-045', name: 'Urban Compact',
    desc: 'Space-saving design for city apartments and powder rooms.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.54 PM (3).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '450 mm' },
        ]
      }
    ],
    price: '₹14,500',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Matte Black'],
    swatches: ['#3E2723', '#F5F5F5'],
  },
  {
    id: 'sb062', code: 'SB-062', name: 'Studio Basin',
    desc: 'Wall-hung basin cabinet with concealed storage and anti-fog LED mirror.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM.jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '600 mm' },
        ]
      }
    ],
    price: '₹16,800',
    category: 'vanity',
    pos: 'center center', isNew: true, tags: ['Illuminated'],
    swatches: ['#ffffff'],
  },
  {
    id: 'wn033', code: 'WN-033', name: 'Walnut Reserve',
    desc: 'Rich walnut veneer with brushed gold hardware. A statement piece.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (1).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '800 mm' },
        ]
      }
    ],
    price: '₹24,000',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Wood Finish'],
    swatches: ['#5C3D1E'],
  },
  {
    id: 'ml055', code: 'ML-055', name: 'Mirror Ledge',
    desc: 'LED backlit mirror with integrated storage ledge — spa-like ambiance.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (2).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '900 mm' },
        ]
      }
    ],
    price: '₹28,500',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Illuminated'],
    swatches: ['#808080'],
  },
  {
    id: 'px099', code: 'PX-099', name: 'Prestige XL',
    desc: 'Extra-large 120cm vanity with twin basins, drawer organizers, ceramic countertop.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.48.53 PM.jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions & Details',
        items: [
          { label: 'Width', value: '1200 mm' },
        ]
      }
    ],
    price: '₹38,000',
    category: 'vanity',
    pos: 'center top', isNew: false, tags: ['Wood Finish', 'Illuminated'],
    swatches: ['#D2B48C', '#1A1A1A'],
  },

  // ==========================================
  // SANITARYWARE (TOILETS)
  // ==========================================
  {
    id: 'ez6633', code: 'EZ-6633', name: 'Nesti One Piece Closet',
    desc: 'The Nesti one-piece closet combines structural purity with advanced siphonic technology. Cast from premium European porcelain.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.19 PM (3).jpeg', alt: 'Front View' },
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',     alt: 'Angled View' },
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg', alt: 'Side Profile' },
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', alt: 'Close-up Detail' },
    ],
    specs: [
      {
        group: 'Dimensions',
        items: [
          { label: 'Overall Length', value: '680 mm' },
          { label: 'Overall Width', value: '380 mm' },
          { label: 'Overall Height', value: '740 mm' },
          { label: 'Trap Distance', value: '300 mm (S-Trap)' },
        ],
      },
      {
        group: 'Specifications',
        items: [
          { label: 'Flush System', value: 'Dual Flush (3L/6L)' },
          { label: 'Seat Cover', value: 'Soft-Close UF Seat' },
          { label: 'Color', value: 'Pure Ceramic White' },
        ],
      },
    ],
    price: '₹13,900',
    category: 'sanitaryware',
    pos: 'center center', isNew: true, tags: ['S-Trap', 'One Piece'],
    swatches: ['#ffffff'],
  },
  {
    id: 'op1001', code: 'OP-1001', name: 'Zenith Closet',
    desc: 'Sleek and modern one-piece toilet with an easy-to-clean skirted design.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM.jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions',
        items: [
          { label: 'Trap Distance', value: '220 mm (S-Trap)' },
        ],
      },
    ],
    price: '₹12,500',
    category: 'sanitaryware',
    pos: 'center center', isNew: false, tags: ['S-Trap', 'One Piece'],
    swatches: ['#ffffff'],
  },
  {
    id: 'op1002', code: 'OP-1002', name: 'Aero Wall Hung',
    desc: 'Space-saving wall-hung closet, perfect for minimalist bathroom layouts.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (1).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions',
        items: [
          { label: 'Type', value: 'Wall Hung' },
        ],
      },
    ],
    price: '₹14,200',
    category: 'sanitaryware',
    pos: 'center center', isNew: false, tags: ['Wall Hung'],
    swatches: ['#ffffff'],
  },
  {
    id: 'op1003', code: 'OP-1003', name: 'Vanguard Smart',
    desc: 'Advanced sanitaryware with an elegant sloping profile and strong flush.',
    img: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg',
    gallery: [
      { url: '/products/WhatsApp Image 2026-08-27 at 1.55.20 PM (2).jpeg', alt: 'Front View' },
    ],
    specs: [
      {
        group: 'Dimensions',
        items: [
          { label: 'Trap Distance', value: '300 mm (S-Trap)' },
        ],
      },
    ],
    price: '₹15,000',
    category: 'sanitaryware',
    pos: 'center center', isNew: true, tags: ['S-Trap', 'One Piece'],
    swatches: ['#ffffff'],
  },
];
