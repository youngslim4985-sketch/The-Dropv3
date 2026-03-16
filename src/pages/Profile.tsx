import React from 'react';
import { motion } from 'motion/react';
import { 
  Wine, 
  Map, 
  GlassWater, 
  Zap, 
  Settings, 
  Award,
  ChevronRight,
  LogOut
} from 'lucide-react';

const userStats = [
  { label: 'Wines Logged', value: 142, icon: Wine },
  { label: 'Regions Explored', value: 12, icon: Map },
  { label: 'Tastings Completed', value: 48, icon: GlassWater },
  { label: 'Drops Purchased', value: 5, icon: Zap },
];

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left: User Info & Membership */}
        <div className="lg:col-span-1 space-y-8">
          <div className="glass p-10 rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <div className="w-32 h-32 rounded-full border-2 border-gold p-1 mx-auto mb-6">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <h2 className="text-3xl mb-2">Alexander Thorne</h2>
            <p className="text-stone-500 font-serif italic mb-8">Connoisseur since 2023</p>
            
            <div className="inline-flex items-center px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-widest font-bold mb-8">
              <Award size={14} className="mr-2" />
              Platinum Member
            </div>

            <div className="space-y-4">
              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center">
                <Settings size={18} className="mr-2" />
                Edit Profile
              </button>
              <button className="w-full py-3 text-stone-500 text-sm uppercase tracking-widest hover:text-wine transition-all flex items-center justify-center">
                <LogOut size={18} className="mr-2" />
                Sign Out
              </button>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-xl text-gold mb-6 uppercase tracking-widest">Membership Tier</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-gold/5 border border-gold/20 rounded-2xl">
                <div>
                  <p className="text-gold font-bold">Platinum</p>
                  <p className="text-xs text-stone-500">Active Plan</p>
                </div>
                <span className="text-sm">$99/mo</span>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-sans">
                Your Platinum membership includes early access to all drops, unlimited cellar storage, and exclusive invites to private Salon events.
              </p>
              <button className="w-full py-3 border border-white/10 rounded-xl text-xs uppercase tracking-widest hover:border-gold/30 transition-all">
                Manage Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Right: Stats & Activity */}
        <div className="lg:col-span-2 space-y-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {userStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl text-center"
              >
                <div className="w-10 h-10 bg-wine/10 rounded-xl flex items-center justify-center text-wine mx-auto mb-4">
                  <stat.icon size={20} />
                </div>
                <p className="text-3xl font-display text-gold mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="glass p-10 rounded-[40px]">
            <h3 className="text-2xl mb-8">Recent Activity</h3>
            <div className="space-y-8">
              {[
                { action: 'Logged a new bottle', target: 'Château Margaux 2015', time: '2 hours ago', icon: Wine },
                { action: 'Completed a blind tasting', target: 'Napa Valley Cabernet', time: 'Yesterday', icon: GlassWater },
                { action: 'Joined a livestream', target: 'Strings & Syrah', time: '2 days ago', icon: Zap },
                { action: 'Purchased an allocation', target: 'The First Growth Collection', time: '1 week ago', icon: Zap },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-stone-400 group-hover:text-gold transition-colors">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-stone-300 font-sans">
                        <span className="text-stone-500">{item.action}:</span> {item.target}
                      </p>
                      <span className="text-xs text-stone-600">{item.time}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-stone-700 group-hover:text-gold transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Palate Profile Preview */}
          <div className="glass p-10 rounded-[40px] bg-gradient-to-br from-wine/10 to-transparent">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl">Your Palate Profile</h3>
              <button className="text-gold text-xs uppercase tracking-widest hover:text-white transition-colors">
                View Full Analysis
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {['High Acidity', 'Earthy', 'Old World', 'Structured', 'Floral Aromas'].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-stone-400">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-8 text-stone-400 font-serif italic leading-relaxed">
              "You tend to prefer high acidity and earthy wines. Consider exploring more from Burgundy or Barolo to expand your collection."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
