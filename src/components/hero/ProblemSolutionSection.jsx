import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, CheckCircle2, ArrowRight, 
  XCircle, Zap, Eye, Users, CalendarCheck, BarChart3, Target
} from 'lucide-react';

/**
 * Problem & Solution Section — approved copy from 06_website_copy_and_content.md:
 *  Problem: "Leads are scattered across platforms, follow-ups are missed,
 *    and management lacks real-time visibility into sales performance."
 *  Solution: "Connect your lead sources, systematically assign tasks,
 *    track site visits, and measure your entire business health from a single dashboard."
 */
export default function ProblemSolutionSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  const problems = [
    { icon: Users, text: 'Leads scattered across platforms and spreadsheets' },
    { icon: CalendarCheck, text: 'Follow-ups and site visits missed without tracking' },
    { icon: Eye, text: 'Management has no real-time visibility into sales performance' },
    { icon: AlertTriangle, text: 'Disconnected teams with no centralized communication' },
  ];

  const solutions = [
    { icon: Zap, text: 'Connect every lead source into one unified CRM pipeline' },
    { icon: Target, text: 'Systematically assign tasks with automated follow-up triggers' },
    { icon: CalendarCheck, text: 'Track site visits, revisits, and negotiation stages live' },
    { icon: BarChart3, text: 'Measure your entire business health from a single dashboard' },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full mb-4">
            <Zap className="w-3.5 h-3.5" />
            The Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From Scattered Operations to{' '}
            <span className="text-orange-500">Complete Control</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Real estate businesses lose revenue every day to disconnected systems. Advitya ERP consolidates your entire operation.
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Before / Problem Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            className="relative rounded-2xl border border-rose-200/70 bg-gradient-to-br from-rose-50/60 to-white p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Before Advitya</h3>
                <p className="text-xs text-slate-500">The Fragmented Real Estate Workflow</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 border-l-2 border-rose-200 pl-4">
              Leads are scattered across platforms, follow-ups are missed, and management lacks real-time visibility into sales performance.
            </p>

            <div className="space-y-3">
              {problems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-6 h-6 rounded-lg bg-rose-100/80 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* After / Solution Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
            className="relative rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/60 to-white p-6 sm:p-8"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">After Advitya</h3>
                <p className="text-xs text-slate-500">Centralized Real Estate Operations</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6 border-l-2 border-emerald-200 pl-4">
              Connect your lead sources, systematically assign tasks, track site visits, and measure your entire business health from a single dashboard.
            </p>

            <div className="space-y-3">
              {solutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100/80 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Transition Arrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex justify-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-lg shadow-slate-900/10">
            <span>See how Advitya ERP makes it happen</span>
            <ArrowRight className="w-4 h-4 text-orange-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
