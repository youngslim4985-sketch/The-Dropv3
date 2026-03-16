import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Wine, 
  GlassWater, 
  Map, 
  Zap, 
  Music, 
  Palette, 
  User,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Cellar', path: '/cellar', icon: Wine },
  { name: 'Tasting', path: '/tasting', icon: GlassWater },
  { name: 'Regions', path: '/regions', icon: Map },
  { name: 'The Drop', path: '/drop', icon: Zap },
  { name: 'Salon', path: '/salon', icon: Music },
  { name: 'Atelier', path: '/atelier', icon: Palette },
  { name: 'Profile', path: '/profile', icon: User },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark h-20 hidden md:flex items-center justify-between px-8">
        <NavLink to="/" className="text-2xl font-display text-gold tracking-widest hover:text-white transition-colors">
          THE SOMMELIER’S TABLE
        </NavLink>
        
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => cn(
                "text-sm uppercase tracking-widest transition-all duration-300 hover:text-gold",
                isActive ? "text-gold border-b border-gold/50 pb-1" : "text-stone-400"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark h-16 flex md:hidden items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-display text-gold tracking-widest">
          SOMMELIER’S
        </NavLink>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gold"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display text-stone-300 hover:text-gold flex items-center space-x-4"
                >
                  <item.icon size={24} className="text-gold" />
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20 md:pt-20 pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass-dark h-16 flex md:hidden items-center justify-around px-2">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => cn(
              "flex flex-col items-center space-y-1 transition-colors",
              isActive ? "text-gold" : "text-stone-500"
            )}
          >
            <item.icon size={20} />
            <span className="text-[10px] uppercase tracking-tighter">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
