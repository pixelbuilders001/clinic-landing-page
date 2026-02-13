
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll relative bg-blue-600 rounded-[3rem] p-10 sm:p-20 text-center text-white overflow-hidden shadow-2xl">
          {/* Abstract patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 -mr-20 -mt-20 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 -ml-20 -mb-20 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
              Stop Making Patients Wait.
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
              Start your free 14-day trial today and modernize your clinic. No credit card, no setup fee, just better care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl">
                Start Free Trial
              </button>
              <button className="bg-blue-700/50 text-white border border-white/20 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all">
                Book a Demo
              </button>
            </div>
            <div className="mt-8 text-sm opacity-80 font-medium">
              Join 500+ clinics across India today.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
