import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: March 10, 2025</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to GameChanger APAC ("we," "our," "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in compliance with the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Collection of Personal Information</h2>
            <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Contact Information: Name, email address, postal address, phone number.</li>
              <li>Demographic Information: Age, gender, preferences, and interests.</li>
              <li>Technical Information: IP address, browser type, operating system, referring website, pages visited, and other analytics data.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Methods of Collection</h2>
            <p className="text-gray-600 mb-4">We collect personal information through:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Direct Interactions: When you register on our site, subscribe to our newsletter, participate in surveys, or contact us.</li>
              <li>Automated Technologies: Cookies and similar tracking technologies that collect technical information about your equipment and browsing actions.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Use of Personal Information</h2>
            <p className="text-gray-600 mb-4">We use your personal information for the following purposes:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To personalize your experience on our website.</li>
              <li>To communicate with you, including sending promotional materials and updates.</li>
              <li>To analyze website usage and improve our marketing efforts.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <h1 className="text-4xl font-bold text-gray-900 mb-8 mt-16">Disclaimer</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information</h2>
            <p className="text-gray-600 mb-4">
              The information provided by GameChanger APAC ("we," "our," "us") on www.gamechangerapac.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. External Links Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Professional Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. The use or reliance of any information contained on the Site is solely at your own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or Disclaimer, please contact us at:{' '}
              <a href="mailto:info@GameChangerAPAC.com.au" className="text-blue-600 hover:text-blue-700">
                info@GameChangerAPAC.com.au
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
