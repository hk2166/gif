'use client';

import React, { useState, useCallback } from 'react';
import { FiMapPin, FiChevronDown } from 'react-icons/fi';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-primary">
              Get Instant Fresh
            </Link>
            
            {/* Location Selector */}
            <div className="hidden md:flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-primary">
              <FiMapPin className="w-5 h-5" />
              <span className="text-sm font-medium">Select Location</span>
              <FiChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary flex items-center space-x-1">
              <span>Browse Catalogue</span>
              <FiChevronDown className="w-4 h-4" />
            </a>
            <button 
              onClick={() => scrollToSection('quality')}
              className="text-gray-600 hover:text-primary"
            >
              Quality
            </button>
            <button 
              onClick={() => scrollToSection('sustainability')}
              className="text-gray-600 hover:text-primary"
            >
              Sustainability
            </button>
            <Link 
              href="/register"
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={toggleMobileMenu}
            type="button"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-200`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container-custom py-4 space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <FiMapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Select Location</span>
            <FiChevronDown className="w-4 h-4" />
          </div>
          <a href="#" className="block text-gray-600 hover:text-primary py-2">Browse Catalogue</a>
          <button 
            onClick={() => scrollToSection('quality')}
            className="block text-gray-600 hover:text-primary py-2 w-full text-left"
          >
            Quality
          </button>
          <button 
            onClick={() => scrollToSection('sustainability')}
            className="block text-gray-600 hover:text-primary py-2 w-full text-left"
          >
            Sustainability
          </button>
          <Link 
            href="/register"
            className="btn-primary w-full block text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 