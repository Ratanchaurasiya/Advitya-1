import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

/**
 * Final CTA Section for Evoniq ERP
 *
 * Closing enterprise conversion section:
 * "Bring Your Enterprise Operations Into One Platform"
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function FinalCTASection({ onBookDemo }) {
  const trustPillars = [
    {
      icon: Building2,
      title: 'Enterprise-Ready',
      desc: 'Engineered for Real Estate developers, MEP contractors, and multi-disciplinary engineering enterprises',
    },
    {
      icon: ShieldCheck,
      title: 'Meta Verified Provider',
      desc: 'Compliant data processing with strict non-sale guarantees and enterprise-grade encryption',
    },
    {
      icon: CheckCircle2,
      title: 'One-Dashboard Visibility',
      desc: 'Business Health Score, sales pipelines, engineering milestones, and analytics in a single unified view',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background ambient decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-orange-500/[0.03] blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800"
        >
          <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20">
            {/* Inner decorative glows */}
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>

            <div className="relative text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold backdrop-blur-sm shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  Built for Enterprises That Build the Future
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
              >
                Bring Your Enterprise Operations{' '}
                <span className="text-orange-400">Into One Platform</span>
              </motion.h2>

              {/* Body */}
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
              >
                Stop juggling spreadsheets, disconnected engineering tools, and scattered lead data. Evoniq ERP gives your teams one centralized command center for leads, sales, site visits, engineering workflows, and business intelligence across Real Estate, MEP, Construction, and Civil Engineering.
              </motion.p>

              {/* CTA Actions */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
              >
                <button
                  type="button"
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#meta-integration"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  View Meta Integration & Data Policy
                </a>
              </motion.div>

              {/* 3 Trust Pillars */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={5}
                className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
              >
                {trustPillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center sm:items-start text-center sm:text-left p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xs hover:bg-white/[0.06] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-white">{pillar.title}</h3>
                      <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{pillar.desc}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Bottom attribution bar */}
          <div className="px-6 sm:px-10 py-4 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-medium text-center sm:text-left">
              Evoniq ERP is a proprietary B2B SaaS platform engineered and operated by The Propking Realty.
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Platform Online
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
