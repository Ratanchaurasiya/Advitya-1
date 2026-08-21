import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Menu,
  X,
  ArrowRight,
  Layers,
  HardHat,
  Ruler,
  Zap,
  Wrench,
  Phone,
  LogIn
} from 'lucide-react';

export default function Navbar({ onBookDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Real Estate ERP', href: '#real-estate', icon: Building2 },
    { name: 'MEP', href: '#mep', icon: Zap },
    { name: 'Construction', href: '#construction', icon: HardHat },
    { name: 'Civil Engineering', href: '#civil', icon: Ruler },
    { name: 'Meta Integrations', href: '#meta-integration', icon: Layers },
    { name: 'Features', href: '#modules', icon: Wrench },
    { name: 'Contact', href: '#contact', icon: Phone },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    setMobileMenuOpen(false);
    if (onBookDemo) {
      onBookDemo();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-slate-900/70 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:border-orange-500/50 transition-colors">
              <Building2 className="w-5 h-5 text-orange-500 transition-transform group-hover:scale-110 duration-200" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-white">
                  Evoniq
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wider">
                  ERP
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Enterprise Cloud SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#login"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Client Login</span>
            </a>

            <button
              onClick={handleDemoClick}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-medium text-sm shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                  >
                    <IconComponent className="w-4 h-4 text-orange-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
              <a
                href="#login"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700/80 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <LogIn className="w-4 h-4 text-slate-400" />
                <span>Client Login</span>
              </a>

              <button
                onClick={handleDemoClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm shadow-md shadow-orange-500/20 transition-colors cursor-pointer"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
