import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
} from "lucide-react";
import Button from "../components/ui/Button";

const Contact = () => {
  // 1. STATE: Untuk menampung data inputan user
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Tanya Menu", // Default value
    message: "",
  });

  // 2. HANDLER: Mengupdate state saat user mengetik
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. SUBMIT FUNCTION: Logika saat tombol dikirim
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah browser refresh halaman

    // Format pesan untuk WhatsApp
    const waNumber = "6281548211361";
    const text = `
Halo Nyarap, saya ingin menghubungi via Website.

*Nama:* ${formData.name}
*No. HP:* ${formData.phone}
*Perihal:* ${formData.subject}
*Pesan:* ${formData.message}
    `.trim();

    // Encode pesan agar aman di URL (spasi jadi %20, dst)
    const encodedText = encodeURIComponent(text);

    // Redirect ke WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. HEADER */}
      <div className="bg-nyarap-dark text-white py-16 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">
          Hubungi <span className="text-nyarap-orange">Kami</span>
        </h1>
        <p className="text-slate-300 max-w-lg mx-auto px-4">
          Mau reservasi tempat? Atau mau pesan nasi box untuk acara kantor?
          Jangan ragu untuk kontak kami.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-8 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
          {/* 2. KOLOM KIRI: INFO KONTAK & JAM BUKA */}
          <div className="p-8 md:p-12 bg-nyarap-orange text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>

            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Informasi Warung
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold opacity-80 text-sm mb-1">
                        ALAMAT
                      </p>
                      <p className="font-medium">
                        Precil, Tegalsari, Kec. Kandeman, Kabupaten Batang, Jawa
                        Tengah
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold opacity-80 text-sm mb-1">
                        WHATSAPP / TELEPON
                      </p>
                      <p className="font-medium">+62 815-4821-1361</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold opacity-80 text-sm mb-1">EMAIL</p>
                      <p className="font-medium">halo@nyarap.id</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Jam Buka */}
              <div>
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Clock size={24} /> Jam Operasional
                </h3>
                <div className="bg-white/10 p-4 rounded-xl space-y-2 text-sm font-medium">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span>Senin - Sabtu</span>
                    <span>05.00 - 08.00 WIB</span>
                  </div>
                  <div className="flex justify-between text-nyarap-yellow font-bold pt-1">
                    <span>Minggu & Hari Libur Nasional</span>
                    <span>TUTUP!</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 pt-4">
                <a
                  href="http://instagram.com/runz.js"
                  target="blank"
                  className="bg-white text-nyarap-orange p-3 rounded-full hover:bg-nyarap-yellow hover:text-nyarap-dark transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="http://instagram.com/runz.js"
                  target="blank"
                  className="bg-white text-nyarap-orange p-3 rounded-full hover:bg-nyarap-yellow hover:text-nyarap-dark transition"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* 3. KOLOM KANAN: FORM PESAN */}
          <div className="p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-heading font-bold text-nyarap-dark mb-2">
              Kirim Pesan
            </h3>
            <p className="text-gray-500 mb-8">
              Punya pertanyaan atau saran? Isi form di bawah ini.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name" // PENTING: harus sama dengan key di state
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nyarap-orange focus:ring-2 focus:ring-orange-100 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nyarap-orange focus:ring-2 focus:ring-orange-100 outline-none transition"
                    placeholder="0812..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Perihal
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nyarap-orange focus:ring-2 focus:ring-orange-100 outline-none transition bg-white"
                >
                  <option value="Tanya Menu">Tanya Menu</option>
                  <option value="Reservasi Tempat">Reservasi Tempat</option>
                  <option value="Pesanan Katering">
                    Pesanan Katering / Box
                  </option>
                  <option value="Kritik & Saran">Kritik & Saran</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Pesan Anda
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-nyarap-orange focus:ring-2 focus:ring-orange-100 outline-none transition"
                  placeholder="Tulis pesanmu disini..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full gap-2">
                <Send size={18} /> Kirim ke WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* 4. MAPS EMBED SECTION */}
        <div className="mt-12">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-96 w-full overflow-hidden relative">
            {/* Google Maps Embed Placeholder */}
            {/* Ganti src iframe ini dengan link embed Google Maps lokasi asli Anda nanti */}
            <iframe
              title="Lokasi Nyarap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.740050566366!2d109.75086647403563!3d-6.921647367745528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7025006820cdbd%3A0x4cf8d32c848cf555!2sWarung%20Sarapan%20mbak%20Seh!5e0!3m2!1sid!2sid!4v1764750092173!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
