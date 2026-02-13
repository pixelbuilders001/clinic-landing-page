
import React from 'react';
import { Clock, PhoneOff, UserX } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="text-orange-500" size={32} />,
      title: "Wait times up to 3 hours",
      description: "Patients wait hours in crowded rooms without any clarity on when their turn will come."
    },
    {
      icon: <PhoneOff className="text-red-500" size={32} />,
      title: "Receptionist Overload",
      description: "Front-desk staff spends 70% of their time answering repetitive calls about tokens and status."
    },
    {
      icon: <UserX className="text-purple-500" size={32} />,
      title: "No Queue Visibility",
      description: "Doctors can't see the real-time load, and patients are frustrated by 'ghost' queues and skipping."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal-on-scroll">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">The Challenge</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Long Queues. Frustrated Patients. Manual Chaos.
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            Traditional paper registers and verbal token systems are broken. They create stress for both your staff and your patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className={`reveal-on-scroll delay-${(index + 1) * 200} p-8 rounded-3xl bg-slate-50 border border-slate-100 text-left hover:shadow-lg transition-all duration-300 group`}>
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h4>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll delay-500 inline-block px-8 py-4 bg-slate-900 rounded-2xl text-white font-bold">
          "Clinics deserve better systems."
        </div>
      </div>
    </section>
  );
};

export default Problem;
