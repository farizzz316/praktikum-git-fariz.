import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white p-6">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl relative">
                    <img
                        src="src/assets/D82.jpg"
                        alt="profile"
                        className="w-32 h-32 rounded-full border-4 border-white absolute -bottom-16 left-10"
                    />

                    <div className="ml-40">
                        <h1 className="text-3xl font-bold">Muhammad Fahmi Ramadhan</h1>
                        <p className="text-gray-200">Mahasiswa Brawijaya</p>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="mt-24 grid md:grid-cols-3 gap-6">

                    {/* LEFT */}
                    <div className="md:col-span-2 space-y-6">

                        {/* ABOUT */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-3">Tentang Saya</h2>
                            <p className="text-gray-300 text-justify">
                                Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam
                                pengembangan web modern. Saya terbiasa menggunakan Laravel, React, Javascript Tailwind dan Bootstrap CSS,
                                untuk membangun aplikasi yang interaktif dan responsif.
                                Saya juga memiliki kemampuan problem solving yang baik serta mampu
                                bekerja dalam tim. Saya senang mempelajari teknologi baru dan terus
                                mengembangkan skill agar dapat menjadi developer di masa depan.
                            </p>
                        </div>

                        {/* EXPERIENCE */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-3">Experience</h2>

                            <div className="border-l-2 border-blue-500 pl-4 space-y-6">

                                {/* PROJECT 1 */}
                                <div>
                                    <h3 className="font-bold text-lg">Web Kasir Tugas Akhir</h3>
                                    <p className="text-sm text-gray-400">2024</p>

                                    <p className="text-gray-300 mt-1">
                                        Mengembangkan aplikasi web kasir berbasis Laravel yang digunakan untuk
                                        mengelola transaksi penjualan, data barang, dan pelanggan.
                                        Sistem dilengkapi dengan fitur perhitungan otomatis, diskon, dan laporan transaksi.
                                    </p>

                                    {/* Link GitHub */}
                                    <a
                                        href="https://github.com/FalleryFT/kasir"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline text-sm mt-2 inline-block"
                                    >
                                        🔗 Lihat Repository GitHub
                                    </a>
                                </div>

                                {/* PROJECT 2 */}
                                <div>
                                    <h3 className="font-bold text-lg">Design Web PPDB Tulungagung 2024</h3>
                                    <p className="text-sm text-gray-400">2024</p>

                                    <p className="text-gray-300 mt-1">
                                        Mendesain tampilan website PPDB (Penerimaan Peserta Didik Baru) menggunakan Figma
                                        dengan pendekatan UI/UX modern, responsif, dan user-friendly untuk memudahkan proses pendaftaran online.
                                    </p>

                                    {/* Link Figma */}
                                    <a
                                        href="https://www.figma.com/design/ttEgWkaoZs24WwNGtLDoAS/PPDB-2024?node-id=60-256&t=Xf2CLnByFXAx63Ne-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-400 hover:underline text-sm mt-2 inline-block"
                                    >
                                        🎨 Lihat Design Figma
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-6">

                        {/* PROFILE INFO */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-3">Info</h2>
                            <p>Kelas: T2G</p>
                            <p>Prodi: Teknologi Informasi</p>
                            <p>Domisili: Tulunggagung</p>
                        </div>

                        {/* SKILLS */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-3">Skills</h2>

                            <div className="space-y-3">
                                {[
                                    { name: "Laravel", percent: 80 },
                                    { name: "React", percent: 60 },
                                    { name: "Tailwind", percent: 70 },
                                    { name: "Bootstrap", percent: 86 },
                                    { name: "JavaScript", percent: 68 },
                                ].map((skill) => (
                                    <div key={skill.name}>

                                        {/* Nama + Persen */}
                                        <div className="flex justify-between text-sm">
                                            <span>{skill.name}</span>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${skill.percent}%` }}
                                            ></div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CONTACT */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-4">Contact</h2>

                            <div className="space-y-3 text-gray-300">

                                {/* Email */}
                                <div className="flex items-center gap-3 hover:text-blue-400 transition">
                                    <FaEnvelope className="text-lg" />
                                    <a href="mailto:fahmimustamar58@gmail.com">
                                        fahmimustamar58@gmail.com
                                    </a>
                                </div>

                                {/* WhatsApp */}
                                <div className="flex items-center gap-3 hover:text-green-400 transition">
                                    <FaWhatsapp className="text-lg" />
                                    <a
                                        href="https://wa.me/6281231242277"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +62 812-3124-2277
                                    </a>
                                </div>

                            </div>
                        </div>

                        {/* SOCIAL MEDIA */}
                        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
                            <h2 className="text-xl font-semibold mb-3">Social Media</h2>

                            <div className="flex gap-4 text-2xl">
                                <a href="https://github.com/FalleryFT" className="hover:text-blue-500">
                                    <FaGithub />
                                </a>
                                <a href="https://www.instagram.com/kemiskinan_uang_?igsh=Z2MxeWljOHk0aGZp" className="hover:text-pink-500">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.linkedin.com/in/fahmi-ramadhan-02b08237a?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:text-blue-400">
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;