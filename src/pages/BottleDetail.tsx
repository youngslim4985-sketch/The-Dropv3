import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { ChevronLeft, Calendar, Info, MapPin } from 'lucide-react';

const mockWine = {
  id: 'w1',
  name: 'Château Margaux',
  producer: 'Château Margaux',
  vintage: 2015,
  region: 'Bordeaux',
  country: 'France',
  grape_variety: 'Cabernet Sauvignon Blend',
  description: 'A legendary first growth from the exceptional 2015 vintage. This wine displays incredible finesse, aromatic complexity, and a structure that promises decades of evolution. Notes of blackcurrant, violet, and graphite dominate the palate.',
  image_url: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1974&auto=format&fit=crop',
  drink_start_year: 2025,
  drink_peak_year: 2035,
  drink_end_year: 2060,
  scores: [
    { subject: 'Acidity', A: 85, fullMark: 100 },
    { subject: 'Tannin', A: 95, fullMark: 100 },
    { subject: 'Fruit', A: 90, fullMark: 100 },
    { subject: 'Earth', A: 80, fullMark: 100 },
    { subject: 'Oak', A: 75, fullMark: 100 },
    { subject: 'Body', A: 92, fullMark: 100 },
  ]
};

export default function BottleDetail() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Link to="/cellar" className="inline-flex items-center text-gold hover:text-white transition-colors mb-12 group">
        <ChevronLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Cellar
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Image & Basic Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="glass rounded-3xl overflow-hidden aspect-[3/4] relative mb-8">
            <img 
              src={mockWine.image_url} 
              alt={mockWine.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center text-gold mb-2">
                <MapPin size={18} className="mr-2" />
                <span className="text-xs uppercase tracking-widest">Origin</span>
              </div>
              <p className="text-lg">{mockWine.region}</p>
              <p className="text-stone-500 text-sm">{mockWine.country}</p>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center text-gold mb-2">
                <Info size={18} className="mr-2" />
                <span className="text-xs uppercase tracking-widest">Grapes</span>
              </div>
              <p className="text-lg">{mockWine.grape_variety}</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Details & Charts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="mb-12">
            <span className="text-4xl font-display text-gold mb-2 block">{mockWine.vintage}</span>
            <h1 className="text-6xl mb-4">{mockWine.name}</h1>
            <p className="text-2xl text-stone-400 italic mb-8">{mockWine.producer}</p>
            <p className="text-stone-300 leading-relaxed font-sans">{mockWine.description}</p>
          </div>

          {/* Radar Chart */}
          <div className="mb-16">
            <h3 className="text-xl uppercase tracking-widest text-gold mb-8 flex items-center">
              Flavor Profile
            </h3>
            <div className="h-[300px] w-full glass rounded-3xl p-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockWine.scores}>
                  <PolarGrid stroke="#444" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 12 }} />
                  <Radar
                    name="Wine"
                    dataKey="A"
                    stroke="#D4AF37"
                    fill="#D4AF37"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Drink Window */}
          <div>
            <h3 className="text-xl uppercase tracking-widest text-gold mb-8 flex items-center">
              <Calendar size={20} className="mr-3" />
              Drinking Window
            </h3>
            <div className="relative pt-8 pb-4">
              <div className="h-2 bg-white/10 rounded-full w-full" />
              <div 
                className="absolute top-8 h-2 bg-gold rounded-full"
                style={{ 
                  left: '20%', 
                  right: '10%' 
                }}
              />
              <div className="flex justify-between mt-4 text-xs text-stone-500 uppercase tracking-widest">
                <span>{mockWine.drink_start_year}</span>
                <span className="text-gold">Peak: {mockWine.drink_peak_year}</span>
                <span>{mockWine.drink_end_year}</span>
              </div>
              <div className="mt-8 p-4 bg-gold/5 border border-gold/20 rounded-xl text-sm text-stone-400 italic">
                Currently: Aging. This wine will enter its drinking window in {mockWine.drink_start_year - new Date().getFullYear()} years.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
