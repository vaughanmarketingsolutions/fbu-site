import React from 'react';
import Schedule from './Schedule';

const ClassesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">TRAINING SCHEDULE</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">Dominate Every Day</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              From high-intensity interval training to recovery yoga, our schedule is built to create the complete athlete.
              Drop-ins welcome for all classes.
            </p>
          </div>
          <Schedule />
          
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border-l-4 border-brand-red p-8">
                <h4 className="text-xl font-bold uppercase italic text-white mb-2">How to Book</h4>
                <p className="text-zinc-400">Members can book up to 7 days in advance via the app. Non-members can purchase day passes at the front desk or online.</p>
            </div>
            <div className="bg-zinc-900 border-l-4 border-white p-8">
                <h4 className="text-xl font-bold uppercase italic text-white mb-2">What to Bring</h4>
                <p className="text-zinc-400">Bring a towel, water bottle, and intensity. We provide mats for Yoga and Pilates, but you are welcome to bring your own.</p>
            </div>
          </div>
       </div>
    </div>
  );
};

export default ClassesPage;