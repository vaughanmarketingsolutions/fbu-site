import React, { useState } from 'react';
import { DaySchedule } from '../types';

export const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      // Assuming Metric for simplicity (cm, kg) or Imperial (in, lbs)
      // Let's implement standard metric: kg / (m^2). 
      // If user inputs seem like imperial (e.g. height 70 inches, weight 180), we could auto detect,
      // but let's stick to standard US gym units: lbs and inches.
      // Formula: 703 x weight (lbs) / [height (in)]^2
      const calculated = (703 * w) / (h * h);
      setBmi(Math.round(calculated * 10) / 10);
    }
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-400', advice: 'Time to build some mass! Check our strength classes.' };
    if (val < 24.9) return { label: 'Normal', color: 'text-green-500', advice: 'Great maintenance! Keep consistent.' };
    if (val < 29.9) return { label: 'Overweight', color: 'text-yellow-500', advice: 'Let\'s turn that into muscle. Try HIIT.' };
    return { label: 'Obese', color: 'text-brand-red', advice: 'We can help you transform. Start with Personal Training.' };
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl shadow-xl w-full max-w-md mx-auto relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-red opacity-10 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
      
      <h3 className="text-2xl font-bold mb-6 text-white uppercase italic tracking-wider">Body Stats <span className="text-brand-red">Check</span></h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs uppercase text-zinc-500 font-bold mb-1">Height (Inches)</label>
          <input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 70"
            className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase text-zinc-500 font-bold mb-1">Weight (Lbs)</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 180"
            className="w-full bg-black border border-zinc-700 text-white p-3 rounded focus:border-brand-red outline-none transition-colors"
          />
        </div>
        <button 
          onClick={calculateBMI}
          className="w-full bg-white text-black font-black uppercase py-3 hover:bg-brand-red hover:text-white transition-all duration-300 transform active:scale-95"
        >
          Calculate Stats
        </button>
      </div>

      {bmi !== null && (
        <div className="mt-6 pt-6 border-t border-zinc-800 animate-fade-in text-center">
          <span className="text-zinc-400 text-sm">Your BMI Score</span>
          <div className="text-5xl font-black text-white my-2">{bmi}</div>
          <div className={`text-lg font-bold uppercase ${getCategory(bmi).color}`}>
            {getCategory(bmi).label}
          </div>
          <p className="text-zinc-500 text-sm mt-2">{getCategory(bmi).advice}</p>
        </div>
      )}
    </div>
  );
};
