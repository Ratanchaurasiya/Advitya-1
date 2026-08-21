import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  ShieldCheck,
  Mail,
  Lock,
  ArrowUpRight,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer({ onOpenLegal }) {
  const currentYear = new Date().getFullYear();

  const erpModules = [
    { name: 'Real Estate ERP', href: '#real-estate' },
    { name: 'MEP ERP', href: '#mep' },
    { name: 'Construction ERP', href: '#construction' },
    { name: 'Civil Engineering ERP', href: '#civil' },
    { name: 'Business Analytics', href: '#analytics' },
  ];

  const integrations = [
    { name: 'Meta Lead Ads API', href: '#meta-ads' },
    { name: 'WhatsApp-to-Lead Pipeline', href: '#whatsapp-lead' },
    { name: 'Cloud Telephony', href: '#telephony' },
    { name: 'Procurement Automation', href: '#procurement' },
    { name: 'AI Lead Routing', href: '#ai-routing' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Data Deletion', path: '/data-deletion' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top Meta Compliance Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-indigo-950/40 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">Meta Tech Compliance</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-sm font-semibold text-slate-200">Meta Platform Data Protection & Tech Compliance</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 max-w-3xl">
                Evoniq ERP ingests Meta Lead generation and WhatsApp-to-Lead data exclusively for B2B SaaS CRM operations on behalf of authorized clients. Data is never sold, brokered, or repurposed.
              </p>
            </div>
          </div>
          <Link
            to="/privacy-policy"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-xs font-medium text-blue-300 transition-colors shrink-0"
          >
            <span>Read Data Policy</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-orange-500 shadow-md shadow-orange-500/5">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white tracking-tight">Evoniq</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded">
                    ERP
                  </span>
                </div>
                <p className="text-xs text-slate-400">Enterprise Cloud SaaS</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Evoniq ERP is a unified AI-powered cloud SaaS platform for Real Estate, MEP, Construction, and Civil Engineering enterprises.
            </p>

            {/* Genuine Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  A-1118, The Capital, Opp. Hetarth Party Plot, Science City Road, Ahmedabad, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="mailto:support@evoniqerp.com"
                  className="hover:text-white transition-colors"
                >
                  support@evoniqerp.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href="tel:+919173112620"
                  className="hover:text-white transition-colors"
                >
                  +91 91731 12620
                </a>
              </div>
            </div>

            {/* SOC 2 & TLS 1.3 Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>SOC 2 Type II Certified & TLS 1.3 Encryption</span>
            </div>
          </div>

          {/* Column: ERP Modules */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              ERP Modules
            </h3>
            <ul className="space-y-2.5 text-sm">
              {erpModules.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Integrations */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Integrations
            </h3>
            <ul className="space-y-2.5 text-sm">
              {integrations.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Legal & Compliance */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Legal & Compliance
            </h3>
            <ul className="space-y-2.5 text-sm">
              {legalLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenLegal) {
                      onOpenLegal('contact');
                    } else {
                      window.location.href = 'mailto:support@evoniqerp.com';
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors text-left cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {currentYear} Evoniq ERP. All rights reserved. Evoniq ERP is a proprietary multi-module B2B SaaS platform.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/data-deletion" className="hover:text-slate-300 transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
