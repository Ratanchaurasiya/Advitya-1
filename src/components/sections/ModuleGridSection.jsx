import React from 'react';
import { motion } from 'framer-motion';
import {
  Users, UserCheck, MessageSquare, BarChart3,
  Zap, ArrowRight, CheckCircle2, Layers,
  Target, CalendarCheck, PhoneCall, MapPin,
  TrendingUp, Activity, Gauge, Bell,
  ClipboardList, Radio, Headphones, PieChart
} from 'lucide-react';

/**
 * Module Grid Architecture — Phase 4
 *
 * Approved copy from 06_website_copy_and_content.md:
 *   Lead Management: Capture, assign, and track leads from multiple sources in real-time.
 *   Sales & CRM: Manage follow-ups, schedule site visits, and track the complete sales pipeline.
 *   Communication: Integrated WhatsApp messaging and telephony for centralized customer interactions.
 *   Business Analytics: Executive dashboards featuring live metrics for Lead Health, Sales Health, and Revenue.
 *
 * Design DNA from 03_design_and_colors.md:
 *   Module Architecture (Like DaeBuild) — Group features logically.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ──────────────────────────────────────
   Individual module data
   ────────────────────────────────────── */
const modules = [
  {
    id: 'lead-management',
    icon: Users,
    accentColor: 'orange',
    title: 'Lead Management',
    description: 'Capture, assign, and track leads from multiple sources in real-time.',
    features: [
      { icon: Zap, text: 'Multi-source lead capture (Meta, Website, WhatsApp)' },
      { icon: Target, text: 'Auto-deduplication and intelligent scoring' },
      { icon: ClipboardList, text: 'Real-time assignment with round-robin rules' },
      { icon: Bell, text: 'Instant alerts on new and reassigned leads' },
    ],
    stat: { value: '2,847', label: 'Leads tracked this month', trend: '+18.2%' },
  },
  {
    id: 'sales-crm',
    icon: UserCheck,
    accentColor: 'blue',
    title: 'Sales & CRM',
    description: 'Manage follow-ups, schedule site visits, and track the complete sales pipeline.',
    features: [
      { icon: CalendarCheck, text: 'Systematic follow-up scheduling and reminders' },
      { icon: MapPin, text: 'Site visit and revisit tracking with geo-logs' },
      { icon: TrendingUp, text: 'Full pipeline view: qualification to booking' },
      { icon: Activity, text: 'Agent performance leaderboards and task audits' },
    ],
    stat: { value: '342', label: 'Site visits scheduled', trend: '+12.5%' },
  },
  {
    id: 'communication',
    icon: MessageSquare,
    accentColor: 'emerald',
    title: 'Communication',
    description: 'Integrated WhatsApp messaging and telephony for centralized customer interactions.',
    features: [
      { icon: MessageSquare, text: 'WhatsApp Business API with template messaging' },
      { icon: PhoneCall, text: 'Cloud telephony with call recording and logs' },
      { icon: Headphones, text: 'Unified inbox for all customer touchpoints' },
      { icon: Radio, text: 'Automated triggers for follow-up and reminder messages' },
    ],
    stat: { value: '4,210', label: 'Messages sent this week', trend: '+9.8%' },
  },
  {
    id: 'business-analytics',
    icon: BarChart3,
    accentColor: 'violet',
    title: 'Business Analytics',
    description: 'Executive dashboards featuring live metrics for Lead Health, Sales Health, and Revenue.',
    features: [
      { icon: Gauge, text: 'Business Health Score with composite gauges' },
      { icon: PieChart, text: 'Lead source ROI and conversion breakdowns' },
      { icon: TrendingUp, text: 'Revenue forecasting and collection tracking' },
      { icon: BarChart3, text: 'Custom reporting with real-time data exports' },
    ],
    stat: { value: '78', label: 'Business Health Score', trend: 'Healthy' },
  },
];

/* ──────────────────────────────────────
   Color maps for dynamic styling
   ────────────────────────────────────── */
const accentStyles = {
  orange: {
    iconBg: 'bg-orange-50 border-orange-200',
    iconText: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    featureIcon: 'text-orange-500',
    statBg: 'bg-orange-50/60 border-orange-200/60',
    statTrend: 'text-orange-600',
    hoverBorder: 'hover:border-orange-300',
  },
  blue: {
    iconBg: 'bg-blue-50 border-blue-200',
    iconText: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    featureIcon: 'text-blue-500',
    statBg: 'bg-blue-50/60 border-blue-200/60',
    statTrend: 'text-blue-600',
    hoverBorder: 'hover:border-blue-300',
  },
  emerald: {
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconText: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    featureIcon: 'text-emerald-500',
    statBg: 'bg-emerald-50/60 border-emerald-200/60',
    statTrend: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
  },
  violet: {
    iconBg: 'bg-violet-50 border-violet-200',
    iconText: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    featureIcon: 'text-violet-500',
    statBg: 'bg-violet-50/60 border-violet-200/60',
    statTrend: 'text-violet-600',
    hoverBorder: 'hover:border-violet-300',
  },
};

/* ──────────────────────────────────────
   Module Card Component
   ────────────────────────────────────── */
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
      className={`group bg-white rounded-2xl border border-slate-200/70 shadow-sm ${style.hoverBorder} hover:shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* Card Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${style.iconBg} ${style.iconText} group-hover:scale-105 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${style.badge}`}>
            Core Module
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2">{mod.title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{mod.description}</p>
      </div>

      {/* Feature List */}
      <div className="px-6 pb-4 flex-1">
        <div className="space-y-2.5">
          {mod.features.map((feat, idx) => {
            const FeatIcon = feat.icon;
            return (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                <FeatIcon className={`w-4 h-4 shrink-0 mt-0.5 ${style.featureIcon}`} />
                <span className="leading-snug">{feat.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stat Footer */}
      <div className={`mx-6 mb-6 p-3.5 rounded-xl border ${style.statBg}`}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-extrabold text-slate-900">{mod.stat.value}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{mod.stat.label}</p>
          </div>
          <span className={`text-xs font-semibold ${style.statTrend}`}>
            {mod.stat.trend}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────
   Main Section Export
   ────────────────────────────────────── */
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
            Everything Your Real Estate{' '}
            <span className="text-orange-500">Business Needs</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Four integrated core modules designed to handle every stage of real estate sales — from the first lead inquiry to post-booking customer management.
          </p>
        </motion.div>

        {/* Module Grid — 2×2 on large, stacked on mobile */}
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
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            Request a Full Platform Walkthrough
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#business-health"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            See Business Health Analytics
          </a>
        </motion.div>
      </div>
    </section>
  );
}
