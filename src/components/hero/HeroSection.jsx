import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import DashboardMockup from './DashboardMockup';

/**
 * Hero Section for Evoniq ERP.
 * Features enterprise SaaS positioning, Meta Platform Data ingestion callouts,
 * conversion-focused CTAs, and a high-fidelity interactive dashboard mockup.
 */
export default function HeroSection({ onBookDemo }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/50">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/[0.04] blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-slate-900/[0.03] blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-[450px] h-[450px] rounded-full bg-orange-500/[0.03] blur-3xl" />
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-slate-100 text-xs sm:text-sm font-semibold shadow-lg shadow-slate-900/10 border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Enterprise-Grade B2B SaaS Platform</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-4xl lg:max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Evoniq ERP —{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-orange-500">AI-Powered</span>
              <span className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-orange-500/15 rounded-sm -z-0" />
            </span>{' '}
            Enterprise &amp; Real Estate Operating System
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            A unified cloud SaaS platform centralizing lead capture, sales automation, and engineering workflows across Real Estate, MEP, Construction, and Civil Engineering. Seamlessly integrates with Meta Platform Data to drive instant CRM follow-ups.
          </p>
        </motion.div>

        {/* Primary & Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={onBookDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#meta-integration"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-8 py-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md active:scale-[0.98] transition-all"
          >
            <Play className="w-4 h-4 text-orange-500 fill-orange-500/20" />
            <span>Explore Meta Integrations</span>
          </a>
        </motion.div>

        {/* Trust strip below CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-600 font-medium"
        >
          {[
            'Meta WhatsApp-to-Lead Integration Ready',
            'Multi-Portfolio Lead Ingestion',
            'Enterprise-Grade Infrastructure',
          ].map((item, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{item}</span>
            </span>
          ))}
        </motion.div>

        {/* Sub-hero Trust Strip banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-slate-200 text-xs sm:text-sm font-medium shadow-md border border-slate-800 max-w-full text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate sm:whitespace-normal">
              Engineered for Multi-Portfolio Lead Ingestion <span className="text-slate-500 mx-1.5 hidden sm:inline">•</span><br className="sm:hidden" /> Official Meta WhatsApp-to-Lead &amp; Lead Ads Integration Ready
            </span>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 sm:mt-12 lg:mt-14"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
