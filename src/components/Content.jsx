
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Copy, Check, Terminal, Play, ArrowRight, AlertCircle, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import Typewriter from './Typewriter';
import MockBrowser from './MockBrowser';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Block = ({ block }) => {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (text, idx) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    switch (block.type) {
        case 'text':
            return <p className="text-lg text-slate-300 leading-relaxed mb-6">{block.text}</p>;

        case 'typewriter':
            return (
                <div className="my-8 p-6 rounded-2xl bg-[#0f172a] border border-indigo-500/30 font-mono text-lg">
                    <span className="text-pink-400 mr-2">➜</span>
                    <Typewriter text={block.text} speed={30} delay={500} />
                </div>
            );

        case 'highlight':
            return (
                <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm">
                    <p className="text-xl font-medium text-indigo-200 text-center">✨ {block.text}</p>
                </div>
            );

        case 'comparison':
            return (
                <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                        <h3 className="flex items-center gap-2 text-red-400 font-bold mb-3">
                            <AlertCircle size={20} /> {block.left.title}
                        </h3>
                        <p className="text-slate-400">{block.left.text}</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-3xl rounded-full" />
                        <h3 className="flex items-center gap-2 text-emerald-400 font-bold mb-3">
                            <Check size={20} /> {block.right.title}
                        </h3>
                        <p className="text-slate-300">{block.right.text}</p>
                    </div>
                </div>
            );

        case 'list':
            return (
                <div className="space-y-4 my-8">
                    {block.items.map((item, idx) => (
                        <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold font-mono">
                                {idx + 1}
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                <p className="text-slate-400 text-sm">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            );

        case 'tools':
            return (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                    {block.items.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-indigo-500/50 transition-all group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <h4 className="font-bold text-white mb-2">{item.name}</h4>
                            <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                            {item.link && (
                                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider">
                                    Download <ArrowRight size={12} className="ml-1" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            );

        case 'step':
            return (
                <div className="flex flex-wrap items-center justify-center gap-4 my-10">
                    {block.steps.map((step, idx) => (
                        <React.Fragment key={idx}>
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 p-[2px]">
                                <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-center p-2">
                                    <span className="font-bold text-white text-sm">{step}</span>
                                </div>
                            </div>
                            {idx < block.steps.length - 1 && (
                                <div className="hidden md:block h-[2px] w-12 bg-gradient-to-r from-indigo-600 to-purple-600" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            );

        case 'formula':
            return (
                <div className="my-8 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-[#0f172a] border border-dashed border-indigo-500/50 relative">
                        <div className="absolute -top-3 -right-3 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">RUMUS</div>
                        <code className="text-lg md:text-xl font-mono text-indigo-300">{block.formula}</code>
                    </div>
                </div>
            );

        case 'example':
            return (
                <div className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#0f172a]">
                    <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs text-slate-500 font-mono">example.prompt</span>
                    </div>
                    <div className="p-6 space-y-3">
                        {block.items.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row md:items-start gap-2">
                                <span className="text-purple-400 font-mono text-sm min-w-[80px]">{item.label}:</span>
                                <span className="text-slate-300 font-mono text-sm">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'section':
            return (
                <div className="my-8">
                    <h3 className="text-xl font-bold text-white mb-4 border-l-4 border-indigo-500 pl-4">{block.title}</h3>
                    <ul className="space-y-2 ml-4">
                        {block.items.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            );

        case 'tutorial':
            return (
                <div className="space-y-6 my-8">
                    <h3 className="text-2xl font-bold text-white">{block.title}</h3>
                    <div className="relative border-l-2 border-white/10 ml-4 space-y-8 pb-4">
                        {block.steps.map((step, idx) => (
                            <div key={idx} className="relative pl-8">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#030712]" />
                                <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                                <p className="text-slate-400">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );

        case 'troubleshoot':
            return (
                <div className="grid gap-4 my-8">
                    {block.items.map((item, idx) => (
                        <div key={idx} className="p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                            <h4 className="font-bold text-red-400 mb-2 flex items-center gap-2">
                                <AlertCircle size={16} /> {item.problem}
                            </h4>
                            {item.cause && <p className="text-sm text-slate-400 mb-1"><span className="text-slate-500">Penyebab:</span> {item.cause}</p>}
                            <p className="text-sm text-slate-300"><span className="text-slate-500">Solusi:</span> {item.solution}</p>
                        </div>
                    ))}
                </div>
            );

        case 'projects':
            return (
                <div className="grid gap-6 my-8">
                    {block.items.map((item, idx) => (
                        <div key={idx} className="group relative p-6 rounded-2xl bg-[#0f172a] border border-white/5 hover:border-indigo-500/30 transition-all">
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Terminal className="text-indigo-500/20" size={48} />
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-2 py-1 rounded bg-indigo-500/10 text-indigo-400 text-xs font-bold font-mono">#{idx + 1}</span>
                                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                            </div>
                            <p className="text-slate-400 mb-4 text-sm">{item.desc}</p>
                            <div className="bg-black/50 rounded-lg p-4 relative group/code">
                                <pre className="text-indigo-300 font-mono text-xs whitespace-pre-wrap">{item.prompt}</pre>
                                <button
                                    onClick={() => handleCopy(item.prompt, idx)}
                                    className="absolute top-2 right-2 p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-all flex items-center gap-2"
                                    title="Copy Prompt"
                                >
                                    {copiedIndex === idx ? (
                                        <>
                                            <Check size={14} className="text-emerald-400" />
                                            <span className="text-xs text-emerald-400 font-bold">Copied!</span>
                                        </>
                                    ) : (
                                        <Copy size={14} />
                                    )}
                                </button>
                            </div>
                            {/* Visual Preview */}
                            {item.previewType && <MockBrowser type={item.previewType} />}
                        </div>
                    ))}
                </div>
            );

        case 'dictionary':
            return (
                <div className="grid gap-4 my-8">
                    {block.items.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-white/5">
                            <span className="font-mono font-bold text-indigo-400 min-w-[150px]">{item.term}</span>
                            <span className="text-slate-300">{item.def}</span>
                        </div>
                    ))}
                </div>
            );

        case 'cta':
            useEffect(() => {
                triggerConfetti();
            }, []);

            return (
                <div className="my-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">🎉 Selamat! Anda Sudah Siap!</h3>
                        <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
                            Perjalanan coding Anda baru saja dimulai. Bergabunglah dengan komunitas kami untuk diskusi dan berbagi karya.
                        </p>
                        <a
                            href={block.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
                        >
                            <MessageCircle size={24} />
                            Gabung Grup WhatsApp
                        </a>
                    </div>
                </div>
            );

        default:
            return null;
    }
};

export default function Content({ data, onNext, onPrev, hasNext, hasPrev }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className="flex-1 min-h-screen relative">
            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 origin-left z-50"
                style={{ scaleX }}
            />

            <div className="p-4 md:p-8 lg:p-12 pb-24">
                <motion.div
                    key={data.heading} // Triggers animation on change
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-4xl mx-auto"
                >
                    <motion.header variants={item} className="mb-12 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
                            {data.heading}
                        </h1>
                        {data.subheading && (
                            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                                {data.subheading}
                            </p>
                        )}
                    </motion.header>

                    <div className="space-y-8">
                        {data.body.map((block, idx) => (
                            <motion.div key={idx} variants={item}>
                                <Block block={block} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Navigation */}
                    <motion.div variants={item} className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                        {hasPrev ? (
                            <button
                                onClick={onPrev}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                            >
                                <ChevronLeft size={20} />
                                <span>Sebelumnya</span>
                            </button>
                        ) : <div />}

                        {hasNext ? (
                            <button
                                onClick={onNext}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                            >
                                <span>Bab Selanjutnya</span>
                                <ChevronRight size={20} />
                            </button>
                        ) : <div />}
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
