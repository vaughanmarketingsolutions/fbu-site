import React from 'react';
import { trainers } from '../data';

interface PersonalTrainingPageProps {
  onTrainerClick: (id: string) => void;
}

const PersonalTrainingPage: React.FC<PersonalTrainingPageProps> = ({ onTrainerClick }) => {
  const weeklyPTPackages = [
    { sessions: "1x", time: "30 min", price: "$38.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/9fe888d62ad8315dceb961c5b38334f2" },
    { sessions: "1x", time: "60 min", price: "$70.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/34cb513485cffdeb4fda35ce16faa96c" },
    { sessions: "2x", time: "30 min", price: "$75.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/c6991c8b54c7deddc7445b75c889d1b0" },
    { sessions: "2x", time: "45 min", price: "$110.00", badge: "Fixed Term", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/5a6f264b5e50b620c2838dcd145a275a" },
    { sessions: "2x", time: "60 min", price: "$140.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/dca057cada50dee96d97faa070fa885d" },
    { sessions: "3x", time: "30 min", price: "$110.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/32fb41f0ce60f673a51b5f5f365a9db9" },
    { sessions: "3x", time: "60 min", price: "$210.00", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/c6fb3dc000d46d955e71419b9adb6bea" },
  ];

  const fullCostPTPackages = [
    { sessions: "1x", time: "45 min", price: "$200.00", label: "4 Weeks / Paid in Full", desc: "Complete 1-on-1 focus with custom programming and nutrition.", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup" },
    { sessions: "3x", time: "Sessions", price: "$99.00", label: "3 Sessions Starter", isPopular: true, desc: "3 sessions with a trainer to get you going. Perfect for trying us out!", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup" },
    { sessions: "3x", time: "45 min", price: "$600.00", label: "4 Weeks / Paid in Full", desc: "Elite level coaching block with intensive body composition checks.", link: "https://fitbodiesunlimited.gymmasteronline.com/portal/signup" },
  ];

  return (
    <div className="pt-32 pb-20 bg-zinc-950 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">EXPERT COACHING</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">Meet The Team</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our trainers aren't just staff; they are elite athletes and educators dedicated to your progress.
              Whether you need accountability, technique correction, or program design, we have a specialist for you.
            </p>
          </div>
          
          {/* Trainers Grid */}
          <div className="flex flex-wrap justify-center gap-8 mb-24">
            {trainers.map((trainer) => (
              <div 
                key={trainer.id} 
                onClick={() => onTrainerClick(trainer.id)}
                className="w-full md:w-[calc((100%-4rem)/3)] min-w-[300px] group relative overflow-hidden bg-black border border-zinc-800 animate-fade-in cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:grayscale-0 grayscale ${trainer.id === '1' ? 'scale-100 group-hover:scale-110' : 'scale-125 group-hover:scale-[1.35]'}`}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold uppercase italic text-white relative z-10">{trainer.name}</h3>
                    <p className="text-brand-red font-bold text-sm uppercase mb-2 relative z-10">{trainer.specialty}</p>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                         <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pt-2">
                            {trainer.bio}
                         </p>
                         <p className="text-brand-red text-xs font-bold uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                           Read Full Bio &rarr;
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Cost Packages Section */}
          <div id="full-cost" className="mb-24 scroll-mt-32">
             <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black uppercase italic text-white mb-4">Paid In Full Packages</h3>
                <p className="text-zinc-500">One-time payment options for dedicated PT blocks.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {fullCostPTPackages.map((pkg, idx) => (
                  <div key={idx} className={`p-8 border-2 transition-all flex flex-col relative rounded ${pkg.isPopular ? 'bg-brand-red border-white shadow-2xl scale-105 z-10' : 'bg-zinc-900 border-zinc-800'}`}>
                    {pkg.isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-red font-black uppercase text-[10px] px-4 py-1 rounded-full shadow-lg">Most Popular</div>
                    )}
                    <div className="mb-6">
                       <h4 className="text-2xl font-black uppercase italic text-white leading-none mb-1">{pkg.sessions} <span className="text-sm font-bold opacity-80">{pkg.time}</span></h4>
                       <p className={`text-xs font-bold uppercase tracking-widest ${pkg.isPopular ? 'text-white' : 'text-brand-red'}`}>{pkg.label}</p>
                    </div>
                    <p className={`text-sm mb-8 flex-1 ${pkg.isPopular ? 'text-white/90' : 'text-zinc-400'}`}>{pkg.desc}</p>
                    <div className="mb-8">
                       <span className="block text-4xl font-black text-white">{pkg.price}</span>
                       <span className={`text-[10px] font-bold uppercase tracking-widest ${pkg.isPopular ? 'text-white/70' : 'text-zinc-500'}`}>Full Cost by Billing</span>
                    </div>
                    <a 
                      href={pkg.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`block w-full py-4 text-center font-black uppercase transition-all transform active:scale-95 text-sm shadow-lg ${pkg.isPopular ? 'bg-white text-brand-red hover:bg-zinc-100' : 'bg-brand-red text-white hover:bg-red-600'}`}
                    >
                      Enroll Now
                    </a>
                  </div>
                ))}
             </div>
          </div>

          {/* Weekly Packages Section */}
          <div id="weekly" className="mb-24 scroll-mt-32">
             <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-black uppercase italic text-white mb-4">Weekly Billing Packages</h3>
                <p className="text-zinc-500">Recurring weekly payments for ongoing coaching blocks.</p>
             </div>
             
             <div className="grid gap-4 max-w-5xl mx-auto">
                {weeklyPTPackages.map((pkg, idx) => (
                  <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-center group hover:border-brand-red transition-colors rounded">
                    <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left mb-6 md:mb-0">
                       <div className="bg-brand-red text-white font-black italic px-4 py-2 text-xl italic skew-x-[-12deg] group-hover:scale-110 transition-transform">
                          {pkg.sessions} <span className="text-xs">{pkg.time}</span>
                       </div>
                       <div>
                          <h4 className="text-white font-black uppercase italic text-lg leading-none mb-2">4 Weeks PT Block</h4>
                          <p className="text-zinc-500 text-xs max-w-sm">Custom workouts, nutritional advice, and movement assessments.</p>
                       </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                       <div className="text-center md:text-right">
                          <span className="block text-2xl font-black text-white">{pkg.price}</span>
                          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Weekly by Billing {pkg.badge ? `• ${pkg.badge}` : ''}</span>
                       </div>
                       <a 
                        href={pkg.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-black font-black uppercase px-8 py-3 hover:bg-brand-red hover:text-white transition-all transform active:scale-95 text-sm"
                       >
                         Sign Up
                       </a>
                    </div>
                  </div>
                ))}
                <p className="text-center text-zinc-600 text-[10px] uppercase font-bold tracking-[0.2em] mt-6">Early Cancelation fee is 25% of the remaining balance of the contract. • No Signup Fee.</p>
             </div>
          </div>

          <div className="bg-zinc-900 p-10 rounded-lg border border-zinc-800 text-center">
             <h3 className="text-3xl font-black uppercase italic text-white mb-6">Our Philosophy</h3>
             <div className="grid md:grid-cols-3 gap-8">
                <div>
                   <h4 className="text-brand-red font-bold uppercase mb-2">Assess</h4>
                   <p className="text-zinc-400">We start with a full movement screen and goal setting session.</p>
                </div>
                <div>
                   <h4 className="text-brand-red font-bold uppercase mb-2">Program</h4>
                   <p className="text-zinc-400">Custom tailored workouts designed specifically for your body.</p>
                </div>
                <div>
                   <h4 className="text-brand-red font-bold uppercase mb-2">Execute</h4>
                   <p className="text-zinc-400">We guide you through every rep to ensure safety and intensity.</p>
                </div>
             </div>
          </div>
        </div>
    </div>
  );
};

export default PersonalTrainingPage;