import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, ArrowRight, Megaphone, Camera, Globe, MessageSquare,
  Users, UserCheck, MapPin, Handshake, Building2, CheckCircle2,
  Zap, ArrowDown, ChevronRight, Lock, Database, BarChart3
} from 'lucide-react';

/**
 * Meta Integration & Workflow Section — Phase 3
 *
 * Approved copy from 06_website_copy_and_content.md:
 *   Headline: "Seamless Multi-Source Lead Integration"
 *   Copy: "Advitya ERP enables authorized businesses to connect their
 *     approved lead-generation sources—including Meta platforms—directly
 *     with the ERP. Capture, organize, and route relevant customer
 *     inquiries systematically without leaving your CRM."
 *
 * Visual: Flowchart showing Meta/Social → Advitya ERP → CRM → Sales Team
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

/* ──────────────────────────────────────────────
   Lead Source Icons (left side of flow)
   ────────────────────────────────────────────── */
function LeadSourceCard({ icon: Icon, label, sublabel, color, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={delay}
      className="flex items-center gap-3 bg-white rounded-xl border border-slate-200/70 p-3.5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
    >
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900 truncate">{label}</p>
        <p className="text-[11px] text-slate-500 truncate">{sublabel}</p>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Workflow Pipeline Stage
   ────────────────────────────────────────────── */
function WorkflowStage({ icon: Icon, label, number, color, delay }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={delay}
      className="flex flex-col items-center text-center group"
    >
      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${color} transition-transform group-hover:scale-105`}>
        <Icon className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center shadow">
          {number}
        </span>
      </div>
      <p className="mt-2.5 text-xs font-semibold text-slate-800 leading-tight max-w-[90px]">{label}</p>
    </motion.div>
  );
}

export default function MetaIntegrationSection() {
  const leadSources = [
    { icon: Megaphone, label: 'Meta Lead Ads', sublabel: 'Facebook & Instagram Forms', color: 'bg-blue-50 text-blue-600' },
    { icon: Camera, label: 'Instagram DMs', sublabel: 'Direct message inquiries', color: 'bg-pink-50 text-pink-600' },
    { icon: Globe, label: 'Website Forms', sublabel: 'Landing page captures', color: 'bg-indigo-50 text-indigo-600' },
    { icon: MessageSquare, label: 'WhatsApp Business', sublabel: 'Incoming chat leads', color: 'bg-emerald-50 text-emerald-600' },
  ];

  const workflowStages = [
    { icon: Zap, label: 'Lead Capture', number: '1', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    { icon: Users, label: 'Qualification', number: '2', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    { icon: UserCheck, label: 'Assignment', number: '3', color: 'bg-violet-50 text-violet-600 border-violet-200' },
    { icon: MessageSquare, label: 'Follow Up', number: '4', color: 'bg-sky-50 text-sky-600 border-sky-200' },
    { icon: MapPin, label: 'Site Visit', number: '5', color: 'bg-teal-50 text-teal-600 border-teal-200' },
    { icon: Handshake, label: 'Negotiation', number: '6', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    { icon: Building2, label: 'Booking', number: '7', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    { icon: BarChart3, label: 'Management', number: '8', color: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  ];

  return (
    <section id="meta-integration" className="relative py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          custom={0}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Meta Verified Tech Provider
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Seamless Multi-Source{' '}
            <span className="text-orange-500">Lead Integration</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Advitya ERP enables authorized businesses to connect their approved lead-generation sources—including Meta platforms—directly with the ERP. Capture, organize, and route relevant customer inquiries systematically without leaving your CRM.
          </p>
        </motion.div>

        {/* ── Visual Lead Flow Diagram ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-900/[0.04] p-6 sm:p-8 lg:p-10 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 lg:gap-6 items-center">

            {/* Column 1: Lead Sources */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left">
                Lead Sources
              </p>
              {leadSources.map((source, idx) => (
                <LeadSourceCard key={idx} {...source} delay={idx + 2} />
              ))}
            </div>

            {/* Arrow 1 */}
            <div className="hidden lg:flex flex-col items-center gap-1 text-slate-300">
              <div className="w-16 h-px bg-gradient-to-r from-slate-200 to-orange-300"></div>
              <ChevronRight className="w-5 h-5 text-orange-400" />
              <div className="w-16 h-px bg-gradient-to-r from-orange-300 to-slate-200"></div>
            </div>
            <div className="flex lg:hidden justify-center">
              <ArrowDown className="w-6 h-6 text-orange-400" />
            </div>

            {/* Column 2: Advitya ERP Hub */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={6}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white text-center shadow-xl shadow-slate-900/20">
                <div className="w-14 h-14 rounded-2xl bg-orange-500 mx-auto flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold">Advitya ERP</h3>
                <p className="text-xs text-slate-400 mt-1">Centralized CRM Engine</p>

                <div className="mt-5 space-y-2 text-left">
                  {[
                    'Auto-capture & deduplicate leads',
                    'Intelligent assignment rules',
                    'Pipeline stage tracking',
                    'Audit trail & compliance logs',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Data protection callout */}
                <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-center gap-1.5 text-[10px] text-orange-400 font-semibold">
                  <Lock className="w-3 h-3" />
                  Data encrypted • Never sold or brokered
                </div>
              </div>
            </motion.div>

            {/* Arrow 2 */}
            <div className="hidden lg:flex flex-col items-center gap-1 text-slate-300">
              <div className="w-16 h-px bg-gradient-to-r from-slate-200 to-emerald-300"></div>
              <ChevronRight className="w-5 h-5 text-emerald-500" />
              <div className="w-16 h-px bg-gradient-to-r from-emerald-300 to-slate-200"></div>
            </div>
            <div className="flex lg:hidden justify-center">
              <ArrowDown className="w-6 h-6 text-emerald-500" />
            </div>

            {/* Column 3: Sales Team Outcomes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              custom={7}
              className="space-y-3"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 text-center lg:text-left">
                Sales Team Outcomes
              </p>
              {[
                { icon: Users, label: 'Assigned Leads', sublabel: 'Auto-routed to the right agent', color: 'bg-emerald-50 text-emerald-600' },
                { icon: MapPin, label: 'Site Visit Scheduling', sublabel: 'Calendar-synced appointments', color: 'bg-blue-50 text-blue-600' },
                { icon: Handshake, label: 'Deal Negotiation', sublabel: 'Stage-tracked closing pipeline', color: 'bg-amber-50 text-amber-600' },
                { icon: BarChart3, label: 'Performance Analytics', sublabel: 'Live dashboards & health scores', color: 'bg-violet-50 text-violet-600' },
              ].map((item, idx) => (
                <LeadSourceCard key={idx} {...item} delay={idx + 8} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Real Estate Workflow Pipeline ── */}
        <div id="workflow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-full mb-4">
              <Zap className="w-3.5 h-3.5 text-orange-500" />
              End-to-End Real Estate Workflow
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              From First Click to Final Booking
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Every stage of the real estate sales cycle — from initial lead capture through qualification, site visits, negotiation, and booking — managed in one continuous pipeline inside Advitya ERP.
            </p>
          </motion.div>

          {/* Workflow stages — horizontal on desktop, vertical on mobile */}
          <div className="bg-white rounded-2xl border border-slate-200/70 shadow-sm p-6 sm:p-8">
            {/* Desktop: Horizontal */}
            <div className="hidden md:flex items-start justify-between gap-2">
              {workflowStages.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <WorkflowStage {...stage} delay={idx + 1} />
                  {idx < workflowStages.length - 1 && (
                    <div className="flex items-center pt-5 text-slate-300">
                      <div className="w-6 lg:w-10 h-px bg-gradient-to-r from-slate-200 to-slate-300"></div>
                      <ChevronRight className="w-4 h-4 text-slate-400 -mx-1" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile: Vertical */}
            <div className="md:hidden grid grid-cols-2 gap-4">
              {workflowStages.map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={idx}
                  className="flex items-center gap-3"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${stage.color}`}>
                    <stage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{stage.label}</p>
                    <p className="text-[10px] text-slate-500">Step {stage.number}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Meta Compliance Trust Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mt-8 bg-slate-900 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Meta Platform Data Compliance</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Lead data from Meta APIs is processed exclusively for CRM operations. Data is never sold, brokered, or repurposed.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                <Database className="w-3 h-3" />
                TLS 1.3 Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
                <Lock className="w-3 h-3" />
                RBAC Protected
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
