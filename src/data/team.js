// src/data/team.js

/**
 * Data Anggota Tim Warung "Nyarap"
 * @typedef {Object} TeamMember
 * @property {number} id - ID unik.
 * @property {string} name - Nama anggota.
 * @property {string} role - Jabatan/Peran.
 * @property {string} bio - Deskripsi singkat.
 * @property {string} image - URL foto profil (Unsplash).
 */

const teamData = [
    {
        id: 1,
        name: "Bu Siti Aminah",
        role: "Pemilik & Kepala Dapur",
        bio: "Resep nasi uduk turun-temurun dari nenek, dimasak dengan penuh cinta setiap subuh.",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&q=80&fit=crop"
    },
    {
        id: 2,
        name: "Mas Dimas",
        role: "Operasional & Barista",
        bio: "Spesialis kopi tubruk dan teh tarik. Pastikan kopimu pas buat melek pagi hari.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&q=80&fit=crop"
    },
    {
        id: 3,
        name: "Mbak Rara",
        role: "Front of House",
        bio: "Si paling ramah yang siap menyapa 'Selamat Pagi' dan mencatat pesananmu secepat kilat.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80&fit=crop"
    }
];

export default teamData;