Tentu, ini adalah ide yang sangat brilian. Memiliki file `.md` khusus sebagai "kompas" bagi AI akan sangat mempercepat proses pengembangan dan memastikan saya (atau AI lain) tidak keluar dari jalur identitas brand **Galyna Heiwa**.

Berikut adalah draf detail untuk file `CONTEXT_AI.md`. Kamu bisa langsung menyalinnya ke dalam root project-mu.

---

# CONTEXT_AI.md - Galyna Heiwa Project Knowledge Base

## 📋 Project Overview

**Galyna Heiwa** adalah brand fashion lokal asal Kalimantan Selatan yang berfokus pada pelestarian budaya melalui kain **Sasirangan** dan **Ecoprint**. Berdiri sejak 2018, brand ini membawa misi internasional dengan menggunakan pewarna alam (natural dyes) untuk menciptakan produk yang berkelanjutan dan elegan.

* **Visi:** Memperkenalkan wastra (kain tradisional) Banjar ke pasar global.
* **Target Market:** Internasional (High-end, Conscious Fashion).
* **Karakter Brand:** Elegan, Alami, Etnik-Modern, Eksklusif.

---

## 🎨 Brand Identity & Design Rules

AI harus mengikuti panduan visual ini dalam setiap pembuatan komponen UI:

### 1. Warna Utama

* **Primary Blue:** `oklch(68.5% 0.169 237.323)` / Tailwind `sky-500`.
* **Aura:** Bersih seperti langit, menenangkan, dan profesional.
* **Secondary:** Gunakan warna-warna alam (earth tones) sebagai komplemen untuk menonjolkan aspek "Natural Dyes".

### 2. Design Philosophy (High-Fashion Editorial)

* **Layout:** Hindari layout "generic business" (kotak-kotak kaku). Gunakan pendekatan **Editorial Magazine**.
* **Typography:** Gunakan kombinasi Serif untuk Heading (kesan mewah) dan Sans-serif yang bersih untuk Body.
* **Whitespace:** Berikan ruang napas yang luas (generous padding/margin) untuk kesan premium.
* **Visual:** Gunakan grid yang asimetris, tipografi besar sebagai elemen desain, dan transisi yang halus.

---

## 🛠 Technical Stack & Architecture

* **Framework:** Astro (Static Site Generator).
* **Styling:** Tailwind CSS (Modern syntax, utility-first).
* **Data Management:** **Strictly No Database**. Semua data disimpan dalam file statis (Local JSON, Markdown, atau Const Files di `/src/data/`).
* **Localization (i18n):** Multi-language (Indonesia - `id` & English - `en`). Menggunakan routing berbasis folder (contoh: `/en/products` atau `/id/products`).

---

## 📂 Data Structure Guidelines

Karena tidak menggunakan database, AI harus mengikuti struktur data yang konsisten:

* **Collections:** Gunakan `src/content/` untuk artikel atau katalog produk jika memungkinkan.
* **Static Assets:** Gambar produk harus dioptimalkan menggunakan komponen `<Image />` dari Astro.

---

## 🤖 AI Interaction Rules (Instruction to AI)

Saat bekerja pada project ini, AI diharapkan:

1. **Prioritaskan Performa:** Karena ini Astro, pastikan penggunaan "Client Directives" (`client:load`, dsb) hanya digunakan jika benar-benar perlu interaktivitas.
2. **Copywriting:** Gunakan nada bicara (Tone of Voice) yang elegan, puitis namun tetap informatif.
3. **i18n Awareness:** Setiap kali membuat komponen teks, selalu sediakan variabel untuk versi English dan Indonesia.
4. **No Placeholders:** Jangan gunakan teks "Lorem Ipsum". Gunakan konteks fashion Sasirangan atau deskripsi pewarna alam yang relevan.

---

## 🗺 Project Map & Context

* `src/pages/`: Struktur routing (Pastikan ada subfolder `/en/`).
* `src/components/`: Gunakan komponen yang reusable (Button, Navbar, Footer).
* `src/data/`: Tempat menyimpan file `.json` untuk list produk, testimoni, dan histori perusahaan.

---

### Tips Tambahan untuk Kamu:

Untuk memperkuat sisi "Editorial Layout", saya sarankan kita menggunakan teknik **Bento Grid** yang dimodifikasi atau **Overlapping Elements** menggunakan CSS Grid.

**Apakah kamu ingin saya buatkan struktur folder awal di Astro yang sudah mendukung Multi-language (ID/EN) tersebut?**