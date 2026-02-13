
import React from 'react';
import { 
  ChevronLeft, 
  MapPin, 
  Star, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import Logo from './Logo';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            See How Clinic+ Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A seamless digital experience for both patients and healthcare providers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <div className="flex gap-6 items-start reveal-on-scroll delay-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">1</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Patient Views Profile</h4>
                <p className="text-slate-600 leading-relaxed">Patients scan your clinic's QR code or click your link to see your credentials, ratings, and real-time availability.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start reveal-on-scroll delay-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">2</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Fast Appointment Booking</h4>
                <p className="text-slate-600 leading-relaxed">A simple 3-step form collects patient details and booking preferences in under 60 seconds.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start reveal-on-scroll delay-500">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">3</div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Instant Token Generation</h4>
                <p className="text-slate-600 leading-relaxed">No more waiting rooms. Patients get a digital token number and can track the live queue from their homes.</p>
              </div>
            </div>
          </div>

          <div className="relative reveal-on-scroll delay-500">
            {/* The "Patient App" Mockup Screens */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Screen 1: Profile */}
              <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden h-[400px] flex flex-col transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="h-24 bg-blue-600 relative flex items-center justify-center px-4">
                  <Logo inverted className="h-10" />
                </div>
                <div className="px-4 -mt-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-slate-200 border-4 border-white shadow-md overflow-hidden mb-3">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200" alt="Doctor" className="w-full h-full object-cover" />
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm">Dr. Suresh Chandra</h5>
                  <p className="text-[10px] text-blue-600 font-bold mb-1">Cardiologist (MBBS)</p>
                  <div className="flex items-center gap-1 text-slate-400 text-[8px] mb-4">
                    <MapPin size={8} /> BMP Clinic
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 w-full mb-4">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 text-center">
                      <ShieldCheck size={10} className="mx-auto text-green-500 mb-1" />
                      <div className="text-[7px] text-slate-500 uppercase font-bold">Verified</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 text-center">
                      <Star size={10} className="mx-auto text-orange-400 mb-1" />
                      <div className="text-[7px] text-slate-500 uppercase font-bold">4.9/5.0</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-100 text-center">
                      <Clock size={10} className="mx-auto text-blue-500 mb-1" />
                      <div className="text-[7px] text-slate-500 uppercase font-bold">10+ Yrs</div>
                    </div>
                  </div>

                  <div className="w-full bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={10} className="text-blue-600" />
                      <span className="text-[9px] font-bold">Clinic Timings</span>
                    </div>
                    <div className="flex justify-between text-[8px] mb-1">
                      <span className="text-slate-500">Morning</span>
                      <span className="font-bold">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between text-[8px]">
                      <span className="text-slate-500">Evening</span>
                      <span className="font-bold">17:00 - 21:00</span>
                    </div>
                  </div>
                </div>
                <div className="mt-auto p-4 pt-0">
                  <div className="bg-blue-600 text-white text-[10px] font-bold py-2 rounded-xl text-center shadow-lg">Book Appointment</div>
                </div>
              </div>

              {/* Screen 2: Booking Form */}
              <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden h-[400px] flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="p-4 flex items-center gap-2 border-b border-slate-100">
                  <ChevronLeft size={14} className="text-slate-400" />
                  <span className="font-bold text-xs">Book Appointment</span>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <label className="text-[9px] font-bold text-slate-500 mb-1 block">Full Name</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-[10px] text-slate-400">Rahul Kumar</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="text-[9px] font-bold text-slate-500 mb-1 block">Age</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-[10px] text-slate-400">22</div>
                    </div>
                    <div className="flex-1">
                      <label className="text-[9px] font-bold text-slate-500 mb-1 block">Gender</label>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-[10px] text-slate-400">Male</div>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-slate-500 mb-1 block">Mobile Number</label>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 flex items-center gap-2 text-[10px] text-slate-400">
                      <Phone size={8} /> 8794648464
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                     <div className="text-[10px] font-bold mb-2 flex items-center gap-1"><CheckCircle2 size={10} className="text-blue-600" /> Appointment Details</div>
                     <div className="bg-white border-2 border-blue-500 rounded-lg p-2 text-[9px] font-bold">New Consultation</div>
                  </div>
                </div>
                <div className="mt-auto p-4 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase">Rahul Kumar</div>
                    <div className="text-[8px] font-bold">8794648464</div>
                  </div>
                  <div className="bg-green-600 text-white text-[10px] font-bold px-4 py-2 rounded-xl shadow-lg">Confirm</div>
                </div>
              </div>

              {/* Screen 3: Token Confirmation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden h-[340px] flex flex-col z-20 scale-110">
                <div className="pt-8 pb-4 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 size={24} className="text-green-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4">Booked!</h4>
                  
                  <div className="w-full px-4 mb-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center">
                      <div className="text-[8px] font-bold text-blue-600 uppercase tracking-widest mb-1">Your Token Number</div>
                      <div className="text-6xl font-black text-blue-600">3</div>
                    </div>
                  </div>
                  
                  <p className="text-[8px] text-slate-400 px-6 text-center leading-relaxed mb-6">
                    Doctor sees patients in order of token numbers. Please arrive during clinic hours.
                  </p>
                  
                  <div className="w-full px-4 space-y-2">
                    <div className="bg-blue-600 text-white text-[10px] font-bold py-2 rounded-xl text-center shadow-md">Get Directions</div>
                    <div className="bg-slate-100 text-slate-600 text-[10px] font-bold py-2 rounded-xl text-center">Back to Profile</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-50 z-0"></div>
          </div>
        </div>

        <div className="reveal-on-scroll delay-700 bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-4">Ready to modernize?</h3>
            <p className="opacity-90 leading-relaxed">Join hundreds of doctors who have transformed their clinics with Clinic+.</p>
          </div>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2 group whitespace-nowrap">
            Start Your Free Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
