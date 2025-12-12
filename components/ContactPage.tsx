import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 bg-zinc-950 min-h-screen">
       <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-brand-red font-bold tracking-widest mb-2">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase italic text-white mb-4">We Are Here To Help</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Questions about membership? Want to schedule a tour? Drop us a line or stop by the front desk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="space-y-8 animate-fade-in">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
                   <h4 className="text-xl font-bold uppercase italic text-white mb-4">Location</h4>
                   <p className="text-zinc-400">123 Fitness Blvd</p>
                   <p className="text-zinc-400">Strongsville, OH 44136</p>
                   <div className="mt-4 aspect-video w-full bg-zinc-800 rounded flex items-center justify-center border border-zinc-700">
                      <span className="text-zinc-500 text-sm">Interactive Map</span>
                   </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg">
                   <h4 className="text-xl font-bold uppercase italic text-white mb-4">Hours & Contact</h4>
                   <div className="grid grid-cols-2 gap-4">
                     <div><p className="text-white font-bold text-sm">Members</p><p className="text-zinc-400 text-sm">24/7 Access</p></div>
                     <div><p className="text-white font-bold text-sm">Staffed Hours</p><p className="text-zinc-400 text-sm">Mon-Fri: 8am - 9pm</p></div>
                     <div className="col-span-2 border-t border-zinc-800 pt-4 mt-2">
                        <p className="text-brand-red font-bold">info@fitbodiesunlimited.com</p>
                        <p className="text-white">(555) 123-4567</p>
                     </div>
                   </div>
                </div>
             </div>

             <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg animate-fade-in delay-100 shadow-xl">
                <h4 className="text-2xl font-bold uppercase italic text-white mb-6">Send a Message</h4>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Name</label><input type="text" className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="Your Name" /></div>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Email</label><input type="email" className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="your@email.com" /></div>
                   <div><label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Message</label><textarea rows={4} className="w-full bg-black border border-zinc-700 text-white p-3 focus:border-brand-red outline-none transition-colors" placeholder="How can we help?"></textarea></div>
                   <button type="submit" className="w-full bg-brand-red text-white font-black uppercase py-4 hover:bg-red-600 transition-colors">Send Message</button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default ContactPage;