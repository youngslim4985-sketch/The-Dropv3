import React from 'react';
import { motion } from 'motion/react';
import { Map as MapIcon, Thermometer, Grape, Wind } from 'lucide-react';

const regions = [
  {
    id: 'bordeaux',
    name: 'Bordeaux',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1559156523-26470123999e?q=80&w=2070&auto=format&fit=crop',
    grapes: 'Cabernet Sauvignon, Merlot, Cabernet Franc',
    climate: 'Maritime, temperate with high humidity.',
    profile: 'Structured, tannic, complex, cedar, blackcurrant.'
  },
  {
    id: 'burgundy',
    name: 'Burgundy',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1543418219-44e30b057ebd?q=80&w=2070&auto=format&fit=crop',
    grapes: 'Pinot Noir, Chardonnay',
    climate: 'Continental with hot summers and cold winters.',
    profile: 'Elegant, aromatic, earthy, red cherry, limestone.'
  },
  {
    id: 'barolo',
    name: 'Barolo',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070&auto=format&fit=crop',
    grapes: 'Nebbiolo',
    climate: 'Continental, influenced by the Alps.',
    profile: 'Powerful, high tannin, rose, tar, truffle, cherry.'
  },
  {
    id: 'napa',
    name: 'Napa Valley',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80&w=2074&auto=format&fit=crop',
    grapes: 'Cabernet Sauvignon, Chardonnay, Merlot',
    climate: 'Mediterranean with cooling morning fog.',
    profile: 'Opulent, ripe fruit, oak, vanilla, chocolate.'
  },
  {
    id: 'tuscany',
    name: 'Tuscany',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2088&auto=format&fit=crop',
    grapes: 'Sangiovese, Cabernet Sauvignon',
    climate: 'Mediterranean, warm and sunny.',
    profile: 'High acidity, cherry, tomato leaf, leather, herbs.'
  }
];

export default function Regions() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-5xl mb-4">Region Explorer</h1>
        <p className="text-stone-400 font-serif italic">Journey through the world's most prestigious terroirs.</p>
      </header>

      <div className="space-y-24">
        {regions.map((region, idx) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gold/5 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative glass rounded-3xl overflow-hidden aspect-[16/9]">
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold mb-2 block">{region.country}</span>
                  <h2 className="text-4xl text-white">{region.name}</h2>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <div className="flex items-center text-gold">
                    <Grape size={18} className="mr-2" />
                    <span className="text-xs uppercase tracking-widest font-bold">Key Grapes</span>
                  </div>
                  <p className="text-stone-300 font-sans">{region.grapes}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gold">
                    <Thermometer size={18} className="mr-2" />
                    <span className="text-xs uppercase tracking-widest font-bold">Climate</span>
                  </div>
                  <p className="text-stone-300 font-sans">{region.climate}</p>
                </div>
                <div className="space-y-3 md:col-span-2">
                  <div className="flex items-center text-gold">
                    <Wind size={18} className="mr-2" />
                    <span className="text-xs uppercase tracking-widest font-bold">Flavor Profile</span>
                  </div>
                  <p className="text-stone-300 font-sans leading-relaxed">{region.profile}</p>
                </div>
              </div>
              
              <button className="px-8 py-3 rounded-full border border-gold/30 text-gold hover:bg-gold/10 transition-all uppercase text-xs tracking-widest flex items-center">
                <MapIcon size={16} className="mr-2" />
                Explore Terroir
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
