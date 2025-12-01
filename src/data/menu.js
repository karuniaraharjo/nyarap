// src/data/menu.js

/**
 * Data Menu Makanan Warung Sarapan "Nyarap"
 * Harga menggunakan Rupiah (IDR).
 * @typedef {Object} MenuItem
 * @property {number} id - ID unik menu.
 * @property {string} name - Nama menu.
 * @property {string} description - Deskripsi singkat.
 * @property {number} price - Harga dalam Rupiah.
 * @property {string} category - Kategori (misal: "Nasi", "Roti", "Minuman").
 * @property {string} imagePlaceholder - Placeholder untuk gambar dari Unsplash.
 */

const menuData = [
    {
        id: 1,
        name: "Nasi Uduk Spesial Nyarap",
        description: "Nasi uduk harum dengan lauk ayam suwir, telur dadar, dan sambal terasi.",
        price: 18000,
        category: "Nasi",
        imagePlaceholder: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&q=80"
    },
    {
        id: 2,
        name: "Bubur Ayam Komplit",
        description: "Bubur lembut dengan topping ayam cincang, kerupuk, dan cakwe renyah.",
        price: 15000,
        category: "Nasi",
        imagePlaceholder: "https://images.unsplash.com/photo-1610970637651-7f85acb621e2?w=600&h=400&q=80"
    },
    {
        id: 3,
        name: "Roti Bakar Keju Meleleh",
        description: "Roti tebal dibakar dengan isian keju cheddar dan susu kental manis.",
        price: 12000,
        category: "Roti",
        imagePlaceholder: "https://images.unsplash.com/photo-1551631528-769a6858e99a?w=600&h=400&q=80"
    },
    {
        id: 4,
        name: "Kopi Susu Panas Nyarap",
        description: "Paduan kopi robusta lokal dan susu segar, mantap buat mulai hari.",
        price: 10000,
        category: "Minuman",
        imagePlaceholder: "https://images.unsplash.com/photo-1509787163014-cb91924618e2?w=600&h=400&q=80"
    },
    // ... Tambahkan menu lain sesuai kebutuhan
];

export default menuData;