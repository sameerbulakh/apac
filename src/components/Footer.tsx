import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Network', href: '#network' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Privacy Policy & Disclaimer', href: '/privacy' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/GameChangerAPAC' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/gamechangerapac/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/gamechanger-apac/' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GameChanger APAC</h3>
            <p className="text-gray-400">
              Creating opportunities in sports and education across the Asia Pacific region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Melbourne, Australia</li>
              <li>Email: info@GameChangerAPAC.com.au</li>
              <li>Phone: +61 422 444 001</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GameChanger APAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
