import React from 'react';
import Button from './Button';
import { createWhatsAppLink } from '../../utils/wa-link';

const MenuCard = ({ item }) => {
  // Format harga ke Rupiah
  const priceFormatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(item.price);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      {/* Image Section */}
      <div className="relative overflow-hidden h-56">
        <img 
          src={item.imagePlaceholder} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-nyarap-orange shadow-sm">
          {priceFormatted}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading font-bold text-nyarap-dark group-hover:text-nyarap-orange transition-colors">
            {item.name}
          </h3>
        </div>
        <p className="text-nyarap-muted text-sm mb-6 flex-grow leading-relaxed">
          {item.description}
        </p>
        
        {/* Action Button */}
        <Button 
          variant="primary" 
          href={createWhatsAppLink(item.name)} // Auto generate WA Link
          className="w-full"
        >
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;