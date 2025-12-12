import React from 'react';

interface MembershipPageProps {
  onJoinClick: (planType?: 'weekly' | 'paid-in-full') => void;
}

const MembershipPage: React.FC<MembershipPageProps> = ({ onJoinClick }) => {
  return (
    <div className="pt-32 pb-20 bg-black min-h-screen relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">JOIN THE CLUB</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase italic text-white mb-6">Invest In Yourself</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Flexible options designed for your lifestyle. No hidden fees. No nonsense. 
              Just pure access to the best training facility in the city.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
             <div className="bg-zinc-900/50 p-8 border border-zinc-800 rounded-lg text-center hover:border-brand-red transition-colors group animate-fade-in">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold uppercase text-white mb-2">24/7 Access</h4>
                <p className="text-zinc-400">Train on your terms. Early morning or late night, the iron is always waiting.</p>
             </div>
             <div className="bg-zinc-900/50 p-8 border border-zinc-800 rounded-lg text-center hover:border-brand-red transition-colors group animate-fade-in delay-100">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h4 className="text-xl font-bold uppercase text-white mb-2">Top Tier Equipment</h4>
                <p className="text-zinc-400">Hammer Strength, Rogue Power Racks, and specialty bars for serious lifters.</p>
             </div>
             <div className="bg-zinc-900/50 p-8 border border-zinc-800 rounded-lg text-center hover:border-brand-red transition-colors group animate-fade-in delay-200">
                <div className="w-16 h-16 bg-black rounded-full mx-auto mb-6 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
                   <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h4 className="text-xl font-bold uppercase text-white mb-2">Free Consultation</h4>
                <p className="text-zinc-400">Every new member gets a 30-min strategy session with a lead trainer.</p>
             </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Weekly Plans */}
            <div className="bg-black border-2 border-brand-red p-10 flex flex-col relative shadow-2xl shadow-red-900/20 transform hover:-translate-y-2 transition-transform animate-fade-in-up">
              <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold uppercase px-4 py-1">Most Popular</div>
              <h4 className="text-3xl font-black uppercase italic text-white mb-4">Weekly Plans</h4>
              <div className="mb-6">
                <span className="text-zinc-500 font-bold block text-sm mb-1">Starting at</span>
                <span className="text-6xl font-black text-brand-red">$9.99</span>
                <span className="text-zinc-500 font-bold uppercase">/ week</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6 pb-6 border-b border-zinc-800">
                Manageable weekly payments. Choose your commitment level.
              </p>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-start gap-3 text-white font-bold"><span className="text-brand-red">✓</span> 12 Month Contract @ $9.99/wk</li>
                <li className="flex items-start gap-3 text-white font-bold"><span className="text-brand-red">✓</span> No Contract Option @ $13.49/wk</li>
                <li className="flex items-start gap-3 text-white font-bold"><span className="text-brand-red">✓</span> 24/7 Access to Both Locations</li>
                <li className="flex items-start gap-3 text-white font-bold"><span className="text-brand-red">✓</span> Free PT Session Included</li>
              </ul>
              <button onClick={() => onJoinClick('weekly')} className="w-full py-4 bg-brand-red text-white font-black uppercase hover:bg-red-600 transition-colors shadow-lg">View Weekly Options</button>
            </div>

            {/* Paid In Full */}
            <div className="bg-zinc-900 border border-zinc-800 p-10 flex flex-col relative group hover:border-zinc-600 transition-colors animate-fade-in-up delay-100">
              <h4 className="text-3xl font-black uppercase italic text-white mb-4">Paid In Full</h4>
              <div className="mb-6">
                <span className="text-zinc-500 font-bold block text-sm mb-1">Starting at</span>
                <span className="text-6xl font-black text-white">$55</span>
                <span className="text-zinc-500 font-bold uppercase">/ term</span>
              </div>
              <p className="text-zinc-400 text-sm mb-6 pb-6 border-b border-zinc-800">
                One time payment. Fixed term access. No recurring billing.
              </p>
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-start gap-3 text-zinc-300"><span className="text-brand-red">✓</span> 24/7 Access to Both Locations</li>
                <li className="flex items-start gap-3 text-zinc-300"><span className="text-brand-red">✓</span> 1 Month to 1 Year Options</li>
                <li className="flex items-start gap-3 text-zinc-300"><span className="text-brand-red">✓</span> Best Long Term Savings</li>
                <li className="flex items-start gap-3 text-zinc-300"><span className="text-brand-red">✓</span> No Signup Fee</li>
                <li className="flex items-start gap-3 text-zinc-300"><span className="text-brand-red">✓</span> No Monthly Fees</li>
              </ul>
              <button onClick={() => onJoinClick('paid-in-full')} className="w-full py-4 border border-white text-white font-black uppercase hover:bg-white hover:text-black transition-colors">View Fixed Terms</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default MembershipPage;