"use client";

import Link from "next/link";
import { useState } from "react";

interface Module {
  id: string;
  title: string;
  description: string;
  estimatedTime: string;
  progress: number;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  completed: boolean;
  timeEstimate: string;
}

export default function Dashboard() {
  const [modules] = useState<Module[]>([
    {
      id: "modul1",
      title: "Modul 1: Fondasi & Mindset AI-First Development",
      description: "Pelajari mindset product builder dan cara berkolaborasi dengan AI untuk mengembangkan produk digital",
      estimatedTime: "3-4 jam",
      progress: 0,
      sections: [
        { id: "mindset", title: "Mindset Product Builder", completed: false, timeEstimate: "45 menit" },
        { id: "build-to-learn", title: "Build-to-Learn vs Build-to-Ship", completed: false, timeEstimate: "30 menit" },
        { id: "ai-collaboration", title: "AI sebagai Reviewer, Mentor, dan Teammate", completed: false, timeEstimate: "45 menit" },
        { id: "practice", title: "Hands-on Practice Projects", completed: false, timeEstimate: "2 jam" }
      ]
    },
    {
      id: "modul2", 
      title: "Modul 2: Seni Berkomunikasi dengan AI",
      description: "Kuasai teknik komunikasi dengan AI untuk membuat SaaS dan aplikasi yang powerful",
      estimatedTime: "4-5 jam",
      progress: 0,
      sections: [
        { id: "prd-writing", title: "Menulis PRD dengan AI", completed: false, timeEstimate: "45 menit" },
        { id: "feature-breakdown", title: "Memecah Fitur Besar", completed: false, timeEstimate: "30 menit" },
        { id: "prompt-engineering", title: "Prompt Engineering untuk Coding", completed: false, timeEstimate: "60 menit" },
        { id: "templates", title: "Template Library", completed: false, timeEstimate: "30 menit" },
        { id: "warungku-project", title: "Project WarungKu", completed: false, timeEstimate: "2 jam" }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">VibeCoding</h1>
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link href="/search" className="text-gray-600 hover:text-green-600 transition-colors">
                🔍 Cari
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-green-600 transition-colors">
                Resources
              </Link>
              <Link href="/community" className="text-gray-600 hover:text-green-600 transition-colors">
                Komunitas
              </Link>
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center">
                U
              </div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Selamat Datang di VibeCoding! 👋
          </h1>
          <p className="text-lg text-gray-600">
            Mulai perjalanan Anda menjadi AI-first developer. Pilih modul di bawah untuk memulai belajar.
          </p>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Keseluruhan</h2>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>0% (0/2 modul selesai)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full" style={{width: "0%"}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Jam Belajar</div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {module.description}
                    </p>
                  </div>
                  <div className="ml-4 text-center">
                    <div className="text-sm text-gray-500 mb-1">Estimasi</div>
                    <div className="text-sm font-semibold text-green-600">{module.estimatedTime}</div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-500" 
                      style={{width: `${module.progress}%`}}
                    ></div>
                  </div>
                </div>

                {/* Sections */}
                <div className="space-y-2 mb-6">
                  {module.sections.map((section) => (
                    <div key={section.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          section.completed 
                            ? 'bg-green-600 border-green-600 text-white' 
                            : 'border-gray-300'
                        }`}>
                          {section.completed && (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className={`${section.completed ? 'text-gray-900 line-through' : 'text-gray-700'}`}>
                          {section.title}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{section.timeEstimate}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Link 
                  href={`/${module.id}`}
                  className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {module.progress === 0 ? '🚀 Mulai Belajar' : '📚 Lanjutkan Belajar'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Aksi Cepat</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/search"
              className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Cari Materi</h3>
              <p className="text-sm text-gray-600">Search konten pembelajaran</p>
            </Link>
            
            <Link 
              href="/resources"
              className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Resource Library</h3>
              <p className="text-sm text-gray-600">Tools, templates, dan referensi</p>
            </Link>
            
            <Link 
              href="/community"
              className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Gabung Komunitas</h3>
              <p className="text-sm text-gray-600">Discord dan Telegram VibeCoding</p>
            </Link>
            
            <Link 
              href="/help"
              className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all group"
            >
              <div className="text-2xl mb-2">❓</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Butuh Bantuan?</h3>
              <p className="text-sm text-gray-600">FAQ dan panduan troubleshooting</p>
            </Link>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">💡 Tips Belajar Efektif</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Luangkan waktu 30-60 menit setiap hari untuk konsistensi belajar</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Praktikkan langsung setiap project mini yang diberikan</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Jangan ragu bertanya di komunitas jika mengalami kesulitan</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-600 mt-1">•</span>
              <span>Focus pada understanding, bukan sekadar menyelesaikan checklist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}