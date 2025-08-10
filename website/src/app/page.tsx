import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VC</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">VibeCoding</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#tentang" className="text-gray-600 hover:text-green-600 transition-colors">
              Tentang
            </Link>
            <Link href="#testimonial" className="text-gray-600 hover:text-green-600 transition-colors">
              Testimoni
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Belajar Membuat Aplikasi dengan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              AI sebagai Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Platform pembelajaran interaktif untuk pemula yang ingin menguasai AI-first development. 
            Ubah ide menjadi produk nyata dalam hitungan hari, tanpa harus jadi programmer senior dulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/dashboard"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              🚀 Mulai Belajar Gratis
            </Link>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-green-600 hover:text-green-600 transition-colors">
              📹 Lihat Demo
            </button>
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa VibeCoding Berbeda?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami percaya setiap orang bisa menjadi product builder di era AI. 
              Yang Anda butuhkan hanya mindset yang tepat dan panduan yang jelas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-green-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🤝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI sebagai Partner</h3>
              <p className="text-gray-600">
                Belajar menggunakan AI sebagai reviewer, mentor, dan teammate yang membantu 
                Anda membangun produk tanpa harus menguasai semua aspek teknis.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-blue-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Praktis & Cepat</h3>
              <p className="text-gray-600">
                Fokus pada membangun produk nyata, bukan teori yang rumit. 
                Dari ide ke MVP dalam hitungan hari, bukan bulan.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                📱
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile-First</h3>
              <p className="text-gray-600">
                Belajar kapan saja, di mana saja. Platform kami dioptimalkan 
                untuk pengalaman terbaik di smartphone Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Section */}
      <section id="testimonial" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata Mereka yang Sudah Belajar?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mr-4">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rudi Santoso</h4>
                  <p className="text-gray-600 text-sm">Pemilik Warung Online</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Dalam 2 minggu, saya berhasil buat aplikasi kasir digital untuk warung. 
                AI benar-benar membantu saya yang ga ada background IT sama sekali!&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sari Dewi</h4>
                  <p className="text-gray-600 text-sm">Freelancer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Dulu takut sama coding, sekarang malah jadi sumber penghasilan utama. 
                Terima kasih VibeCoding sudah buka jalan baru untuk saya!&rdquo;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Ahmad Pratama</h4>
                  <p className="text-gray-600 text-sm">Mahasiswa</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;Materi mudah dipahami, praktik langsung, dan mentor AI yang siap bantu 24/7. 
                Perfect untuk yang mau cepat bisa bikin aplikasi!&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Apakah saya perlu background IT untuk belajar di sini?
              </h3>
              <p className="text-gray-600">
                Tidak sama sekali! VibeCoding dirancang khusus untuk pemula yang tidak memiliki background teknis. 
                Kami mengajarkan cara berkomunikasi dengan AI untuk membantu Anda membangun produk.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Berapa lama waktu yang dibutuhkan untuk menyelesaikan program?
              </h3>
              <p className="text-gray-600">
                Program terdiri dari 2 modul utama yang bisa diselesaikan dalam 2-4 minggu, 
                tergantung kecepatan belajar Anda. Setiap modul memiliki estimasi waktu yang jelas.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Apakah materi pembelajaran gratis?
              </h3>
              <p className="text-gray-600">
                Ya! Semua materi pembelajaran kami gratis. Kami percaya pendidikan berkualitas 
                harus dapat diakses oleh semua orang di Indonesia.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Setelah belajar, saya bisa buat aplikasi seperti apa?
              </h3>
              <p className="text-gray-600">
                Anda akan bisa membuat berbagai aplikasi seperti sistem kasir digital, 
                website personal, aplikasi tracking, chatbot customer service, dan banyak lagi!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan AI-First Development?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Bergabunglah dengan ribuan product builder Indonesia yang sudah memulai perjalanan mereka
          </p>
          <Link 
            href="/dashboard"
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 inline-block"
          >
            🚀 Mulai Sekarang - Gratis!
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">VC</span>
                </div>
                <h3 className="text-xl font-bold">VibeCoding</h3>
              </div>
              <p className="text-gray-400">
                Platform pembelajaran AI-first development untuk Indonesia
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Pembelajaran</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/modul1" className="hover:text-white transition-colors">Modul 1: Fondasi AI</Link></li>
                <li><Link href="/modul2" className="hover:text-white transition-colors">Modul 2: Komunikasi AI</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Komunitas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bantuan</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VibeCoding. Dibuat dengan ❤️ untuk Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
