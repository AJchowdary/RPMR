import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Clock } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '../utils/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo variant="icon" className="mb-3" />
              <h3 className="text-white font-bold text-lg">{businessInfo.shortName}</h3>
            </div>
            <p className="text-sm mb-4">
              Professional painting, masonry restoration, and renovation services with quality craftsmanship you can trust.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-semibold text-white">{businessInfo.license}</span>
            </div>
            <div className="text-sm">
              <span className="font-semibold text-white">{businessInfo.insurance}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-red-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-red-500 transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm hover:text-red-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm hover:text-red-500 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Interior Painting</li>
              <li>Exterior Painting</li>
              <li>Masonry Restoration</li>
              <li>Brick & Stone Repair</li>
              <li>Concrete Repair</li>
              <li>Full Renovations</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${businessInfo.phone}`} className="flex items-start gap-2 text-sm hover:text-red-500 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`} className="flex items-start gap-2 text-sm hover:text-red-500 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{businessInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>{businessInfo.hours.weekday}</p>
                  <p>{businessInfo.hours.saturday}</p>
                  <p>{businessInfo.hours.sunday}</p>
                </div>
              </li>
              <li>
                <a href={businessInfo.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                  <span>Follow us on Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
          <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
          <span className="hidden sm:inline text-gray-600">·</span>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-red-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-red-500 transition-colors">Terms &amp; Conditions</Link>
          </div>
          <span className="hidden sm:inline text-gray-600">·</span>
          <p className="text-gray-400">Serving {businessInfo.serviceArea} with pride and professionalism.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
