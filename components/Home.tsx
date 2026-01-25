import React from 'react';
import { trainers } from '../data';

interface HomeProps {
  onNavigate: (page: string) => void;
  onTrainerClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onTrainerClick }) => {
  const MEMBER_PORTAL_URL = "https://fitbodiesunlimited.gymmasteronline.com/portal/login";

  const scrollToOfferings = () => {
    const element = document.getElementById('offerings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/3URcmxV.jpeg" 
            alt="Fit Bodies Unlimited Gym" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center pt-24 md:pt-32">
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-black uppercase italic leading-none mb-6 md:mb-8 animate-fade-in-up">
            Unleash<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 pr-2 md:pr-4">Unlimited</span>
            <br/>Potential
          </h1>
          <p className="text-zinc-200 max-w-2xl mx-auto mb-10 text-base md:text-xl font-medium drop-shadow-lg px-2">
            Fit Bodies Unlimited is more than a gym. It's a sanctuary for those who refuse to settle. 
            24/7 Access. Elite Training. No Excuses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToOfferings}
              className="bg-brand-red text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-wider hover:bg-red-600 transition-all transform hover:scale-105 shadow-xl shadow-red-900/40"
            >
              Start Your Journey
            </button>
            <a 
              href={MEMBER_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-xl"
            >
              Member Portal
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-16 md:py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic text-white">What We <span className="text-brand-red">Offer</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div onClick={() => onNavigate('membership')} className="group relative h-[350px] md:h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/01Cvcaz.png" alt="Membership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Membership</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">Join the elite community.</p>
              </div>
            </div>
            <div onClick={() => onNavigate('training')} className="group relative h-[350px] md:h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/fowg1iX.png" alt="Personal Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Personal Training</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">Expert guidance.</p>
              </div>
            </div>
            <div onClick={() => onNavigate('classes')} className="group relative h-[350px] md:h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/gSiucAN.png" alt="Classes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Classes</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">High energy sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 md:py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-10 md:mb-12 text-center">Meet The <span className="text-brand-red">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            {trainers.slice(0, 3).map((trainer) => (
              <div key={trainer.id} onClick={() => onTrainerClick(trainer.id)} className="group relative overflow-hidden bg-black border border-zinc-800 cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:grayscale-0 grayscale ${trainer.id === '1' ? 'scale-100 group-hover:scale-110' : 'scale-125 group-hover:scale-[1.35]'}`} 
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-2xl font-bold uppercase italic text-white">{trainer.name}</h3>
                    <p className="text-brand-red font-bold text-sm uppercase mb-2">{trainer.specialty}</p>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                         <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 pt-2">
                            {trainer.bio}
                         </p>
                         <p className="text-brand-red text-xs font-bold uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                           View Profile &rarr;
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
             <button onClick={() => onNavigate('training')} className="bg-transparent border border-white text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors text-sm">
                Meet All Trainers
             </button>
          </div>
        </div>
      </section>

      {/* Contact Info (Quick View) */}
      <section className="py-20 md:py-24 bg-zinc-950 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
             <div className="text-center p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
                <h4 className="text-white font-black uppercase mb-4">Locations</h4>
                <p className="text-zinc-500 text-sm">Newport News & Yorktown, VA</p>
                <button onClick={() => onNavigate('contact')} className="text-brand-red font-bold text-xs uppercase mt-4">Get Directions</button>
             </div>
             <div className="text-center p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
                <h4 className="text-white font-black uppercase mb-4">Hours</h4>
                <p className="text-zinc-500 text-sm italic">Open 24/7 for Members</p>
                <p className="text-brand-red font-bold text-xs uppercase mt-4">Staffed 8am - 9pm</p>
             </div>
             <div className="text-center p-8 bg-zinc-900 border border-zinc-800 rounded-lg">
                <h4 className="text-white font-black uppercase mb-4">Contact</h4>
                <p className="text-zinc-500 text-sm">757-344-9844</p>
                <p className="text-zinc-500 text-sm">info@fitbodiesunlimited.com</p>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;