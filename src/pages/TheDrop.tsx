import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Timer, Zap, Lock, ShoppingCart, History } from 'lucide-react';

const activeDrop = {
  id: 'd1',
  wine_id: 'w1',
  drop_name: 'The First Growth Collection',
  total_bottles: 120,
  bottles_remaining: 42,
  price: 850,
  start_time: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // 24 hours from now
  status: 'upcoming',
  wine: {
    name: 'Château Margaux 2015',
    vintage: 2015,
    image_url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop'
  }
};

const pastDrops = [
  { id: 'p1', name: 'Barolo Riserva 2016', date: 'Feb 12, 2026', status: 'Sold Out', time: '4 minutes' },
  { id: 'p2', name: 'Sassicaia 2018 Vertical', date: 'Jan 28, 2026', status: 'Sold Out', time: '12 minutes' },
  { id: 'p3', name: 'Napa Cult Classics', date: 'Jan 15, 2026', status: 'Sold Out', time: '8 minutes' },
];

export default function TheDrop() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 23, minutes: 59, seconds: 59 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16 text-center">
        <h1 className="text-6xl mb-4">The Drop</h1>
        <p className="text-stone-400 font-serif italic">Exclusive allocations of rare and limited releases.</p>
      </header>

      {/* Active/Upcoming Drop */}
      <div className="relative mb-32">
        <div className="absolute inset-0 bg-wine/10 blur-[150px] rounded-full" />
        
        <div className="relative glass rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[600px]">
          {/* Left: Visual */}
          <div className="w-full lg:w-1/2 relative bg-black/40 flex items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full flex items-center justify-center"
            >
              <img 
                src={activeDrop.wine.image_url} 
                alt={activeDrop.wine.name}
                className="h-[80%] object-contain drop-shadow-[0_0_50px_rgba(212,175,55,0.2)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-30" />
          </div>

          {/* Right: Info & Action */}
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center text-gold mb-6">
              <Zap size={20} className="mr-2 fill-gold" />
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Upcoming Allocation</span>
            </div>
            
            <h2 className="text-5xl mb-4 leading-tight">{activeDrop.drop_name}</h2>
            <p className="text-2xl text-stone-400 font-serif italic mb-8">{activeDrop.wine.name}</p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 block mb-1">Available</span>
                <span className="text-2xl text-stone-200">{activeDrop.total_bottles} Bottles</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 block mb-1">Price</span>
                <span className="text-2xl text-gold">${activeDrop.price} / bottle</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="glass p-8 rounded-3xl mb-12">
              <div className="flex items-center text-stone-400 mb-4 text-xs uppercase tracking-widest">
                <Timer size={16} className="mr-2" />
                Time until drop opens
              </div>
              <div className="flex space-x-8">
                {[
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col">
                    <span className="text-4xl font-display text-gold">{t.value.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-600 font-bold">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-stone-800 text-stone-500 rounded-2xl font-display uppercase tracking-widest flex items-center justify-center cursor-not-allowed group">
              <Lock size={20} className="mr-3" />
              Allocation Locked
            </button>
            <p className="text-center mt-4 text-xs text-stone-500 italic">
              Membership required for early access.
            </p>
          </div>
        </div>
      </div>

      {/* Archive Section */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-3xl flex items-center">
            <History size={24} className="mr-4 text-gold" />
            Drop Archive
          </h3>
          <button className="text-gold text-xs uppercase tracking-widest hover:text-white transition-colors">
            View All Past Drops
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastDrops.map((drop) => (
            <div key={drop.id} className="glass p-8 rounded-2xl group hover:border-wine/30 transition-all">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-stone-500">{drop.date}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-wine bg-wine/10 px-2 py-1 rounded">
                  {drop.status}
                </span>
              </div>
              <h4 className="text-xl mb-2 group-hover:text-gold transition-colors">{drop.name}</h4>
              <p className="text-sm text-stone-500 italic">Sold out in {drop.time}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
