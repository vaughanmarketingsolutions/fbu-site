import React, { useState, useMemo } from 'react';
import { MembershipType, Category } from '../types';

type QuizStep = 'category' | 'membership-info' | 'membership-type' | 'results' | 'pt-payment-type' | 'pt-quiz';
type PTPaymentType = 'weekly' | 'full-cost';

interface Plan {
  title: string;
  price: string;
  period: string;
  features: string[];
  notes?: string[];
  externalUrl: string;
  isPopular?: boolean;
}

interface JoinQuizProps {
  onClose?: () => void;
  inline?: boolean;
  initialMode?: MembershipType | null;
  initialCategory?: Category | null;
  onTrainerSelect?: (trainerId: string) => void;
}

const JoinQuiz: React.FC<JoinQuizProps> = ({ onClose, inline = false, initialMode = null, initialCategory = null, onTrainerSelect }) => {
  // Logic to determine initial step and category
  const getInitialStep = (): QuizStep => {
    if (initialMode) return 'results';
    if (initialCategory === 'training') return 'pt-payment-type';
    if (initialCategory === 'membership') return 'membership-info';
    if (initialCategory === 'classes') return 'results';
    return 'category';
  };

  const [step, setStep] = useState<QuizStep>(getInitialStep());
  const [category, setCategory] = useState<Category | null>(initialMode ? 'membership' : initialCategory);
  const [memType, setMemType] = useState<MembershipType | null>(initialMode);
  const [ptPaymentType, setPtPaymentType] = useState<PTPaymentType | null>(null);
  
  // PT Quiz State
  const [ptSessions, setPtSessions] = useState<string>('1');
  const [ptDuration, setPtDuration] = useState<string>('30');

  const weeklyPlans: Plan[] = [
    {
      title: "12 Month Contract Membership",
      price: "$9.99",
      period: "Weekly",
      features: ["24/7 Access to BOTH Locations", "1 Free 45min PT Session", "Price Locked for 1 Year"],
      notes: ["1 Year Commitment", "Billed Weekly"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/61ed3a5f393be002f7bf5c80f1812528"
    },
    {
      title: "Week-To-Week / No Contract",
      price: "$13.49",
      period: "Weekly",
      features: ["24/7 Access to BOTH Locations", "1 Free 45min PT Session", "Cancel w/ 7 Day Notice"],
      notes: ["Min 1 Month Commitment", "Billed Weekly"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/71fce85d6b5dfa7d3db3c798f4cde498"
    }
  ];

  const paidInFullPlans: Plan[] = [
    {
      title: "12 Month Membership",
      price: "$449.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full", "Best Value"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/95a0ff756b49e2fa68c5dbd533c4e09a"
    },
    {
      title: "6 Month Membership",
      price: "$229.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/0adeb9f3008a31bcaf6afb1a4cb7fff8"
    },
    {
      title: "2 Month Membership",
      price: "$99.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "2 Free 30min PT Sessions"],
      notes: ["Paid in Full"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/dbc0947ba1e1efd13d0467e4ff65a557"
    },
    {
      title: "1 Month Membership",
      price: "$55.00",
      period: "One Time",
      features: ["24/7 Access to BOTH Locations", "1 Free 30min PT Session"],
      notes: ["Paid in Full"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/36a0bd84acde312fc3196f3ac9e80161"
    }
  ];

  const classPlans: Plan[] = [
    {
      title: "Current Member Classes",
      price: "$100.00",
      period: "Billed Monthly",
      features: [
        "UNLIMITED Class Access",
        "Interval Training sessions M-F",
        "Biggest Loser Challenge Entry",
        "Adaptive for all fitness levels"
      ],
      notes: ["No Signup Fee", "Yorktown Location"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/7f24510d1ef8baaa7033f0bd94a33521"
    },
    {
      title: "Non-Member Classes",
      price: "$150.00",
      period: "Billed Monthly",
      features: [
        "UNLIMITED Class Access",
        "24/7 Gym Access Included!",
        "Interval Training sessions M-F",
        "Biggest Loser Challenge Entry"
      ],
      notes: ["No Signup Fee", "Yorktown Location"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/0b2ed7b0e7378977806d6e07b74fdc34"
    }
  ];

  const fullCostPTPlans: Plan[] = [
    {
      title: "1x 45 min per week",
      price: "$200.00",
      period: "4 Weeks / Paid in Full",
      features: ["One on one with a trainer", "Custom workout & nutrition advice", "Fitness & Body composition check", "Early cancelation fee is 25%"],
      notes: ["Full Cost by Billing", "Fixed Term"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/86d2d2dccc643913a002ae60a1a3c33e"
    },
    {
      title: "3 Sessions Starter",
      price: "$99.00",
      period: "Full Cost",
      features: ["3 Sessions with a trainer", "Get you going", "Add a little extra", "Great way to try us out!"],
      notes: ["Full Cost by Billing"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/49240e95a7ecc40aa696234ad80ba6e5",
      isPopular: true
    },
    {
      title: "3x 45 min per week",
      price: "$600.00",
      period: "4 Weeks / Paid in Full",
      features: ["Intensive 1-on-1 coaching", "Full nutritional planning", "Weekly body fat checks", "Professional rehab/stretch focus"],
      notes: ["Full Cost by Billing", "Fixed Term"],
      externalUrl: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/7c1c9c0174ab92c07a3531c4e9811677"
    }
  ];

  // PT Price Mapping based on updated requirements
  const ptPackage = useMemo(() => {
    const key = `${ptSessions}x${ptDuration}`;
    const packages: Record<string, { price: string; link: string; term?: string }> = {
      "1x30": { price: "$38.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/9fe888d62ad8315dceb961c5b38334f2" },
      "1x60": { price: "$70.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/34cb513485cffdeb4fda35ce16faa96c" },
      "2x30": { price: "$75.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/c6991c8b54c7deddc7445b75c889d1b0" },
      "2x45": { price: "$110.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/5a6f264b5e50b620c2838dcd145a275a", term: "Fixed Term Available" },
      "2x60": { price: "$140.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/dca057cada50dee96d97faa070fa885d" },
      "3x30": { price: "$110.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/32fb41f0ce60f673a51b5f5f365a9db9" },
      "3x60": { price: "$210.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/c6fb3dc000d46d955e71419b9adb6bea" }
    };
    return packages[key] || null;
  }, [ptSessions, ptDuration]);

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    if (cat === 'membership') {
      setStep('membership-info');
    } else if (cat === 'training') {
      setStep('pt-payment-type');
    } else {
      setStep('results');
    }
  };

  const handleMemTypeSelect = (type: MembershipType) => {
    setMemType(type);
    setStep('results');
  };

  const handlePTPaymentTypeSelect = (type: PTPaymentType) => {
    setPtPaymentType(type);
    if (type === 'weekly') {
      setStep('pt-quiz');
    } else {
      setStep('results');
    }
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
      case 'category': return '20%';
      case 'membership-info': return '40%';
      case 'membership-type': return '60%';
      case 'pt-payment-type': return '40%';
      case 'pt-quiz': return '70%';
      case 'results': return '100%';
      default: return '0%';
    }
  };

  const getResults = () => {
    if (category === 'classes') {
      return (
        <div className="animate-fade-in text-center">
          <h3 className="text-xl md:text-2xl font-bold uppercase italic text-white mb-2 leading-tight">Interval Training <span className="text-brand-red">+</span> Biggest Loser!</h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-6 max-w-xl mx-auto">
            Select your monthly program. Both options grant you access to <span className="text-white font-bold">all class sessions</span> held Monday through Friday.
          </p>
          <div className={`grid md:grid-cols-2 gap-4 ${inline ? '' : 'max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar'}`}>
            {classPlans.map((plan, idx) => (
              <div key={idx} className="bg-zinc-800 p-5 md:p-6 border border-zinc-700 hover:border-brand-red transition-colors relative flex flex-col text-left">
                <div className="mb-4">
                  <h4 className="text-lg md:text-xl font-bold uppercase text-white leading-tight">{plan.title}</h4>
                  <div className="mt-2">
                    <span className="text-2xl md:text-3xl font-black text-brand-red">{plan.price}</span>
                    <span className="text-zinc-500 text-[10px] md:text-xs font-bold ml-1 uppercase"> / {plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-1.5 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-zinc-300 text-xs md:text-sm flex items-start gap-2">
                      <span className="text-brand-red mt-1 shrink-0">▸</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="mb-4 text-[10px] md:text-xs text-zinc-400 italic border-t border-zinc-700 pt-2">
                  {plan.notes?.join(' • ')}
                </div>

                <a 
                  href={plan.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black font-black uppercase py-2.5 md:py-3 hover:bg-brand-red hover:text-white transition-all transform active:scale-95 text-center text-xs md:text-sm"
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    if (category === 'training') {
      if (ptPaymentType === 'full-cost') {
        return (
          <div className="animate-fade-in text-center">
            <h3 className="text-xl md:text-2xl font-bold uppercase italic text-white mb-6">Full Cost PT Packages</h3>
            <div className={`grid md:grid-cols-3 gap-4 ${inline ? '' : 'max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar'}`}>
              {fullCostPTPlans.map((plan, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 md:p-6 border-2 transition-all relative flex flex-col text-left ${plan.isPopular ? 'bg-zinc-900 border-brand-red shadow-2xl shadow-red-900/10 ring-2 ring-brand-red' : 'bg-zinc-800 border-zinc-700 hover:border-brand-red'}`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white font-black uppercase text-[10px] px-3 py-1 rounded shadow-lg">Most Popular</div>
                  )}
                  <div className="mb-4">
                    <h4 className="text-lg font-bold uppercase text-white leading-tight">{plan.title}</h4>
                    <div className="mt-2">
                      <span className={`text-2xl font-black ${plan.isPopular ? 'text-brand-red' : 'text-white'}`}>{plan.price}</span>
                      <span className={`block text-[10px] font-bold uppercase mt-1 ${plan.isPopular ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-1.5 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-zinc-300 text-[11px] md:text-xs flex items-start gap-2">
                        <span className="text-brand-red mt-1 shrink-0">▸</span> {f}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={plan.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full font-black uppercase py-2.5 text-center text-xs transition-all ${plan.isPopular ? 'bg-brand-red text-white hover:bg-red-600' : 'bg-white text-black hover:bg-zinc-200'}`}
                  >
                    Select Plan
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">No Signup Fee • Cancelation Terms Apply</p>
          </div>
        );
      }

      return (
        <div className="animate-fade-in flex flex-col h-full items-center text-center">
             <h3 className="text-xl md:text-2xl font-black uppercase italic text-white mb-4">Your Custom Training Plan</h3>
             
             {ptPackage ? (
               <div className="w-full max-w-md bg-zinc-800 border-2 border-brand-red p-8 rounded-lg shadow-2xl animate-fade-in-up">
                  <div className="mb-6">
                    <h4 className="text-3xl font-black text-white">{ptSessions}x <span className="text-brand-red">{ptDuration}m</span> Per Week</h4>
                    <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mt-2">(4 Weeks PT Block)</p>
                  </div>

                  <div className="mb-8 bg-black/40 p-6 rounded">
                    <span className="text-zinc-500 text-xs font-black uppercase block mb-1">Weekly Billing</span>
                    <span className="text-5xl font-black text-brand-red">{ptPackage.price}</span>
                  </div>

                  <ul className="text-left space-y-3 mb-8 text-sm text-zinc-300 border-t border-zinc-700 pt-6">
                    <li className="flex gap-2">
                      <span className="text-brand-red">✓</span> 1-on-1 Personalized Coaching
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-red">✓</span> Custom Workout & Nutrition Advice
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-red">✓</span> Fitness & Body Composition Assessment
                    </li>
                    {ptPackage.term && (
                      <li className="flex gap-2 font-bold text-white">
                        <span className="text-brand-red">✓</span> {ptPackage.term}
                      </li>
                    )}
                  </ul>

                  <a 
                    href={ptPackage.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-brand-red text-white font-black uppercase py-4 rounded hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl"
                  >
                    Enroll Now
                  </a>
                  
                  <p className="mt-4 text-[10px] text-zinc-500 uppercase font-bold tracking-widest">No Signup Fee • Cancelation Terms Apply</p>
               </div>
             ) : (
               <div className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 text-zinc-400 italic">
                 Selected combination not available. Please adjust your sessions or duration.
               </div>
             )}

             <div className="mt-8 flex flex-col md:flex-row gap-4">
                <button 
                  onClick={() => setStep('pt-quiz')}
                  className="text-white bg-zinc-700 px-6 py-2 rounded text-xs font-bold uppercase hover:bg-zinc-600 transition-colors"
                >
                  Adjust Requirements
                </button>
                <button 
                  onClick={() => handleAction('#trainers')}
                  className="text-zinc-500 px-6 py-2 text-xs font-bold uppercase hover:text-white transition-colors"
                >
                  Browse All Packages
                </button>
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
        ? "grid md:grid-cols-2 gap-4 md:gap-6" 
        : "grid md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar";

      return (
        <div className="animate-fade-in-up">
          <h3 className="text-xl md:text-2xl font-bold uppercase italic text-white mb-6 text-center leading-tight">{title}</h3>
          <div className={containerClasses}>
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-zinc-800 p-5 md:p-6 border border-zinc-700 hover:border-brand-red transition-colors relative flex flex-col">
                <div className="mb-4">
                  <h4 className="text-lg md:text-xl font-bold uppercase text-white leading-tight">{plan.title}</h4>
                  <div className="mt-2 md:mt-3">
                    <span className="text-2xl md:text-3xl font-black text-brand-red">{plan.price}</span>
                    <span className="text-zinc-500 text-[10px] md:text-xs font-bold ml-1 uppercase"> / {plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-1.5 md:space-y-2 mb-6 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-zinc-300 text-xs md:text-sm flex items-start gap-2">
                      <span className="text-brand-red mt-1 shrink-0">▸</span> {f}
                    </li>
                  ))}
                </ul>

                {plan.notes && (
                  <div className="mb-4 text-[10px] md:text-xs text-zinc-400 italic border-t border-zinc-700 pt-2">
                    {plan.notes.join(' • ')}
                  </div>
                )}

                <a 
                  href={plan.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-black font-black uppercase py-2.5 md:py-3 hover:bg-brand-red hover:text-white transition-colors text-center text-xs md:text-sm"
                >
                  Select Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  const Content = (
    <div className={`relative z-10 w-full bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col ${inline ? '' : 'max-w-4xl max-h-[95vh] md:max-h-[90vh]'}`}>
      {/* Header */}
      <div className="bg-black p-4 md:p-6 flex justify-between items-center border-b border-zinc-800">
        <div>
          <h2 className="text-xl md:text-2xl font-black uppercase italic text-white leading-none">
            <span className="text-brand-red">Join</span> FitBodies
          </h2>
          <p className="text-zinc-500 text-[10px] md:text-xs uppercase tracking-widest mt-1">Customize your experience</p>
        </div>
        {!inline && onClose && (
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className={`${inline ? 'p-5 md:p-16' : 'p-5 md:p-12'} overflow-y-auto flex-1`}>
        {step === 'category' && (
          <div className="animate-fade-in text-center">
            <h3 className="text-2xl md:text-5xl font-black uppercase italic text-white mb-8 md:mb-16">What are you looking for?</h3>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              <button 
                onClick={() => handleCategorySelect('membership')}
                className="group bg-zinc-800 p-6 md:p-14 hover:bg-brand-red transition-all duration-300 transform md:hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-black uppercase italic">Membership</h4>
                <p className="text-zinc-400 text-xs mt-2 group-hover:text-white/90">24/7 Access & Amenities</p>
              </button>

              <button 
                onClick={() => handleCategorySelect('classes')}
                className="group bg-zinc-800 p-6 md:p-14 hover:bg-brand-red transition-all duration-300 transform md:hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-black uppercase italic">Classes</h4>
                <p className="text-zinc-400 text-xs mt-2 group-hover:text-white/90">Interval Training & Challenges</p>
              </button>

              <button 
                onClick={() => handleCategorySelect('training')}
                className="group bg-zinc-800 p-6 md:p-14 hover:bg-brand-red transition-all duration-300 transform md:hover:-translate-y-2 text-center border border-zinc-700 hover:border-brand-red"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg md:text-xl font-black uppercase italic">Personal Training</h4>
                <p className="text-zinc-400 text-xs mt-2 group-hover:text-white/90">1-on-1 Coaching</p>
              </button>
            </div>
          </div>
        )}

        {step === 'membership-info' && (
          <div className="animate-fade-in text-center max-w-5xl mx-auto">
            <div className="mb-6 md:mb-8 text-left">
              <button 
                onClick={() => setStep('category')}
                className="text-zinc-500 hover:text-white text-xs md:text-sm uppercase font-bold flex items-center gap-2"
              >
                ← Back
              </button>
            </div>
            
            <h3 className="text-2xl md:text-5xl font-black uppercase italic text-white mb-4 md:mb-6 leading-tight">More Than Just A Gym</h3>
            <p className="text-zinc-400 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12">
              Join a community dedicated to strength, resilience, and results. We provide the tools; you bring the effort.
            </p>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-12 text-left mb-10 md:mb-16">
                <div className="bg-zinc-800/50 p-6 md:p-8 border border-zinc-800 rounded-lg">
                    <h4 className="text-xl md:text-2xl font-bold uppercase italic text-white mb-4 md:mb-6 flex items-center gap-3">
                      <span className="text-brand-red">01.</span> The Facility
                    </h4>
                    <ul className="space-y-3 md:space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11.536 9.636a6 6 0 113.636 3.636l-2.036 1.545M16 5v6" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white text-sm md:text-base">24/7 Key Fob Access</strong>
                          <span className="text-zinc-400 text-[11px] md:text-sm">Train on your schedule, day or night.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red shrink-0">
                           <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white text-sm md:text-base">Elite Equipment</strong>
                          <span className="text-zinc-400 text-[11px] md:text-sm">Hammer Strength, Rogue racks, and specialty bars.</span>
                        </div>
                      </li>
                    </ul>
                </div>

                <div className="bg-zinc-800/50 p-6 md:p-8 border border-zinc-800 rounded-lg">
                    <h4 className="text-xl md:text-2xl font-bold uppercase italic text-white mb-4 md:mb-6 flex items-center gap-3">
                      <span className="text-brand-red">02.</span> The Perks
                    </h4>
                    <ul className="space-y-3 md:space-y-4">
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white text-sm md:text-base">Free PT Session</strong>
                          <span className="text-zinc-400 text-[11px] md:text-sm">Every new member gets a free consultation.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="bg-zinc-900 p-2 rounded-full text-brand-red shrink-0">
                          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <div>
                          <strong className="block text-white text-sm md:text-base">No Hidden Fees</strong>
                          <span className="text-zinc-400 text-[11px] md:text-sm">Simple, transparent pricing options.</span>
                        </div>
                      </li>
                    </ul>
                </div>
            </div>

            <button 
                onClick={() => setStep('membership-type')}
                className="bg-brand-red text-white px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-wider text-base md:text-xl hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
            >
                View Pricing Options
            </button>
          </div>
        )}

        {step === 'membership-type' && (
          <div className="animate-fade-in text-center">
            <div className="mb-6 md:mb-8 text-left">
              <button 
                onClick={() => setStep('membership-info')}
                className="text-zinc-500 hover:text-white text-xs md:text-sm uppercase font-bold flex items-center gap-2"
              >
                ← Back
              </button>
            </div>
            <h3 className="text-2xl md:text-5xl font-black uppercase italic text-white mb-8 md:mb-16">How do you prefer to pay?</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              <button 
                onClick={() => handleMemTypeSelect('weekly')}
                className="group bg-zinc-800 p-8 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="text-xl md:text-2xl font-black text-white group-hover:text-brand-red">$W</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase italic mb-2">Weekly Billing</h4>
                <p className="text-zinc-400 text-xs md:text-sm group-hover:text-white/90">Lower recurring payments. Flexible & Contract options.</p>
              </button>

              <button 
                onClick={() => handleMemTypeSelect('paid-in-full')}
                className="group bg-zinc-800 p-8 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                   <span className="text-xl md:text-2xl font-black text-white group-hover:text-brand-red">$$$</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase italic mb-2">Paid In Full</h4>
                <p className="text-zinc-400 text-xs md:text-sm group-hover:text-white/90">One time payment. Fixed Terms (1 month - 1 year).</p>
              </button>
            </div>
          </div>
        )}

        {step === 'pt-payment-type' && (
          <div className="animate-fade-in text-center">
            <div className="mb-6 md:mb-8 text-left">
              <button 
                onClick={() => setStep('category')}
                className="text-zinc-500 hover:text-white text-xs md:text-sm uppercase font-bold flex items-center gap-2"
              >
                ← Back
              </button>
            </div>
            <h3 className="text-2xl md:text-5xl font-black uppercase italic text-white mb-8 md:mb-16">PT Payment Structure</h3>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              <button 
                onClick={() => handlePTPaymentTypeSelect('weekly')}
                className="group relative bg-zinc-800 p-8 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="absolute top-4 right-4 bg-zinc-900 border border-brand-red text-brand-red text-[10px] font-black uppercase px-2 py-0.5 rounded shadow group-hover:bg-white transition-colors">Requires Quiz</div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                  <span className="text-xl md:text-2xl font-black text-white group-hover:text-brand-red">W</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase italic mb-2">Weekly Billing</h4>
                <p className="text-zinc-400 text-xs md:text-sm group-hover:text-white/90">Choose your sessions via our quick dropdown quiz.</p>
              </button>

              <button 
                onClick={() => handlePTPaymentTypeSelect('full-cost')}
                className="group bg-zinc-800 p-8 md:p-14 hover:bg-brand-red transition-all duration-300 border border-zinc-700 hover:border-brand-red flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full mb-4 md:mb-6 flex items-center justify-center group-hover:bg-white transition-colors">
                   <span className="text-xl md:text-2xl font-black text-white group-hover:text-brand-red">$$$</span>
                </div>
                <h4 className="text-xl md:text-2xl font-black uppercase italic mb-2">Full Cost / PIF</h4>
                <p className="text-zinc-400 text-xs md:text-sm group-hover:text-white/90">Select from our pre-set full cost packages.</p>
              </button>
            </div>
          </div>
        )}

        {step === 'pt-quiz' && (
          <div className="animate-fade-in text-center max-w-2xl mx-auto">
            <div className="mb-6 md:mb-8 text-left">
              <button 
                onClick={() => setStep('pt-payment-type')}
                className="text-zinc-500 hover:text-white text-xs md:text-sm uppercase font-bold flex items-center gap-2"
              >
                ← Back
              </button>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-black uppercase italic text-white mb-2">Quick Dropdown Quiz</h3>
            <p className="text-zinc-400 text-sm mb-12">Select your frequency and duration to find your weekly rate.</p>

            <div className="space-y-8 mb-12 text-left">
               <div>
                  <label className="block text-white font-bold uppercase text-xs mb-3 tracking-widest">Sessions Per Week</label>
                  <select 
                    value={ptSessions}
                    onChange={(e) => setPtSessions(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:border-brand-red outline-none appearance-none cursor-pointer font-bold"
                  >
                     <option value="1">1 Session Per Week</option>
                     <option value="2">2 Sessions Per Week</option>
                     <option value="3">3 Sessions Per Week</option>
                  </select>
               </div>

               <div>
                  <label className="block text-white font-bold uppercase text-xs mb-3 tracking-widest">Session Duration</label>
                  <select 
                    value={ptDuration}
                    onChange={(e) => setPtDuration(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg focus:border-brand-red outline-none appearance-none cursor-pointer font-bold"
                  >
                     <option value="30">30 Minutes</option>
                     {ptSessions === '2' && <option value="45">45 Minutes</option>}
                     <option value="60">60 Minutes</option>
                  </select>
               </div>
            </div>

            <button 
                onClick={() => setStep('results')}
                className="w-full bg-brand-red text-white py-5 font-black uppercase italic tracking-wider text-lg hover:bg-red-600 transition-all transform hover:scale-[1.02] shadow-xl shadow-red-900/20"
            >
                Calculate Plan
            </button>
          </div>
        )}

        {step === 'results' && (
            <div className="animate-fade-in h-full flex flex-col">
              <div className="mb-4 md:mb-6 shrink-0 text-left">
                {!initialMode && (
                  <button 
                    onClick={() => {
                        if (category === 'membership') setStep('membership-type');
                        else if (category === 'training') {
                          if (ptPaymentType === 'weekly') setStep('pt-quiz');
                          else setStep('pt-payment-type');
                        }
                        else setStep('category');
                    }}
                    className="text-zinc-500 hover:text-white text-xs md:text-sm uppercase font-bold flex items-center gap-2"
                  >
                    &larr; Back
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