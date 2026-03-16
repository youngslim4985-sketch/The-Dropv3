import React from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Plus, Music, Image as ImageIcon, Camera } from 'lucide-react';

const mockPosts = [
  {
    id: 'p1',
    artist: {
      name: 'Elena Rossi',
      discipline: 'Classical Guitarist',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
    },
    content: 'Working on a new arrangement for the upcoming Strings & Syrah session. The resonance of this 1964 Ramirez is just magical.',
    media: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop',
    likes: 124,
    comments: 18,
    time: '2 hours ago'
  },
  {
    id: 'p2',
    artist: {
      name: 'Marcus Vane',
      discipline: 'Abstract Painter',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
    },
    content: 'Final touches on "Iron & Clay". Inspired by the ferruginous soils of Pomerol.',
    media: 'https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=2070&auto=format&fit=crop',
    likes: 89,
    comments: 12,
    time: '5 hours ago'
  }
];

export default function Atelier() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-16 flex justify-between items-end">
        <div>
          <h1 className="text-5xl mb-4">Atelier</h1>
          <p className="text-stone-400 font-serif italic">A sanctuary for emerging artists and cultural dialogue.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gold text-black rounded-full flex items-center justify-center shadow-lg"
        >
          <Plus size={24} />
        </motion.button>
      </header>

      {/* Create Post Mock */}
      <div className="glass p-6 rounded-3xl mb-12">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-stone-800 border border-white/10 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="User" />
          </div>
          <button className="flex-grow text-left text-stone-500 font-sans px-6 py-3 bg-white/5 rounded-full border border-white/5 hover:border-white/10 transition-colors">
            Share your latest creation...
          </button>
        </div>
        <div className="flex items-center space-x-6 px-2">
          <button className="flex items-center text-stone-400 hover:text-gold transition-colors text-xs uppercase tracking-widest">
            <Music size={16} className="mr-2" /> Audio
          </button>
          <button className="flex items-center text-stone-400 hover:text-gold transition-colors text-xs uppercase tracking-widest">
            <ImageIcon size={16} className="mr-2" /> Image
          </button>
          <button className="flex items-center text-stone-400 hover:text-gold transition-colors text-xs uppercase tracking-widest">
            <Camera size={16} className="mr-2" /> Video
          </button>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-12">
        {mockPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-[32px] overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/30">
                    <img src={post.artist.avatar} alt={post.artist.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h3 className="text-lg text-stone-200">{post.artist.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold">{post.artist.discipline}</span>
                  </div>
                </div>
                <span className="text-xs text-stone-500">{post.time}</span>
              </div>
              
              <p className="text-stone-300 font-sans leading-relaxed mb-8">
                {post.content}
              </p>

              <div className="rounded-2xl overflow-hidden aspect-video mb-8">
                <img src={post.media} alt="Post media" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>

              <div className="flex items-center space-x-8">
                <button className="flex items-center text-stone-400 hover:text-wine transition-colors group">
                  <Heart size={20} className="mr-2 group-hover:fill-wine" />
                  <span className="text-sm font-sans">{post.likes}</span>
                </button>
                <button className="flex items-center text-stone-400 hover:text-gold transition-colors">
                  <MessageCircle size={20} className="mr-2" />
                  <span className="text-sm font-sans">{post.comments}</span>
                </button>
                <button className="flex items-center text-stone-400 hover:text-gold transition-colors ml-auto">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
