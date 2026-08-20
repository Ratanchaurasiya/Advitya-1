import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ShieldCheck, FileText, PhoneCall, Mail, MapPin,
  Building2, ExternalLink, CheckCircle2, Clock, Globe,
  Copy, Check, Sparkles
} from 'lucide-react';
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
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Container */}
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
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-600 font-bold">
                {activeDoc === 'privacy' && <ShieldCheck className="w-5 h-5" />}
                {activeDoc === 'terms' && <FileText className="w-5 h-5" />}
                {activeDoc === 'contact' && <Building2 className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  {currentDoc.title}
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Verified
                  </span>
                </h3>
                <p className="text-xs text-slate-500">
                  Advitya Projects • Advitya ERP Meta Compliance • {currentDoc.lastUpdated}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Document Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-white px-6 gap-2 pt-2">
            {[
              { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
              { id: 'terms', label: 'Terms of Service', icon: FileText },
              { id: 'contact', label: 'Contact Us', icon: Building2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDoc === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectDoc && onSelectDoc(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all cursor-pointer ${
                    isActive
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

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 text-slate-700">
            {activeDoc === 'contact' ? (
              /* Dedicated High-End Contact & Corporate Presentation */
              <div className="space-y-6">
                {/* Corporate Header Card */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-6 shadow-md">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 shrink-0">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xl font-bold text-white tracking-tight">Advitya Projects</h4>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 text-white px-2 py-0.5 rounded-md">
                            Advitya ERP
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Enterprise Real Estate Software & Technology Provider
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/10 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Meta Tech Provider Compliant
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3 Main Genuine Contact Cards with Fancy Logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Email Card */}
                  <div className="bg-gradient-to-b from-white to-blue-50/40 rounded-2xl border border-blue-100 p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-600/20">
                          <Mail className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded-md">
                          Email Support
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">Official Email</h5>
                      <p className="text-xs text-slate-500 mt-1">General, Sales & Technical Inquiries</p>
                      <a
                        href="mailto:info@advaityaprojects.com"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700 break-all mt-2 block hover:underline"
                      >
                        info@advaityaprojects.com
                      </a>
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-100/80 flex items-center justify-between">
                      <a
                        href="mailto:info@advaityaprojects.com"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800"
                      >
                        Send Email
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopy('info@advaityaprojects.com', 'email')}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-white transition-colors cursor-pointer"
                        title="Copy email"
                      >
                        {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Contact / Phone Card */}
                  <div className="bg-gradient-to-b from-white to-emerald-50/40 rounded-2xl border border-emerald-100 p-5 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md">
                          Direct Line
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">Direct Contact</h5>
                      <p className="text-xs text-slate-500 mt-1">Enterprise Hotline & Assistance</p>
                      <a
                        href="tel:9173112620"
                        className="text-base font-bold text-emerald-600 hover:text-emerald-700 mt-2 block hover:underline"
                      >
                        +91 9173112620
                      </a>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-100/80 flex items-center justify-between">
                      <a
                        href="tel:9173112620"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                      >
                        Call Now
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() => handleCopy('9173112620', 'phone')}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-white transition-colors cursor-pointer"
                        title="Copy phone number"
                      >
                        {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Registered Address Card */}
                  <div className="bg-gradient-to-b from-white to-orange-50/40 rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-11 h-11 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/70 px-2 py-0.5 rounded-md">
                          Headquarters
                        </span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">Corporate Address</h5>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        A-1118, The Capital, Opp Hetarth Party Plot, Science City Road, Ahmedabad, Gujarat, India.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-orange-100/80 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-orange-700 flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        Ahmedabad, Gujarat
                      </span>
                      <button
                        onClick={() => handleCopy('A-1118, The Capital, Opp Hetarth Party Plot, Science City Road, Ahmedabad', 'address')}
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-white transition-colors cursor-pointer"
                        title="Copy address"
                      >
                        {copiedKey === 'address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Meta Verification & Technical Compliance Details */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <h5 className="text-sm font-bold text-slate-900">
                      Meta Tech Provider Verification & Data Governance Liaison
                    </h5>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advitya ERP integrates authorized Meta platform APIs strictly for lead management, customer communication, and sales workflow automation. For Developer Verification audits, data processing agreements (DPA), or compliance verifications, contact our compliance team directly at{' '}
                    <a href="mailto:info@advaityaprojects.com" className="font-semibold text-orange-600 hover:underline">
                      info@advaityaprojects.com
                    </a>{' '}
                    or by telephone at{' '}
                    <a href="tel:9173112620" className="font-semibold text-orange-600 hover:underline">
                      +91 9173112620
                    </a>.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] text-slate-500 border-t border-slate-200/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Office Hours: Mon – Sat, 9:30 AM – 6:30 PM IST
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Registered Corporate Entity in India
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Privacy & Terms Standard Sections */
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

                {/* Meta Compliance Callout Box in Privacy Tab */}
                {activeDoc === 'privacy' && (
                  <div className="mt-6 p-4 rounded-xl bg-orange-50/60 border border-orange-200/80 text-xs text-orange-950 space-y-1">
                    <p className="font-semibold flex items-center gap-1.5 text-orange-900">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                      Meta Tech Provider Compliance Guarantee
                    </p>
                    <p className="text-slate-700">
                      Advitya ERP adheres strictly to Meta Platform Terms and Developer Policies. Meta platform data is used exclusively to facilitate customer support, lead routing, and CRM operations for authorized clients. Data is never sold, brokered, or used for surveillance.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <span>© {new Date().getFullYear()} Advitya Projects. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <span className="text-slate-400">Ahmedabad, Gujarat, India</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 text-sm font-medium bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
