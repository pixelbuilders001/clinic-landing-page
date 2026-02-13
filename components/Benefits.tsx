
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const comparisons = [
    { old: "Manual register/Excel", new: "Cloud Digital Dashboard" },
    { old: "Crowded waiting area", new: "Smart Slot Scheduling" },
    { old: "Stressed reception staff", new: "Automated Bot Assistance" },
    { old: "Angry/Waiting patients", new: "Happy patients with Live status" },
    { old: "Zero data on growth", new: "Actionable Patient Insights" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Why Clinics Choose Clinic+
          </h2>
          <p className="text-lg text-slate-600">Upgrade from manual chaos to digital excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 reveal-on-scroll delay-300">
          <div className="bg-slate-50 p-8 sm:p-12">
            <h4 className="text-xl font-bold text-slate-500 mb-8 uppercase tracking-widest text-center">Traditional Clinic</h4>
            <ul className="space-y-6">
              {comparisons.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-slate-500 font-medium reveal-on-scroll delay-${(i + 1) * 100}`}>
                  <XCircle className="text-red-400 mt-0.5 flex-shrink-0" size={20} />
                  <span>{item.old}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 sm:p-12 relative overflow-hidden">
             {/* Gradient burst */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full"></div>
            
            <h4 className="text-xl font-bold text-blue-600 mb-8 uppercase tracking-widest text-center">With Clinic+</h4>
            <ul className="space-y-6">
              {comparisons.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-slate-900 font-semibold reveal-on-scroll delay-${(i + 1) * 150}`}>
                  <CheckCircle2 className="text-blue-600 mt-0.5 flex-shrink-0" size={20} />
                  <span>{item.new}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
