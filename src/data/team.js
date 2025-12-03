/**
 * Data Anggota Tim Warung "Nyarap"
 * @typedef {Object} TeamMember
 * @property {number} id - ID unik.
 * @property {string} name - Nama anggota.
 * @property {string} role - Jabatan/Peran.
 * @property {string} bio - Deskripsi singkat.
 * @property {string} image - URL foto profil (Unsplash).
 */

import buSeh from '../assets/images/bu-seh.webp';
import pakIpan from '../assets/images/pak-ipan.webp';
import masArun from '../assets/images/mas-arun.webp';

const teamData = [
    {
        id: 1,
        name: "Bu Wahyuningsih",
        role: "Pemilik & Kepala Dapur",
        bio: "Resep nasi Megono turun-temurun dari nenek, dimasak dengan penuh cinta setiap subuh.",
        image: buSeh
    },
    {
        id: 2,
        name: "Pak Taripan",
        role: "Operasional & Barista",
        bio: "Spesialis kopi tubruk dan teh tarik. Pastikan kopimu pas buat melek pagi hari.",
        image: pakIpan
    },
    {
        id: 3,
        name: "Mas Arun",
        role: "Front of House",
        bio: "Si paling ramah yang siap menyapa 'Selamat Pagi' dan mencatat pesananmu secepat kilat.",
        image: masArun
    }
];

export default teamData;