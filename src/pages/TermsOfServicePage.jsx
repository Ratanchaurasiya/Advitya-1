import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Terms of Service</h1>
          <p className="text-lg text-slate-600">
            Evoniq ERP &bull; Terms of Service
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Service govern your subscription to and use of the Evoniq ERP platform. By accessing or using Evoniq ERP, you agree to be bound by these terms. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">2. Service Provision</h2>
            <p className="text-slate-600 leading-relaxed">
              Evoniq ERP is a comprehensive, multi-module B2B SaaS platform tailored for the Real Estate, MEP (Mechanical, Electrical, and Plumbing), Construction, and Civil Engineering sectors. We grant you a non-exclusive, non-transferable, and revocable license to use the service in accordance with your subscription plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">3. Third-Party Integrations</h2>
            <p className="text-slate-600 leading-relaxed">
              Our platform may integrate with third-party services, including but not limited to Meta Lead Ads, WhatsApp Business API, and various telephony providers. Your use of these integrations is subject to the respective terms and conditions of those third parties. We are not responsible for the performance, availability, or data practices of these third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              The Evoniq ERP platform, including its original content, features, and functionality, is and will remain exclusive proprietary software. Conversely, all client data uploaded or processed through the platform remains the sole property of the respective client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">5. Service Level & Support</h2>
            <p className="text-slate-600 leading-relaxed">
              We strive to provide enterprise-grade uptime and reliability for the Evoniq ERP platform. Should you encounter any issues or require assistance, our support team is available to help. You can contact our support desk at <a href="mailto:support@evoniqerp.com" className="text-orange-600 hover:underline">support@evoniqerp.com</a>. Detailed SLA terms may apply depending on your specific subscription tier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by applicable law, in no event shall Evoniq ERP, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">7. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Ahmedabad, Gujarat, India.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Evoniq ERP. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link to="/data-deletion" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Data Deletion</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
