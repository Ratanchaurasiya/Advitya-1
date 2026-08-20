import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

/**
 * Hero Section — The top fold.
 * Approved copy from 06_website_copy_and_content.md:
 *   Headline: "The AI-Powered Real Estate Operating System"
 *   Sub-headline: "Bring leads, sales, customers, communication, and
 *     real-estate operations together in one centralized platform."
 *   Primary CTA: "Book a Demo" (orange accent)
 *   Visual: High-fidelity mockup of the Executive Dashboard.
 */
export default function HeroSection({ onBookDemo }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-50">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/[0.03] blur-3xl"></div>
        <div className="absolute -bottom-20 -left-40 w-[500px] h-[500px] rounded-full bg-slate-900/[0.02] blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-lg shadow-slate-900/10">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            The Operating System for Modern Real Estate
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            The{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">AI-Powered</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-orange-500/10 rounded-sm -z-0"></span>
            </span>{' '}
            Real Estate Operating System
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bring leads, sales, customers, communication, and real-estate operations together in one centralized platform.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#workflow"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-8 py-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
          >
            <Play className="w-4 h-4 text-orange-500" />
            See How It Works
          </a>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500"
        >
          {[
            'Meta Verified Tech Provider',
            'SOC 2 Encryption Standards',
            'Enterprise-Grade Infrastructure',
          ].map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-14 lg:mt-16"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
