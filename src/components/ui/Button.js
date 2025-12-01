import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Button Component
 * @param {string} children - Teks tombol
 * @param {string} variant - 'primary' (Orange), 'secondary' (Yellow), 'outline' (Border only)
 * @param {string} to - Jika diisi, tombol berubah jadi Link navigasi
 * @param {string} href - Jika diisi, tombol berubah jadi External Link (misal ke WA)
 * @param {string} className - Class tambahan custom
 * @param {object} props - Props lain (onClick, type, dll)
 */
const Button = ({ children, variant = 'primary', to, href, className = '', ...props }) => {
  
  // Base styles: Bentuk dasar tombol
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md";
  
  // Variants: Pilihan warna
  const variants = {
    primary: "bg-nyarap-orange text-white hover:bg-orange-600 hover:shadow-orange-200",
    secondary: "bg-nyarap-yellow text-nyarap-dark hover:bg-yellow-400 hover:shadow-yellow-200",
    outline: "border-2 border-nyarap-orange text-nyarap-orange hover:bg-nyarap-orange hover:text-white bg-transparent",
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${className}`;

  // Logika Rendering:
  // 1. Jika ada 'to', render sebagai Link Router (Internal)
  if (to) {
    return <Link to={to} className={finalClass} {...props}>{children}</Link>;
  }

  // 2. Jika ada 'href', render sebagai tag <a> (External Link)
  if (href) {
    return <a href={href} className={finalClass} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
  }

  // 3. Default: Render sebagai button biasa
  return (
    <button className={finalClass} {...props}>
      {children}
    </button>
  );
};

export default Button;