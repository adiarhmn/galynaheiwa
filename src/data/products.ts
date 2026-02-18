export interface Product {
  id: string;
  name: { id: string; en: string };
  category: { id: string; en: string };
  price: string;
  image: string;
  description: { id: string; en: string };
}

export const products: Product[] = [
  {
    id: 'sasirangan-indigo',
    name: { id: 'Sasirangan Indigo', en: 'Indigo Sasirangan' },
    category: { id: 'Kain Tradisional', en: 'Traditional Fabric' },
    price: 'IDR 850.000',
    image: '/images/sasirangan-1.jpg',
    description: {
      id: 'Pewarna indigo alami pada kain premium dengan motif klasik Banjar.',
      en: 'Natural indigo dye on premium fabric with classic Banjar motifs.',
    },
  },
  {
    id: 'ecoprint-silk',
    name: { id: 'Ecoprint Sutra', en: 'Silk Ecoprint' },
    category: { id: 'Syal & Aksesori', en: 'Scarves & Accessories' },
    price: 'IDR 650.000',
    image: '/images/ecoprint-1.jpg',
    description: {
      id: 'Sutra lembut dengan cetakan daun pohon lokal yang elegan.',
      en: 'Soft silk with elegant imprints from local tree leaves.',
    },
  },
  {
    id: 'kimono-fusion',
    name: { id: 'Kimono Fusion', en: 'Kimono Fusion' },
    category: { id: 'Pakaian', en: 'Apparel' },
    price: 'IDR 1.250.000',
    image: '/images/kimono-1.jpg',
    description: {
      id: 'Perpaduan silhouette kimono dengan motif Sasirangan kontemporer.',
      en: 'Fusion of kimono silhouette with contemporary Sasirangan motifs.',
    },
  },
  {
    id: 'clutch-batik',
    name: { id: 'Clutch Sasirangan', en: 'Sasirangan Clutch' },
    category: { id: 'Tas', en: 'Bags' },
    price: 'IDR 450.000',
    image: '/images/clutch-1.jpg',
    description: {
      id: 'Clutch handmade dengan kain Sasirangan premium dan lapisan kulit.',
      en: 'Handmade clutch with premium Sasirangan fabric and leather lining.',
    },
  },
];
