
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="hover:opacity-90 transition-opacity">
              <Logo className="h-10 sm:h-12" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
                {link.name}
              </a>
            ))}
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">Log in</button>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
              Start Free Trial
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-center py-3 text-slate-600 font-semibold">Log in</button>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-md">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
