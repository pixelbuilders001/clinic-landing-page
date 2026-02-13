
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is it difficult to use?",
      answer: "Not at all. Clinic+ is designed for medical staff who may not be tech-savvy. If you can use WhatsApp, you can use Clinic+."
    },
    {
      question: "Do I need special hardware?",
      answer: "No. Clinic+ works on any smartphone, tablet, or laptop with an internet connection. You can optionally connect a TV for a queue display."
    },
    {
      question: "Can patients book without an app?",
      answer: "Yes! Patients book through a simple web link or via WhatsApp. There is absolutely no app for them to download."
    },
    {
      question: "Is data secure?",
      answer: "Yes, we use bank-grade encryption and comply with Indian healthcare data privacy guidelines. Your patient data is yours and is never shared."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, we offer monthly plans with no long-term contracts. You can cancel your subscription at any time from your dashboard."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`reveal-on-scroll delay-${(index + 1) * 100} border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-colors`}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group"
              >
                <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus size={20} className="text-slate-400 group-hover:text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 bg-slate-50/30">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
