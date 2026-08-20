import React from 'react';
import { 
  Users, TrendingUp, Building2, PhoneCall, CalendarCheck, 
  BarChart3, Activity, Target, ArrowUpRight, ArrowDownRight,
  Bell, Search, Settings, ChevronDown, LayoutDashboard,
  UserCheck, MapPin, MessageSquare, Gauge, Home
} from 'lucide-react';

/**
 * High-fidelity coded mockup of the Advitya ERP Executive Dashboard.
 * This mirrors the actual software's Business Health Score gauge,
 * lead metrics, and sidebar navigation — all built with Tailwind.
 */
export default function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xl shadow-slate-900/10 bg-white">
      {/* Simulated Browser Chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-400"></span>
          <span className="w-3 h-3 rounded-full bg-amber-400"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
        </div>
        <div className="flex-1 ml-3 flex items-center gap-2 bg-white rounded-lg px-3 py-1 text-xs text-slate-400 border border-slate-200">
          <Search className="w-3 h-3" />
          <span>app.advityaerp.com/executive-dashboard</span>
        </div>
      </div>

      <div className="flex min-h-[380px] sm:min-h-[440px]">
        {/* Sidebar — hidden on very small screens */}
        <aside className="hidden sm:flex w-52 lg:w-56 bg-slate-900 text-slate-300 flex-col shrink-0">
          {/* Logo Area */}
          <div className="px-4 py-4 border-b border-slate-700/60">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <Building2 className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-wide uppercase">Advitya</p>
                <p className="text-[10px] text-slate-400">Projects ERP</p>
              </div>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 px-3 py-4 space-y-1 text-xs">
            {[
              { icon: LayoutDashboard, label: 'Executive Dashboard', active: true },
              { icon: Users, label: 'Lead Management', active: false },
              { icon: UserCheck, label: 'Sales & CRM', active: false },
              { icon: MapPin, label: 'Site Visit Tracker', active: false },
              { icon: MessageSquare, label: 'Communications', active: false },
              { icon: BarChart3, label: 'Analytics', active: false },
              { icon: Home, label: 'Inventory', active: false },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors ${
                    item.active
                      ? 'bg-orange-500/15 text-orange-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </div>
              );
            })}
          </nav>

          {/* Sidebar footer */}
          <div className="px-3 py-3 border-t border-slate-700/60">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-400 text-xs">
              <Settings className="w-3.5 h-3.5" />
              <span>Settings</span>
            </div>
          </div>
        </aside>

        {/* Main Dashboard Content */}
        <div className="flex-1 bg-gray-50 overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 lg:px-6 py-3 bg-white border-b border-slate-200">
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4 text-orange-500" />
              <h2 className="text-sm font-bold text-slate-900">Executive Dashboard</h2>
              <span className="hidden sm:inline text-[10px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md">
                Live
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Bell className="w-4 h-4" />
              <div className="w-6 h-6 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center">
                AP
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="p-3 lg:p-5 space-y-4">
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: 'Total Leads', value: '2,847', change: '+18.2%', up: true, icon: Users, color: 'text-blue-600 bg-blue-50' },
                { label: 'Site Visits', value: '342', change: '+12.5%', up: true, icon: MapPin, color: 'text-emerald-600 bg-emerald-50' },
                { label: 'Conversions', value: '89', change: '+7.3%', up: true, icon: Target, color: 'text-orange-600 bg-orange-50' },
                { label: 'Revenue', value: '₹14.2Cr', change: '-2.1%', up: false, icon: TrendingUp, color: 'text-violet-600 bg-violet-50' },
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200/70 p-3 lg:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${metric.color}`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className={`text-[10px] font-semibold flex items-center gap-0.5 ${metric.up ? 'text-emerald-600' : 'text-rose-500'}`}>
                        {metric.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {metric.change}
                      </span>
                    </div>
                    <p className="text-lg lg:text-xl font-extrabold text-slate-900 leading-none">{metric.value}</p>
                    <p className="text-[10px] text-slate-500 mt-1">{metric.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Business Health Score + Lead Pipeline */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
              {/* Business Health Gauge */}
              <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200/70 p-4 flex flex-col items-center justify-center">
                <p className="text-xs font-semibold text-slate-700 mb-3 flex items-center gap-1.5">
                  <Gauge className="w-3.5 h-3.5 text-orange-500" />
                  Business Health Score
                </p>
                {/* Gauge Visual */}
                <div className="relative w-36 h-20">
                  <svg viewBox="0 0 140 80" className="w-full h-full">
                    {/* Background Arc */}
                    <path
                      d="M 15 75 A 55 55 0 0 1 125 75"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Colored Arc — ~78% health */}
                    <path
                      d="M 15 75 A 55 55 0 0 1 113 35"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    {/* Needle dot */}
                    <circle cx="113" cy="35" r="5" fill="#0f172a" />
                  </svg>
                  <div className="absolute inset-x-0 bottom-0 text-center">
                    <p className="text-2xl font-extrabold text-slate-900">78</p>
                    <p className="text-[9px] font-medium text-emerald-600 uppercase tracking-wider">Healthy</p>
                  </div>
                </div>
                {/* Health Breakdown */}
                <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-500">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Lead: 82</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Sales: 76</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Revenue: 71</span>
                </div>
              </div>

              {/* Lead Pipeline Summary */}
              <div className="lg:col-span-3 bg-white rounded-xl border border-slate-200/70 p-4">
                <p className="text-xs font-semibold text-slate-700 mb-3 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-blue-500" />
                  Lead Pipeline
                </p>
                <div className="space-y-2.5">
                  {[
                    { stage: 'New Leads', count: 1240, pct: 100, color: 'bg-blue-500' },
                    { stage: 'Qualified', count: 842, pct: 68, color: 'bg-indigo-500' },
                    { stage: 'Site Visits Scheduled', count: 342, pct: 28, color: 'bg-violet-500' },
                    { stage: 'Negotiation', count: 156, pct: 13, color: 'bg-orange-500' },
                    { stage: 'Booked', count: 89, pct: 7, color: 'bg-emerald-500' },
                  ].map((stage, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-600 w-28 lg:w-32 truncate font-medium">{stage.stage}</span>
                      <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${stage.color}`} style={{ width: `${stage.pct}%` }}></div>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-700 w-8 text-right">{stage.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity Row */}
            <div className="bg-white rounded-xl border border-slate-200/70 p-4">
              <p className="text-xs font-semibold text-slate-700 mb-2.5 flex items-center gap-1.5">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-500" />
                Today's Activity
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-[10px]">
                {[
                  { label: 'Follow-ups Due', val: '34', status: 'bg-amber-50 text-amber-700 border-amber-200' },
                  { label: 'Site Visits Today', val: '12', status: 'bg-blue-50 text-blue-700 border-blue-200' },
                  { label: 'New Assignments', val: '18', status: 'bg-violet-50 text-violet-700 border-violet-200' },
                  { label: 'Bookings Pending', val: '6', status: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
                ].map((item, idx) => (
                  <div key={idx} className={`rounded-lg border px-3 py-2.5 font-medium ${item.status}`}>
                    <p className="text-lg font-extrabold">{item.val}</p>
                    <p className="mt-0.5 opacity-80">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
