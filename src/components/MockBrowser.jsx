
import React from 'react';
import { motion } from 'framer-motion';
import { User, FileText, Clock, Activity, Lock, Image as ImageIcon, RefreshCw, Printer, Play, Pause, Copy } from 'lucide-react';

const BrowserFrame = ({ children, title }) => (
    <div className="rounded-xl overflow-hidden border border-slate-700 bg-[#0f172a] shadow-2xl my-6">
        <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center">
                <div className="inline-block px-3 py-0.5 rounded-md bg-slate-900/50 text-[10px] text-slate-400 font-mono">
                    {title || 'localhost:3000'}
                </div>
            </div>
        </div>
        <div className="p-4 md:p-6 bg-[#1e293b] min-h-[200px] flex items-center justify-center relative overflow-hidden">
            {children}
        </div>
    </div>
);

const NameGenerator = () => (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
        <h3 className="text-slate-800 font-bold text-xl mb-4">Baby Name Gen ✨</h3>
        <div className="flex gap-2 justify-center mb-4">
            <button className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">Boy</button>
            <button className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 font-bold text-sm">Girl</button>
        </div>
        <button className="w-full py-2 bg-indigo-600 text-white rounded-lg font-bold mb-4 hover:bg-indigo-700">
            Generate Name
        </button>
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-lg font-serif text-slate-700">"Elara Rose"</p>
            <p className="text-xs text-slate-500 mt-1">Meaning: Shining light</p>
        </div>
    </div>
);

const Invoice = () => (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 text-xs">
        <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-slate-800 text-lg">INVOICE</h3>
            <span className="text-slate-500">#INV-001</span>
        </div>
        <div className="space-y-2 mb-4">
            <div className="flex justify-between">
                <span>Web Design</span>
                <span>$500</span>
            </div>
            <div className="flex justify-between">
                <span>Hosting</span>
                <span>$100</span>
            </div>
        </div>
        <div className="flex justify-between font-bold text-slate-800 text-sm border-t pt-2">
            <span>Total</span>
            <span>$600</span>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 py-2 border border-slate-300 rounded text-slate-600 hover:bg-slate-50">
            <Printer size={14} /> Print Invoice
        </button>
    </div>
);

const Pomodoro = () => (
    <div className="w-full max-w-xs bg-[#2c3e50] rounded-xl shadow-lg p-6 text-center text-white">
        <h3 className="text-sm uppercase tracking-widest opacity-70 mb-4">Focus Timer</h3>
        <div className="text-5xl font-mono font-bold mb-6 tracking-wider">24:59</div>
        <div className="flex justify-center gap-4">
            <button className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Play size={20} /></button>
            <button className="p-3 rounded-full bg-white/10 hover:bg-white/20"><RefreshCw size={20} /></button>
        </div>
    </div>
);

const BMI = () => (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-center font-bold text-slate-800 mb-4">BMI Calculator</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-100 p-2 rounded">
                <label className="text-[10px] text-slate-500 block">Weight (kg)</label>
                <div className="font-bold text-slate-800">70</div>
            </div>
            <div className="bg-slate-100 p-2 rounded">
                <label className="text-[10px] text-slate-500 block">Height (cm)</label>
                <div className="font-bold text-slate-800">175</div>
            </div>
        </div>
        <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center font-bold">
            BMI: 22.9 (Normal)
        </div>
    </div>
);

const PasswordGen = () => (
    <div className="w-full max-w-sm bg-slate-900 rounded-lg shadow-lg p-6 border border-green-500/30">
        <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
            <Lock size={14} /> SECURE_GEN_V1
        </h3>
        <div className="bg-black p-3 rounded border border-green-500/50 text-green-400 font-mono text-lg mb-4 flex justify-between items-center">
            <span>Xk9#mP2$vL</span>
            <Copy size={14} className="cursor-pointer opacity-70 hover:opacity-100" />
        </div>
        <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-green-500" />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>Weak</span>
            <span>Strong</span>
        </div>
    </div>
);

const MoodBoard = () => (
    <div className="w-full h-48 bg-slate-100 rounded-lg relative overflow-hidden border-2 border-dashed border-slate-300 flex items-center justify-center">
        <div className="absolute top-4 left-4 w-20 h-20 bg-pink-200 rounded shadow-md rotate-[-6deg]" />
        <div className="absolute bottom-4 right-10 w-24 h-16 bg-blue-200 rounded shadow-md rotate-[3deg]" />
        <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-200 rounded-full shadow-md opacity-80" />
        <div className="z-10 text-slate-400 flex flex-col items-center">
            <ImageIcon size={24} />
            <span className="text-xs mt-2">Drag images here</span>
        </div>
    </div>
);

export default function MockBrowser({ type }) {
    const renderContent = () => {
        switch (type) {
            case 'name_generator': return <NameGenerator />;
            case 'invoice': return <Invoice />;
            case 'pomodoro': return <Pomodoro />;
            case 'bmi': return <BMI />;
            case 'password': return <PasswordGen />;
            case 'moodboard': return <MoodBoard />;
            default: return <div className="text-slate-500">Preview not available</div>;
        }
    };

    const titles = {
        name_generator: 'nama-bayi.html',
        invoice: 'invoice-app.html',
        pomodoro: 'focus-timer.html',
        bmi: 'health-calc.html',
        password: 'secure-gen.html',
        moodboard: 'vision-board.html'
    };

    return <BrowserFrame title={titles[type]}>{renderContent()}</BrowserFrame>;
}
