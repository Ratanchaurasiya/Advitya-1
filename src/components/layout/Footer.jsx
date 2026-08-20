import React from 'react';
import {
  Building2, ShieldCheck, Mail, Lock, CheckCircle2,
  ArrowUpRight, Phone, MapPin, Globe
} from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Meta Compliance Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Meta Platform Data Protection & Tech Compliance</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Advitya ERP connects Meta Lead generation sources exclusively for real estate CRM management. We strictly do not sell, broker, or repurpose customer data.
                </p>
              </div>
            </div>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 bg-slate-800/80 hover:bg-slate-800 px-3.5 py-2 rounded-lg border border-slate-700 transition-colors shrink-0 cursor-pointer"
            >
              Read Data Policy
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Col (2 cols wide on LG) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-white border border-slate-700">
                <Building2 className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-white">Advitya</span>
                  <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider bg-orange-500 text-white rounded-md">
                    ERP
                  </span>
                </div>
                <span className="text-xs text-slate-400">by Advitya Projects</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Advitya ERP is the comprehensive Operating System for modern real estate developers, agencies, and project sales teams. Centralizing leads, pipeline execution, and business health.
            </p>

            {/* Genuine Contact Box inside Footer */}
            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>A-1118, The Capital, Opp Hetarth Party Plot, Science City Road, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@advaityaprojects.com" className="hover:text-white transition-colors">
                  info@advaityaprojects.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:9173112620" className="hover:text-white transition-colors">
                  +91 9173112620
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                SOC 2 & TLS 1.3 Encryption Standard
              </span>
            </div>
          </div>

          {/* Col 2: Platform Modules */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Core Modules
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#modules" className="hover:text-white transition-colors">Lead Management</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Sales & CRM Engine</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Site Visit Tracker</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Omnichannel Comms</a></li>
              <li><a href="#business-health" className="hover:text-white transition-colors">Business Health Analytics</a></li>
            </ul>
          </div>

          {/* Col 3: Integrations & Workflows */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Integrations
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#meta-integration" className="hover:text-white transition-colors">Meta Lead Ads API</a></li>
              <li><a href="#meta-integration" className="hover:text-white transition-colors">Facebook Instant Forms</a></li>
              <li><a href="#meta-integration" className="hover:text-white transition-colors">WhatsApp Business Gateway</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Telephony & Cloud IVR</a></li>
              <li><a href="#workflow" className="hover:text-white transition-colors">Inventory Booking Pipeline</a></li>
            </ul>
          </div>

          {/* Col 4: Mandatory Compliance & Legal */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Compliance
            </h5>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5 text-orange-400" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('contact')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-left text-orange-400 font-semibold cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Contact & Office Details
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal && onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left text-xs text-slate-500 pt-1"
                >
                  Meta Data Usage Terms
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Attribution */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-medium text-slate-400">
            Advitya ERP — A real-estate business management platform by Advitya Projects.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => onOpenLegal('privacy')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegal('terms')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span>•</span>
            <button onClick={() => onOpenLegal('contact')} className="hover:text-slate-300 transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
