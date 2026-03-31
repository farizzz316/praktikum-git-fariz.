import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Fariz() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
      <nav className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 shadow-sm transition-all">
        <div className="container mx-auto flex justify-between items-center max-w-5xl p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Profil Mahasiswa</h1>
          </div>
          <ul className="flex space-x-6 font-semibold text-sm">
            <li>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors py-2">Beranda</a>
            </li>
            <li>
              <a href="#" className="text-blue-400 border-b-2 border-blue-400 py-2">Profil</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto mt-8 p-4 max-w-5xl animate-fade-in mb-12">
        <section className="bg-slate-900 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden mb-8 border border-slate-800 hover:border-slate-700 transition-colors duration-300">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20 opacity-50 backdrop-blur-3xl"></div>
          </div>
          
          <div className="px-6 sm:px-12 pb-12 relative flex flex-col sm:flex-row gap-10">
            <div className="-mt-20 flex flex-col items-center sm:items-start shrink-0 z-10">
              <div className="relative group">
                <img 
                  src="src/assets/fariz.jpeg" 
                  alt="Foto Profil Farizqahasan Luqman Hakim" 
                  className="w-40 h-40 rounded-full border-8 border-slate-900 shadow-xl object-cover bg-slate-800 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-slate-900 rounded-full"></div>
              </div>
            </div>

            <div className="pt-2 sm:pt-6 flex-1 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">Farizqahasan Luqman Hakim</h2>
              <p className="text-blue-400 font-semibold mb-8 flex items-center justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                Web Developer & Tech Enthusiast
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4 hover:bg-slate-800 transition-colors group">
                  <div className="bg-slate-700 p-2 rounded-lg shadow-sm group-hover:text-blue-400 text-slate-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Kelas</p>
                    <p className="font-bold text-slate-200">T2-G</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4 hover:bg-slate-800 transition-colors group">
                  <div className="bg-slate-700 p-2 rounded-lg shadow-sm group-hover:text-blue-400 text-slate-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Program Studi</p>
                    <p className="font-bold text-slate-200">D3 Teknologi Informasi</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4 hover:bg-slate-800 transition-colors group">
                  <div className="bg-slate-700 p-2 rounded-lg shadow-sm group-hover:text-blue-400 text-slate-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">NIM</p>
                    <p className="font-bold text-slate-200">253140707111099</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-start gap-4 hover:bg-slate-800 transition-colors group">
                  <div className="bg-slate-700 p-2 rounded-lg shadow-sm group-hover:text-blue-400 text-slate-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Domisili</p>
                    <p className="font-bold text-slate-200">Ngawi, Jawa Timur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 sm:px-12 pb-12">
            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-1.5 bg-blue-500 rounded-full"></span>
              Tentang Saya
            </h3>
            <div className="text-slate-400 leading-relaxed text-justify space-y-4">
              <p>
                Halo. Perkenalkan, nama saya Farizqahasan Luqman Hakim. Saya mahasiswa D3 Teknologi Informasi di Universitas Brawijaya asal Kabupaten Ngawi. Saya menyadari minat sejati saya pada pertengahan semester pertama perkuliahan. Ketertarikan utama saya mengarah pada ranah sosial dan humaniora. Saya memiliki rasa ingin tahu yang besar terhadap ilmu politik, hukum, dan psikologi. Saya juga rutin meluangkan waktu untuk mengamati geopolitik global dan menganalisis pergerakan pasar saham.
              </p>
              <p>
                Saya menjunjung tinggi tanggung jawab atas pilihan akademik yang sudah saya ambil. Saya tetap menjalani perkuliahan di program studi teknologi informasi secara profesional. Saya membuktikan komitmen ini melalui keterlibatan aktif dalam proyek tim ROMUSA. Kami merancang sistem manajemen binatu digital bernama WashUp. Saya mengaplikasikan keahlian React dan Tailwind CSS untuk membangun antarmuka pengguna. Proyek ini melatih logika saya dalam memecahkan masalah teknis secara terstruktur.
              </p>
              <p>
                Saya melihat ilmu teknologi dan ilmu sosial sebagai perpaduan yang saling melengkapi. Pola pikir terstruktur dari pemrograman mempermudah saya menganalisis fenomena hukum dan politik secara tajam. Wawasan psikologi membantu saya memahami pola perilaku manusia secara mendalam. Saat ini saya mempertimbangkan transisi pendidikan menuju program studi sosial humaniora. Saya menjadikan kejujuran pada diri sendiri sebagai fondasi utama untuk melangkah maju.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-black/40 p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-300">
            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
              Keterampilan
            </h3>
            <div className="space-y-6">
              {[
                { name: "React & Tailwind CSS", percent: 11 },
                { name: "Problem Solving", percent: 80 },
                { name: "Analisis Data", percent: 70 },
                { name: "Manajemen Proyek", percent: 75 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-semibold text-slate-300 text-sm">{skill.name}</span>
                    <span className="text-blue-400 text-xs font-bold">{skill.percent}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl shadow-2xl shadow-black/40 p-8 border border-slate-800 hover:border-slate-700 transition-colors duration-300">
            <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
              Kontak & Media Sosial
            </h3>
            
            <div className="space-y-4 mb-8">
              <a href="mailto:farizqah@gmail.com" className="flex items-center gap-4 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-colors group border border-slate-700/50 hover:border-blue-500/30">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-blue-400 shadow-sm transition-colors">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
                  <p className="font-semibold text-slate-200">farizqah@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/62895396136665" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-colors group border border-slate-700/50 hover:border-green-500/30">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-green-400 shadow-sm transition-colors">
                  <FaWhatsapp className="text-lg" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">WhatsApp</p>
                  <p className="font-semibold text-slate-200">+62 895-3961-36665</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 pt-4 border-t border-slate-800">
              <a 
                href="https://github.com/farizzz316" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-colors font-medium shadow-md"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/farizqahasan-luqman-hakim" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium shadow-md"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}

export default Fariz;