import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Wrench,
  HardHat,
  Ruler,
  Layers,
  ArrowRight,
  CheckCircle2,
  Phone,
  Zap,
  ScanLine,
  Brain,
  TrendingUp,
  ShoppingCart,
  FileText,
  Mic,
  Database,
  UserCheck,
} from 'lucide-react';

/**
 * Module Grid for Evoniq ERP — 4 Core ERP Modules
 *
 * Requirements:
 * - Section id="modules"
 * - Badge: "Platform Modules" with Layers icon
 * - H2: "Four Powerful ERP Modules, One Unified Platform"
 * - Subtitle: "Evoniq ERP delivers specialized enterprise modules for Real Estate, MEP, Construction, and Civil Engineering — each powered by AI and connected through a single cloud SaaS backbone."
 * - 2x2 responsive grid of module cards:
 *   1. Real Estate ERP (Building2, orange accent)
 *   2. MEP ERP (Wrench, blue accent)
 *   3. Construction ERP (HardHat, emerald accent)
 *   4. Civil Engineering ERP (Ruler, violet accent)
 * - Bottom CTA: "Request a Full Platform Walkthrough" + link "See Business Health Analytics"
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const modules = [
  {
    id: 'real-estate',
    icon: Building2,
    accentColor: 'orange',
    title: 'Real Estate ERP',
    description:
      'End-to-end AI ERP covering initial lead capture to final possession with integrated sales automation.',
    features: [
      {
        icon: Phone,
        text: 'AI Lead Calling & Voice Commands',
      },
      {
        icon: Zap,
        text: 'Multi-Source Lead Integration',
      },
      {
        icon: ScanLine,
        text: 'OCR Pro & CV Analyzer Automation',
      },
      {
        icon: Brain,
        text: 'ML Predictions & AI Summarization',
      },
    ],
    stat: {
      value: '2,847',
      unit: 'leads',
      label: 'Monthly Lead Processing',
      trend: '+18.2%',
    },
  },
  {
    id: 'mep',
    icon: Wrench,
    accentColor: 'blue',
    title: 'MEP ERP',
    description:
      'Design to commissioning workflows with automated handover documentation for Mechanical, Electrical, and Plumbing.',
    features: [
      {
        icon: TrendingUp,
        text: 'ML Predictions — 40% less downtime',
      },
      {
        icon: ShoppingCart,
        text: 'Procurement Automation',
      },
      {
        icon: FileText,
        text: 'AI Form Creation & MCP',
      },
      {
        icon: Mic,
        text: 'Voice Commands & AI Support',
      },
    ],
    stat: {
      value: '40%',
      unit: 'reduction',
      label: 'Equipment & Site Downtime',
      trend: 'downtime',
    },
  },
  {
    id: 'construction',
    icon: HardHat,
    accentColor: 'emerald',
    title: 'Construction ERP',
    description:
      'Predictive scheduling and real-time on-site visibility with AI-driven project cost management.',
    features: [
      {
        icon: ScanLine,
        text: 'OCR Pro & Document Automation',
      },
      {
        icon: Database,
        text: 'ERP RAG & Model Context Protocol',
      },
      {
        icon: UserCheck,
        text: 'CV Analyzer & AI Support Agent',
      },
      {
        icon: Mic,
        text: 'Voice Commands & Procurement',
      },
    ],
    stat: {
      value: '25%',
      unit: 'savings',
      label: 'Predictive Cost Optimization',
      trend: 'project costs',
    },
  },
  {
    id: 'civil',
    icon: Ruler,
    accentColor: 'violet',
    title: 'Civil Engineering ERP',
    description:
      'Design-build workflow integration with automated change order tracking and compliance documentation.',
    features: [
      {
        icon: TrendingUp,
        text: 'ML Predictions & Change Orders',
      },
      {
        icon: Database,
        text: 'ERP RAG & MCP Integration',
      },
      {
        icon: ScanLine,
        text: 'OCR Pro Automation',
      },
      {
        icon: UserCheck,
        text: 'CV Analyzer & AI Support',
      },
    ],
    stat: {
      value: '3x',
      unit: 'faster',
      label: 'Regulatory & Compliance Cycles',
      trend: 'approvals',
    },
  },
];

const accentStyles = {
  orange: {
    iconBg: 'bg-orange-50 border-orange-200',
    iconText: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    featureIcon: 'text-orange-500',
    statBg: 'bg-orange-50/60 border-orange-200/70',
    statTrend: 'bg-orange-100 text-orange-700 border border-orange-200',
    hoverBorder: 'hover:border-orange-300 hover:shadow-orange-500/5',
  },
  blue: {
    iconBg: 'bg-blue-50 border-blue-200',
    iconText: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    featureIcon: 'text-blue-500',
    statBg: 'bg-blue-50/60 border-blue-200/70',
    statTrend: 'bg-blue-100 text-blue-700 border border-blue-200',
    hoverBorder: 'hover:border-blue-300 hover:shadow-blue-500/5',
  },
  emerald: {
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconText: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    featureIcon: 'text-emerald-500',
    statBg: 'bg-emerald-50/60 border-emerald-200/70',
    statTrend: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
    hoverBorder: 'hover:border-emerald-300 hover:shadow-emerald-500/5',
  },
  violet: {
    iconBg: 'bg-violet-50 border-violet-200',
    iconText: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    featureIcon: 'text-violet-500',
    statBg: 'bg-violet-50/60 border-violet-200/70',
    statTrend: 'bg-violet-100 text-violet-700 border border-violet-200',
    hoverBorder: 'hover:border-violet-300 hover:shadow-violet-500/5',
  },
};

function ModuleCard({ mod, index }) {
  const Icon = mod.icon;
  const style = accentStyles[mod.accentColor];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={index + 1}
      className={`group bg-white rounded-2xl border border-slate-200/80 shadow-sm ${style.hoverBorder} hover:shadow-xl transition-all duration-300 flex flex-col`}
    >
      {/* Card Header */}
      <div className="p-6 sm:p-7 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${style.iconBg} ${style.iconText} group-hover:scale-105 transition-transform`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${style.badge}`}
          >
            Core Module
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">
          {mod.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed min-h-[44px]">
          {mod.description}
        </p>
      </div>

      {/* Feature List */}
      <div className="px-6 sm:px-7 pb-5 flex-1">
        <div className="pt-3 border-t border-slate-100 space-y-2.5">
          {mod.features.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-sm text-slate-700"
              >
                <FeatIcon
                  className={`w-4 h-4 shrink-0 mt-0.5 ${style.featureIcon}`}
                />
                <span className="leading-snug">{feat.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stat Footer */}
      <div className={`mx-6 sm:mx-7 mb-6 p-4 rounded-xl border ${style.statBg}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-slate-900">
                {mod.stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-600 lowercase">
                {mod.stat.unit}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">
              {mod.stat.label}
            </p>
          </div>
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-lg uppercase tracking-wide ${style.statTrend}`}
          >
            {mod.stat.trend}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ModuleGridSection({ onBookDemo }) {
  return (
    <section id="modules" className="relative py-20 lg:py-28 bg-white">
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
            <Layers className="w-3.5 h-3.5" />
            Platform Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Four Powerful ERP Modules,{' '}
            <span className="text-orange-500">One Unified Platform</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Evoniq ERP delivers specialized enterprise modules for Real Estate,
            MEP, Construction, and Civil Engineering — each powered by AI and
            connected through a single cloud SaaS backbone.
          </p>
        </motion.div>

        {/* Module Grid — 2×2 on medium/large screens, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {modules.map((mod, idx) => (
            <ModuleCard key={mod.id} mod={mod} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            type="button"
            onClick={onBookDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Request a Full Platform Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#business-health"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>See Business Health Analytics</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
