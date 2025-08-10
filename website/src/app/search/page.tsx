"use client";

import { useState } from "react";
import Link from "next/link";

interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  module: string;
}

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Mindset Product Builder",
    content: "AI sebagai co-creator, bukan sekadar tools. Perubahan paradigma dari coder ke product builder.",
    url: "/modul1/mindset",
    module: "Modul 1"
  },
  {
    id: "2", 
    title: "Build-to-Learn vs Build-to-Ship",
    content: "Framework SPADE untuk menentukan kapan harus belajar dan kapan harus launching produk.",
    url: "/modul1/build-to-learn",
    module: "Modul 1"
  },
  {
    id: "3",
    title: "AI sebagai Reviewer, Mentor, dan Teammate",
    content: "Cara menggunakan AI untuk code review, mentoring, dan kolaborasi development.",
    url: "/modul1/ai-collaboration", 
    module: "Modul 1"
  },
  {
    id: "4",
    title: "Hands-on Practice Projects",
    content: "Recipe generator, personal website builder, expense tracker, chatbot customer service.",
    url: "/modul1/practice",
    module: "Modul 1"
  },
  {
    id: "5",
    title: "Menulis PRD dengan AI",
    content: "Product Requirements Document, template percakapan dengan AI, contoh aplikasi kasir digital.",
    url: "/modul2/prd-writing",
    module: "Modul 2"
  },
  {
    id: "6",
    title: "Memecah Fitur Besar",
    content: "Teknik memecah fitur kompleks, perspektif pengguna, framework SPADE untuk keputusan teknis.",
    url: "/modul2/feature-breakdown",
    module: "Modul 2"
  },
  {
    id: "7",
    title: "Prompt Engineering untuk Coding",
    content: "Teknik komunikasi efektif dengan AI, template untuk berbagai kebutuhan development.",
    url: "/modul2/prompt-engineering",
    module: "Modul 2"
  },
  {
    id: "8",
    title: "Template Library",
    content: "Kumpulan template prompt, code generation, debugging, documentation.",
    url: "/modul2/templates",
    module: "Modul 2"
  },
  {
    id: "9",
    title: "Project WarungKu",
    content: "Aplikasi kasir digital lengkap, responsive design, database, dashboard laporan penjualan.",
    url: "/modul2/warungku-project",
    module: "Modul 2"
  }
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsSearching(true);

    if (searchQuery.trim() === "") {
      setResults([]);
      setIsSearching(false);
      return;
    }

    // Simple search implementation
    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setTimeout(() => {
      setResults(filtered);
      setIsSearching(false);
    }, 300); // Simulate search delay
  };

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
              <Link href="/community" className="text-gray-600 hover:text-green-600 transition-colors">
                Komunitas
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">🔍 Cari Materi Pembelajaran</h1>
          <p className="text-lg text-gray-600">
            Temukan topik, teknik, atau project yang Anda butuhkan dengan mudah
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari mindset, AI tools, prompt engineering, project..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent text-gray-900"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Search Stats */}
          {query && (
            <div className="mt-4 text-sm text-gray-600">
              {isSearching ? (
                <span>Mencari...</span>
              ) : (
                <span>
                  {results.length} hasil ditemukan untuk &ldquo;{query}&rdquo;
                </span>
              )}
            </div>
          )}
        </div>

        {/* Search Results */}
        {query && !isSearching && (
          <div className="space-y-4">
            {results.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="text-gray-400 text-4xl mb-4">📄</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada hasil ditemukan</h3>
                <p className="text-gray-600 mb-4">
                  Coba gunakan kata kunci yang lebih umum atau periksa ejaan Anda
                </p>
                <button 
                  onClick={() => handleSearch("")}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Hapus pencarian
                </button>
              </div>
            ) : (
              results.map((result) => (
                <Link 
                  key={result.id}
                  href={result.url}
                  className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors">
                      {result.title}
                    </h3>
                    <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                      {result.module}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {result.content}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>Baca selengkapnya</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}

        {/* Quick Topics when no search */}
        {!query && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">🔥 Topik Populer</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button 
                onClick={() => handleSearch("AI mindset")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🧠 AI Mindset</h3>
                <p className="text-sm text-gray-600">Cara berpikir product builder di era AI</p>
              </button>

              <button 
                onClick={() => handleSearch("prompt engineering")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">💬 Prompt Engineering</h3>
                <p className="text-sm text-gray-600">Teknik komunikasi efektif dengan AI</p>
              </button>

              <button 
                onClick={() => handleSearch("project hands-on")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🚀 Project Practice</h3>
                <p className="text-sm text-gray-600">Project mini dan hands-on learning</p>
              </button>

              <button 
                onClick={() => handleSearch("template")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">📝 Template Library</h3>
                <p className="text-sm text-gray-600">Kumpulan template siap pakai</p>
              </button>

              <button 
                onClick={() => handleSearch("tools")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🛠️ AI Tools</h3>
                <p className="text-sm text-gray-600">Tools essentials untuk development</p>
              </button>

              <button 
                onClick={() => handleSearch("warungku")}
                className="p-4 border border-gray-200 rounded-lg hover:border-green-600 hover:shadow-md transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">🏪 Project WarungKu</h3>
                <p className="text-sm text-gray-600">Aplikasi kasir digital lengkap</p>
              </button>
            </div>
          </div>
        )}

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