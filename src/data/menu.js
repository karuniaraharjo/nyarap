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

import nasiMegono from '../assets/images/megono.webp';
import bubur from '../assets/images/bubur.webp';
import ketan from '../assets/images/ketan.webp';
import kopi from '../assets/images/kopi.webp';

const menuData = [
    {
        id: 1,
        name: "Nasi Megono Spesial Nyarap",
        description: "Sajian klasik nangka muda berbumbu di atas nasi hangat khas Batang. Sebuah kemewahan rasa tradisional yang menenangkan hati.",
        price: 18000,
        category: "Nasi",
        imagePlaceholder: nasiMegono
    },
    {
        id: 2,
        name: "Bubur Ayam Komplit",
        description: "Bubur lembut dengan topping ayam cincang, kerupuk, dan cakwe renyah.",
        price: 15000,
        category: "Nasi",
        imagePlaceholder: bubur
    },
    {
        id: 3,
        name: "Ketan Sutra Wangi",
        description: "Butiran ketan pilihan yang diolah menjadi tekstur selembut sutra, menghadirkan aroma wangi yang memikat. Sebuah pengalaman kuliner yang halus dan berkesan.",
        price: 12000,
        category: "Ketan",
        imagePlaceholder: ketan
    },
    {
        id: 4,
        name: "Kopi Susu Panas Nyarap",
        description: "Paduan kopi robusta lokal dan susu segar, mantap buat mulai hari.",
        price: 10000,
        category: "Minuman",
        imagePlaceholder: kopi
    },
    // ... Tambahkan menu lain sesuai kebutuhan
];

export default menuData;