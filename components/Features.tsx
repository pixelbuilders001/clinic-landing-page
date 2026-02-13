
import React from 'react';
import { 
  Ticket, 
  Globe, 
  MessageSquare, 
  UserCircle, 
  ClipboardList, 
  BarChart3 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Ticket className="text-blue-500" />,
      title: "Smart Token Management",
      description: "Dynamic token generation and real-time status tracking for patients."
    },
    {
      icon: <Globe className="text-indigo-500" />,
      title: "Online Booking",
      description: "Your own clinic page where patients can book anytime from anywhere."
    },
    {
      icon: <MessageSquare className="text-green-500" />,
      title: "WhatsApp & SMS Alerts",
      description: "Auto-notifications for confirmation, turn-arrival, and rescheduling."
    },
    {
      icon: <UserCircle className="text-purple-500" />,
      title: "Doctor Dashboard",
      description: "Clear view of daily patient load, history, and clinic efficiency stats."
    },
    {
      icon: <ClipboardList className="text-orange-500" />,
      title: "Patient History",
      description: "Digitized records to see past visits, prescriptions, and symptoms easily."
    },
    {
      icon: <BarChart3 className="text-rose-500" />,
      title: "Analytics & Reports",
      description: "Track revenue, peak hours, and patient satisfaction at a glance."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Features</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Everything Your Clinic Needs
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Clinic+ is built with specific features that address the unique workflow of Indian clinics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`reveal-on-scroll delay-${(index % 3) * 150} p-8 rounded-3xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300 group`}>
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm">
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
