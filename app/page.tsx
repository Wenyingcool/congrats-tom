'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Firework background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-ping w-40 h-40 bg-pink-400 opacity-20 rounded-full absolute top-20 left-1/3"></div>
        <div className="animate-ping w-32 h-32 bg-yellow-300 opacity-20 rounded-full absolute top-1/2 left-1/2"></div>
        <div className="animate-ping w-24 h-24 bg-blue-300 opacity-20 rounded-full absolute top-1/4 left-2/3"></div>
      </div>

      {/* Background music */}
      <audio autoPlay loop className="hidden">
        <source src="/happy_music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-4 text-gray-800 z-10"
      >
        🎓 Congratulations, Dr. Tom! 🎉
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-lg text-center text-gray-700 max-w-xl mb-6 z-10"
      >
        You've officially earned your PhD — a journey full of dedication, brilliance, and resilience. The world just got a little smarter with Dr. Tom in it!
      </motion.p>

      <motion.img
        src="/congrats_tom_ghibli.png"
        alt="Ghibli-style Tom"
        className="rounded-2xl shadow-lg w-full max-w-md border border-white z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-6 z-10"
      >
        <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-xl p-4 text-center text-gray-800 mt-6">
          <p>“May your curiosity and courage continue to take you to magical places.”</p>
          <p className="mt-2">From Cindy</p>
        </div>
      </motion.div>
    </div>
  );
}
