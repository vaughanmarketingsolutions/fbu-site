import React from 'react';
import Schedule from './Schedule';
import JoinQuiz from './JoinQuiz';
import { trainers } from '../data';

interface HomeProps {
  onNavigate: (page: string) => void;
  onTrainerClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onTrainerClick }) => {
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
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase italic leading-none mb-8">
            Unleash<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500 pr-4">Unlimited</span>
            <br/>Potential
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
            Fit Bodies Unlimited is more than a gym. It's a sanctuary for those who refuse to settle. 
            24/7 Access. Elite Training. No Excuses.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToOfferings}
              className="bg-brand-red text-white px-8 py-4 font-black uppercase tracking-wider hover:bg-red-600 transition-colors"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black uppercase italic text-white">What We <span className="text-brand-red">Offer</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div onClick={() => onNavigate('membership')} className="group relative h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/01Cvcaz.png" alt="Membership" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Membership</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">Join the elite community.</p>
              </div>
            </div>
            <div onClick={() => onNavigate('training')} className="group relative h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/fowg1iX.png" alt="Personal Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Personal Training</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">Expert guidance.</p>
              </div>
            </div>
            <div onClick={() => onNavigate('classes')} className="group relative h-[500px] overflow-hidden rounded-lg border border-zinc-800 cursor-pointer">
              <img src="https://i.imgur.com/gSiucAN.png" alt="Classes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <h3 className="text-3xl font-black uppercase italic text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Classes</h3>
                <div className="w-12 h-1 bg-brand-red mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 delay-100"></div>
                <p className="text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">High energy sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">TRAINING SCHEDULE</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white">Dominate Every Day</h3>
          </div>
          <Schedule />
          <div className="text-center mt-12">
             <button onClick={() => onNavigate('classes')} className="text-white hover:text-brand-red border-b border-white hover:border-brand-red uppercase font-bold tracking-wider transition-colors pb-1">
                View Full Classes Page →
             </button>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black uppercase italic mb-12 text-center">Meet The <span className="text-brand-red">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {trainers.slice(0, 3).map((trainer) => (
              <div key={trainer.id} onClick={() => onTrainerClick(trainer.id)} className="group relative overflow-hidden bg-black border border-zinc-800 cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale" />
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
             <button onClick={() => onNavigate('training')} className="bg-transparent border border-white text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors">
                Meet All Trainers
             </button>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black uppercase italic">Choose Your Path</h3>
            <p className="text-zinc-500 mt-4">Find the perfect plan for your goals.</p>
          </div>
          <div className="max-w-7xl mx-auto">
            <JoinQuiz inline onTrainerSelect={onTrainerClick} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-brand-red font-bold tracking-widest mb-2">GET IN TOUCH</h2>
             <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white">We Are Here To Help</h3>
             <p className="text-zinc-500 mt-4">Questions about membership? Want to schedule a tour? Drop us a line.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Name</label><input type="text" className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="Your Name" /></div>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Email</label><input type="email" className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="your@email.com" /></div>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Message</label><textarea rows={4} className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="How can we help?"></textarea></div>
                   <button type="submit" className="w-full bg-brand-red text-white font-black uppercase py-4 hover:bg-red-600 transition-colors">Send Message</button>
                </form>
             </div>
             <div className="flex flex-col justify-center space-y-10 pl-0 md:pl-12">
                <div>
                  <h4 className="text-2xl font-bold uppercase italic text-white mb-4 flex items-center gap-3"><span className="text-brand-red">▸</span> Location</h4>
                  <p className="text-white font-bold text-lg mb-1">Newport News:</p>
                  <p className="text-zinc-400 text-lg mb-4">135 Harpersville Rd, Newport News, VA 23601</p>
                  
                  <p className="text-white font-bold text-lg mb-1">Yorktown:</p>
                  <p className="text-zinc-400 text-lg">2900 Hampton Hwy I, Yorktown, VA 23693</p>
                </div>
                <div><h4 className="text-2xl font-bold uppercase italic text-white mb-4 flex items-center gap-3"><span className="text-brand-red">▸</span> Hours</h4><p className="text-white font-bold">Members: <span className="text-zinc-400 font-normal">24/7 Access</span></p><p className="text-white font-bold">Staff: <span className="text-zinc-400 font-normal">Mon-Fri 8am-9pm</span></p></div>
                <div><h4 className="text-2xl font-bold uppercase italic text-white mb-4 flex items-center gap-3"><span className="text-brand-red">▸</span> Contact</h4><p className="text-brand-red font-bold text-xl">info@fitbodiesunlimited.com</p></div>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;