import Link from "next/link";

export default function Community() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">VibeCoding</h1>
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                Dashboard
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-green-600 transition-colors">
                Resources
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">👥 Komunitas VibeCoding</h1>
          <p className="text-lg text-gray-600">
            Bergabunglah dengan ribuan AI-first developers Indonesia dan mulai membangun network Anda!
          </p>
        </div>

        {/* Community Platforms */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white text-xl">
                💬
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Discord Community</h2>
                <p className="text-gray-600">Real-time chat dan diskusi teknis</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Channel khusus untuk setiap modul pembelajaran</li>
              <li>• Q&A langsung dengan mentor dan sesama learner</li>
              <li>• Showcase project dan minta feedback</li>
              <li>• Event coding session dan workshop</li>
            </ul>
            <a 
              href="#" 
              className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              🚀 Join Discord Server
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                📱
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Telegram Group</h2>
                <p className="text-gray-600">Mobile-friendly untuk update cepat</p>
              </div>
            </div>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>• Update terbaru tentang tools dan trends AI</li>
              <li>• Share artikel dan resources berguna</li>
              <li>• Quick help untuk troubleshooting</li>
              <li>• Networking dengan product builders Indonesia</li>
            </ul>
            <a 
              href="#" 
              className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              📱 Join Telegram Group
            </a>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">📋 Community Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-green-600 mb-3">✅ Yang Dianjurkan:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bertanya dengan jelas dan spesifik</li>
                <li>• Share project dan minta feedback konstruktif</li>
                <li>• Bantu sesama member yang mengalami kesulitan</li>
                <li>• Gunakan thread/channel yang sesuai topik</li>
                <li>• Saling support dan celebrate keberhasilan</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">❌ Yang Tidak Diperbolehkan:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Spam atau self-promotion berlebihan</li>
                <li>• Minta bantuan tanpa usaha sendiri dulu</li>
                <li>• Share konten yang tidak relevan</li>
                <li>• Bahasa yang tidak sopan atau offensive</li>
                <li>• Share informasi personal atau rahasia</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">🌟 Success Stories dari Komunitas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Rizki</h4>
                  <p className="text-sm text-gray-600">Solo Founder</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                &ldquo;Dari join komunitas sampai launch SaaS pertama cuma butuh 3 bulan. 
                Support dari teman-teman di Discord luar biasa!&rdquo;
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Andi</h4>
                  <p className="text-sm text-gray-600">Freelancer</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                &ldquo;Networking di Telegram ngebantu banget dapat client baru. 
                Sekarang income dari coding AI udah 2x lipat!&rdquo;
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sari</h4>
                  <p className="text-sm text-gray-600">Career Switcher</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                &ldquo;Dari background accounting jadi product builder dalam 6 bulan. 
                Mentorship dari senior members sangat membantu!&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Events & Activities */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">🗓️ Events & Activities</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Weekly AI Tools Review</h3>
                  <p className="text-gray-600">Setiap Jumat, 19:00 WIB</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">Live di Discord</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Monthly Showcase</h3>
                  <p className="text-gray-600">Setiap minggu terakhir bulan</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm">Hybrid Event</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Coding Workshop</h3>
                  <p className="text-gray-600">Project-based learning session</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Siap Bergabung dengan Komunitas?</h2>
          <p className="text-green-100 mb-6">
            Mulai journey AI-first development Anda bersama ribuan product builder Indonesia lainnya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              🚀 Join Discord Sekarang
            </a>
            <a 
              href="#" 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all"
            >
              📱 Join Telegram Group
            </a>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
}