import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { businessInfo } from '../utils/mockData';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-gray-50/50">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-10 h-10 text-red-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
            <p>
              {businessInfo.name} (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit a contact or estimate request form. Please read this policy carefully.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Information We Collect</h2>
            <p className="mb-2">We may collect information that you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fill out a contact or estimate request form (e.g., name, phone, email, service type, location, project description)</li>
              <li>Communicate with us by phone, email, or social media</li>
              <li>Subscribe to updates or marketing (if offered)</li>
            </ul>
            <p className="mt-2">
              We may also automatically collect certain technical information when you visit our site, such as IP address, browser type, device type, and pages visited, to improve our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your inquiries and provide estimates or services you request</li>
              <li>Send you service-related communications (e.g., appointment reminders, project updates)</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>With your consent, send marketing or promotional communications (you may opt out at any time)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Sharing of Information</h2>
            <p>
              We do not sell your personal information. We may share your information only: (1) with service providers who assist us (e.g., form submission and email delivery), (2) when required by law or to protect our rights, or (3) in connection with a business transfer (e.g., merger or sale). Our form submission provider (Web3Forms) processes data in accordance with their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Data Security</h2>
            <p>
              We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the Internet is 100% secure; we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Your Rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data, or to object to certain processing. To exercise these rights or ask questions about your data, contact us using the contact information below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Third-Party Links and Services</h2>
            <p>
              Our website may contain links to third-party sites (e.g., social media). We are not responsible for the privacy practices of those sites. We use third-party services such as Web3Forms for form handling and Cloudinary for image delivery; their use of data is governed by their respective privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Children’s Privacy</h2>
            <p>
              Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us so we can delete it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The “Last updated” date at the top will reflect the latest version. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Contact Us</h2>
            <p>
              For privacy-related questions or requests, contact us at:{' '}
              <a href={`mailto:${businessInfo.email}`} className="text-red-600 hover:underline">{businessInfo.email}</a>
              {' '}or{' '}
              <a href={`tel:${businessInfo.phone}`} className="text-red-600 hover:underline">{businessInfo.phone}</a>.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/contact">
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">Contact Us</Button>
          </Link>
          <Link to="/terms-and-conditions">
            <Button variant="outline">Terms &amp; Conditions</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
