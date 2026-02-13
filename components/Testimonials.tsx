
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Dr. Rajesh Sharma",
      specialty: "General Physician, Delhi",
      text: "Clinic+ reduced our waiting time by 40%. The patients are much calmer because they know exactly when to walk in.",
      avatar: "https://picsum.photos/seed/doc1/100/100"
    },
    {
      name: "Dr. Anjali Mehta",
      specialty: "Pediatrician, Mumbai",
      text: "Our reception workload dropped drastically. The automated WhatsApp alerts handle 80% of our patient queries now.",
      avatar: "https://picsum.photos/seed/doc2/100/100"
    },
    {
      name: "Dr. Vikram Goel",
      specialty: "Orthopedic, Bangalore",
      text: "Patients love the live queue tracking. It shows we value their time. Our clinic rating has improved significantly.",
      avatar: "https://picsum.photos/seed/doc3/100/100"
    }
  ];

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">Social Proof</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
            Trusted by Clinics Across India
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className={`reveal-on-scroll delay-${(index + 1) * 200} bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-all duration-300`}>
              <Quote className="text-blue-100 mb-6" size={40} />
              <p className="text-slate-700 text-lg italic mb-8 flex-1 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h5 className="font-bold text-slate-900">{review.name}</h5>
                  <p className="text-xs text-slate-500 uppercase font-semibold">{review.specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
