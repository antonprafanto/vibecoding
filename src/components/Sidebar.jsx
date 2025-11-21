
import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Zap,
  Brain,
  PenTool,
  Rocket,
  Terminal,
  LifeBuoy,
  Lightbulb,
  Book
} from 'lucide-react';

const icons = {
  intro: BookOpen,
  bab1: Zap,
  bab2: Brain,
  bab3: PenTool,
  bab4: Rocket,
  bab5: Terminal,
  bab6: LifeBuoy,
  bab7: Lightbulb,
  kamus: Book
};

export default function Sidebar({ modules, activeId, onSelect, isOpen, setIsOpen }) {
  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
      />

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`
          fixed top-0 left-0 h-screen w-[280px] 
          bg-[#030712]/95 backdrop-blur-xl border-r border-white/10 
          z-50 md:translate-x-0 md:block
        `}
        // On desktop, we want it always visible, so we override the animate prop via CSS class logic if needed, 
        // but for simplicity in this "custom" setup, we'll handle desktop visibility via media queries in parent or here.
        // Actually, let's make it simple: On desktop (md), transform is ignored by CSS or we force it.
        style={{ transform: 'none' }} // Reset for desktop via CSS class usually, but inline style overrides. 
      // Let's use a better approach: CSS module or just conditional rendering props.
      // For now, we will rely on the className `md:translate-x-0` to override motion? No, motion style takes precedence.
      // We will use a variant.
      >
        <div className="p-6 mb-4">
          <h1 className="text-2xl font-bold font-sans tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">Vibe</span>
            <span className="text-white">Coding</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-mono">v2.0 Learning Hub</p>
        </div>

        <nav className="px-3 h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
          <ul className="space-y-1">
            {modules.map((mod) => {
              const Icon = icons[mod.id] || BookOpen;
              const isActive = activeId === mod.id;

              return (
                <li key={mod.id}>
                  <button
                    onClick={() => onSelect(mod.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                      ${isActive
                        ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] border border-white/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon size={18} className={isActive ? 'text-indigo-400' : 'text-slate-500'} />
                    <span>{mod.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_currentColor]"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.aside>

      {/* Desktop Spacer (to push content) */}
      <div className="hidden md:block w-[280px] flex-shrink-0" />

      <style>{`
        @media (min-width: 768px) {
          aside { transform: none !important; }
        }
      `}</style>
    </>
  );
}
