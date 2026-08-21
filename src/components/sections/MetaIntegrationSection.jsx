import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Megaphone,
  MessageSquare,
  Globe,
  Phone,
  Building2,
  CalendarCheck,
  Handshake,
  BarChart3,
  ChevronRight,
  ArrowDown,
  Lock,
  Database,
  CheckCircle2,
  Zap,
  Users,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.21, 0.45, 0.27, 0.9] },
  }),
};

function FlowCard({ icon: Icon, label, sublabel, colorClass, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={delay}
      className="flex items-center gap-3 bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 group"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 ${colorClass}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-900 truncate group-hover:text-orange-600 transition-colors">
          {label}
        </p>
        <p className="text-[11px] text-slate-500 truncate">{sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function MetaIntegrationSection() {
  const leadSources = [
    {
      icon: Megaphone,
      label: 'Meta Lead Ads',
      sublabel: 'Facebook & Instagram Forms',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp-to-Lead',
      sublabel: 'Direct Click-to-Chat Inquiries',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: Globe,
      label: 'Website Forms',
      sublabel: 'Custom Webhooks & Landing Pages',
      colorClass: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      icon: Phone,
      label: 'Cloud Telephony',
      sublabel: 'Inbound IVR & Call Tracking',
      colorClass: 'bg-violet-50 text-violet-600 border-violet-100',
    },
  ];

  const hubFeatures = [
    'Real-time webhook/API ingestion',
    'Multi-portfolio lead isolation',
    'AI lead routing & scoring',
    'Compliance audit trail',
  ];

  const outcomes = [
    {
      icon: Phone,
      label: 'AI Agent Calling',
      sublabel: 'Instant automated voice dispatch',
      colorClass: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: CalendarCheck,
      label: 'Automated SLA Follow-up',
      sublabel: 'Triggered scheduling & alerts',
      colorClass: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      icon: Handshake,
      label: 'Deal Pipeline',
      sublabel: 'Stage-tracked closing pipeline',
      colorClass: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      icon: BarChart3,
      label: 'Executive Analytics',
      sublabel: 'Real-time ROI & attribution',
      colorClass: 'bg-violet-50 text-violet-600 border-violet-100',
    },
  ];

  const featureHighlights = [
    {
      icon: Zap,
      title: 'Zero-Latency Ingestion',
      description:
        'Captures WhatsApp-to-Lead conversations and Meta Lead Ad submissions instantly into the centralized customer dashboard.',
      iconBg: 'bg-orange-50 text-orange-600 border-orange-200',
    },
    {
      icon: Users,
      title: 'Multi-Portfolio Support',
      description:
        'Securely handles and isolates lead streams across multiple Meta Business Portfolios for enterprise clients.',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-200',
    },
    {
      icon: CalendarCheck,
      title: 'Automated SLA & Follow-up',
      description:
        'Instantly routes leads to available agents with automated calling triggers and reminder workflows.',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <section id="meta-integration" className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            Meta Verified Tech Provider
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Automated Meta Ads &amp;{' '}
            <span className="text-orange-500">WhatsApp-to-Lead Pipeline</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Evoniq ERP enables authorized B2B clients to connect their Meta Lead Ads and WhatsApp-to-Lead conversations directly into the SaaS CRM. Capture, organize, and route customer inquiries in real-time without leaving your centralized dashboard.
          </p>
        </motion.div>

        {/* ── 3-Column Visual Flow Diagram ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-900/[0.04] p-6 sm:p-8 lg:p-10 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.15fr_auto_1fr] gap-6 lg:gap-6 items-center">
            
            {/* Column 1: Lead Sources */}
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Lead Sources
                </p>
                <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                  Inbound Streams
                </span>
              </div>
              {leadSources.map((source, idx) => (
                <FlowCard
                  key={idx}
                  icon={source.icon}
                  label={source.label}
                  sublabel={source.sublabel}
                  colorClass={source.colorClass}
                  delay={idx + 1}
                />
              ))}
            </div>

            {/* Connecting Arrow 1 (Desktop: ChevronRight, Mobile: ArrowDown) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-1.5 px-2 text-slate-300">
              <div className="w-12 h-px bg-gradient-to-r from-slate-200 to-orange-300" />
              <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500 shadow-xs">
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-orange-300 to-slate-200" />
            </div>
            <div className="flex lg:hidden justify-center py-2">
              <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-500 shadow-xs">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Column 2: Evoniq ERP Hub */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={5}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 rounded-2xl p-6 sm:p-7 text-white text-center shadow-xl shadow-slate-900/25 border border-slate-750 relative overflow-hidden">
                {/* Glow behind icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-orange-500 mx-auto flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30 relative z-10">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">Evoniq ERP Hub</h3>
                <p className="text-xs text-slate-400 mt-1">Centralized Lead &amp; CRM Engine</p>

                <div className="mt-6 space-y-2.5 text-left bg-slate-950/50 rounded-xl p-4 border border-slate-800/80">
                  {hubFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer Data Processing Callout */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-center gap-1.5 text-[11px] text-orange-400 font-semibold">
                  <Lock className="w-3.5 h-3.5 shrink-0" />
                  <span>SaaS Data Processor • Never sold or brokered</span>
                </div>
              </div>
            </motion.div>

            {/* Connecting Arrow 2 (Desktop: ChevronRight, Mobile: ArrowDown) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-1.5 px-2 text-slate-300">
              <div className="w-12 h-px bg-gradient-to-r from-slate-200 to-emerald-300" />
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                <ChevronRight className="w-4 h-4" />
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-emerald-300 to-slate-200" />
            </div>
            <div className="flex lg:hidden justify-center py-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-xs">
                <ArrowDown className="w-4 h-4" />
              </div>
            </div>

            {/* Column 3: Outcomes */}
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-3 px-1">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Automated Outcomes
                </p>
                <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                  Action Dispatch
                </span>
              </div>
              {outcomes.map((outcome, idx) => (
                <FlowCard
                  key={idx}
                  icon={outcome.icon}
                  label={outcome.label}
                  sublabel={outcome.sublabel}
                  colorClass={outcome.colorClass}
                  delay={idx + 6}
                />
              ))}
            </div>

          </div>
        </motion.div>

        {/* ── Feature Highlights (3 Cards Row) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featureHighlights.map((feature, idx) => {
            const FeatureIcon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={idx + 1}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${feature.iconBg}`}>
                  <FeatureIcon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Meta Compliance Trust Banner ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={4}
          className="bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-800 shadow-xl shadow-slate-950/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-sm sm:text-base font-bold text-white tracking-tight">
                Meta Platform Data Compliance &amp; Architecture
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed max-w-2xl">
                Meta Platform Data is ingested solely to provide CRM/ERP services requested by the customer. Data is never sold, repurposed, or shared with unauthorized parties.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 w-full lg:w-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
              <Database className="w-3.5 h-3.5" />
              TLS 1.3 Encrypted
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-lg">
              <Lock className="w-3.5 h-3.5" />
              RBAC Protected
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
