import React from "react";
import teamData from "../data/team";
import { Heart, ShieldCheck, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. HEADER SECTION */}
      <div className="relative py-20 bg-nyarap-bg overflow-hidden">
        {/* Decorative Blob */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-nyarap-orange font-bold tracking-widest uppercase text-sm mb-2 block">
            Cerita Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-nyarap-dark mb-6">
            Lebih Dari Sekadar{" "}
            <span className="text-nyarap-orange">Nasi Uduk</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Berawal dari gerobak kecil di sudut jalan, kini kami hadir untuk
            memastikan setiap pagimu dimulai dengan energi positif dan perut
            kenyang.
          </p>
        </div>
      </div>

      {/* 2. STORY SECTION (Split Layout) */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop"
              alt="Dapur Nyarap"
              className="rounded-2xl w-full h-full object-cover translate-y-8 shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=500&fit=crop"
              alt="Suasana Warung"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-bold text-nyarap-dark">
              Kenapa Kami Bernama{" "}
              <span className="text-nyarap-orange">"Nyarap"</span>?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dalam bahasa Jawa, <strong>"Nyarap"</strong> berarti sarapan. Tapi
              bagi kami, nyarap adalah ritual sakral. Kami percaya bahwa mood
              seharian ditentukan oleh suapan pertama di pagi hari.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Didirikan tahun 2020 oleh Bu Siti, kami memegang teguh prinsip:{" "}
              <em>"Masakan rumah, harga ramah."</em> Semua bumbu kami ulek
              sendiri, santan kami peras segar setiap jam 3 pagi, dan senyum
              kami selalu gratis untuk Anda.
            </p>

            {/* Stats Kecil */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-2xl font-bold text-nyarap-orange">5+</h4>
                <p className="text-xs text-gray-500">Tahun Berdiri</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-nyarap-orange">10k+</h4>
                <p className="text-xs text-gray-500">Porsi Terjual</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-nyarap-orange">100%</h4>
                <p className="text-xs text-gray-500">Halal & Toyyib</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITION (Visi Misi) */}
      <section className="bg-nyarap-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold">
              Janji Kami Untuk Anda
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-nyarap-orange transition-colors">
              <div className="bg-nyarap-orange w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Bahan Pilihan Terbaik</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Kami tidak pakai bahan sisa kemarin. Sayuran, ayam, dan telur
                selalu belanja segar dari pasar induk setiap subuh.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-nyarap-orange transition-colors">
              <div className="bg-nyarap-orange w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Heart size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Dimasak Dengan Cinta</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Seperti masakan ibu di rumah. Tanpa pengawet buatan, tanpa MSG
                berlebihan. Sehat dan nyaman di perut.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-nyarap-orange transition-colors">
              <div className="bg-nyarap-orange w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Penyajian Cepat</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Kami tahu pagi Anda sibuk. Sistem dapur kami didesain agar
                pesanan siap santap dalam waktu kurang dari 10 menit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM SECTION */}
      <section className="py-20 container mx-auto px-4 md:px-8 bg-orange-50/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-nyarap-dark">
            Wajah Dibalik <span className="text-nyarap-orange">Nyarap</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Tim solid yang bangun pagi buta demi sarapan enak Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-nyarap-dark">
                  {member.name}
                </h3>
                <p className="text-nyarap-orange font-medium text-sm mb-4 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  "{member.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
