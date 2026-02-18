export const translations = {
  id: {
    nav: {
      home: 'Beranda',
      collections: 'Koleksi',
      story: 'Cerita Kami',
      contact: 'Kontak',
    },
    hero: {
      tagline: 'Pewarna Alam',
      title: 'Sasirangan & Ecoprint',
      subtitle: 'Warisan budaya Banjar, dituangkan dalam kain bernyawa. Setiap helai memuat cerita tentang akar, alam, dan identitas yang tak lekang oleh waktu.',
      cta: 'Jelajahi Koleksi',
    },
    featured: {
      label: 'Koleksi Unggulan',
      title: 'Karya Tangan yang Berbicara',
      description: 'Setiap produk adalah perpaduan antara teknik tradisional Sasirangan dan seni Ecoprint kontemporer, menggunakan pewarna alam yang ramah lingkungan.',
      viewAll: 'Lihat Semua',
    },
    story: {
      label: 'Filosofi',
      title: 'Dari Tanah Banjar, Untuk Dunia',
      description: 'Galyna Heiwa lahir dari keinginan melestarikan wastra Banjar dengan sentuhan modern. Kami percaya bahwa keindahan tradisional dapat berdiri sejajar dengan fashion dunia.',
      founded: 'Berdiri sejak 2018',
      location: 'Kalimantan Selatan, Indonesia',
      cta: 'Baca Cerita Lengkap',
    },
    craft: {
      label: 'Proses',
      title: 'Natural Dyes',
      subtitle: 'Pewarna Alami',
      items: [
        { title: 'Pemilihan Bahan', desc: 'Tanaman indigo, secang, dan mahoni dipilih dengan teliti' },
        { title: 'Proses Pewarnaan', desc: 'Teknik celup tradisional yang membutuhkan waktu dan kesabaran' },
        { title: 'Ecoprint', desc: 'Daun dan bunga ditekan langsung ke kain, menciptakan pola unik' },
      ],
    },
    footer: {
      tagline: 'Melestarikan budaya, menciptakan keindahan.',
      rights: 'Hak cipta dilindungi.',
      instagram: 'Instagram',
      email: 'Kontak',
    },
  },
  en: {
    nav: {
      home: 'Home',
      collections: 'Collections',
      story: 'Our Story',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Natural Dyes',
      title: 'Sasirangan & Ecoprint',
      subtitle: 'Banjar cultural heritage, woven into living fabric. Each piece holds stories of roots, nature, and an identity that transcends time.',
      cta: 'Explore Collections',
    },
    featured: {
      label: 'Featured Collection',
      title: 'Handcrafted Stories',
      description: 'Each product blends traditional Sasirangan techniques with contemporary Ecoprint artistry, using eco-friendly natural dyes.',
      viewAll: 'View All',
    },
    story: {
      label: 'Philosophy',
      title: 'From Banjar Soil, To The World',
      description: 'Galyna Heiwa was born from the desire to preserve Banjar textiles with a modern touch. We believe traditional beauty can stand alongside global fashion.',
      founded: 'Established 2018',
      location: 'South Kalimantan, Indonesia',
      cta: 'Read Our Story',
    },
    craft: {
      label: 'Process',
      title: 'Natural Dyes',
      subtitle: 'The Art of Color',
      items: [
        { title: 'Material Selection', desc: 'Indigo, sappanwood, and mahogany carefully chosen' },
        { title: 'Dyeing Process', desc: 'Traditional dip techniques requiring time and patience' },
        { title: 'Ecoprint', desc: 'Leaves and flowers pressed directly onto fabric, creating unique patterns' },
      ],
    },
    footer: {
      tagline: 'Preserving culture, creating beauty.',
      rights: 'All rights reserved.',
      instagram: 'Instagram',
      email: 'Contact',
    },
  },
};

export type Language = 'id' | 'en';
export type TranslationKey = typeof translations.id;
