import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { businessInfo } from '../utils/mockData';

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-gray-200 bg-gray-50/50">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-10 h-10 text-red-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms &amp; Conditions</h1>
          </div>
          <p className="text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website of {businessInfo.name} (“Company,” “we,” “us”), or by submitting any form (including contact or estimate requests), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use this website or submit any form.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Use of the Website</h2>
            <p>You agree to use this website only for lawful purposes. You may not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any systems, data, or networks</li>
              <li>Transmit any malware, spam, or harmful code</li>
              <li>Impersonate another person or entity, or misrepresent your affiliation</li>
              <li>Collect or harvest other users’ or visitors’ information without consent</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Form Submissions and Communications</h2>
            <p>
              When you submit a contact form, estimate request, or similar form, you represent that the information you provide is accurate and that you have read and accept our Privacy Policy and these Terms. You consent to our use of your contact information to respond to your inquiry and for related business purposes as described in our Privacy Policy. Submission of a form does not create a contract for services; any agreement for work will be set forth in a separate written contract or estimate accepted by both parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Intellectual Property</h2>
            <p>
              All content on this website (text, graphics, logos, images, and software) is the property of the Company or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Services and Estimates</h2>
            <p>
              Information on this website about our services, pricing, and availability is for general reference only and does not constitute an offer or guarantee. Estimates and scope of work are subject to a separate written agreement. We reserve the right to refuse or discontinue service in accordance with applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided “as is” without warranties of any kind, express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. Your use of the site is at your sole risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, the Company and its officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from your use of this website or any form submission. Our total liability for any claim related to the website or these Terms shall not exceed the amount you paid to us, if any, in the twelve months preceding the claim, or one hundred dollars ($100), whichever is greater.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Third-Party Services</h2>
            <p>
              We use third-party services (e.g., form handling, hosting, analytics). Your use of those services may be subject to their terms and policies. We are not responsible for the availability, content, or practices of third-party sites or services linked from our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless the Company and its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys’ fees) arising from your use of the website, your violation of these Terms, or your violation of any third-party rights.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">10. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of the State of Illinois, United States, without regard to conflict of law principles. Any dispute arising from these Terms or the website shall be resolved in the state or federal courts located in Illinois, and you consent to the personal jurisdiction of such courts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">11. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">12. Changes</h2>
            <p>
              We may modify these Terms at any time. The “Last updated” date at the top reflects the latest version. Your continued use of the website after changes constitutes acceptance of the modified Terms. For material changes, we may provide additional notice where appropriate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at:{' '}
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
          <Link to="/privacy-policy">
            <Button variant="outline">Privacy Policy</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
