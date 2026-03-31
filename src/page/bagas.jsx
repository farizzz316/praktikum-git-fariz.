import React from 'react';

function Bagas() {
  const profileData = {
    nama: "Bagas Ade Agung Wibowo",
    kelas: "T2G",
    prodi: "D3 Teknologi Informasi",
    domisili: "Kab. Malang, Jawa Timur",
    email: "bagasadeagungwibowo@gmail.com",
    linkedin: "https://www.linkedin.com/in/bagas-ade-agung-wibowo-881613368?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/usernamekamu", // Ganti dengan link GitHub kamu
    tentang: "Saya adalah seorang mahasiswa Teknologi Informasi di Universitas Brawijaya yang memiliki antusiasme tinggi terhadap perkembangan teknologi dan pengembangan perangkat lunak. Saat ini, saya sedang aktif mendalami pengembangan front-end dan sistem manajemen digital. Saya percaya bahwa teknologi adalah kunci untuk menciptakan solusi berkelanjutan bagi masyarakat. Dengan latar belakang pendidikan teknis dan dedikasi untuk terus belajar, saya terbiasa menghadapi tantangan kompleks dalam pemrograman dan analisis data. Saya memiliki visi untuk berkontribusi dalam industri teknologi masa depan, menciptakan aplikasi yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang luar biasa serta berdampak positif bagi lingkungan sekitar melalui inovasi digital yang kreatif dan efisien."
  };

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4 font-sans text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Main Profile Card */}
        <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden shadow-neon-white">
          {/* Cover Image */}
          <div className="h-48 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          
          <div className="px-6 pb-8 relative">
            {/* Profile Picture */}
            <div className="relative -mt-24 mb-4">
              <div className="h-40 w-40 rounded-full border-4 border-gray-900 bg-gray-800 overflow-hidden shadow-xl">
                <img 
                  src="src/assets/ppbagas.jpeg" 
                  alt="Profile" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex flex-col md:flex-row justify-between items-start">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">{profileData.nama}</h1>
                <p className="text-gray-300 text-lg">{profileData.prodi} | {profileData.kelas}</p>
                
                <div className="flex flex-col space-y-2.5 mt-3">
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <span className="text-lg">📍</span> {profileData.domisili}
                    </p>
                    
                    {/* Email Link */}
                    <a 
                      href={`mailto:${profileData.email}`} 
                      className="inline-flex items-center text-blue-400 text-sm gap-2 hover:text-blue-300 transition-colors duration-200 w-fit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="underline underline-offset-4">{profileData.email}</span>
                    </a>

                    {/* LinkedIn Link */}
                    <a 
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-500 text-sm gap-2 hover:text-blue-400 transition-colors duration-200 w-fit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span className="underline underline-offset-4">LinkedIn Profile</span>
                    </a>

                    {/* GitHub Link */}
                    <a 
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 text-sm gap-2 hover:text-white transition-colors duration-200 w-fit"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="underline underline-offset-4">GitHub Profile</span>
                    </a>
                </div>

                <p className="text-gray-200 font-medium mt-4 italic">Universitas Brawijaya</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-neon-white">
          <h2 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">Tentang</h2>
          <p className="text-gray-300 leading-relaxed text-justify">
            {profileData.tentang}
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-gray-900 rounded-xl border border-gray-700 p-6 shadow-neon-white">
          <h2 className="text-xl font-bold text-white mb-5 border-b border-gray-800 pb-2">Pendidikan</h2>
          <div className="flex gap-4">
            <div className="h-14 w-14 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-1 overflow-hidden">
                <img src="src/assets/logo.jpg" alt="UB Logo" className="max-h-full object-contain" />
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">Universitas Brawijaya</h3>
              <p className="text-gray-300">{profileData.prodi}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = `
  .shadow-neon-white {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.05),
                0 0 20px rgba(255, 255, 255, 0.02);
    transition: all 0.3s ease-in-out;
  }
  .shadow-neon-white:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.08),
                0 0 30px rgba(255, 255, 255, 0.04);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default Bagas;