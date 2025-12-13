import React, { useState } from 'react';
import { Trainer } from '../types';

interface TrainerBookingModalProps {
  trainer: Trainer;
  onClose: () => void;
}

type Step = 'service' | 'details' | 'success';

const TrainerBookingModal: React.FC<TrainerBookingModalProps> = ({ trainer, onClose }) => {
  const [step, setStep] = useState<Step>('service');
  const [selectedService, setSelectedService] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: ''
  });

  const trainerFirstName = trainer.name.split(' ')[0];

  const services = [
    {
      id: 'consult',
      title: 'Initial Consultation',
      duration: '30 Min',
      description: `Sit down with ${trainerFirstName} to map out your fitness journey and set realistic milestones.`,
      price: 'Free'
    },
    {
      id: 'session',
      title: '1-on-1 Training',
      duration: '60 Min',
      description: 'Experience a full hour of intense, focused coaching designed for your specific goals.',
      price: 'Rate varies'
    },
    {
      id: 'assessment',
      title: 'Movement Screen',
      duration: '45 Min',
      description: 'A technical analysis of your mobility and strength balance to prevent injury.',
      price: '$50'
    }
  ];

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    setStep('details');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 1500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-zinc-900 border border-zinc-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-black p-6 border-b border-zinc-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
            </div>
            <div>
                <h3 className="text-xl font-bold uppercase italic text-white leading-none">Train with {trainerFirstName}</h3>
                <p className="text-brand-red text-xs font-bold uppercase tracking-wider mt-1">Book Your Spot</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto flex-1 custom-scrollbar">
            
            {step === 'service' && (
                <div className="animate-fade-in">
                    <h4 className="text-2xl font-black uppercase italic text-white mb-6">Select Session Type</h4>
                    <div className="grid gap-4">
                        {services.map((service) => (
                            <button 
                                key={service.id}
                                onClick={() => handleServiceSelect(service.id)}
                                className="group text-left bg-zinc-800 p-6 rounded-lg border border-zinc-700 hover:border-brand-red hover:bg-zinc-750 transition-all duration-300 flex justify-between items-center"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h5 className="text-lg font-bold text-white group-hover:text-brand-red transition-colors">{service.title}</h5>
                                        <span className="bg-zinc-900 text-zinc-400 text-xs px-2 py-1 rounded border border-zinc-700">{service.duration}</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm">{service.description}</p>
                                </div>
                                <div className="text-right pl-4">
                                    <span className="block text-white font-bold">{service.price}</span>
                                    <span className="text-brand-red text-xs uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">Select &rarr;</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 'details' && (
                <div className="animate-fade-in">
                    <button 
                        onClick={() => setStep('service')}
                        className="text-zinc-500 hover:text-white text-sm font-bold uppercase mb-6 flex items-center gap-2"
                    >
                        &larr; Change Session Type
                    </button>
                    
                    <h4 className="text-2xl font-black uppercase italic text-white mb-2">Your Details</h4>
                    <p className="text-zinc-400 text-sm mb-6">Provide your contact info so {trainerFirstName} can confirm your appointment.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Name</label>
                                <input 
                                    required
                                    type="text" 
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors"
                                    placeholder="Full Name"
                                />
                            </div>
                            <div>
                                <label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Email</label>
                                <input 
                                    required
                                    type="email" 
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Phone</label>
                            <input 
                                required
                                type="tel" 
                                value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors"
                                placeholder="(555) 123-4567"
                            />
                        </div>
                        <div>
                            <label className="block text-zinc-500 text-xs font-bold uppercase mb-2">Goals / Injuries</label>
                            <textarea 
                                value={formData.goals}
                                onChange={e => setFormData({...formData, goals: e.target.value})}
                                className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors h-32 resize-none"
                                placeholder="Tell us what you want to achieve or any limitations you have..."
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full bg-brand-red text-white font-black uppercase py-4 rounded hover:bg-red-600 transition-all transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                    Sending Request...
                                </>
                            ) : (
                                'Submit Request'
                            )}
                        </button>
                    </form>
                </div>
            )}

            {step === 'success' && (
                <div className="animate-fade-in text-center py-10">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-900/20">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="text-3xl font-black uppercase italic text-white mb-4">Request Sent!</h4>
                    <p className="text-zinc-400 max-w-md mx-auto mb-8">
                        Thanks {formData.name.split(' ')[0]}! {trainerFirstName} has received your booking request for a 
                        <strong className="text-white"> {services.find(s => s.id === selectedService)?.title}</strong>. 
                        They will reach out to you shortly at {formData.email}.
                    </p>
                    <button 
                        onClick={onClose}
                        className="bg-zinc-800 border border-zinc-700 text-white px-8 py-3 font-bold uppercase rounded hover:bg-white hover:text-black transition-colors"
                    >
                        Back to Profile
                    </button>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default TrainerBookingModal;