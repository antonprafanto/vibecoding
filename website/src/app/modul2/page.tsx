"use client";

import Link from "next/link";
import { useState } from "react";

interface LearningObjective {
  id: string;
  text: string;
  completed: boolean;
}

interface ModuleSection {
  id: string;
  title: string;
  description: string;
  timeEstimate: string;
  completed: boolean;
}

export default function Modul2() {
  const [objectives, setObjectives] = useState<LearningObjective[]>([
    { id: "1", text: "Menulis dokumen rencana produk (PRD) dengan bantuan AI seperti seorang product manager berpengalaman", completed: false },
    { id: "2", text: "Memecah fitur besar menjadi tugas-tugas kecil yang mudah dikerjakan", completed: false },
    { id: "3", text: "Berkomunikasi dengan AI menggunakan teknik-teknik yang terbukti efektif", completed: false },
    { id: "4", text: "Membuat template percakapan yang bisa dipakai berulang kali", completed: false },
    { id: "5", text: "Menghubungkan berbagai AI tools untuk bekerja sama secara otomatis", completed: false }
  ]);

  const [sections, setSections] = useState<ModuleSection[]>([
    {
      id: "prd-writing",
      title: "Menulis Rencana Produk dengan AI (PRD)",
      description: "Pelajari cara membuat Product Requirements Document dengan bantuan AI",
      timeEstimate: "45 menit",
      completed: false
    },
    {
      id: "feature-breakdown", 
      title: "Memecah Fitur Besar Menjadi Tugas Kecil",
      description: "Teknik memecah fitur kompleks menjadi langkah-langkah yang mudah dikerjakan",
      timeEstimate: "30 menit",
      completed: false
    },
    {
      id: "prompt-engineering",
      title: "Teknik Dasar Prompt Engineering untuk Coding", 
      description: "Cara berkomunikasi efektif dengan AI untuk mendapatkan kode yang berkualitas",
      timeEstimate: "60 menit",
      completed: false
    },
    {
      id: "templates",
      title: "Template Library & Advanced Techniques",
      description: "Kumpulan template prompt dan teknik lanjutan untuk berbagai kebutuhan",
      timeEstimate: "30 menit", 
      completed: false
    },
    {
      id: "warungku-project",
      title: "Project WarungKu: Hands-on Practice",
      description: "Implementasi lengkap aplikasi kasir digital dari awal sampai selesai",
      timeEstimate: "2 jam",
      completed: false
    }
  ]);

  const toggleObjective = (id: string) => {
    setObjectives(prev => 
      prev.map(obj => 
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      )
    );
  };

  const toggleSection = (id: string) => {
    setSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, completed: !section.completed } : section
      )
    );
  };

  const completedObjectives = objectives.filter(obj => obj.completed).length;
  const completedSections = sections.filter(section => section.completed).length;
  const overallProgress = ((completedObjectives + completedSections) / (objectives.length + sections.length)) * 100;

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
              <Link href="/modul1" className="text-gray-600 hover:text-green-600 transition-colors">
                ← Modul 1
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                Dashboard
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
            <span className="text-green-600">Modul 2</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💬 Modul 2: Seni Berkomunikasi dengan AI untuk Membuat SaaS
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bayangkan AI sebagai asisten super pintar yang bisa membantu Anda membuat aplikasi dan website. 
            Tapi seperti halnya berkomunikasi dengan manusia, cara Anda berbicara dengan AI sangat menentukan 
            seberapa bagus hasil yang akan Anda dapatkan.
          </p>
        </div>

        {/* Progress Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Modul 2</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Learning Objectives</span>
                <span>{completedObjectives}/{objectives.length} selesai</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full transition-all duration-500" 
                  style={{width: `${(completedObjectives / objectives.length) * 100}%`}}
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Materi Selesai</span>
                <span>{completedSections}/{sections.length} bagian</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full transition-all duration-500" 
                  style={{width: `${(completedSections / sections.length) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <div className="text-2xl font-bold text-green-600">{Math.round(overallProgress)}%</div>
            <div className="text-sm text-gray-600">Progress Keseluruhan</div>
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
          {sections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                    {`${index + 1}. ${section.title}`}
                    <span className="ml-3 text-sm text-gray-500 bg-green-100 px-2 py-1 rounded">
                      {section.timeEstimate}
                    </span>
                  </h2>
                  <div 
                    className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer transition-colors ${
                      section.completed 
                        ? 'bg-green-600 border-green-600 text-white' 
                        : 'border-gray-300 hover:border-green-600'
                    }`}
                    onClick={() => toggleSection(section.id)}
                  >
                    {section.completed && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{section.description}</p>
                
                {/* Section specific preview content */}
                {section.id === "prd-writing" && (
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Yang Akan Dipelajari:</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• Apa itu PRD dan mengapa penting untuk pemula</li>
                      <li>• Template percakapan dengan AI untuk membuat PRD</li>
                      <li>• Contoh nyata: PRD untuk aplikasi kasir digital</li>
                    </ul>
                  </div>
                )}

                {section.id === "feature-breakdown" && (
                  <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Teknik yang Dipelajari:</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Memecah fitur dengan perspektif pengguna</li>
                      <li>• Framework SPADE untuk keputusan teknis</li>
                      <li>• Contoh: Memecah &ldquo;Sistem Login&rdquo; menjadi langkah kecil</li>
                    </ul>
                  </div>
                )}

                {section.id === "warungku-project" && (
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-600 p-4 mb-4">
                    <h4 className="font-semibold text-green-900 mb-2">Project Komprehensif:</h4>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>🏪 Aplikasi kasir digital untuk warung kecil</li>
                      <li>📱 Responsive design untuk mobile dan desktop</li>
                      <li>💾 Database sederhana untuk menyimpan data</li>
                      <li>📊 Dashboard laporan penjualan</li>
                    </ul>
                  </div>
                )}

                <Link 
                  href={`/modul2/${section.id}`}
                  className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  📖 Mulai Bagian Ini
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Template Library Highlight */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            📚 Template Library
          </h2>
          <p className="text-gray-600 mb-4">
            Akses koleksi template prompt yang siap pakai untuk berbagai kebutuhan development:
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">🔨 Code Generation</h4>
              <p className="text-sm text-gray-600">Template untuk generate komponen, API, dan fungsi</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-gray-900 mb-2">🐛 Debugging</h4>
              <p className="text-sm text-gray-600">Template untuk debug dan troubleshooting</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">📝 Documentation</h4>
              <p className="text-sm text-gray-600">Template untuk README, dokumentasi API</p>
            </div>
          </div>
          <Link 
            href="/modul2/templates"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            🚀 Akses Template Library
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/modul1"
            className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Kembali ke Modul 1</span>
          </Link>
          
          <Link 
            href="/dashboard"
            className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
          >
            <span>Kembali ke Dashboard</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}