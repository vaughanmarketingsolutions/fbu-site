import React from 'react';
import { trainers } from '../data';

const PersonalTrainingPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-zinc-950 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">EXPERT COACHING</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">Meet The Team</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Our trainers aren't just staff; they are elite athletes and educators dedicated to your progress.
              Whether you need accountability, technique correction, or program design, we have a specialist for you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {trainers.map((trainer) => (
              <div key={trainer.id} className="group relative overflow-hidden bg-black border border-zinc-800 animate-fade-in">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold uppercase italic">{trainer.name}</h3>
                  <p className="text-brand-red font-bold text-sm uppercase mb-2">{trainer.specialty}</p>
                  <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {trainer.bio}
                  </p>
                </div>
              </div>
            ))}
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