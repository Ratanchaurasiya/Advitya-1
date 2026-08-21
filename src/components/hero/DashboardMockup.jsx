import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  LayoutDashboard,
  Users,
  UserCheck,
  MapPin,
  MessageSquare,
  BarChart3,
  Zap,
  HardHat,
  Layers,
  Home,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  ArrowDownRight,
  Gauge,
  Activity,
  CalendarCheck,
  Target,
  TrendingUp,
} from 'lucide-react';

/**
 * High-fidelity coded mockup of the Evoniq ERP Executive Dashboard.
 * Features browser chrome, dark sidebar with full navigation, live metrics,
 * Business Health Score SVG arc gauge, lead pipeline stages, and today's activity.
 */
export default function DashboardMockup() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Executive Dashboard', active: true },
    { icon: Users, label: 'Lead Management', active: false },
    { icon: UserCheck, label: 'Sales & CRM', active: false },
    { icon: MapPin, label: 'Site Visit Tracker', active: false },
    { icon: MessageSquare, label: 'Communications', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Zap, label: 'MEP Module', active: false },
    { icon: HardHat, label: 'Construction', active: false },
    { icon: Layers, label: 'Civil Engineering', active: false },
    { icon: Home, label: 'Inventory', active: false },
  ];

  const metricCards = [
    {
      label: 'Total Leads',
      value: '2,847',
      change: '+18.2%',
      up: true,
      icon: Users,
      color: 'text-blue-600 bg-blue-50',
    },
    {
      label: 'Site Visits',
      value: '342',
      change: '+12.5%',
      up: true,
      icon: MapPin,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      label: 'Conversions',
      value: '89',
      change: '+7.3%',
      up: true,
      icon: Target,
      color: 'text-orange-600 bg-orange-50',
    },
    {
      label: 'Revenue',
      value: '₹14.2Cr',
      change: '-2.1%',
      up: false,
      icon: TrendingUp,
      color: 'text-violet-600 bg-violet-50',
    },
  ];

  const pipelineStages = [
    { stage: 'New Leads', count: 1240, pct: 100, color: 'bg-blue-500' },
    { stage: 'Qualified', count: 842, pct: 68, color: 'bg-indigo-500' },
    { stage: 'Site Visits', count: 342, pct: 28, color: 'bg-violet-500' },
    { stage: 'Negotiation', count: 156, pct: 13, color: 'bg-orange-500' },
    { stage: 'Booked', count: 89, pct: 7, color: 'bg-emerald-500' },
  ];

  const activityStats = [
    {
      label: 'Follow-ups Due',
      val: '34',
      status: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      label: 'Site Visits Today',
      val: '12',
      status: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      label: 'New Assignments',
      val: '18',
      status: 'bg-violet-50 text-violet-700 border-violet-200',
    },
    {
      label: 'Bookings Pending',
      val: '6',
      status: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10 bg-white"
    >
      {/* Browser Chrome Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
        </div>
        <div className="flex-1 max-w-md mx-auto flex items-center gap-2 bg-white rounded-lg px-3 py-1 text-xs text-slate-400 border border-slate-200 shadow-xs">
          <Search className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate font-mono text-[11px] text-slate-600">
            app.evoniqerp.com/executive-dashboard
          </span>
        </div>
      </div>

      <div className="flex min-h-[460px]">
        {/* Dark Slate-900 Sidebar — hidden on small screens */}
        <aside className="hidden sm:flex w-52 lg:w-56 bg-slate-900 text-slate-300 flex-col shrink-0 border-r border-slate-800">
          {/* Logo Area */}
          <div className="px-4 py-3.5 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center shadow-sm shadow-orange-500/30 shrink-0">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white tracking-wide">Evoniq</p>
                <p className="text-[10px] font-semibold text-orange-400 tracking-wider">ERP</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-2.5 py-3 space-y-0.5 text-xs overflow-y-auto">
            {navItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
                    item.active
                      ? 'bg-orange-500/15 text-orange-400 font-semibold border-l-2 border-orange-500'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate text-[11px]">{item.label}</span>
                </div>
              );
            })}
          </nav>

          {/* Sidebar Footer / Settings */}
          <div className="px-2.5 py-2.5 border-t border-slate-800">
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors cursor-pointer text-xs">
              <Settings className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[11px]">Settings</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-50 flex flex-col min-w-0">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 lg:px-6 py-3 bg-white border-b border-slate-200 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-orange-500" />
              </div>
              <h2 className="text-sm font-bold text-slate-900">Executive Dashboard</h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative p-1 text-slate-400 hover:text-slate-600 cursor-pointer rounded-lg hover:bg-slate-100 transition-colors">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-orange-500 rounded-full" />
              </div>
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                EP
              </div>
            </div>
          </div>

          {/* Dashboard Body Grid */}
          <div className="p-3.5 lg:p-5 space-y-3.5 overflow-y-auto">
            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {metricCards.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200/80 p-3 lg:p-3.5 shadow-xs hover:border-slate-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center ${metric.color}`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span
                        className={`text-[10px] font-semibold flex items-center gap-0.5 px-1.5 py-0.5 rounded-md ${
                          metric.up
                            ? 'text-emerald-700 bg-emerald-50 border border-emerald-200/60'
                            : 'text-rose-700 bg-rose-50 border border-rose-200/60'
                        }`}
                      >
                        {metric.up ? (
                          <ArrowUpRight className="w-3 h-3" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3" />
                        )}
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-lg lg:text-xl font-extrabold text-slate-900 tracking-tight leading-none">
                      {metric.value}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-1 font-medium">{metric.label}</p>
                  </div>
                );
              })}
            </div>

            {/* 2-Column Row: Business Health Score + Lead Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
              {/* Business Health Gauge */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/80 p-3.5 flex flex-col items-center justify-between shadow-xs">
                <div className="w-full flex items-center justify-between mb-2">
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-orange-500" />
                    Business Health Score
                  </p>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                    Optimal
                  </span>
                </div>

                {/* SVG Gauge Arc */}
                <div className="relative w-36 h-20 my-1">
                  <svg viewBox="0 0 140 80" className="w-full h-full">
                    {/* Background Arc */}
                    <path
                      d="M 15 75 A 55 55 0 0 1 125 75"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Colored Health Arc (~78% fill) */}
                    <path
                      d="M 15 75 A 55 55 0 0 1 113 35"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Needle Indicator Dot */}
                    <circle cx="113" cy="35" r="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                  <div className="absolute inset-x-0 bottom-0 text-center">
                    <p className="text-2xl font-extrabold text-slate-900 leading-none">78</p>
                    <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider mt-0.5">
                      Healthy
                    </p>
                  </div>
                </div>

                {/* Health Breakdown */}
                <div className="w-full pt-2 border-t border-slate-100 flex items-center justify-around text-[10px] text-slate-600">
                  <span className="flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Lead: 82
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500" /> Sales: 76
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-orange-500" /> Revenue: 71
                  </span>
                </div>
              </div>

              {/* Lead Pipeline Bars */}
              <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-xs flex flex-col justify-between">
                <p className="text-xs font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-500" />
                  Lead Pipeline
                </p>
                <div className="space-y-2">
                  {pipelineStages.map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="text-[10px] text-slate-600 w-24 lg:w-28 truncate font-medium">
                        {stage.stage}
                      </span>
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${stage.color}`}
                          style={{ width: `${stage.pct}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 w-9 text-right font-mono">
                        {stage.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Today's Activity Row */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-3.5 shadow-xs">
              <p className="text-xs font-bold text-slate-800 mb-2.5 flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-500" />
                Today's Activity
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 text-[10px]">
                {activityStats.map((item, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg border px-3 py-2 font-medium transition-all ${item.status}`}
                  >
                    <p className="text-lg font-extrabold tracking-tight leading-tight">
                      {item.val}
                    </p>
                    <p className="mt-0.5 opacity-90 text-[10px] font-medium truncate">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
