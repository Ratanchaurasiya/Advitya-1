import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import ProblemSolutionSection from './components/hero/ProblemSolutionSection';
import MetaIntegrationSection from './components/sections/MetaIntegrationSection';
import ModuleGridSection from './components/sections/ModuleGridSection';
import BusinessHealthSection from './components/sections/BusinessHealthSection';
import FinalCTASection from './components/sections/FinalCTASection';
import LegalModal from './components/legal/LegalModal';
import DemoModal from './components/modals/DemoModal';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DataDeletionPage from './pages/DataDeletionPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

/* ─────────────────────────────────────
   Landing Page — main single-page layout
   ───────────────────────────────────── */
function LandingPage({ onBookDemo }) {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <HeroSection onBookDemo={onBookDemo} />

      {/* Problem & Solution */}
      <ProblemSolutionSection />

      {/* Meta Integration & WhatsApp-to-Lead Pipeline */}
      <MetaIntegrationSection />

      {/* 4 Core ERP Modules */}
      <ModuleGridSection onBookDemo={onBookDemo} />

      {/* Business Health Analytics Dashboard */}
      <BusinessHealthSection />

      {/* Final Conversion CTA */}
      <FinalCTASection onBookDemo={onBookDemo} />
    </main>
  );
}

/* ─────────────────────────────────────
   App Shell — routing + global modals
   ───────────────────────────────────── */
export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState('privacy');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenLegal = (docType = 'privacy') => {
    setActiveLegalDoc(docType);
    setLegalModalOpen(true);
  };

  const handleBookDemo = () => setDemoModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Global Navbar */}
      <Navbar
        onOpenLegal={handleOpenLegal}
        onBookDemo={handleBookDemo}
      />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage onBookDemo={handleBookDemo} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/data-deletion" element={<DataDeletionPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>

      {/* Global Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Global Modals */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        activeDoc={activeLegalDoc}
        onSelectDoc={(doc) => setActiveLegalDoc(doc)}
      />

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
