
export const modules = [
    {
        id: "intro",
        title: "🌊 Pengantar",
        content: {
            heading: "Panduan Vibe Coding: Dari Awam Jadi Paham",
            subheading: "Coding itu bukan tentang mengetik bahasa alien, tapi tentang memecahkan masalah.",
            body: [
                {
                    type: "typewriter",
                    text: "Selamat datang di era baru pemrograman. Panduan ini akan membawa Anda dari nol hingga bisa membuat aplikasi sendiri dengan bantuan AI."
                }
            ]
        }
    },
    {
        id: "bab1",
        title: "👋 Bab 1: Apa Itu Vibe Coding?",
        content: {
            heading: "Apa Itu \"Vibe Coding\"?",
            body: [
                {
                    type: "text",
                    text: "Bayangkan Anda adalah seorang **Arsitek**, dan komputer (AI) adalah **Tukang Bangunan Super Canggih**."
                },
                {
                    type: "comparison",
                    left: {
                        title: "Masa Lalu (Coding Tradisional)",
                        text: "Arsitek harus ikut menyusun bata, mengaduk semen, dan memastikan setiap paku terpasang lurus. Jika salah satu titik koma hilang, rumahnya roboh (program error). Sangat melelahkan dan butuh hafalan kuat."
                    },
                    right: {
                        title: "Vibe Coding (Masa Depan)",
                        text: "Anda (Arsitek) fokus pada ide & rasa (Vibe). 'Saya ingin rumah nuansa Bali, kolam renang di kiri, tembok putih bersih.' AI (Tukang) menulis kode rumit, menyusun bata, dan mengecat tembok dalam hitungan detik."
                    }
                },
                {
                    type: "highlight",
                    text: "Intinya: Vibe coding adalah membuat aplikasi/web dengan cara \"mengobrol\" dengan AI, tanpa pusing menghafal rumus kode."
                }
            ]
        }
    },
    {
        id: "bab2",
        title: "🧠 Bab 2: Mindset",
        content: {
            heading: "Mindset (Pola Pikir Baru)",
            body: [
                {
                    type: "text",
                    text: "Lupakan mitos bahwa coding itu harus pintar matematika atau lulusan IT."
                },
                {
                    type: "list",
                    items: [
                        {
                            title: "Bahasa Manusia adalah Kunci",
                            text: "Skill utama Anda bukan bahasa C++ atau Python, tapi Bahasa Indonesia yang jelas untuk memberi perintah."
                        },
                        {
                            title: "Jadilah Bos yang Cerewet",
                            text: "AI itu pintar tapi polos. Kalau Anda tidak bilang 'tombolnya warna merah', dia mungkin membuatnya warna abu-abu. Komplainlah sampai hasilnya sesuai keinginan."
                        },
                        {
                            title: "Error itu Teman",
                            text: "Di Vibe Coding, kalau ada error, jangan panik. Cukup lapor ke AI: 'Eh, kok tombolnya gak bisa diklik? Perbaiki dong,' dan dia akan membereskannya."
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "bab3",
        title: "🛠️ Bab 3: Alat Perang",
        content: {
            heading: "Alat Perang (Bengkel Profesional)",
            body: [
                {
                    type: "text",
                    text: "Kita langsung gunakan alat standar industri, tapi dengan cara yang santai."
                },
                {
                    type: "tools",
                    items: [
                        {
                            name: "Otak Utama (AI Chatbot)",
                            desc: "Gunakan Gemini, ChatGPT, atau Claude.",
                            icon: "🧠"
                        },
                        {
                            name: "Bengkel Kode (Code Editor)",
                            desc: "Visual Studio Code (VS Code). Ini adalah aplikasi wajib.",
                            link: "https://code.visualstudio.com",
                            icon: "💻"
                        },
                        {
                            name: "Penampil (Browser)",
                            desc: "Google Chrome, Edge, atau Safari.",
                            icon: "🌐"
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "bab4",
        title: "🚀 Bab 4: Rumus Ajaib",
        content: {
            heading: "Cara Kerja & Rumus Ajaib",
            body: [
                {
                    type: "step",
                    steps: ["Ide", "Prompt", "Simpan", "Review"]
                },
                {
                    type: "text",
                    text: "Agar AI langsung paham, gunakan **Rumus Prompt** ini saat memberi perintah:"
                },
                {
                    type: "formula",
                    formula: "[PERAN] + [TUJUAN] + [DETAIL TAMPILAN] + [FITUR KHUSUS]"
                },
                {
                    type: "example",
                    title: "Contoh Penerapan",
                    items: [
                        { label: "Peran", text: "Bertindaklah sebagai ahli pembuat web." },
                        { label: "Tujuan", text: "Buatkan saya satu file HTML lengkap untuk Kartu Ucapan Ulang Tahun." },
                        { label: "Detail", text: "Latar belakang warna pastel cerah, font yang lucu dan besar." },
                        { label: "Fitur", text: "Ada animasi balon bergerak naik ke atas dan musik selamat ulang tahun kalau bisa." }
                    ]
                }
            ]
        }
    },
    {
        id: "bab5",
        title: "💻 Bab 5: VS Code & CLI",
        content: {
            heading: "Level Up - Visual Studio Code & Gemini CLI",
            body: [
                {
                    type: "text",
                    text: "Selamat datang di cara kerja yang lebih efisien! Kita akan menggunakan Gemini CLI (Command Line Interface)."
                },
                {
                    type: "section",
                    title: "Persiapan Alat",
                    items: [
                        "Install VS Code",
                        "Install Node.js (nodejs.org)",
                        "Install Gemini CLI: npm install -g gemini-chat-cli"
                    ]
                },
                {
                    type: "tutorial",
                    title: "Langkah Praktis: Membuat 'Tombol Semangat'",
                    steps: [
                        { title: "Buka Bengkel", text: "Buka VS Code. Buat folder baru." },
                        { title: "Buka Ruang Mesin", text: "Terminal > New Terminal." },
                        { title: "Panggil Jin AI", text: "Ketik 'gemini' di terminal." },
                        { title: "Ketik Mantra", text: "Ketik prompt: 'Buatkan satu file HTML bernama index.html...'" },
                        { title: "Lihat Keajaiban", text: "File index.html otomatis dibuat." },
                        { title: "Preview", text: "Buka file index.html di browser." }
                    ]
                }
            ]
        }
    },
    {
        id: "bab6",
        title: "🚑 Bab 6: P3K",
        content: {
            heading: "Kotak P3K (Pertolongan Pertama)",
            body: [
                {
                    type: "troubleshoot",
                    items: [
                        {
                            problem: "\"Command not found\" saat mengetik 'gemini'",
                            cause: "Instalasi Node.js atau CLI belum sukses.",
                            solution: "Restart laptop Anda, lalu coba install ulang Node.js."
                        },
                        {
                            problem: "\"Error: API Key missing\"",
                            cause: "Belum memasukkan kunci akses Google.",
                            solution: "Dapatkan API Key dari Google AI Studio. Export GEMINI_API_KEY=\"kunci_anda\"."
                        },
                        {
                            problem: "\"Tampilannya tidak sesuai bayangan\"",
                            solution: "Jangan tutup terminal! Ketik revisi: \"Tolong ganti warnanya jadi merah...\""
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "bab7",
        title: "🎯 Bab 7: Bank Ide",
        content: {
            heading: "Bank Ide Project (10 Studi Kasus)",
            body: [
                {
                    type: "text",
                    text: "Koleksi ide prompt untuk latihan. Copy-paste ke terminal gemini Anda!"
                },
                {
                    type: "projects",
                    items: [
                        {
                            title: "Generator Nama Bayi",
                            desc: "Input jenis kelamin, keluar 5 nama bayi modern.",
                            prompt: "Buat file nama_bayi.html. Tampilan minimalis putih bersih. Ada input untuk memilih jenis kelamin (L/P) dan tombol 'Cari Nama'. Saat diklik, berikan 5 ide nama bayi modern beserta artinya secara acak.",
                            previewType: "name_generator"
                        },
                        {
                            title: "Microstocker Tools",
                            desc: "Aplikasi merapikan tags/kata kunci foto.",
                            prompt: "Buatkan saya aplikasi web satu file bernama 'StockTagHelper.html'. Fitur: 1. Textarea untuk tags berantakan. 2. Tombol 'Rapikan Tags' (hapus duplikat, tambah koma, huruf kecil). 3. Tombol 'Copy to Clipboard'."
                        },
                        {
                            title: "Generator Invoice",
                            desc: "Pembuat nota otomatis untuk UMKM.",
                            prompt: "Buatkan file invoice.html. Fitur: Input Nama, Tanggal. Tabel Barang (Nama, Harga, Jumlah). Hitung Total. Tombol Print.",
                            previewType: "invoice"
                        },
                        {
                            title: "Timer Pomodoro",
                            desc: "Alat fokus kerja 25 menit.",
                            prompt: "Buatkan file pomodoro.html. Timer hitung mundur 25 menit. Tombol Mulai/Pause/Reset. Suara beep saat selesai. Desain Lo-Fi.",
                            previewType: "pomodoro"
                        },
                        {
                            title: "Pencatat Pengeluaran",
                            desc: "Catat uang keluar, simpan di LocalStorage.",
                            prompt: "Buat file dompet.html. Input: Tanggal, Ket, Nominal. Tabel Riwayat. Simpan di LocalStorage. Tampilkan Total."
                        },
                        {
                            title: "Kuis Bahasa Inggris",
                            desc: "Flashcard interaktif.",
                            prompt: "Buat file kuis.html. Flashcard: Klik untuk balik (Indo -> Inggris). Tombol Lanjut. Skor benar/salah. Desain ceria."
                        },
                        {
                            title: "Kalkulator BMI",
                            desc: "Hitung berat badan ideal.",
                            prompt: "Buat file bmi.html. Input Berat & Tinggi. Hitung BMI & Status. Visual warna (Hijau/Merah) sesuai hasil.",
                            previewType: "bmi"
                        },
                        {
                            title: "Generator Password",
                            desc: "Alat keamanan digital.",
                            prompt: "Buat file password.html. Slider panjang password. Checkbox Angka/Simbol. Tombol Generate & Copy. Desain Hacker (Dark Mode).",
                            previewType: "password"
                        },
                        {
                            title: "Game Tebak Angka",
                            desc: "Game logika sederhana.",
                            prompt: "Buat file game_tebak.html. Komputer pilih angka 1-100. User menebak. Clue: Terlalu Besar/Kecil. Efek konfeti jika menang."
                        },
                        {
                            title: "Digital Mood Board",
                            desc: "Papan visi interaktif.",
                            prompt: "Buat file moodboard.html. Kanvas kosong. Tombol Upload Gambar. Gambar bisa di-drag & drop. Double click untuk hapus.",
                            previewType: "moodboard"
                        }
                    ]
                }
            ]
        }
    },
    {
        id: "kamus",
        title: "📖 Kamus & Tips",
        content: {
            heading: "Kamus Saku & Tips",
            body: [
                {
                    type: "dictionary",
                    items: [
                        { term: "VS Code", def: "\"Dapur\" utama tempat kita meracik kode." },
                        { term: "Terminal", def: "Jalur cepat untuk memerintah komputer dengan teks." },
                        { term: "CLI", def: "Antarmuka berbasis teks (layar hitam)." },
                        { term: "Interactive Mode", def: "Mode chatting timbal balik dengan AI di terminal." },
                        { term: "LocalStorage", def: "Cara menyimpan data sederhana di browser." }
                    ]
                },
                {
                    type: "highlight",
                    text: "Tips: Jangan takut salah ketik di terminal. Kalau error, tinggal tanya lagi ke AI."
                },
                {
                    type: "cta",
                    link: "https://chat.whatsapp.com/IHxEchMccQB6q60xDtsXs0"
                }
            ]
        }
    }
];
