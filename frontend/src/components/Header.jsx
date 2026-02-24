import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { businessInfo } from '../utils/mockData';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">{businessInfo.phone}</span>
              </a>
              <Link to="/contact">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Get Free Estimate
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-red-600 ${
                    isActive(link.path) ? 'text-red-600' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">{businessInfo.phone}</span>
                </a>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Get Free Estimate
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky Mobile Call Button */}
      <a
        href={`tel:${businessInfo.phone}`}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default Header;
