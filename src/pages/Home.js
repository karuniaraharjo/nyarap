import React from 'react';
import { ArrowRight, Star, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import MenuCard from '../components/ui/MenuCard';

// Import Data Dummy
import menuData from '../data/menu'; 
import testimonialsData from '../data/testimonials';

const Home = () => {
  // Ambil 3 menu pertama untuk bagian "Highlights"
  const featuredMenu = menuData.slice(0, 3);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-nyarap-bg overflow-hidden">
        {/* Background Blob Decoration (Opsional aesthetic) */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-100/50 rounded-l-full translate-x-1/3 blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-orange-100 text-nyarap-orange rounded-full font-bold text-sm tracking-wide">
              👋 Semangat Pagi!
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight text-nyarap-dark">
              Nyarap Sek, <br/>
              <span className="text-nyarap-orange">Men Kuat</span> Menghadapi Hari
            </h1>
            <p className="text-lg text-nyarap-muted max-w-md leading-relaxed">
              Mulailah harimu dengan sarapan bergizi. Dari Nasi Uduk legendaris sampai Kopi Susu gula aren yang bikin melek.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button to="/menu" variant="primary">Lihat Menu</Button>
              <Button to="/about" variant="outline">Tentang Kami</Button>
            </div>
            
            {/* Social Proof kecil */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-sm font-medium text-gray-500">
                Disukai <span className="text-nyarap-orange font-bold">500+</span> Pelanggan
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?w=800&q=80" 
               alt="Sarapan Enak" 
               className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 border-8 border-white"
             />
             {/* Floating Card */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-slow">
               <div className="bg-green-100 p-2 rounded-full text-green-600"><MapPin size={24}/></div>
               <div>
                 <p className="text-xs text-gray-500">Lokasi Kami</p>
                 <p className="font-bold text-nyarap-dark">Kota Sarapan, Jateng</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT MENU SECTION */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Menu Favorit <span className="text-nyarap-orange">Pagi Ini</span></h2>
          <p className="text-nyarap-muted">Menu sarapan best-seller yang paling sering dipesan oleh pelanggan setia kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/menu" variant="outline" className="gap-2">
            Lihat Semua Menu <ArrowRight size={18}/>
          </Button>
        </div>
      </section>

      {/* 3. TESTIMONI SECTION */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-16">Kata Mereka Tentang <span className="text-nyarap-orange">Nyarap</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testi) => (
              <div key={testi.id} className="bg-white p-8 rounded-2xl shadow-sm border border-orange-100 relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -right-4 bg-nyarap-yellow text-nyarap-dark w-10 h-10 flex items-center justify-center rounded-full text-2xl font-serif">"</div>
                
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testi.content}"</p>
                
                <div className="flex items-center gap-4">
                  <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-nyarap-dark">{testi.name}</h4>
                    <p className="text-xs text-gray-400">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA (CALL TO ACTION) & FORM KRITIK (Simple) */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="bg-nyarap-dark rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Udah Ngiler Belum? 🤤</h2>
            <p className="text-slate-300 text-lg">
              Jangan biarkan perut kosong mengganggu produktivitasmu. Pesan sekarang, kami siapkan yang hangat buat kamu.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
               <Button href="https://wa.me/6281234567890" variant="primary" className="bg-nyarap-orange border-none">
                 Pesan Lewat WhatsApp
               </Button>
               {/* Form Kritik Saran Sederhana */}
               <div className="mt-8 pt-8 border-t border-slate-700 w-full">
                 <p className="text-sm text-slate-400 mb-4">Punya kritik atau saran? Tulis disini:</p>
                 <form className="flex gap-2 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                   <input type="text" placeholder="Masukan saranmu..." className="flex-grow px-4 py-2 rounded-full text-gray-800 focus:outline-none" />
                   <button className="bg-white text-nyarap-dark px-4 py-2 rounded-full font-bold hover:bg-gray-200">Kirim</button>
                 </form>
               </div>
            </div>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-nyarap-orange/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;