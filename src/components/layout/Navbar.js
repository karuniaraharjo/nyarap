import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Daftar Link Navigasi
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Galeri', path: '/gallery' },
    { name: 'Kontak', path: '/contact' },
  ];

  // Cek apakah link sedang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-nyarap-orange p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Coffee size={24} />
            </div>
            <span className="text-2xl font-heading font-bold text-nyarap-dark">
              Nyarap<span className="text-nyarap-orange">.</span>
            </span>
          </Link>

          {/* DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-nyarap-orange font-bold' 
                    : 'text-nyarap-muted hover:text-nyarap-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* CTA Button di Navbar */}
            <Button variant="primary" size="sm" className="px-5 py-2 text-sm" href="https://wa.me/6281234567890">
              Pesan Sekarang
            </Button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button 
            className="md:hidden text-nyarap-dark focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {/* Tampil hanya jika isOpen = true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`block py-2 px-4 rounded-lg ${
                  isActive(link.path) 
                    ? 'bg-orange-50 text-nyarap-orange font-bold' 
                    : 'text-nyarap-muted hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)} // Tutup menu saat diklik
              >
                {link.name}
              </Link>
            ))}
             <Button variant="primary" className="w-full justify-center" href="https://wa.me/6281234567890">
              Pesan via WA
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;