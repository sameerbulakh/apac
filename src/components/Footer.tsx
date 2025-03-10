import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">GameChanger APAC</h3>
            <p className="text-gray-400">
              Revolutionizing career development through sport in the Asia-Pacific region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#how-we-do-it" className="text-gray-400 hover:text-white transition-colors">
                  How We Do It
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy & Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Melbourne, Australia</li>
              <li>Email: info@GameChangerAPAC.com.au</li>
              <li>Phone: +61 422 444 001</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p> {new Date().getFullYear()} GameChanger APAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
