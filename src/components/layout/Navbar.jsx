import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Menu, X, ArrowRight, ShieldCheck, Layers, Cpu, Activity } from 'lucide-react';

export default function Navbar({ onOpenLegal, onBookDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Core Modules', href: '#modules', icon: Layers },
    { name: 'Meta Integration', href: '#meta-integration', icon: ShieldCheck },
    { name: 'Real Estate Workflow', href: '#workflow', icon: Cpu },
    { name: 'Business Health', href: '#business-health', icon: Activity },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 text-orange-500" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-lg font-extrabold tracking-tight text-slate-900">Advitya</span>
                <span className="text-xs px-2 py-0.5 font-bold uppercase tracking-wider bg-orange-500 text-white rounded-md">
                  ERP
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                by Advitya Projects
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-2 rounded-lg transition-colors"
            >
              Meta Compliance
            </button>
            <button
              onClick={onBookDemo}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4.5 py-2.5 rounded-xl shadow-sm hover:shadow-md hover:shadow-orange-500/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onBookDemo}
              className="bg-orange-500 text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Icon className="w-4 h-4 text-orange-500" />
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenLegal) onOpenLegal('privacy');
                  }}
                  className="text-left px-3 py-2 text-xs font-medium text-slate-500 hover:text-slate-900"
                >
                  Meta Verification & Privacy Policy
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onBookDemo) onBookDemo();
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm py-3 rounded-xl shadow-sm"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
