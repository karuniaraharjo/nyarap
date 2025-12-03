import React from 'react';
import { Instagram, ExternalLink, Camera } from 'lucide-react';
import Button from '../components/ui/Button';
import galleryData from '../data/gallery';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. HEADER */}
      <div className="pt-16 pb-12 text-center container mx-auto px-4">
        <div className="inline-block p-3 bg-orange-100 rounded-full text-nyarap-orange mb-4">
          <Camera size={24} />
        </div>
        <h1 className="text-4xl font-heading font-bold text-nyarap-dark mb-4">
          Galeri Momen <span className="text-nyarap-orange">Nyarap</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Intip keseruan di warung kami. Dari dapur yang ngebul sampai senyum pelanggan yang kenyang. Jangan lupa follow IG kami ya!
        </p>
      </div>

      {/* 2. ASYMMETRICAL GRID */}
      <div className="container mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
          
          {galleryData.map((item) => (
            <a 
              key={item.id}
              href="https://instagram.com" // Ganti dengan link IG asli
              target="_blank" 
              rel="noopener noreferrer"
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${
                // Logika Grid Asimetris (Tailwind Classes)
                item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
                item.size === 'tall' ? 'md:col-span-1 md:row-span-2' : 
                item.size === 'wide' ? 'md:col-span-2 md:row-span-1' :
                'md:col-span-1 md:row-span-1'
              }`}
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Hover Effect (Instagram Style) */}
              <div className="absolute inset-0 bg-nyarap-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <Instagram size={32} className="mb-2 text-nyarap-orange" />
                <p className="font-bold text-lg mb-1">Lihat di Instagram</p>
                <p className="text-xs text-gray-300 font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
                <ExternalLink size={16} className="absolute top-4 right-4 text-white/50" />
              </div>
            </a>
          ))}

        </div>

        {/* 3. CTA BOTTOM */}
        <div className="text-center mt-12 bg-orange-50 rounded-2xl p-8 max-w-2xl mx-auto border border-orange-100 border-dashed">
          <h3 className="text-xl font-bold text-nyarap-dark mb-2">Punya Foto Keren Saat Nyarap?</h3>
          <p className="text-gray-600 mb-6">Tag kami di Instagram <strong>@warungnyarap</strong> dan dapatkan diskon 10% untuk kunjungan berikutnya!</p>
          <Button href="https://instagram.com/runz.js" variant="outline" className="gap-2">
            <Instagram size={18}/> Follow Instagram Kami
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Gallery;