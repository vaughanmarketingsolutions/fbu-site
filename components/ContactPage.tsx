import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-zinc-950 min-h-screen">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">We Are Here To Help</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Questions about membership? Want to schedule a tour? Visit one of our locations or reach out directly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
             <div className="grid md:grid-cols-2 gap-8">
                {/* Newport News Card */}
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-xl flex flex-col">
                   <h4 className="text-xl font-bold uppercase italic text-white mb-4 flex items-center gap-2">
                     <span className="text-brand-red text-2xl">▸</span> Newport News
                   </h4>
                   <p className="text-zinc-400 mb-6 flex-1">135 Harpersville Rd<br/>Newport News, VA 23601</p>
                   
                   <a 
                    href="https://share.google/7cf0kqARhKMsphctJ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative aspect-video w-full bg-zinc-800 rounded flex flex-col items-center justify-center border border-zinc-700 hover:border-brand-red transition-all overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i2360!3i1575!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <svg className="w-10 h-10 text-brand-red mb-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-white font-bold uppercase text-xs tracking-widest relative z-10">View on Google Maps</span>
                   </a>
                </div>

                {/* Yorktown Card */}
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg shadow-xl flex flex-col">
                   <h4 className="text-xl font-bold uppercase italic text-white mb-4 flex items-center gap-2">
                     <span className="text-brand-red text-2xl">▸</span> Yorktown
                   </h4>
                   <p className="text-zinc-400 mb-6 flex-1">2900 Hampton Hwy I<br/>Yorktown, VA 23693</p>
                   
                   <a 
                    href="https://share.google/55ohYmnSPCvJIprLh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative aspect-video w-full bg-zinc-800 rounded flex flex-col items-center justify-center border border-zinc-700 hover:border-brand-red transition-all overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i13!2i2361!3i1576!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] bg-cover opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <svg className="w-10 h-10 text-brand-red mb-2 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-white font-bold uppercase text-xs tracking-widest relative z-10">View on Google Maps</span>
                   </a>
                </div>
             </div>

             <div className="bg-brand-red p-10 rounded-lg shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                   <h4 className="text-3xl font-black uppercase italic text-white leading-tight">Elite Support</h4>
                   <p className="text-white/80 font-bold">Reach our staff during business hours.</p>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-right">
                   <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Email Address</p>
                      <p className="text-white text-xl font-black">info@fitbodiesunlimited.com</p>
                   </div>
                   <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Phone Number</p>
                      <p className="text-white text-2xl font-black">757-344-9844</p>
                   </div>
                </div>
             </div>

             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg text-center">
                <h4 className="text-xl font-bold uppercase italic text-white mb-4">Operational Hours</h4>
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
                  <div>
                    <p className="text-brand-red font-black text-xl mb-1">MEMBERS</p>
                    <p className="text-white text-lg">24/7 Access</p>
                  </div>
                  <div className="hidden md:block w-px bg-zinc-800"></div>
                  <div>
                    <p className="text-zinc-500 font-bold text-xl mb-1 uppercase">STAFFED HOURS</p>
                    <p className="text-white text-lg">Mon-Fri: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ContactPage;