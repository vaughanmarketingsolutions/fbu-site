import React from 'react';

const ClassesPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2 uppercase">ELITE TRAINING PROGRAMS</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">Interval Training <br className="md:hidden" /><span className="text-brand-red">+</span> Biggest Loser!</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              One Monthly Payment. Unlimited Class Access. <br/>
              Our flagship program designed to transform your body and mindset.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Main Program Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 md:p-12">
                   <h4 className="text-2xl font-black uppercase italic text-white mb-6">Program Details</h4>
                   <div className="space-y-6 text-zinc-300">
                      <p>
                        This is a high-intensity 45-60 minute class designed to challenge you and make you better. 
                        Starting with 2 classes per day Monday through Friday.
                      </p>
                      <div className="bg-brand-red/10 p-4 border-l-4 border-brand-red">
                        <p className="text-white font-bold">
                          Get access to as many classes as you want for the entire month!
                        </p>
                      </div>
                      <p className="font-medium">
                        This class works the entire body both inside and out! For the off days you will have 24/7 access to the gym and if you desire... free entry to our Biggest Loser Challenge.
                      </p>
                      <p className="text-sm italic text-zinc-500">
                        *We can adapt exercises to accommodate any fitness levels from beginner to advanced.
                      </p>
                      <div className="pt-4 flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-red shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <div>
                          <p className="text-xs uppercase font-bold text-zinc-500">Exclusive Location</p>
                          <p className="text-white font-bold">Yorktown: 2900 Hampton Highway Suite I, Yorktown VA 23693</p>
                        </div>
                      </div>
                   </div>
                </div>
                <div className="bg-zinc-800 p-8 md:p-12 flex flex-col justify-center gap-8 border-l border-zinc-700">
                   {/* Member Price */}
                   <div className="bg-brand-red p-8 rounded-lg text-white shadow-xl transform transition-transform hover:scale-[1.02]">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-xl font-black uppercase italic leading-tight mb-2">Current Members</h5>
                          <p className="text-sm text-white/80">Billed Monthly • Unlimited Classes</p>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-black">$100</span>
                          <p className="text-[10px] font-bold uppercase tracking-widest mt-1">4 Weekly by Billing</p>
                        </div>
                      </div>
                      <a href="https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/7f24510d1ef8baaa7033f0bd94a33521" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full bg-white text-brand-red font-black uppercase py-4 text-center rounded hover:bg-zinc-100 transition-all transform active:scale-95 shadow-lg">Sign Up & Join</a>
                   </div>

                   {/* Non-Member Price */}
                   <div className="bg-zinc-900 border-2 border-brand-red p-8 rounded-lg text-white shadow-xl transform transition-transform hover:scale-[1.02]">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-xl font-black uppercase italic leading-tight mb-2">Non-Members</h5>
                          <p className="text-sm text-zinc-400">Billed Monthly • Unlimited Classes</p>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-black text-brand-red">$150</span>
                          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">4 Weekly by Billing</p>
                        </div>
                      </div>
                      <a href="https://fitbodiesunlimited.gymmasteronline.com/portal/signup/details/0b2ed7b0e7378977806d6e07b74fdc34" target="_blank" rel="noopener noreferrer" className="mt-8 block w-full bg-brand-red text-white font-black uppercase py-4 text-center rounded hover:bg-red-600 transition-all transform active:scale-95 shadow-lg">Sign Up & Join</a>
                   </div>
                   
                   <p className="text-center text-zinc-500 font-bold uppercase tracking-widest text-xs">No Signup Fee • 24/7 Access Included</p>
                </div>
              </div>
            </div>

            {/* Schedule Info */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
                  <h4 className="text-xl font-bold uppercase italic text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-red rounded-full"></span> Class Schedule
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400 uppercase text-xs font-bold">Morning Session</span>
                      <span className="text-white font-black italic">5:15 AM - 6:15 AM</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-800 pb-2">
                      <span className="text-zinc-400 uppercase text-xs font-bold">Evening Session</span>
                      <span className="text-white font-black italic">5:15 PM - 6:15 PM</span>
                    </div>
                    <p className="text-zinc-500 text-[11px] uppercase tracking-wider font-bold pt-2">Available Monday through Friday</p>
                  </div>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
                  <h4 className="text-xl font-bold uppercase italic text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full"></span> What's Included
                  </h4>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                    <li className="text-zinc-400 text-sm flex gap-2 items-center"><span className="text-brand-red font-bold text-lg leading-none">✓</span> Unlimited Classes</li>
                    <li className="text-zinc-400 text-sm flex gap-2 items-center"><span className="text-brand-red font-bold text-lg leading-none">✓</span> 24/7 Gym Access</li>
                    <li className="text-zinc-400 text-sm flex gap-2 items-center"><span className="text-brand-red font-bold text-lg leading-none">✓</span> Biggest Loser Challenge</li>
                    <li className="text-zinc-400 text-sm flex gap-2 items-center"><span className="text-brand-red font-bold text-lg leading-none">✓</span> Professional Coaching</li>
                  </ul>
              </div>
            </div>
          </div>
       </div>
    </div>
  );
};

export default ClassesPage;