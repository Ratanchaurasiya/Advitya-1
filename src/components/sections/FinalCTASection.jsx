import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';

/**
 * Final CTA Section — Phase 5 (Part 2)
 *
 * Closing conversion section:
 * "Bring your real estate operations into one platform"
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
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background decoration */}
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
          className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/20"
        >
          <div className="relative px-6 sm:px-10 lg:px-16 py-14 sm:py-16 lg:py-20">
            {/* Inner decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl"></div>

            <div className="relative text-center max-w-3xl mx-auto">
              {/* Badge */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                  Built for Real Estate Teams That Mean Business
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
                Bring Your Real Estate Operations{' '}
                <span className="text-orange-400">Into One Platform</span>
              </motion.h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
              >
                Stop juggling spreadsheets, scattered WhatsApp groups, and disconnected systems. Advitya ERP gives your team one centralized command center for leads, sales, site visits, communication, and business intelligence.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={4}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#meta-integration"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  View Meta Integration & Data Policy
                </a>
              </motion.div>

              {/* Trust Row */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={5}
                className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {[
                  {
                    icon: Building2,
                    title: 'Enterprise-Ready',
                    desc: 'Built for real estate developers, agencies, and multi-project teams',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Meta Verified Provider',
                    desc: 'Compliant data processing with strict non-sale guarantees',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'One-Dashboard Visibility',
                    desc: 'Business Health Score, pipelines, and analytics in a single view',
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center px-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Bottom attribution bar */}
          <div className="px-6 sm:px-10 py-4 bg-slate-950/50 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-medium">
              Advitya ERP — A real-estate business management platform by Advitya Projects.
            </span>
            <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Platform Online
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
