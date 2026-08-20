import React from 'react';
import { motion } from 'framer-motion';
import {
  Gauge, Activity, TrendingUp, Users, Target, BarChart3,
  ArrowUpRight, ArrowDownRight, CheckCircle2, Zap,
  HeartPulse, DollarSign, UserCheck, CalendarCheck, ShieldCheck
} from 'lucide-react';

/**
 * Business Health Showcase — Phase 5 (Part 1)
 *
 * Dedicated section for the "Business Health Score" concept,
 * mimicking the gauge from the actual Advitya ERP software.
 * Three sub-scores: Lead Health, Sales Health, Revenue Health.
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
   SVG Gauge Component
   ────────────────────────────────────── */
function HealthGauge({ score, label, color, size = 'large' }) {
  // Arc calculation: full arc is from angle ~150° to ~390° (240° sweep)
  const radius = size === 'large' ? 55 : 40;
  const cx = size === 'large' ? 70 : 50;
  const cy = size === 'large' ? 75 : 55;
  const strokeWidth = size === 'large' ? 12 : 9;
  const viewBox = size === 'large' ? '0 0 140 95' : '0 0 100 70';

  // Start angle = 150°, end angle = 390° (240° sweep)
  const startAngle = 150;
  const sweepAngle = 240;
  const endAngle = startAngle + sweepAngle;
  const filledAngle = startAngle + (sweepAngle * score) / 100;

  const toRad = (deg) => (deg * Math.PI) / 180;
  const polarToCart = (cx, cy, r, angle) => ({
    x: cx + r * Math.cos(toRad(angle)),
    y: cy + r * Math.sin(toRad(angle)),
  });

  const arcStart = polarToCart(cx, cy, radius, startAngle);
  const arcEnd = polarToCart(cx, cy, radius, endAngle);
  const arcFilled = polarToCart(cx, cy, radius, filledAngle);

  const largeArcBg = sweepAngle > 180 ? 1 : 0;
  const filledSweep = (sweepAngle * score) / 100;
  const largeArcFilled = filledSweep > 180 ? 1 : 0;

  const bgPath = `M ${arcStart.x} ${arcStart.y} A ${radius} ${radius} 0 ${largeArcBg} 1 ${arcEnd.x} ${arcEnd.y}`;
  const filledPath = `M ${arcStart.x} ${arcStart.y} A ${radius} ${radius} 0 ${largeArcFilled} 1 ${arcFilled.x} ${arcFilled.y}`;

  const colorMap = {
    emerald: '#10b981',
    blue: '#3b82f6',
    orange: '#f97316',
    violet: '#8b5cf6',
  };
  const strokeColor = colorMap[color] || colorMap.emerald;

  const statusLabel =
    score >= 75 ? 'Healthy' : score >= 50 ? 'Moderate' : 'Needs Attention';
  const statusColor =
    score >= 75
      ? 'text-emerald-600'
      : score >= 50
        ? 'text-amber-600'
        : 'text-rose-600';

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg viewBox={viewBox} className={size === 'large' ? 'w-44 h-[104px]' : 'w-28 h-[72px]'}>
          {/* Background arc */}
          <path d={bgPath} fill="none" stroke="#e2e8f0" strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Filled arc */}
          <path d={filledPath} fill="none" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
          {/* Endpoint dot */}
          <circle cx={arcFilled.x} cy={arcFilled.y} r={size === 'large' ? 5 : 3.5} fill="#0f172a" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 text-center">
          <p className={`${size === 'large' ? 'text-3xl' : 'text-xl'} font-extrabold text-slate-900`}>
            {score}
          </p>
          <p className={`${size === 'large' ? 'text-[10px]' : 'text-[9px]'} font-semibold uppercase tracking-wider ${statusColor}`}>
            {statusLabel}
          </p>
        </div>
      </div>
      {label && (
        <p className={`mt-2 ${size === 'large' ? 'text-sm' : 'text-xs'} font-semibold text-slate-700`}>
          {label}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────
   Health Metric Row
   ────────────────────────────────────── */
function MetricRow({ icon: Icon, label, value, change, up, color }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-slate-900">{value}</span>
        <span className={`text-xs font-semibold flex items-center gap-0.5 ${up ? 'text-emerald-600' : 'text-rose-500'}`}>
          {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {change}
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────
   Main Section
   ────────────────────────────────────── */
export default function BusinessHealthSection() {
  return (
    <section id="business-health" className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
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
            <HeartPulse className="w-3.5 h-3.5" />
            Executive Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Complete{' '}
            <span className="text-orange-500">Business Health</span>{' '}
            at a Glance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Advitya ERP computes a real-time Business Health Score by analyzing lead flow efficiency, sales pipeline velocity, and revenue collection patterns — giving management instant, data-driven visibility.
          </p>
        </motion.div>

        {/* Health Dashboard Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          custom={1}
          className="bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/[0.04] overflow-hidden"
        >
          {/* Dashboard Header Bar */}
          <div className="px-6 sm:px-8 py-4 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Gauge className="w-5 h-5 text-orange-500" />
              <h3 className="text-base font-bold text-white">Business Health Dashboard</h3>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 rounded-md">
                Live
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Real-time analytics engine</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            {/* Top Row: Composite + 3 Sub-Gauges */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-center mb-10">
              {/* Composite Score */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                className="lg:col-span-1 flex flex-col items-center bg-slate-50 rounded-2xl border border-slate-200/60 p-6"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Overall Health
                </p>
                <HealthGauge score={78} label="" color="emerald" size="large" />
                <p className="mt-3 text-xs text-slate-500 text-center">
                  Composite of Lead, Sales & Revenue
                </p>
              </motion.div>

              {/* Sub-scores */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3}
                className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {[
                  {
                    score: 82,
                    label: 'Lead Health',
                    color: 'blue',
                    description: 'Measures lead capture velocity, source diversity, and assignment efficiency.',
                    metrics: [
                      { label: 'Capture Rate', value: '94%' },
                      { label: 'Avg Response Time', value: '12 min' },
                    ],
                  },
                  {
                    score: 76,
                    label: 'Sales Health',
                    color: 'violet',
                    description: 'Tracks pipeline progression, follow-up discipline, and site visit conversion.',
                    metrics: [
                      { label: 'Follow-up Rate', value: '88%' },
                      { label: 'Visit-to-Book', value: '26%' },
                    ],
                  },
                  {
                    score: 71,
                    label: 'Revenue Health',
                    color: 'orange',
                    description: 'Monitors booking value, collection velocity, and revenue forecast accuracy.',
                    metrics: [
                      { label: 'Collection Rate', value: '81%' },
                      { label: 'Forecast Accuracy', value: '92%' },
                    ],
                  },
                ].map((sub, idx) => (
                  <div key={idx} className="flex flex-col items-center bg-white rounded-2xl border border-slate-200/60 p-5 hover:shadow-md hover:border-slate-300 transition-all">
                    <HealthGauge score={sub.score} label={sub.label} color={sub.color} size="small" />
                    <p className="text-[11px] text-slate-500 text-center mt-3 leading-relaxed">
                      {sub.description}
                    </p>
                    <div className="w-full mt-3 pt-3 border-t border-slate-100 flex justify-between text-[10px]">
                      {sub.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <p className="font-bold text-slate-900">{m.value}</p>
                          <p className="text-slate-400 mt-0.5">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* KPI Metrics Table */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4}
              className="bg-slate-50 rounded-2xl border border-slate-200/60 p-5 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-orange-500" />
                Key Performance Indicators
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                  <MetricRow icon={Users} label="Total Active Leads" value="2,847" change="+18.2%" up={true} color="bg-blue-50 text-blue-600" />
                  <MetricRow icon={CalendarCheck} label="Site Visits (MTD)" value="342" change="+12.5%" up={true} color="bg-teal-50 text-teal-600" />
                  <MetricRow icon={Target} label="Conversions (MTD)" value="89" change="+7.3%" up={true} color="bg-orange-50 text-orange-600" />
                </div>
                <div>
                  <MetricRow icon={DollarSign} label="Revenue (MTD)" value="₹14.2 Cr" change="-2.1%" up={false} color="bg-violet-50 text-violet-600" />
                  <MetricRow icon={UserCheck} label="Follow-up Compliance" value="88%" change="+4.6%" up={true} color="bg-emerald-50 text-emerald-600" />
                  <MetricRow icon={TrendingUp} label="Pipeline Velocity" value="18 days" change="-3 days" up={true} color="bg-amber-50 text-amber-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Benefit Chips */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            'Real-time composite scoring',
            'Zero manual data entry',
            'Automated anomaly detection',
            'Executive-ready reports',
          ].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 px-3.5 py-2 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
