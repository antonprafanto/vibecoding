"use client";

import Link from "next/link";
import { useState } from "react";

interface LearningObjective {
  id: string;
  text: string;
  completed: boolean;
}

export default function Modul1() {
  const [objectives, setObjectives] = useState<LearningObjective[]>([
    { id: "1", text: "Memahami peran AI sebagai partner pengembangan, bukan sekadar alat bantu", completed: false },
    { id: "2", text: "Menentukan kapan sebaiknya fokus belajar versus kapan langsung meluncurkan produk", completed: false },
    { id: "3", text: "Menggunakan AI untuk review kode, mentoring, dan kolaborasi pengembangan", completed: false },
    { id: "4", text: "Mengenali tools dan platform terbaru untuk pengembangan solo dengan AI", completed: false },
    { id: "5", text: "Membangun mindset product builder yang efektif di era AI", completed: false }
  ]);

  const toggleObjective = (id: string) => {
    setObjectives(prev => 
      prev.map(obj => 
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      )
    );
  };

  const completedCount = objectives.filter(obj => obj.completed).length;
  const progressPercentage = (completedCount / objectives.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
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
                ← Dashboard
              </Link>
              <Link href="/modul2" className="text-gray-600 hover:text-green-600 transition-colors">
                Modul 2 →
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
            <Link href="/dashboard" className="hover:text-green-600">Dashboard</Link>
            <span>/</span>
            <span className="text-green-600">Modul 1</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🚀 Modul 1: Fondasi & Mindset AI-First Development
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Selamat datang di era baru pengembangan produk digital! Modul ini akan mengubah cara Anda memandang 
            pembuatan aplikasi dan website - dari yang tadinya rumit dan butuh bertahun-tahun belajar coding, 
            menjadi sesuatu yang bisa Anda kuasai dalam hitungan hari dengan bantuan AI.
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Modul 1</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Learning Objectives</span>
                <span>{completedCount}/{objectives.length} selesai</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full transition-all duration-500" 
                  style={{width: `${progressPercentage}%`}}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-gray-600">Selesai</div>
            </div>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">🎯 Learning Objectives</h2>
          <p className="text-gray-600 mb-6">
            Setelah menyelesaikan modul ini, Anda akan mampu:
          </p>
          <div className="space-y-3">
            {objectives.map((objective) => (
              <div 
                key={objective.id} 
                className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 hover:border-green-300 transition-colors cursor-pointer"
                onClick={() => toggleObjective(objective.id)}
              >
                <div className={`w-6 h-6 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  objective.completed 
                    ? 'bg-green-600 border-green-600 text-white' 
                    : 'border-gray-300 hover:border-green-600'
                }`}>
                  {objective.completed && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <span className={`${objective.completed ? 'text-gray-900 line-through' : 'text-gray-700'} flex-1`}>
                  {objective.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Module Sections */}
        <div className="space-y-6">
          {/* Mindset Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                🧠 Mindset Product Builder: AI sebagai Co-creator
                <span className="ml-3 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">45 menit</span>
              </h2>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Konsep Dasar</h3>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Mari kita mulai dengan mengubah mindset fundamental. Selama ini, banyak orang berpikir bahwa 
                  untuk membuat aplikasi atau website, mereka harus jadi &ldquo;programmer&rdquo; terlebih dahulu - menghabiskan 
                  bertahun-tahun belajar bahasa pemrograman yang rumit. Tapi di tahun 2025, realitasnya sudah berubah total.
                </p>
                <p>
                  Pikirkan AI seperti asisten super pintar yang bisa berbahasa Indonesia. Alih-alih Anda harus belajar 
                  &ldquo;bahasa mesin&rdquo; yang rumit, sekarang Anda cukup menjelaskan keinginan Anda dalam bahasa sehari-hari, 
                  dan AI akan menerjemahkannya menjadi kode yang berfungsi.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
                  <h4 className="font-semibold text-blue-900 mb-2">Perubahan Paradigma:</h4>
                  <ul className="space-y-1 text-blue-800">
                    <li><strong>Dulu:</strong> Coder → Menulis kode → Membuat produk</li>
                    <li><strong>Sekarang:</strong> Product Builder → Menjelaskan ide ke AI → AI membantu wujudkan → Produk jadi</li>
                  </ul>
                </div>
              </div>
              <Link 
                href="/modul1/mindset"
                className="inline-block mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                📖 Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Build to Learn Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                🎯 Build-to-Learn vs Build-to-Ship
                <span className="ml-3 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">30 menit</span>
              </h2>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Konsep Dasar</h3>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Ini adalah dilema klasik entrepreneur: kapan saya harus berhenti belajar dan mulai membuat produk nyata? 
                  Atau sebaliknya, kapan saya harus berhenti berkutat dengan produk dan fokus belajar dulu?
                </p>
                <p>
                  Analoginya seperti belajar masak. Ada kalanya Anda perlu eksperimen di dapur (build-to-learn), 
                  tapi ada kalanya Anda harus masak untuk tamu yang sudah datang (build-to-ship).
                </p>
              </div>
              <Link 
                href="/modul1/build-to-learn"
                className="inline-block mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                📖 Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* AI Collaboration Section */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                💬 AI sebagai Reviewer, Mentor, dan Teammate
                <span className="ml-3 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">45 menit</span>
              </h2>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Konsep Dasar</h3>
              <div className="prose max-w-none text-gray-700 space-y-4">
                <p>
                  Bayangkan punya 3 orang dalam tim Anda:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li><strong>Senior Developer</strong> yang review kode Anda 24/7</li>
                  <li><strong>Mentor berpengalaman</strong> yang selalu siap ajarin hal baru</li>
                  <li><strong>Teammate setia</strong> yang bantuin coding non-stop</li>
                </ol>
                <p>
                  Nah, AI modern bisa jadi ketiganya sekaligus. Tapi seperti kolaborasi dengan manusia, 
                  Anda perlu tahu cara berkomunikasi yang efektif dengan AI supaya hasilnya maksimal.
                </p>
              </div>
              <Link 
                href="/modul1/ai-collaboration"
                className="inline-block mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                📖 Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>

          {/* Practice Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-green-200">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                🧪 Hands-on Practice Projects
                <span className="ml-3 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">2 jam</span>
              </h2>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">🔨 Project Mini yang Akan Dikerjakan:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">1. Recipe Generator dengan AI</h4>
                  <p className="text-sm text-gray-600 mb-2">Buat aplikasi yang generate resep dari bahan yang tersedia</p>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">45 menit</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">2. Personal Website Builder</h4>
                  <p className="text-sm text-gray-600 mb-2">Buat landing page personal dengan v0</p>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">30 menit</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">3. Smart Expense Tracker</h4>
                  <p className="text-sm text-gray-600 mb-2">Tracker pengeluaran dengan kategorisasi otomatis</p>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">60 menit</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-gray-900 mb-2">4. Chatbot Customer Service</h4>
                  <p className="text-sm text-gray-600 mb-2">Chatbot sederhana untuk menjawab FAQ</p>
                  <span className="text-xs text-indigo-600 bg-indigo-100 px-2 py-1 rounded">45 menit</span>
                </div>
              </div>
              <Link 
                href="/modul1/practice"
                className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
              >
                🚀 Mulai Praktik
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/dashboard"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Dashboard</span>
          </Link>
          
          <Link 
            href="/modul2"
            className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            <span>Lanjut ke Modul 2</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}