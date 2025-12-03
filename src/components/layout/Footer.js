import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nyarap-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Kolom 1: Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              Nyarap<span className="text-nyarap-orange">.</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              "Nyarap sek, men kuat menghadapi hari." <br/>
              Menyajikan sarapan hangat penuh energi untuk memulai harimu dengan senyuman.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-nyarap-yellow">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-slate-300 hover:text-nyarap-orange transition">Menu Sarapan</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-nyarap-orange transition">Cerita Kami</Link></li>
              <li><Link to="/gallery" className="text-slate-300 hover:text-nyarap-orange transition">Galeri Foto</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-nyarap-orange transition">Lokasi Warung</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-nyarap-yellow">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="text-nyarap-orange flex-shrink-0" size={20} />
                <span>Precil, Tegalsari, Kec. Kandeman, Kabupaten Batang, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Phone className="text-nyarap-orange flex-shrink-0" size={20} />
                <span>+62 815-4821-1361</span>
              </li>
              <li className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/runz.js" target='blank' className="bg-slate-700 p-2 rounded-full hover:bg-nyarap-orange transition"><Instagram size={20}/></a>
                <a href="http://instagram.com/runz.js" target="blank" className="bg-slate-700 p-2 rounded-full hover:bg-nyarap-orange transition"><Facebook size={20}/></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Warung Nyarap. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;