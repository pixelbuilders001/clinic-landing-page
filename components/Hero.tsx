
import React from 'react';
import { ChevronRight, ShieldCheck, CheckCircle, IndianRupee, QrCode, User, Plus, Search, Calendar, Settings, Home } from 'lucide-react';

const Hero: React.FC = () => {
  const words = [
    "End", "Clinic", "Waiting", "Lines.", 
    "Digitize", "Appointments", 
    "in", "Minutes."
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-medical-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 animate-reveal">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              The #1 Choice for Indian Clinics
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-8">
              {words.map((word, i) => {
                // "Digitize" is index 4, "Appointments" is index 5
                const isBlue = i === 4 || i === 5;
                return (
                  <span key={i} className={`word-reveal mr-[0.25em] ${isBlue ? 'text-blue-600' : 'text-slate-900'}`}>
                    <span style={{ animationDelay: `${i * 80}ms` }}>{word}</span>
                  </span>
                );
              })}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-reveal delay-700">
              Clinic+ helps clinics manage appointments, reduce patient wait time, and streamline daily operations — without expensive hardware. Just scan and book.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-reveal delay-1000">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group">
                Start Free Trial <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-md">
                Book a Demo
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-75 animate-reveal delay-1000">
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <CheckCircle size={18} className="text-green-500" />
                <span>Built for Indian Clinics</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 font-medium">
                <ShieldCheck size={18} className="text-green-500" />
                <span>Secure & Compliant</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative scale-95 sm:scale-100 animate-reveal delay-500">
            {/* Main Admin Dashboard Mockup */}
            <div className="relative z-20 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-1 overflow-hidden animate-float">
              <div className="rounded-[2.2rem] overflow-hidden bg-slate-50 flex flex-col h-[520px]">
                {/* Dashboard Header */}
                <div className="bg-white px-5 py-4 flex justify-between items-center border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100" alt="Doc" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-slate-800">BMP clinic</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase">Dr. Suresh Chandra</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100">
                    <User size={12} className="text-blue-600" />
                    <span className="text-[10px] font-bold text-slate-600">pixelbuilders06</span>
                  </div>
                </div>

                {/* Dashboard Tabs */}
                <div className="px-5 py-3 bg-white flex gap-4 border-b border-slate-50">
                  <div className="flex-1 bg-green-50 text-green-600 text-[10px] font-bold py-2 rounded-xl text-center border border-green-100">Available</div>
                  <div className="flex-1 text-slate-300 text-[10px] font-bold py-2 rounded-xl text-center">Busy</div>
                  <div className="flex-1 text-slate-300 text-[10px] font-bold py-2 rounded-xl text-center">Closed</div>
                </div>

                {/* Summary Section */}
                <div className="p-5">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Today's Summary</div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
                      <div className="text-xl font-black text-blue-600">2</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase">Total</div>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
                      <div className="text-xl font-black text-slate-800">0</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase">Walk-ins</div>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm text-center">
                      <div className="text-xl font-black text-green-500">0</div>
                      <div className="text-[8px] text-slate-400 font-bold uppercase">Done</div>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-3.5 rounded-2xl text-xs font-bold mb-3 shadow-lg flex items-center justify-center gap-2">
                    <Plus size={14} /> Add New Appointment
                  </button>
                  <button className="w-full bg-white text-blue-600 py-3 rounded-2xl text-xs font-bold border border-slate-100 shadow-sm mb-6">
                    View All
                  </button>

                  <div className="flex justify-between items-center mb-3">
                    <div className="text-[10px] font-bold text-slate-800 flex items-center gap-1">
                       <Calendar size={12} className="text-blue-600" /> Next in Queue
                    </div>
                    <div className="text-[10px] font-bold text-blue-600">View All</div>
                  </div>

                  {/* Queue Items */}
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center">
                        <span className="text-[6px] font-bold leading-none">T</span>
                        <span className="text-sm font-black leading-none">01</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-800">Rakesh Singh...</span>
                          <span className="text-[7px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded uppercase font-black">Next</span>
                        </div>
                        <div className="text-[8px] text-slate-400 flex items-center gap-1">
                          <CheckCircle size={8} className="text-blue-400" /> Walk-in
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Navigation */}
                <div className="mt-auto bg-white border-t border-slate-50 flex justify-around py-3">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                      <Home size={18} />
                    </div>
                    <span className="text-[8px] font-bold text-blue-600">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 pt-2">
                    <Calendar size={18} className="text-slate-300" />
                    <span className="text-[8px] font-bold text-slate-300">Schedule</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 pt-2">
                    <Settings size={18} className="text-slate-300" />
                    <span className="text-[8px] font-bold text-slate-300">Settings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Booking QR Mockup Floating Overlay */}
            <div className="absolute -right-8 -bottom-10 z-30 w-56 transform rotate-3 hidden sm:block animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-4">
                <div className="text-center mb-4">
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Public Booking QR</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-4 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <QrCode size={100} className="text-slate-800" />
                  </div>
                </div>
                <div className="flex gap-2">
                   <div className="flex-1 bg-slate-100 py-1.5 rounded-lg text-center text-[8px] font-bold text-slate-500">PNG</div>
                   <div className="w-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                     <Plus size={10} />
                   </div>
                </div>
              </div>
            </div>

            {/* Background decoration elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100/50 rounded-full blur-[120px] -z-10 scale-150 opacity-60"></div>
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-400/20 rounded-3xl blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
