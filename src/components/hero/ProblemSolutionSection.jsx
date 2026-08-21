import React from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  XCircle,
  Zap,
  Eye,
  Users,
  CalendarCheck,
  BarChart3,
  Target,
  Wrench,
  Cpu,
} from 'lucide-react';

/**
 * Problem & Solution Section for Evoniq ERP.
 * Showcases the operational transformation from fragmented silos to unified AI-powered control.
 */
export default function ProblemSolutionSection({ onBookDemo }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] },
    }),
  };

  const problems = [
    {
      icon: Users,
      title: 'Scattered Lead Channels',
      text: 'Leads are lost across disparate ad platforms, WhatsApp chats, and offline spreadsheets.',
    },
    {
      icon: Wrench,
      title: 'Isolated Engineering Silos',
      text: 'MEP, BOQ estimates, and site specs remain detached from sales and estimation teams.',
    },
    {
      icon: AlertTriangle,
      title: 'Missed Follow-Ups & Visits',
      text: 'Client inquiries drop through cracks without systematic task triggers and calendar sync.',
    },
    {
      icon: Eye,
      title: 'Blindspot Management',
      text: 'Leadership lacks real-time operational visibility into project velocity and pipeline revenue.',
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: 'Unified Lead Pipeline',
      text: 'Direct Meta Platform and multi-channel lead ingestion with instant auto-assignment to reps.',
    },
    {
      icon: Cpu,
      title: 'AI-Automated Workflows',
      text: 'Centralized MEP engineering calculations, BOQ automation, and connected CAD workflows.',
    },
    {
      icon: CalendarCheck,
      title: 'Precision Site Tracking',
      text: 'Systematic scheduling, geo-verified site visits, revisit tracking, and automated client alerts.',
    },
    {
      icon: BarChart3,
      title: 'Single-Pane Business Health',
      text: 'Holistic AI dashboards delivering real-time project profitability, sales KPIs, and audit trails.',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-orange-500/5 via-rose-500/5 to-emerald-500/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            The Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From Scattered Operations to{' '}
            <span className="relative inline-block text-orange-500">
              Complete Control
              <span className="absolute bottom-1 left-0 right-0 h-2.5 bg-orange-500/15 rounded-sm -z-10" />
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            Enterprises across Real Estate, MEP, Construction, and Civil Engineering lose revenue to disconnected systems. Evoniq ERP consolidates your entire operation.
          </p>
        </motion.div>

        {/* Two-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Before Card (Rose-tinted) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            className="group relative rounded-3xl border border-rose-200/80 bg-gradient-to-br from-rose-50/70 via-white to-rose-50/30 p-6 sm:p-8 lg:p-10 shadow-xl shadow-rose-950/[0.03] flex flex-col justify-between transition-all duration-300 hover:border-rose-300 hover:shadow-rose-950/[0.06]"
          >
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-rose-100/90 text-rose-600 flex items-center justify-center shadow-inner shrink-0 ring-4 ring-rose-50">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Before Evoniq</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-rose-600/90">
                    The Fragmented Enterprise Workflow
                  </p>
                </div>
              </div>

              {/* Problem Quote */}
              <div className="relative mb-8 rounded-2xl bg-rose-100/40 border-l-4 border-rose-500 p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;Leads are scattered across platforms, engineering data lives in silos, follow-ups are missed, and management lacks real-time visibility into project and sales performance.&rdquo;
                </p>
              </div>

              {/* Bullet Problems */}
              <div className="space-y-4">
                {problems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-white/70 border border-rose-100/60 transition-colors duration-200 hover:bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200/50 flex items-center justify-between text-xs font-medium text-rose-700">
              <span>Status: High Friction &amp; Revenue Leakage</span>
              <span className="px-2 py-0.5 rounded-full bg-rose-200/60 font-semibold">Disconnected</span>
            </div>
          </motion.div>

          {/* After Card (Emerald-tinted) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={2}
            className="group relative rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 p-6 sm:p-8 lg:p-10 shadow-xl shadow-emerald-950/[0.03] flex flex-col justify-between transition-all duration-300 hover:border-emerald-300 hover:shadow-emerald-950/[0.06]"
          >
            <div>
              {/* Header Badge & Title */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-emerald-100/90 text-emerald-600 flex items-center justify-center shadow-inner shrink-0 ring-4 ring-emerald-50">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">After Evoniq</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600/90">
                    Unified Enterprise Operations
                  </p>
                </div>
              </div>

              {/* Solution Quote */}
              <div className="relative mb-8 rounded-2xl bg-emerald-100/40 border-l-4 border-emerald-500 p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  &ldquo;Connect every lead source, automate engineering workflows, systematically assign tasks, track site visits, and measure your entire business health from a single AI-powered dashboard.&rdquo;
                </p>
              </div>

              {/* Bullet Solutions */}
              <div className="space-y-4">
                {solutions.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3 rounded-xl bg-white/70 border border-emerald-100/60 transition-colors duration-200 hover:bg-white"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200/50 flex items-center justify-between text-xs font-medium text-emerald-700">
              <span>Status: Autonomous, Real-Time &amp; Scalable</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-200/60 font-semibold">Consolidated</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Transition Pill */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <button
            onClick={() => onBookDemo && onBookDemo()}
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-slate-900 text-white text-sm font-semibold shadow-xl shadow-slate-900/15 transition-all duration-300 hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <span>See how Evoniq ERP makes it happen</span>
            <div className="w-6 h-6 rounded-full bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
