
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Token System", "Online Booking", "Pricing", "API Docs"]
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Success Stories", "Press Kit"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
    }
  ];

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="mb-6">
              <Logo className="h-14" />
            </div>
            <p className="text-slate-500 mb-8 max-w-xs leading-relaxed">
              Modernizing Indian clinics with smart appointment and queue management systems. Improving the patient experience, one clinic at a time.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, i) => (
            <div key={i}>
              <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">{section.title}</h5>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-slate-500 hover:text-blue-600 text-sm font-medium transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400 font-medium">
            © 2024 Clinic+ Systems Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
            <Mail size={16} />
            <span>hello@clinicplus.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
