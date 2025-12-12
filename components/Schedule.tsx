import React, { useState } from 'react';
import { DaySchedule, ClassSession } from '../types';

const weeklySchedule: DaySchedule[] = [
  {
    day: 'Monday',
    classes: [
      { id: 'm1', title: 'Power HIIT', time: '06:00 AM', trainer: 'Sarah K.', duration: '45m', intensity: 'High' },
      { id: 'm2', title: 'Barbell Club', time: '05:00 PM', trainer: 'Mike R.', duration: '60m', intensity: 'High' },
      { id: 'm3', title: 'Yoga Flow', time: '07:00 PM', trainer: 'Jessica', duration: '50m', intensity: 'Low' },
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      { id: 't1', title: 'Spin Cycle', time: '06:30 AM', trainer: 'Alex', duration: '45m', intensity: 'High' },
      { id: 't2', title: 'Core Blaster', time: '05:30 PM', trainer: 'Sarah K.', duration: '30m', intensity: 'Medium' },
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      { id: 'w1', title: 'Power HIIT', time: '06:00 AM', trainer: 'Sarah K.', duration: '45m', intensity: 'High' },
      { id: 'w2', title: 'Olympifting', time: '06:00 PM', trainer: 'Big Rob', duration: '90m', intensity: 'High' },
    ]
  },
  {
    day: 'Thursday',
    classes: [
      { id: 'th1', title: 'Spin Cycle', time: '06:30 AM', trainer: 'Alex', duration: '45m', intensity: 'High' },
      { id: 'th2', title: 'Mobility', time: '07:00 PM', trainer: 'Jessica', duration: '45m', intensity: 'Low' },
    ]
  },
  {
    day: 'Friday',
    classes: [
      { id: 'f1', title: 'Full Body Friday', time: '05:30 PM', trainer: 'Mike R.', duration: '60m', intensity: 'High' },
    ]
  },
  {
    day: 'Saturday',
    classes: [
      { id: 's1', title: 'Bootcamp', time: '09:00 AM', trainer: 'Team', duration: '60m', intensity: 'High' },
      { id: 's2', title: 'Open Gym', time: 'All Day', trainer: 'Staff', duration: '12h', intensity: 'Medium' },
    ]
  },
  {
    day: 'Sunday',
    classes: [
      { id: 'su1', title: 'Recovery Yoga', time: '10:00 AM', trainer: 'Jessica', duration: '60m', intensity: 'Low' },
    ]
  },
];

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState<string>('Monday');

  const activeClasses = weeklySchedule.find(d => d.day === activeDay)?.classes || [];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Day Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {weeklySchedule.map((d) => (
          <button
            key={d.day}
            onClick={() => setActiveDay(d.day)}
            className={`px-6 py-2 rounded-full font-bold uppercase tracking-wide text-sm transition-all
              ${activeDay === d.day 
                ? 'bg-brand-red text-white shadow-lg scale-105' 
                : 'bg-zinc-900 text-zinc-500 hover:text-white hover:bg-zinc-800'
              }`}
          >
            {d.day.substring(0, 3)}
          </button>
        ))}
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeClasses.map((session) => (
          <div key={session.id} className="bg-zinc-900 border-l-4 border-brand-red p-6 hover:bg-zinc-800 transition-all cursor-default group">
            <div className="flex justify-between items-start mb-4">
              <span className="bg-black text-white px-2 py-1 text-xs font-bold rounded">{session.time}</span>
              <span className={`text-xs font-bold uppercase ${
                session.intensity === 'High' ? 'text-brand-red' : 
                session.intensity === 'Medium' ? 'text-yellow-500' : 'text-green-500'
              }`}>
                {session.intensity} Intensity
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-red transition-colors">{session.title}</h4>
            <p className="text-zinc-400 text-sm mb-4">with {session.trainer} • {session.duration}</p>
            <button className="w-full border border-zinc-700 text-white py-2 text-sm font-bold uppercase hover:bg-white hover:text-black hover:border-white transition-all">
              Reserve Spot
            </button>
          </div>
        ))}
        {activeClasses.length === 0 && (
          <div className="col-span-full text-center py-10 text-zinc-500">
            No classes scheduled for this day. Open Gym is available 24/7.
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;