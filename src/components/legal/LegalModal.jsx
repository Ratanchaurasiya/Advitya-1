import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ShieldCheck, FileText, PhoneCall, Mail, MapPin,
  Building2, ExternalLink, CheckCircle2, Clock, Globe,
  Copy, Check, Trash2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { legalDocuments } from './legalContent';

export default function LegalModal({ isOpen, onClose, activeDoc = 'privacy', onSelectDoc }) {
  const [copiedKey, setCopiedKey] = useState(null);

  if (!isOpen) return null;

  const currentDoc = legalDocuments[activeDoc] || legalDocuments.privacy;

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600">
                {activeDoc === 'privacy' && <ShieldCheck className="w-5 h-5" />}
                {activeDoc === 'terms' && <FileText className="w-5 h-5" />}
                {activeDoc === 'contact' && <Building2 className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{currentDoc.title}</h3>
                <p className="text-xs text-slate-500">Evoniq ERP • Enterprise Compliance • {currentDoc.lastUpdated}</p>
              </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 bg-white px-6 gap-2 pt-2">
            {[
              { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
              { id: 'terms', label: 'Terms of Service', icon: FileText },
              { id: 'contact', label: 'Contact Us', icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectDoc && onSelectDoc(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 cursor-pointer ${
                    activeDoc === tab.id
                      ? 'border-orange-500 text-orange-600 font-semibold'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-6 py-6 text-slate-700">
            {activeDoc === 'contact' ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold">Evoniq ERP</h4>
                          <span className="text-[10px] font-bold uppercase bg-orange-500 px-2 py-0.5 rounded-md text-white">SaaS Platform</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5">Enterprise B2B SaaS Technology Provider</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Meta Tech Provider Compliant
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-b from-white to-blue-50/40 rounded-2xl border border-blue-100 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">Email</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Official Email</h5>
                    <a href="mailto:support@evoniqerp.com" className="text-sm font-semibold text-blue-600 hover:underline mt-2 block break-all">support@evoniqerp.com</a>
                    <div className="mt-4 pt-3 border-t border-blue-100/80 flex items-center justify-between">
                      <a href="mailto:support@evoniqerp.com" className="text-xs font-semibold text-blue-700 flex items-center gap-1">Send Email <ExternalLink className="w-3 h-3" /></a>
                      <button onClick={() => handleCopy('support@evoniqerp.com', 'email')} className="p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer">
                        {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-white to-emerald-50/40 rounded-2xl border border-emerald-100 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">Phone</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Direct Contact</h5>
                    <a href="tel:9173112620" className="text-base font-bold text-emerald-600 hover:underline mt-2 block">+91 91731 12620</a>
                    <div className="mt-4 pt-3 border-t border-emerald-100/80 flex items-center justify-between">
                      <a href="tel:9173112620" className="text-xs font-semibold text-emerald-700 flex items-center gap-1">Call Now <ExternalLink className="w-3 h-3" /></a>
                      <button onClick={() => handleCopy('9173112620', 'phone')} className="p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer">
                        {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-b from-white to-orange-50/40 rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-orange-700 bg-orange-100/70 px-2 py-0.5 rounded-md">HQ</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900">Corporate Address</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">A-1118, The Capital, Opp. Hetarth Party Plot, Science City Road, Ahmedabad, Gujarat, India.</p>
                    <div className="mt-4 pt-3 border-t border-orange-100/80 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-orange-700 flex items-center gap-1"><Globe className="w-3 h-3" />Ahmedabad, Gujarat</span>
                      <button onClick={() => handleCopy('A-1118, The Capital, Opp. Hetarth Party Plot, Science City Road, Ahmedabad', 'address')} className="p-1.5 text-slate-400 hover:text-slate-700 cursor-pointer">
                        {copiedKey === 'address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <h5 className="text-sm font-bold text-slate-900">Meta Tech Provider Verification & Data Governance</h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For Meta Developer App Reviews, WhatsApp-to-Lead Data Processing Agreements, or API integration inquiries, contact us at{' '}
                    <a href="mailto:support@evoniqerp.com" className="font-semibold text-orange-600 hover:underline">support@evoniqerp.com</a>{' '}
                    or call <a href="tel:9173112620" className="font-semibold text-orange-600 hover:underline">+91 91731 12620</a>.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-4 text-[11px] text-slate-500 border-t border-slate-200/60">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-slate-400" />Mon – Sat, 9:30 AM – 6:30 PM IST</span>
                    <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />Registered Entity in India</span>
                  </div>
                </div>

                {/* Links to dedicated legal pages */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link to="/privacy-policy" onClick={onClose} className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Full Privacy Policy
                  </Link>
                  <Link to="/data-deletion" onClick={onClose} className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Trash2 className="w-3.5 h-3.5" /> Data Deletion
                  </Link>
                  <Link to="/terms-of-service" onClick={onClose} className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Terms of Service
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {currentDoc.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      {sec.heading}
                    </h4>
                    <div className="text-sm leading-relaxed text-slate-600 whitespace-pre-line pl-3.5 border-l-2 border-slate-100">
                      {sec.content}
                    </div>
                  </div>
                ))}
                {activeDoc === 'privacy' && (
                  <div className="mt-6 p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs space-y-1">
                    <p className="font-semibold flex items-center gap-1.5 text-orange-900">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                      Meta Tech Provider Compliance Guarantee
                    </p>
                    <p className="text-slate-700">
                      Evoniq ERP adheres strictly to Meta Platform Terms and Developer Policies. Meta platform data is used exclusively to facilitate CRM/ERP services for authorized clients. Data is never sold, brokered, or used for surveillance.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Evoniq ERP. All rights reserved.</span>
            <button onClick={onClose} className="px-4 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 cursor-pointer">Close</button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
