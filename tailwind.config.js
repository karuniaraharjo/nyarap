/** @type {import('tailwindcss').Config} */
module.exports = {
    // Menentukan file mana saja yang boleh menggunakan Tailwind
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        // Kustomisasi Warna sesuai Brand Identity "Nyarap"
        colors: {
          nyarap: {
            orange: '#F97316', // Semangat & Menggugah selera
            yellow: '#FACC15', // Ceria & Pagi hari
            dark: '#1E293B',   // Teks utama (Slate-800)
            muted: '#64748B',  // Teks sekunder (Slate-500)
            bg: '#FFFBEB',     // Background lembut (Amber-50)
          }
        },
        // Kustomisasi Font (Kita akan load dari Google Fonts nanti)
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Untuk body text
          heading: ['Poppins', 'sans-serif'], // Untuk judul/heading
        }
      },
    },
    plugins: [],
  }