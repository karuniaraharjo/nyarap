// src/utils/wa-link.js

/**
 * Nomor WhatsApp tujuan dan template pesan.
 * Ganti dengan nomor WhatsApp UMKM yang sebenarnya.
 */
const WA_NUMBER = "6281548211361";
const BASE_TEXT = "Halo Nyarap, saya ingin pesan menu: ";
const BASE_URL = `https://wa.me/${WA_NUMBER}?text=`;

/**
 * Membuat URL WhatsApp API untuk pemesanan menu tertentu.
 * @param {string} itemName - Nama item menu yang ingin dipesan.
 * @returns {string} URL WhatsApp API yang siap di-redirect.
 */
export const createWhatsAppLink = (itemName) => {
  // 1. Gabungkan pesan lengkap
  const fullMessage = `${BASE_TEXT}${itemName}`;

  // 2. Encode URI untuk memastikan spasi dan karakter khusus aman di URL
  const encodedMessage = encodeURIComponent(fullMessage);

  // 3. Gabungkan menjadi URL WA yang lengkap
  return `${BASE_URL}${encodedMessage}`;
};
