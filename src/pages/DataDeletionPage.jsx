import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, Mail, Phone } from 'lucide-react';

export default function DataDeletionPage() {
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
            <Trash2 className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Data Deletion Instructions</h1>
          <p className="text-lg text-slate-600">
            How to remove your personal and integration data from Evoniq ERP
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Self-Service Data Deletion (Dashboard)</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold">1</div>
              <div>
                <p className="text-slate-700 pt-1">Log into your Evoniq ERP dashboard at <a href="https://app.evoniqerp.com" className="text-orange-600 hover:underline">app.evoniqerp.com</a></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold">2</div>
              <div>
                <p className="text-slate-700 pt-1">Navigate to <strong>Settings</strong> &gt; <strong>Data Management</strong> &gt; <strong>Connected Integrations</strong></p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold">3</div>
              <div>
                <p className="text-slate-700 pt-1">Select the Meta/WhatsApp integration you wish to disconnect</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold">4</div>
              <div>
                <p className="text-slate-700 pt-1">Click the <strong>"Disconnect & Delete Data"</strong> button to remove all associated lead records</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-semibold">5</div>
              <div>
                <p className="text-slate-700 pt-1">Confirm the deletion in the verification dialog that appears</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-lg border border-slate-800 p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Alternative: Manual Request via Support</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            If you prefer or if you no longer have access to your account, you can request data deletion by contacting our support team directly.
          </p>
          <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
            <p className="text-slate-300 mb-2">Email <a href="mailto:support@evoniqerp.com" className="text-orange-400 hover:text-orange-300">support@evoniqerp.com</a> with the subject:</p>
            <code className="block bg-slate-900 text-slate-200 p-3 rounded-lg border border-slate-700 font-mono text-sm mb-4">
              Data Deletion Request
            </code>
            <p className="text-slate-300 mb-2">Please include the following in your email:</p>
            <ul className="list-disc pl-5 text-slate-300 space-y-1">
              <li>Your Organization Name</li>
              <li>Your Account ID</li>
              <li>The specific Meta Business Portfolio / WhatsApp account to dissociate</li>
            </ul>
          </div>
          <div className="flex items-start gap-3 text-slate-400 text-sm">
            <div className="mt-0.5">ℹ️</div>
            <p><strong>Processing Timeline:</strong> Requests are processed within 5 business days. A confirmation email will be sent once the deletion is complete.</p>
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl border border-orange-100 p-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Need Help? Contact Support</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="mailto:support@evoniqerp.com" className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors">
              <Mail className="w-5 h-5 text-orange-500" />
              support@evoniqerp.com
            </a>
            <a href="tel:+919173112620" className="flex items-center gap-3 text-slate-700 hover:text-orange-600 transition-colors">
              <Phone className="w-5 h-5 text-orange-500" />
              +91 91731 12620
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Evoniq ERP. All rights reserved.
          </p>
          <div className="space-x-4">
            <Link to="/" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/privacy-policy" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm text-slate-500 hover:text-orange-600 transition-colors">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
