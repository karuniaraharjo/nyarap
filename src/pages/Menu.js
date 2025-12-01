import React, { useState } from 'react';
import menuData from '../data/menu';
import MenuCard from '../components/ui/MenuCard';
import { Search } from 'lucide-react';

const Menu = () => {
  // State untuk menyimpan kategori yang sedang dipilih
  const [activeCategory, setActiveCategory] = useState('Semua');

  // 1. Ambil daftar kategori unik dari data menu
  const categories = ['Semua', ...new Set(menuData.map(item => item.category))];

  // 2. Filter menu berdasarkan kategori yang dipilih
  const filteredMenu = activeCategory === 'Semua' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* HEADER SECTION */}
      <div className="bg-nyarap-dark text-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Daftar Menu <span className="text-nyarap-orange">Nyarap</span>
        </h1>
        <p className="text-slate-300 max-w-xl mx-auto">
          Pilih sarapan favoritmu hari ini. Semua dimasak dadakan biar hangat sampai ke perutmu.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 -mt-8">
        {/* FILTER TABS (Card Floating) */}
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-nyarap-orange text-white shadow-md shadow-orange-200'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        {filteredMenu.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          // Empty State (Jika tidak ada menu di kategori itu)
          <div className="text-center py-20">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-nyarap-orange">
              <Search size={32}/>
            </div>
            <h3 className="text-xl font-bold text-gray-700">Yah, menu kosong...</h3>
            <p className="text-gray-500">Belum ada menu untuk kategori ini.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default Menu;