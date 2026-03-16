import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-wine/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mahogany/30 blur-[120px] rounded-full" />
      </div>

      <section className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-8 text-glow">
            The Sommelier’s Table
          </h1>
          
          <div className="space-y-2 mb-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl font-serif italic text-stone-400"
            >
              Where Great Bottles Are Discovered
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-xl md:text-2xl font-serif italic text-stone-400"
            >
              Where Rare Releases Drop
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-xl md:text-2xl font-serif italic text-stone-400"
            >
              Where Culture Comes Together
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/cellar">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-wine text-white rounded-full font-display tracking-widest uppercase text-sm flex items-center group"
              >
                Enter the Cellar
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/drop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gold/50 text-gold rounded-full font-display tracking-widest uppercase text-sm hover:bg-gold/10 transition-colors"
              >
                Explore The Drop
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Bottle Animation */}
        <motion.div
          className="mt-20 relative w-48 h-96 md:w-64 md:h-[500px] animate-float"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-wine/20 to-transparent blur-3xl" />
          <img 
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury Wine Bottle"
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(114,9,23,0.5)]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Featured Sections Preview */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-8 rounded-2xl group cursor-pointer hover:border-gold/30 transition-all">
            <h3 className="text-2xl mb-4">The Cellar</h3>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              Manage your private collection with precision. Track aging, peak windows, and tasting history.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl group cursor-pointer hover:border-gold/30 transition-all">
            <h3 className="text-2xl mb-4">The Drop</h3>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              Exclusive access to rare allocations and limited releases from the world's most prestigious estates.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl group cursor-pointer hover:border-gold/30 transition-all">
            <h3 className="text-2xl mb-4">The Salon</h3>
            <p className="text-stone-400 font-sans text-sm leading-relaxed">
              Immerse yourself in live performances, gallery openings, and sommelier-led tastings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
