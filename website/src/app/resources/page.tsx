import Link from "next/link";

export default function Resources() {
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
              <Link href="/community" className="text-gray-600 hover:text-green-600 transition-colors">
                Komunitas
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">📚 Resource Library</h1>
          <p className="text-lg text-gray-600">
            Kumpulan tools, templates, dan referensi untuk mendukung pembelajaran AI-first development Anda.
          </p>
        </div>

        {/* Tools Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">🛠️ Tools Essentials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cursor IDE</h3>
              <p className="text-sm text-gray-600 mb-3">AI coding environment terbaik untuk pemula</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">$20/bulan</span>
                <a href="https://cursor.sh" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Replit</h3>
              <p className="text-sm text-gray-600 mb-3">Browser-based development environment</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Gratis</span>
                <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">v0 by Vercel</h3>
              <p className="text-sm text-gray-600 mb-3">AI-powered UI component generator</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Freemium</span>
                <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">ChatGPT Plus</h3>
              <p className="text-sm text-gray-600 mb-3">AI assistant terpercaya untuk coding</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">$20/bulan</span>
                <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Bubble</h3>
              <p className="text-sm text-gray-600 mb-3">No-code web app builder</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Freemium</span>
                <a href="https://bubble.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Supabase</h3>
              <p className="text-sm text-gray-600 mb-3">Backend-as-a-Service untuk database</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Freemium</span>
                <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">
                  Kunjungi →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">📖 Learning Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">No Code MBA</h3>
              <p className="text-sm text-gray-600 mb-3">Comprehensive no-code education platform</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Pelajari Lebih Lanjut →</a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Indie Hackers</h3>
              <p className="text-sm text-gray-600 mb-3">Solo founder community dan case studies</p>
              <a href="https://indiehackers.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">Kunjungi →</a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Product Hunt</h3>
              <p className="text-sm text-gray-600 mb-3">Platform untuk launch produk baru</p>
              <a href="https://producthunt.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">Kunjungi →</a>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">GitHub</h3>
              <p className="text-sm text-gray-600 mb-3">Repository kode dan kolaborasi developer</p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm">Kunjungi →</a>
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">📝 Template Collection</h2>
          <p className="text-gray-600 mb-6">Coming soon! Koleksi template lengkap untuk berbagai kebutuhan development.</p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">PRD Templates</h4>
              <p className="text-sm text-gray-600">Template untuk Product Requirements Document</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-gray-900 mb-2">Prompt Library</h4>
              <p className="text-sm text-gray-600">Kumpulan prompt engineering yang terbukti efektif</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Code Snippets</h4>
              <p className="text-sm text-gray-600">Potongan kode siap pakai untuk berbagai fungsi</p>
            </div>
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