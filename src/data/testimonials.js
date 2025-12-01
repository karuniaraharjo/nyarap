// src/data/testimonials.js

/**
 * Data Testimoni Pelanggan
 * @typedef {Object} Testimonial
 * @property {number} id - ID unik.
 * @property {string} name - Nama pelanggan.
 * @property {string} role - Status (Mahasiswa/Karyawan/dll).
 * @property {string} content - Isi testimoni.
 * @property {number} rating - Jumlah bintang (1-5).
 * @property {string} avatar - URL foto profil (Unsplash).
 */

const testimonialsData = [
    {
        id: 1,
        name: "Budi Santoso",
        role: "Karyawan Swasta",
        content: "Nyarap di sini wajib banget sebelum ngantor! Nasi uduknya pulen, sambalnya nendang. Bikin melek!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&q=80&fit=crop"
    },
    {
        id: 2,
        name: "Siska Pratiwi",
        role: "Mahasiswi",
        content: "Harganya pas di kantong mahasiswa. Roti bakarnya juara, kejunya melimpah ruah nggak pelit.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80&fit=crop"
    },
    {
        id: 3,
        name: "Pak Bambang",
        role: "Warga Lokal",
        content: "Suasananya enak, bersih, pelayanannya ramah. Kopi susunya mengingatkan saya sama rasa tempo dulu.",
        rating: 4,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80&fit=crop"
    }
];

export default testimonialsData;