import React, { useEffect } from 'react';
import { Trainer } from '../types';

interface TrainerProfileProps {
  trainer: Trainer;
  onBack: () => void;
  onBook: () => void;
}

const TrainerProfile: React.FC<TrainerProfileProps> = ({ trainer, onBack, onBook }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trainer]);

  return (
    <div className="pt-24 min-h-screen bg-zinc-950 text-white animate-fade-in">
      <div className="container mx-auto px-6 py-12">
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-zinc-500 hover:text-white uppercase font-bold text-sm tracking-wider transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Team
        </button>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[3/4] w-full rounded-lg overflow-hidden border border-zinc-800 shadow-2xl relative z-10">
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-brand-red/30 rounded-lg -z-0 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -z-0"></div>
          </div>

          {/* Content Column */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm">{trainer.specialty}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-8 leading-tight">
              {trainer.name}
            </h1>

            {/* Certifications if available */}
            {trainer.certifications && trainer.certifications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-zinc-500 font-bold uppercase text-xs mb-3">Credentials</h3>
                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.map((cert, idx) => (
                    <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1 text-xs rounded-full">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bio Content */}
            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed mb-12">
              {trainer.fullBio ? (
                trainer.fullBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{trainer.bio}</p>
              )}
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <button 
                onClick={onBook}
                className="w-full md:w-auto bg-brand-red text-white px-10 py-5 font-black uppercase tracking-wider hover:bg-red-600 transition-all transform hover:scale-105 shadow-lg shadow-red-900/20 text-xl"
              >
                Book with {trainer.name.split(' ')[0]}
              </button>
              <p className="mt-4 text-zinc-500 text-sm italic">
                * Click to schedule a consultation directly.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrainerProfile;