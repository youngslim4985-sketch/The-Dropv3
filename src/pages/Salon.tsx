import React from 'react';
import { motion } from 'motion/react';
import { Play, Calendar, Users, Music, Wine, MessageSquare } from 'lucide-react';

const upcomingEvents = [
  {
    id: 'e1',
    title: 'Acoustic Music Session: Strings & Syrah',
    artist: 'Elena Rossi',
    type: 'Music',
    start_time: 'Tonight at 8:00 PM',
    description: 'An intimate evening of classical guitar paired with bold Northern Rhone Syrah.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    pairing: 'Cornas or Côte-Rôtie'
  },
  {
    id: 'e2',
    title: 'Gallery Opening: Abstract Terroir',
    artist: 'Marcus Vane',
    type: 'Gallery',
    start_time: 'Friday, March 20',
    description: 'Exploring the visual representation of soil and climate through large-scale abstract works.',
    image: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=2070&auto=format&fit=crop',
    pairing: 'Chablis or Sancerre'
  },
  {
    id: 'e3',
    title: 'Sommelier Masterclass: The 2015 Vintage',
    artist: 'Julian Thorne',
    type: 'Tasting',
    start_time: 'Sunday, March 22',
    description: 'A deep dive into the exceptional 2015 vintage across Bordeaux and Piedmont.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop',
    pairing: 'Various 2015 Bordeaux'
  }
];

export default function Salon() {
  const [activeEvent, setActiveEvent] = React.useState(upcomingEvents[0]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl mb-4">The Salon</h1>
        <p className="text-stone-400 font-serif italic">Immersive cultural experiences for the modern epicurean.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Player Area */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video glass rounded-[32px] overflow-hidden group">
            <img 
              src={activeEvent.image} 
              alt={activeEvent.title}
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-gold text-black rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                <Play size={32} fill="currentColor" />
              </motion.button>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div>
                <span className="px-3 py-1 bg-wine text-white text-[10px] uppercase tracking-widest font-bold rounded mb-2 inline-block">
                  Live in {activeEvent.start_time}
                </span>
                <h2 className="text-3xl text-white">{activeEvent.title}</h2>
              </div>
              <div className="flex items-center space-x-4 text-stone-300 text-sm">
                <span className="flex items-center"><Users size={16} className="mr-2" /> 1.2k</span>
                <span className="flex items-center"><MessageSquare size={16} className="mr-2" /> 42</span>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div className="flex-grow">
                <h3 className="text-xl text-gold mb-4 uppercase tracking-widest">About the Event</h3>
                <p className="text-stone-400 leading-relaxed font-sans">{activeEvent.description}</p>
              </div>
              <div className="w-full md:w-64 glass p-6 rounded-2xl bg-gold/5 border-gold/20">
                <div className="flex items-center text-gold mb-4">
                  <Wine size={18} className="mr-2" />
                  <span className="text-xs uppercase tracking-widest font-bold">Recommended Pairing</span>
                </div>
                <p className="text-stone-300 italic">{activeEvent.pairing}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Upcoming & Chat */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl text-gold mb-8 uppercase tracking-widest flex items-center">
              <Calendar size={20} className="mr-3" />
              Upcoming
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <button
                  key={event.id}
                  onClick={() => setActiveEvent(event)}
                  className={`w-full text-left group transition-all ${activeEvent.id === event.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'}`}
                >
                  <div className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">{event.start_time}</span>
                      <h4 className="text-sm font-sans font-bold text-stone-200 group-hover:text-gold transition-colors line-clamp-2">{event.title}</h4>
                      <span className="text-[10px] text-stone-500 uppercase tracking-tighter">{event.artist}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl h-[400px] flex flex-col">
            <h3 className="text-xl text-gold mb-6 uppercase tracking-widest flex items-center">
              <MessageSquare size={20} className="mr-3" />
              Live Chat
            </h3>
            <div className="flex-grow overflow-y-auto space-y-4 mb-6 font-sans text-sm">
              <div className="flex space-x-2">
                <span className="text-gold font-bold">Marcus:</span>
                <span className="text-stone-400">Can't wait for the pairing notes!</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-wine font-bold">Sarah:</span>
                <span className="text-stone-400">The 2015 vintage was truly special.</span>
              </div>
              <div className="flex space-x-2">
                <span className="text-stone-500 font-bold">Julian:</span>
                <span className="text-stone-400">Welcome everyone! We start in 10 mins.</span>
              </div>
            </div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Say something..."
                className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 text-sm focus:outline-none focus:border-gold/50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
