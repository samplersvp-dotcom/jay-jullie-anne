import { motion } from 'framer-motion';

import guestsImage from "@assets/guests_1761211706822.png";
import principalSponsorsImage from "@assets/ninong-ninang-attire_1761211706826.png";

const DressCodeSection = () => {
  return (
    <motion.section 
      id="dresscode" 
      className="section-pastel-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 7.5 }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 7.8 }}
        >
          <h2 className="font-display italic text-gold mb-4 text-[48px]" data-testid="text-dresscode-title">
            Attire
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Would be delighted if you could join us dressed in our wedding colors
          </p>
        </motion.div>

        {/* Modern Dress Code Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Principal Sponsors */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.3 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      Principal Sponsors
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">FORMAL ATTIRE</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={principalSponsorsImage}
                  alt="Principal Sponsors attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.5 }}
                />
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-foreground/80 font-semibold">Gentlemen: Black or suits with motif inspired accents</p>
                  <p className="text-sm text-foreground/80 font-semibold">Ladies: Beige, Gold, or Champagne gowns</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#F5F5DC' }} title="Beige"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#FFD700' }} title="Gold"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#F7E7CE' }} title="Champagne"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div 
            className="group"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 8.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 h-full relative">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 8.6 }}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent rounded-2xl"></div>
                    <h3 className="text-xl font-display font-medium text-foreground mb-4 relative z-10">
                      Guest Semi-Formal
                    </h3>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                      <span className="text-sm font-normal text-foreground">SEMI FORMAL</span>
                    </div>
                  </div>
                </motion.div>
                <motion.img 
                  src={guestsImage}
                  alt="Guests attire guide"
                  className="w-full max-w-md mx-auto object-contain rounded-2xl shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 8.8 }}
                />
                <div className="mt-6 space-y-3">
                  <p className="text-sm text-foreground/80">Suggested colors:</p>
                  <p className="text-sm text-foreground/80 font-semibold">Emerald green, Sage, Olive green, Gold, or Light gray</p>
                  <div className="flex justify-center gap-3 mt-4">
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#50C878' }} title="Emerald Green"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#8A9A5B' }} title="Sage"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#708238' }} title="Olive Green"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#FFD700' }} title="Gold"></div>
                    <div className="w-12 h-12 rounded-full border-2 border-border shadow-md" style={{ backgroundColor: '#D3D3D3' }} title="Light Gray"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Guidelines */}
        <motion.div
          className="bg-white/5 border border-primary/20 rounded-2xl p-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.0 }}
        >
          <h3 className="text-2xl font-display text-foreground text-center mb-8">Additional Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* White and Ivory */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    White and Ivory are lovingly reserved for the couple
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Please avoid wearing white or ivory, as these colors are reserved for the bride and groom.
                  </p>
                </div>
              </div>
            </div>

            {/* Respectful attire */}
            <div className="bg-card/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-base font-display font-semibold text-foreground mb-2">
                    Respectful attire
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Kindly ensure your attire is respectful and appropriate for a religious ceremony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default DressCodeSection;
