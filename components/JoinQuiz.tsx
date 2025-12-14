import React, { useState } from 'react';
import { trainers } from '../data';

type QuizStep = 'category' | 'membership-info' | 'membership-type' | 'results';
type Category = 'membership' | 'classes' | 'training';
type MembershipType = 'weekly' | 'paid-in-full';

interface Plan {
  title: string;
  price: string;
  period: string;
  features: string[];
  notes?: string[];
}

interface JoinQuizProps {
  onClose?: () => void;
  inline?: boolean;
  initialMode?: MembershipType | null;
  onTrainerSelect?: (trainerId: string) => void;
}

const JoinQuiz: React.FC<JoinQuizProps> = ({ onClose, inline = false, initialMode = null, onTrainerSelect }) => {
  const [step, setStep] = useState<QuizStep>(initialMode ? 'results' : 'category');
  const [category, setCategory] = useState<Category | null>(initialMode ? 'membership' : null);
  const [memType, setMemType] = useState<MembershipType | null>(initialMode);

  const weeklyPlans: Plan[] = [
    {
      title: "12 Month Contract Membership",
      price: "$9.99",
      period: "Weekly",
      features: ["24/7 Access to BOTH Locations", "1 Free 45min PT Session", "Price Locked for 1 Year"],
      notes: ["1 Year Commitment", "Billed Weekly"]
    },
    {
      title: "Week-To-Week / No Contract",
      price: "$13.49",
      period: "Weekly",
      features: ["24/7 Access to BOTH Locations", "1 Free 45min PT Session", "Cancel w/ 7 Day Notice"],
      notes: ["Min 1 Month Commitment", "Billed Weekly"]
    }
  ];

  const paidInFullPlans: Plan[] = [
    {
      title: "12 Month Membership",
      price: "$449.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full", "Best Value"]
    },
    {
      title: "6 Month Membership",
      price: "$229.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full"]
    },
    {
      title: "2 Month Membership",
      price: "$99.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full"]
    },
    {
      title: "1 Month Membership",
      price: "$55.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "1 Free 30min PT Session"],
      notes: ["Paid in Full"]
    }
  ];

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    if (cat === 'membership') {
      setStep('membership-info');
    } else {
      setStep('results');
    }
  };

  const handleMemTypeSelect = (type: MembershipType) => {
    setMemType(type);
    setStep('results');
  };

  const handleAction = (href: string) => {
    if (onClose) onClose();
    if (inline) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getProgress = () => {
    if (initialMode) return '100%';
    switch(step) {
      case 'category': return '25%';
      case 'membership-info': return '50%';
      case 'membership-type': return '75%';
      case 'results': return '100%';
      default: return '0%';
    }
  };

  const getResults = () => {
    if (category === 'classes') {
      return (
        <div className="text-center">
          <h3 className="text-2xl font-bold uppercase italic text-white mb-4">Class Schedule</h3>
          <p className="text-zinc-400 mb-8">
            We offer a variety of high-intensity and recovery classes. Check out our schedule to book your spot!
          </p>
          <a href="#classes" onClick={() => handleAction('#classes')} className="bg-brand-red text-white px-8 py-3 font-bold uppercase inline-block hover:bg-red-600 transition-colors">
            View Schedule
          </a>
        </div>
      );
    }
    
    if (category === 'training') {
      return (
        <div className="animate-fade-in flex flex-col h-full">
          <div className="text-center mb-6 shrink-0">
             <h3 className="text-2xl font-bold uppercase italic text-white mb-2">Select Your Coach</h3>
             <p className="text-zinc-400 text-sm">Tap a trainer to view profile & book.</p>
          </div>
          
          <div className={`grid md:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar ${inline ? '' : 'max-h-[50vh]'}`}>
             {trainers.map((trainer) => (
                <button 
                  key={trainer.id} 
                  onClick={() => {
                    if (onTrainerSelect) {
                        onTrainerSelect(trainer.id);
                        if (onClose) onClose();
                    } else {
                        handleAction('#trainers');
                    }
                  }}
                  className="bg-zinc-800 p-3 rounded-lg border border-zinc-700 hover:border-brand-red hover:bg-zinc-750 text-left flex gap-4 transition-all group items-center"
                >
                   <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-600 shrink-0">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div className="min-w-0 flex-1">
                      <h4 className="text-white font-bold uppercase italic truncate">{trainer.name}</h4>
                      <p className="text-brand-red text-xs font-bold uppercase mb-1 truncate">{trainer.specialty}</p>
                   </div>
                   <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-red">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                   </div>
                </button>
             ))}
          </div>
          
          <div className="mt-6 text-center shrink-0">
            <a href="#trainers" onClick={() => handleAction('#trainers')} className="text-zinc-500 text-xs font-bold uppercase hover:text-white transition-colors">
                View All Details on Main Page
            </a>
          </div>
        </div>
      );
    }

    if (category === 'membership') {
      let plans: Plan[] = [];
      let title = "";
      
      switch(memType) {
        case 'weekly':
          plans = weeklyPlans;
          title = "Weekly Billing Options";
          break;
        case 'paid-in-full':
          plans = paidInFullPlans;
          title = "Paid In Full / Fixed Term";
          break;
      }

      const containerClasses = inline 
        ? "grid md:grid-cols-2 gap-6" 
        : "grid md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar";

      return (
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold uppercase italic text-white mb-6 text-center">{title}</h3>
          <div className={containerClasses}>
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-zinc-800 p-6 border border-zinc-700 hover:border-brand-red transition-colors relative flex flex-col">
                <div className="mb-4">
                  <h4 className="text-xl font-bold uppercase text-white leading-tight">{plan.title}</h4>
                  <div className="mt-3">
                    <span className="text-3xl font-black text-brand-red">{plan.price}</span>
                    <span className="text-zinc-500 text-xs font-bold ml-1 uppercase block md:inline"> / {plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                      <span className="text-brand-red mt-1">▸</span> {f}
                    </li>
                  ))}
                </ul>

                {plan.notes && (
                  <div className="mb-4 text-xs text-zinc-400 italic border-t border-zinc-700 pt-2">
                    {plan.notes.join(' • ')}
                  </div>
                )}

                <button className="w-full bg-white text-black font-black uppercase py-3 hover:bg-brand-red hover:text-white transition-colors">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  const Content = (
    <div className={`relative z-10 w-full bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col ${inline ? '' : 'max-w-4xl max-h-[90vh]'}`}>
      {/* Header */}
      <div className="bg-black p-6 flex justify-between items-center border-b border-zinc-800">
        <div>
          <h2 className="text-2xl font-black uppercase italic text-white">
            <span className="text-brand-red">Join</span> FitBodies
          </h2>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">Customize your experience</p>
        </div>
        {!inline && onClose && (
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-zinc-800">
        <div 
          className="h-full bg-brand-red transition-all duration-500"
          style={{ width: getProgress() }}
        ></div>
      </div>

      {/* Body */}
      <div className={`${inline ? 'p-8 md:p-16' : 'p-6 md:p-12'} overflow-y-auto flex-1`}>
        {step === 'category' && (
          <div className="animate-fade-in text-center">
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-8 md:mb-16">What are you looking for?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <button 
                onClick={() => handleCategorySelect('membership')}
                className="group bg-zinc-800 p-10 md:p-14 hover:bg-brand-red transition-all duration-300 transform hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black uppercase italic">Membership</h4>
                <p className="text-zinc-400 text-sm mt-2 group-hover:text-white/90">24/7 Access & Amenities</p>
              </button>

              <button 
                onClick={() => handleCategorySelect('classes')}
                className="group bg-zinc-800 p-10 md:p-14 hover:bg-brand-red transition-all duration-300 transform hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black uppercase italic">Classes</h4>
                <p className="text-zinc-400 text-sm mt-2 group-hover:text-white/90">HIIT, Yoga, & Spin</p>
              </button>

              <button 
                onClick={() => handleCategorySelect('training')}
                className="group bg-zinc-800 p-10 md:p-14 hover:bg-brand-red transition-all duration-300 transform hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black uppercase italic">Personal Training</h4>
                <p className="text-zinc-400 text-sm mt-2 group-hover:text-white/90">1-on-1 Coaching</p>
              </button>
            </div>
          </div>
        )}

        {step === 'membership-info' && (
          <div className="animate-fade-in text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => setStep('category')}
                className="text-zinc-500 hover:text-white text-sm uppercase font-bold flex items-center justify-center gap-2 mx-auto"
              >
                ← Back
              </button>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-6">More Than Just A Gym</h3>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Join a community dedicated to strength, resilience, and results. We provide the tools; you bring the effort.
            </p>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-12 text-left mb-16">
                <div className="bg-zinc-800/50 p-8 border border-zinc-800 rounded-lg">
                    <h4 className="text-2xl font-bold uppercase italic text-white mb-6 flex items-center gap-3">
                      <span className="text-brand-red">01.</span> The Facility
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 9.636a6 6 0 113.636 3.636l-2.036 1.545M16 5v6" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white">24/7 Key Fob Access</strong>
                          <span className="text-zinc-400 text-sm">Train on your schedule, day or night.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white">Elite Equipment</strong>
                          <span className="text-zinc-400 text-sm">Hammer Strength, Rogue racks, and specialty bars.</span>
                        </div>
                      </li>
                    </ul>
                </div>

                <div className="bg-zinc-800/50 p-8 border border-zinc-800 rounded-lg">
                    <h4 className="text-2xl font-bold uppercase italic text-white mb-6 flex items-center gap-3">
                      <span className="text-brand-red">02.</span> The Perks
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white">Free PT Session</strong>
                          <span className="text-zinc-400 text-sm">Every new member gets a free consultation.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white">No Hidden Fees</strong>
                          <span className="text-zinc-400 text-sm">Simple, transparent pricing options.</span>
                        </div>
                      </li>
                    </ul>
                </div>
            </div>

            <button 
                onClick={() => setStep('membership-type')}
                className="bg-brand-red text-white px-12 py-5 font-black uppercase tracking-wider text-xl hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
                View Pricing Options
            </button>
          </div>
        )}

        {step === 'membership-type' && (
          <div className="animate-fade-in text-center">
            <div className="mb-8">
              <button 
                onClick={() => setStep('membership-info')}
                className="text-zinc-500 hover:text-white text-sm uppercase font-bold flex items-center justify-center gap-2 mx-auto"
              >
                ← Back
              </button>
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-8 md:mb-16">How do you prefer to pay?</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <button 
                onClick={() => handleMemTypeSelect('weekly')}
                className="group bg-zinc-800 p-10 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-black rounded-full mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="text-2xl font-black text-white group-hover:text-brand-red">$W</span>
                </div>
                <h4 className="text-2xl font-black uppercase italic mb-2">Weekly Billing</h4>
                <p className="text-zinc-400 text-sm group-hover:text-white/90">Lower recurring payments. Flexible & Contract options.</p>
              </button>

              <button 
                onClick={() => handleMemTypeSelect('paid-in-full')}
                className="group bg-zinc-800 p-10 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-black rounded-full mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                   <span className="text-2xl font-black text-white group-hover:text-brand-red">$$$</span>
                </div>
                <h4 className="text-2xl font-black uppercase italic mb-2">Paid In Full</h4>
                <p className="text-zinc-400 text-sm group-hover:text-white/90">One time payment. Fixed Terms (1 month - 1 year).</p>
              </button>
            </div>
          </div>
        )}

        {step === 'results' && (
            <div className="animate-fade-in h-full flex flex-col">
              <div className="mb-6 shrink-0">
                {!initialMode && (
                  <button 
                    onClick={() => category === 'membership' ? setStep('membership-type') : setStep('category')}
                    className="text-zinc-500 hover:text-white text-sm uppercase font-bold flex items-center gap-2"
                  >
                    ← Back
                  </button>
                )}
              </div>
              <div className="flex-1 min-h-0">
                  {getResults()}
              </div>
            </div>
        )}
      </div>
    </div>
  );

  if (inline) {
    return Content;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {Content}
    </div>
  );
};

export default JoinQuiz;