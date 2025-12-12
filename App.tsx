import React, { useState, useEffect } from 'react';
import AICoach from './components/AICoach';
import JoinQuiz from './components/JoinQuiz';
import Home from './components/Home';
import ClassesPage from './components/ClassesPage';
import PersonalTrainingPage from './components/PersonalTrainingPage';
import MembershipPage from './components/MembershipPage';
import ContactPage from './components/ContactPage';

type View = 'home' | 'classes' | 'training' | 'membership' | 'contact';

interface NavLinkProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ label, active, onClick }) => (
  <button 
    className={`font-bold uppercase tracking-wider text-sm transition-colors ${active ? 'text-brand-red' : 'text-white hover:text-brand-red'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizInitialMode, setQuizInitialMode] = useState<'weekly' | 'paid-in-full' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string) => {
    setCurrentView(view as View);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinClick = (type?: 'weekly' | 'paid-in-full') => {
    setQuizInitialMode(type || null);
    setQuizOpen(true);
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavClick} />;
      case 'classes':
        return <ClassesPage />;
      case 'training':
        return <PersonalTrainingPage />;
      case 'membership':
        return <MembershipPage onJoinClick={handleJoinClick} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden flex flex-col">
      {/* Quiz Modal */}
      {quizOpen && <JoinQuiz onClose={() => setQuizOpen(false)} initialMode={quizInitialMode} />}

      {/* Header */}
      <nav 
        className={`fixed w-full z-40 transition-all duration-300 border-b ${
          scrolled ? 'bg-black/95 border-zinc-800 py-2' : 'bg-transparent border-transparent py-4 md:py-6'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center shrink-0">
            <img 
              src="https://imgur.com/Hz1tXb2.png" 
              alt="Fit Bodies Unlimited" 
              className="h-12 md:h-16 object-contain" 
            />
          </a>
          
          <div className="hidden md:flex gap-10 lg:gap-14 items-center">
            <NavLink label="Home" active={currentView === 'home'} onClick={() => handleNavClick('home')} />
            <NavLink label="Classes" active={currentView === 'classes'} onClick={() => handleNavClick('classes')} />
            <NavLink label="Trainers" active={currentView === 'training'} onClick={() => handleNavClick('training')} />
            <NavLink label="Membership" active={currentView === 'membership'} onClick={() => handleNavClick('membership')} />
            <NavLink label="Contact" active={currentView === 'contact'} onClick={() => handleNavClick('contact')} />
          </div>

          <div className="hidden md:block shrink-0">
            <button onClick={() => handleJoinClick()} className="bg-white text-black px-8 py-3 font-black uppercase italic hover:bg-brand-red hover:text-white transition-colors">
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col items-center gap-6 py-8">
            <NavLink label="Home" active={currentView === 'home'} onClick={() => handleNavClick('home')} />
            <NavLink label="Classes" active={currentView === 'classes'} onClick={() => handleNavClick('classes')} />
            <NavLink label="Trainers" active={currentView === 'training'} onClick={() => handleNavClick('training')} />
            <NavLink label="Membership" active={currentView === 'membership'} onClick={() => handleNavClick('membership')} />
            <NavLink label="Contact" active={currentView === 'contact'} onClick={() => handleNavClick('contact')} />
            <button onClick={() => handleJoinClick()} className="bg-brand-red px-8 py-3 font-bold uppercase">Join Now</button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer (Global) */}
      <footer className="bg-zinc-950 pt-20 pb-10 border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-3xl font-black italic tracking-tighter uppercase mb-6 block">
                <span className="text-brand-red">Fit</span>Bodies
              </a>
              <p className="text-zinc-500 max-w-sm mb-6">
                Pushing limits since 2010. We are dedicated to providing the best equipment, atmosphere, and training to help you achieve your goals.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-brand-red text-white transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase mb-6">Quick Links</h4>
              <ul className="space-y-3 text-zinc-500">
                <li><button onClick={() => handleNavClick('home')} className="hover:text-brand-red transition-colors uppercase text-sm font-bold text-left">Home</button></li>
                <li><button onClick={() => handleNavClick('classes')} className="hover:text-brand-red transition-colors uppercase text-sm font-bold text-left">Classes</button></li>
                <li><button onClick={() => handleNavClick('membership')} className="hover:text-brand-red transition-colors uppercase text-sm font-bold text-left">Pricing</button></li>
                <li><button onClick={() => handleNavClick('training')} className="hover:text-brand-red transition-colors uppercase text-sm font-bold text-left">Trainers</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase mb-6">Visit Us</h4>
              <p className="text-zinc-500 mb-2">123 Fitness Blvd</p>
              <p className="text-zinc-500 mb-2">Strongsville, OH 44136</p>
              <p className="text-zinc-500 mb-6">info@fitbodiesunlimited.com</p>
              <p className="text-brand-red font-bold">Open 24/7 for Members</p>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 text-center text-zinc-600 text-sm">
            &copy; {new Date().getFullYear()} Fit Bodies Unlimited. All rights reserved.
          </div>
        </div>
      </footer>

      <AICoach />
    </div>
  );
};

export default App;