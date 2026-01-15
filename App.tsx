import React, { useState, useEffect } from 'react';
import JoinQuiz from './components/JoinQuiz';
import Home from './components/Home';
import ClassesPage from './components/ClassesPage';
import PersonalTrainingPage from './components/PersonalTrainingPage';
import MembershipPage from './components/MembershipPage';
import ContactPage from './components/ContactPage';
import TrainerProfile from './components/TrainerProfile';
import { trainers } from './data';
import { Trainer, MembershipType, Category } from './types';

type View = 'home' | 'classes' | 'training' | 'membership' | 'contact' | 'trainer-profile';

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
  const [selectedTrainerId, setSelectedTrainerId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizInitialMode, setQuizInitialMode] = useState<MembershipType | null>(null);
  const [quizInitialCategory, setQuizInitialCategory] = useState<Category | null>(null);

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

  const handleJoinClick = (type?: MembershipType, category?: Category) => {
    setQuizInitialMode(type || null);
    setQuizInitialCategory(category || null);
    setQuizOpen(true);
    setMobileMenuOpen(false);
  };

  const handleTrainerClick = (trainerId: string) => {
    setSelectedTrainerId(trainerId);
    setCurrentView('trainer-profile');
    setMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home onNavigate={handleNavClick} onTrainerClick={handleTrainerClick} />;
      case 'classes':
        return <ClassesPage />;
      case 'training':
        return <PersonalTrainingPage onTrainerClick={handleTrainerClick} />;
      case 'membership':
        return <MembershipPage onJoinClick={handleJoinClick} />;
      case 'contact':
        return <ContactPage />;
      case 'trainer-profile':
        const trainer = trainers.find(t => t.id === selectedTrainerId);
        if (!trainer) return <PersonalTrainingPage onTrainerClick={handleTrainerClick} />;
        return (
          <TrainerProfile 
            trainer={trainer} 
            onBack={() => setCurrentView('training')} 
            onBook={() => handleJoinClick(undefined, 'training')}
          />
        );
      default:
        return <Home onNavigate={handleNavClick} onTrainerClick={handleTrainerClick} />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden flex flex-col">
      {/* Quiz Modal */}
      {quizOpen && (
        <JoinQuiz 
          onClose={() => setQuizOpen(false)} 
          initialMode={quizInitialMode} 
          initialCategory={quizInitialCategory}
          onTrainerSelect={handleTrainerClick} 
        />
      )}

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
            <NavLink label="Trainers" active={currentView === 'training' || currentView === 'trainer-profile'} onClick={() => handleNavClick('training')} />
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
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="mb-6 block">
                <img 
                  src="https://imgur.com/Hz1tXb2.png" 
                  alt="Fit Bodies Unlimited" 
                  className="h-12 md:h-16 object-contain" 
                />
              </a>
              <p className="text-zinc-500 max-w-sm mb-6">
                Pushing limits since 2003. We are dedicated to providing the best equipment, atmosphere, and training to help you achieve your goals.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/FitBodiesUnlimitedHamptonRoads/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-brand-red text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.03 1.764-5.908 5.73-5.908 1.202 0 2.247.086 2.548.126v2.95h-1.745c-1.932 0-2.303.922-2.303 2.258v1.154h3.27l-.426 3.667h-2.844v7.981h-4.226z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/fitbodiesunlimitedhamptonroads/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-zinc-900 flex items-center justify-center rounded-full hover:bg-brand-red text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
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
              <p className="text-white font-bold mb-1">Newport News:</p>
              <p className="text-zinc-500 mb-4">135 Harpersville Rd, Newport News, VA 23601</p>
              
              <p className="text-white font-bold mb-1">Yorktown:</p>
              <p className="text-zinc-500 mb-4">2900 Hampton Hwy I, Yorktown, VA 23693</p>

              <p className="text-zinc-500 mb-6">info@fitbodiesunlimited.com</p>
              <p className="text-brand-red font-bold">Open 24/7 for Members</p>
            </div>
          </div>
          
          <div className="border-t border-zinc-900 pt-8 text-center">
            <div className="text-zinc-600 text-sm mb-4">
              &copy; {new Date().getFullYear()} Fit Bodies Unlimited. All rights reserved.
            </div>
            <div className="text-zinc-500 text-sm">
              This Site Is Built and Powered by <a href="https://vaughanms.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-brand-red transition-colors font-bold">VaughanMS</a>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;