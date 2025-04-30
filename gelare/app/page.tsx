"use client";

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpenCheck, Gift, Star } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine, Container } from "tsparticles-engine";

export default function Home() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [playMusic, setPlayMusic] = useState(true);

  // Quotes for the rotating text
  const quotes = [
    'هر صبح، آغازی باشکوه برای رویاهای تو باشه 🌞',
    'تولدت مبارک؛ با دلِ قرص و لبخند بدرخش ✨'
  ];

  // Motivational message
  const motivation =
    'هر روز فرصتی تازه‌ست برای درخشیدن. حتی اگر مسیر سخت باشه، تو قوی‌تر از تمام چالش‌هاتی. ✨ با امید و لبخند پیش برو!';

  // Rotate quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => setQuoteIndex(i => (i + 1) % quotes.length), 5000);

    // Trigger confetti on load
    if (typeof window !== 'undefined') {
      import('canvas-confetti')
        .then(confettiModule => {
          confettiModule.default({ particleCount: 400, spread: 200, origin: { y: 0.6 } });
        })
        .catch(err => console.error("Failed to load confetti module:", err));
    }

    return () => clearInterval(interval);
  }, [quotes.length]);

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(encodeURIngine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (!container) return;
    // Handle particles loaded logic if needed
  }, []);

  return (
    <>
      <Head>
        <title>تولد گلاره کاظمی</title>
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/bnazanin-font@master/dist/font-face.css" rel="stylesheet" />
      </Head>
      <div className="relative overflow-hidden">
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: { events: { onClick: { enable: true, mode: 'push' } } },
            particles: {
              color: { value: '#fb7185' },
              links: { enable: true, distance: 150, color: '#e879f9' },
              move: { enable: true, speed: 1.5 },
              size: { value: { min: 1, max: 3 } },
              number: {
                value: 90,
                density: {
                  enable: true,
                  width: 800,
                  height: 800
                }
              }
            },
            detectRetina: true
          }}
          className="absolute inset-0"
        />

        {/* Main Content */}
        <main dir="rtl" className="relative font-bnazanin min-h-screen flex flex-col items-center text-right text-rose-900 p-4 space-y-12 bg-gradient-to-b from-rose-50 via-pink-100 to-fuchsia-100">
          {/* Music Toggle Button */}
          <button
            onClick={() => setPlayMusic(!playMusic)}
            className={`absolute top-5 left-5 p-2 rounded-full shadow-lg transition-all duration-500 ${playMusic ? 'bg-white/80 animate-pulse' : 'bg-white/50'}`}
          >
            {playMusic ? '🔊' : '🔇'}
          </button>

          

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-fuchsia-600 drop-shadow-2xl"
          >
            🎉 تولدت مبارک،خانوم کاظمی 🎉
          </motion.h1>

          {/* Rotating Quotes */}
          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-3xl bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl max-w-3xl text-rose-700"
          >
            <Sparkles className="inline ml-2 animate-pulse text-pink-500" />
            {quotes[quoteIndex]}
          </motion.div>

          {/* Motivational Message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-2xl w-full"
          >
            <h2 className="text-3xl font-bold text-pink-700 mb-4 flex items-center">
              <Star className="ml-2 text-pink-400 animate-spin-slow" />
              یک یادداشت انگیزشی
            </h2>
            <p className="text-xl text-rose-800 leading-relaxed">{motivation}</p>
          </motion.div>

          {/* Book Recommendations */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-2xl w-full"
          >
            <h2 className="text-4xl font-bold text-pink-700 mb-4 flex items-center">
              <BookOpenCheck className="ml-2 text-pink-400" />
              کتاب‌هایی برای ذهن کنجکاو
            </h2>
            <ul className="list-disc list-inside space-y-3 text-rose-800 text-xl">
              {[
                'عادت‌های اتمی - جیمز کلیر',
                'تفکر سریع و کند - دنیل کانمن',
                'ذهن شفاف - هربرت سایمون',
                'اثر مرکب - دارن هاردی'
              ].map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </motion.section>

          {/* Gift Message */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex items-center bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl max-w-2xl w-full"
          >
            <Gift className="text-pink-500 animate-wiggle" size={50} />
            <p className="text-xl leading-relaxed mr-4 text-purple-800">
              این وب‌سایت هدیه‌ای کوچیک، ساده و صمیمانه‌ست برای تبریک تولد. امیدوارم همیشه بدرخشی و لحظه‌هات پر از آرامش و لبخند باشه 💝
            </p>
          </motion.section>
        </main>
      </div>
    </>
  );
}
