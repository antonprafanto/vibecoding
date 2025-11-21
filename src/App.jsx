
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { modules } from './data/modules';

function App() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const activeIndex = modules.findIndex(m => m.id === activeId);
  const activeModule = modules[activeIndex] || modules[0];

  const handleNext = () => {
    if (activeIndex < modules.length - 1) {
      setActiveId(modules[activeIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveId(modules[activeIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 flex">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu size={24} />
      </button>

      <Sidebar
        modules={modules}
        activeId={activeId}
        onSelect={(id) => {
          setActiveId(id);
          setSidebarOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <Content
        data={activeModule.content}
        onNext={handleNext}
        onPrev={handlePrev}
        hasNext={activeIndex < modules.length - 1}
        hasPrev={activeIndex > 0}
      />
    </div>
  );
}

export default App;
