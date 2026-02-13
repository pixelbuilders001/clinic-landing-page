
import React from 'react';
import { UserPlus, CalendarCheck, RefreshCw } from 'lucide-react';

const Solution: React.FC = () => {
  const steps = [
    {
      icon: <UserPlus className="text-blue-600" size={32} />,
      title: "Step 1: Register Clinic",
      description: "Sign up in 2 minutes and set your operating hours, doctors, and slot timings."
    },
    {
      icon: <CalendarCheck className="text-blue-600" size={32} />,
      title: "Step 2: Patients Book",
      description: "Share a simple booking link or let them book via a WhatsApp-integrated bot."
    },
    {
      icon: <RefreshCw className="text-blue-600" size={32} />,
      title: "Step 3: Auto-Manage Queue",
      description: "Our smart token system updates everyone in real-time as patients are consulted."
    }
  ];

  return (
    <section className="py-24 bg-blue-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Clinic+ Fixes This in 3 Simple Steps
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            A frictionless workflow that eliminates the need for manual records and angry waiting rooms.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-blue-200 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`reveal-on-scroll delay-${(index + 1) * 300} flex flex-col items-center text-center`}>
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl border-4 border-blue-50 mb-8 relative">
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 max-w-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
