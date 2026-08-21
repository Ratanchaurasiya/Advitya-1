import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Top Nav */}
        <div className="mb-8 sticky top-0 bg-slate-50/90 backdrop-blur-sm py-4 z-10 border-b border-slate-200">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-xl mb-6">
            <ShieldCheck className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-slate-600">
            Evoniq ERP &bull; The Propking Realty &bull; Last Updated August 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 prose prose-slate max-w-none">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Overview & Scope</h2>
            <p className="text-slate-600 leading-relaxed">
              The Propking Realty operates Evoniq ERP, a multi-module cloud B2B SaaS platform designed for comprehensive business management. This Privacy Policy outlines how we collect, use, process, and protect your data while you use our services. This policy applies to all users of the Evoniq ERP platform and its associated services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Meta Platform Data & WhatsApp-to-Lead Integration</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Evoniq operates strictly as a SaaS data processor on behalf of its clients. Any data ingested from Meta platforms (including Lead Ads and WhatsApp-to-Lead integration) is processed solely for CRM/ERP services.
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li><strong>No Data Sale:</strong> Meta platform data is never sold, rented, or shared with unauthorized third parties.</li>
              <li><strong>Multi-Portfolio Isolation:</strong> Data from different client portfolios is strictly isolated and inaccessible to other clients.</li>
              <li><strong>Client Ownership:</strong> The client retains full ownership of all Meta platform data processed through Evoniq ERP.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We collect various types of information to provide and improve our services, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li><strong>Account Information:</strong> Names, email addresses, phone numbers, and company details provided during registration.</li>
              <li><strong>Operational Data:</strong> Data entered into the ERP related to sales, engineering, procurement, and other business functions.</li>
              <li><strong>System Logs:</strong> IP addresses, browser types, access times, and interaction data used for security and performance monitoring.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              Securing your data is a top priority. Evoniq ERP employs industry-standard security measures, including TLS/HTTPS for data in transit and AES-256 encryption for data at rest. Access to the platform is governed by strict Role-Based Access Control (RBAC) to ensure that only authorized personnel can access sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Data Deletion</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to request the deletion of your personal data. For detailed instructions on how to delete your data, including disconnected integrations, please visit our <Link to="/data-deletion" className="text-orange-600 hover:underline">Data Deletion Instructions</Link> page or contact us at <a href="mailto:support@evoniqerp.com" className="text-orange-600 hover:underline">support@evoniqerp.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Changes to Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The latest version will always be available on this page, with the "Last Updated" date reflecting the most recent revisions. Last updated August 2026.
            </p>
          </section>
        </div>

        {/* Callout */}
        <div className="mt-12 p-6 bg-slate-900 rounded-xl border border-slate-800 shadow-lg">
          <p className="text-slate-300 text-sm leading-relaxed text-center">
            <strong>Meta Compliance Statement:</strong> Evoniq ERP adheres strictly to Meta Platform Terms and Developer Policies. Meta platform data is used exclusively to facilitate CRM/ERP services for authorized clients.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} The Propking Realty. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Terms of Service</Link>
            <Link to="/data-deletion" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Data Deletion</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
