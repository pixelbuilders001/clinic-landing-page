
import React from 'react';
import { Check, IndianRupee } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "999",
      description: "Perfect for solo doctors or small clinics just starting to digitize.",
      features: [
        "Up to 1 Doctor",
        "Online Appointments",
        "WhatsApp Alerts (Limited)",
        "Token Display System",
        "Standard Support"
      ],
      cta: "Start Free Trial",
      featured: false
    },
    {
      name: "Pro",
      price: "1,999",
      description: "Best for growing multi-doctor clinics with high patient volume.",
      features: [
        "Up to 5 Doctors",
        "Unlimited WhatsApp/SMS",
        "Priority Dashboard Access",
        "Advanced Analytics",
        "Priority Support",
        "Custom Branding"
      ],
      cta: "Start Free Trial",
      featured: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For hospitals and clinic chains requiring custom integrations.",
      features: [
        "Unlimited Doctors",
        "Custom API Access",
        "Multi-branch Support",
        "Dedicated Account Manager",
        "On-premise Training",
        "Custom Feature Support"
      ],
      cta: "Talk to Sales",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Pricing</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your clinic size. No hidden setup fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`reveal-on-scroll delay-${(index + 1) * 200} relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${
                plan.featured 
                ? 'border-blue-200 shadow-2xl scale-105 z-10 bg-white' 
                : 'border-slate-100 hover:border-slate-300'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black text-slate-900 flex items-center">
                    {plan.price !== "Custom" && <IndianRupee size={28} />}
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && <span className="text-slate-500 font-medium">/month</span>}
                </div>
                <p className="text-slate-600 text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <Check size={12} className="text-blue-600" />
                    </div>
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all shadow-md hover:shadow-xl ${
                plan.featured 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
