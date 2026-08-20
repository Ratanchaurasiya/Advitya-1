import React, { useState } from 'react';
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

export default function App() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState('privacy');
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenLegal = (docType = 'privacy') => {
    setActiveLegalDoc(docType);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Global Navbar */}
      <Navbar
        onOpenLegal={handleOpenLegal}
        onBookDemo={() => setDemoModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Phase 2: Hero Section */}
        <HeroSection onBookDemo={() => setDemoModalOpen(true)} />

        {/* Phase 2: Problem & Solution (Before / After Advitya) */}
        <ProblemSolutionSection />

        {/* Phase 3: Meta Integration & Workflow */}
        <MetaIntegrationSection />

        {/* Phase 4: Module Grid Architecture */}
        <ModuleGridSection onBookDemo={() => setDemoModalOpen(true)} />

        {/* Phase 5: Business Health Showcase */}
        <BusinessHealthSection />

        {/* Phase 5: Final Conversion CTA */}
        <FinalCTASection onBookDemo={() => setDemoModalOpen(true)} />
      </main>

      {/* Global Meta-Compliant Footer */}
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
