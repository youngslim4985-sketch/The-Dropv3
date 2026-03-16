import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassWater, Save, Eye, Wind, Droplets, Utensils } from 'lucide-react';

const steps = [
  { id: 'look', name: 'Look', icon: Eye, description: 'Observe the color, clarity, and viscosity.' },
  { id: 'swirl', name: 'Swirl', icon: Wind, description: 'Release the aromas by gently swirling.' },
  { id: 'smell', name: 'Smell', icon: Droplets, description: 'Identify primary, secondary, and tertiary aromas.' },
  { id: 'taste', name: 'Taste', icon: Utensils, description: 'Assess acidity, tannin, body, and flavor.' },
  { id: 'deduce', name: 'Deduce', icon: GlassWater, description: 'Bring it all together to identify the wine.' },
];

export default function Tasting() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [scores, setScores] = React.useState({
    acidity: 50,
    tannin: 50,
    body: 50,
    fruit: 50,
    earth: 50,
    oak: 50
  });
  const [notes, setNotes] = React.useState('');

  const handleScoreChange = (key: keyof typeof scores, value: number) => {
    setScores(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-5xl mb-4">Blind Tasting Coach</h1>
        <p className="text-stone-400 font-serif italic">Refine your palate through systematic deduction.</p>
      </header>

      {/* Progress Bar */}
      <div className="flex justify-between mb-12 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 z-0" />
        {steps.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(idx)}
            className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              idx <= currentStep ? 'bg-gold text-black' : 'bg-black border border-white/20 text-stone-500'
            }`}
          >
            <step.icon size={20} />
            <span className={`absolute -bottom-8 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap ${
              idx === currentStep ? 'text-gold' : 'text-stone-600'
            }`}>
              {step.name}
            </span>
          </button>
        ))}
      </div>

      {/* Step Content */}
      <div className="glass rounded-3xl p-8 md:p-12 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-[300px]"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-wine/20 flex items-center justify-center text-wine mr-4">
                {React.createElement(steps[currentStep].icon, { size: 24 })}
              </div>
              <h2 className="text-3xl">{steps[currentStep].name}</h2>
            </div>
            
            <p className="text-stone-400 text-lg mb-12 leading-relaxed italic">
              "{steps[currentStep].description}"
            </p>

            {currentStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(scores).map(([key, value]) => (
                  <div key={key} className="space-y-4">
                    <div className="flex justify-between text-xs uppercase tracking-widest text-stone-500">
                      <span>{key}</span>
                      <span className="text-gold">{value}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={value}
                      onChange={(e) => handleScoreChange(key as keyof typeof scores, parseInt(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer accent-gold"
                    />
                  </div>
                ))}
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <textarea
                  placeholder="Final deductions... (Region, Grape, Vintage)"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 min-h-[150px] focus:outline-none focus:border-gold/50 transition-colors font-sans"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gold text-black rounded-xl font-display uppercase tracking-widest flex items-center justify-center"
                >
                  <Save size={20} className="mr-2" />
                  Save Tasting Note
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-8 py-3 rounded-full border border-white/10 text-stone-400 hover:border-gold/30 disabled:opacity-30 transition-all uppercase text-xs tracking-widest"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          className="px-8 py-3 rounded-full bg-wine text-white hover:bg-wine/80 transition-all uppercase text-xs tracking-widest"
        >
          {currentStep === steps.length - 1 ? 'Finish' : 'Next Step'}
        </button>
      </div>
    </div>
  );
}
