
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Typewriter({ text, speed = 50, delay = 0 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let i = 0;
        setDisplayedText(''); // Reset text when starting

        const timer = setInterval(() => {
            if (i < text.length) {
                // Use substring to ensure we get the full string up to i+1
                // This avoids issues with state updates being async or race conditions
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed, started]);

    return (
        <span className="font-mono text-indigo-300">
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-indigo-400 ml-1 align-middle"
            />
        </span>
    );
}
