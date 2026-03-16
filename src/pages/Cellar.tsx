import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Wine as WineIcon, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CellarInventory } from '../lib/supabase';

// Mock data for demonstration
const mockInventory: CellarInventory[] = [
  {
    id: '1',
    user_id: 'user1',
    wine_id: 'w1',
    quantity: 3,
    purchase_date: '2023-10-12',
    status: 'aging',
    wine: {
      id: 'w1',
      name: 'Château Margaux',
      producer: 'Château Margaux',
      vintage: 2015,
      region: 'Bordeaux',
      country: 'France',
      grape_variety: 'Cabernet Sauvignon Blend',
      description: 'A legendary first growth.',
      image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1974&auto=format&fit=crop',
      drink_start_year: 2025,
      drink_peak_year: 2035,
      drink_end_year: 2060
    }
  },
  {
    id: '2',
    user_id: 'user1',
    wine_id: 'w2',
    quantity: 6,
    purchase_date: '2024-01-05',
    status: 'peak',
    wine: {
      id: 'w2',
      name: 'Sassicaia',
      producer: 'Tenuta San Guido',
      vintage: 2018,
      region: 'Tuscany',
      country: 'Italy',
      grape_variety: 'Cabernet Sauvignon, Cabernet Franc',
      description: 'The original Super Tuscan.',
      image_url: 'https://images.unsplash.com/photo-1553390882-02dec755012b?q=80&w=1964&auto=format&fit=crop',
      drink_start_year: 2024,
      drink_peak_year: 2028,
      drink_end_year: 2045
    }
  },
  {
    id: '3',
    user_id: 'user1',
    wine_id: 'w3',
    quantity: 2,
    purchase_date: '2023-05-20',
    status: 'drink',
    wine: {
      id: 'w3',
      name: 'Opus One',
      producer: 'Opus One Winery',
      vintage: 2019,
      region: 'Napa Valley',
      country: 'USA',
      grape_variety: 'Bordeaux Blend',
      description: 'A collaboration between Mondavi and Rothschild.',
      image_url: 'https://images.unsplash.com/photo-1566311862097-363623f99092?q=80&w=1974&auto=format&fit=crop',
      drink_start_year: 2023,
      drink_peak_year: 2025,
      drink_end_year: 2040
    }
  }
];

export default function Cellar() {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState<'all' | 'aging' | 'peak' | 'drink'>('all');

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.wine?.name.toLowerCase().includes(search.toLowerCase()) || 
                         item.wine?.region.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || item.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-12">
        <h1 className="text-5xl mb-4">Your Cellar</h1>
        <p className="text-stone-400 font-serif italic">A curated collection of your finest acquisitions.</p>
      </header>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" size={20} />
          <input 
            type="text" 
            placeholder="Search by wine, region, or producer..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 focus:outline-none focus:border-gold/50 transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
          {(['all', 'aging', 'peak', 'drink'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                filter === f ? 'bg-gold text-black border-gold' : 'border-white/10 text-stone-400 hover:border-gold/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredInventory.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link to={`/bottle/${item.wine_id}`}>
              <div className="glass rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-500">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={item.wine?.image_url} 
                    alt={item.wine?.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                      item.status === 'aging' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      item.status === 'peak' ? 'bg-gold/20 text-gold border border-gold/30' :
                      'bg-wine/20 text-wine border border-wine/30'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl text-stone-200 group-hover:text-gold transition-colors">{item.wine?.name}</h3>
                      <p className="text-stone-500 text-sm italic">{item.wine?.producer}</p>
                    </div>
                    <span className="text-2xl font-display text-gold">{item.wine?.vintage}</span>
                  </div>
                  <div className="flex items-center text-stone-400 text-xs uppercase tracking-widest mt-4">
                    <WineIcon size={14} className="mr-2 text-wine" />
                    {item.wine?.region}, {item.wine?.country}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-stone-500 text-xs">{item.quantity} Bottles</span>
                    <ChevronRight size={18} className="text-gold opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
