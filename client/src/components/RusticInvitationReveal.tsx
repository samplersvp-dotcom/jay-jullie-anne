import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import soulmates from '@assets/imageLoop_1761403348869.JPG';
import forever from '@assets/imageLoop2_1761403348869.JPG';
import beloved from '@assets/imageLoop3_1761403348869.JPG';
import monogram from '../assets/I&R-monogram.png';

import MONOGRAM_removebg_preview from "@assets/MONOGRAM-removebg-preview.png";

import Gemini_Generated_Image_iynfgviynfgviynf_removebg_preview from "@assets/Gemini_Generated_Image_iynfgviynfgviynf-removebg-preview.png";

import Gemini_Generated_Image_vt2kv3vt2kv3vt2k_removebg_preview from "@assets/Gemini_Generated_Image_vt2kv3vt2kv3vt2k-removebg-preview.png";

interface RusticInvitationRevealProps {
  animationsEnabled: boolean;
}

const RusticInvitationReveal = ({ animationsEnabled }: RusticInvitationRevealProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 2, 2025 14:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);
  const polaroids = [
    { src: soulmates, alt: 'Soulmates', rotation: -8 },
    { src: forever, alt: 'Forever', rotation: 2 },
    { src: beloved, alt: 'Beloved', rotation: -5 }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4">
      {/* Rustic Wood Background Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="woodgrain" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="0.4" opacity="0.25"/>
              <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodgrain)"/>
        </svg>
      </div>
      {/* Twine/String across top */}
      <div
        className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ transformOrigin: 'center' }}
      >
        <div className="absolute inset-0 shadow-lg" style={{ 
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)' 
        }}/>
      </div>
      {/* Polaroid Photos */}
      <div className="relative z-10 mb-16 flex flex-wrap items-center justify-center gap-6 max-w-5xl">
        {polaroids.map((polaroid, index) => (
        <div
          key={index}
          className="relative group"
          style={{ 
            transform: `rotate(${polaroid.rotation}deg)` 
          }}
          data-testid={`polaroid-${index}`}
        >
          {/* Clip/Pin on top of polaroid */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
            <svg width="30" height="35" viewBox="0 0 30 35" className="drop-shadow-md">
              <path 
                d="M15,5 L10,0 L5,5 L5,15 Q5,20 7,22 L15,30 L23,22 Q25,20 25,15 L25,5 L20,0 Z" 
                fill="#8B7355"
                stroke="#5D4E37"
                strokeWidth="1"
              />
              <circle cx="15" cy="12" r="3" fill="#5D4E37"/>
            </svg>
          </div>

          {/* Polaroid Frame */}
          <div 
            className="bg-white p-3 pb-12 shadow-2xl transform hover:scale-105 transition-transform duration-300"
            style={{
              boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
            }}
          >
            <div className="relative overflow-hidden bg-gray-100" style={{ width: '220px', height: '220px' }}>
              <img
                src={polaroid.src}
                alt={polaroid.alt}
                className="w-full h-full object-cover"
              />
              {/* Vintage photo effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-900/10 pointer-events-none mix-blend-overlay"/>
            </div>

            {/* Handwritten-style caption */}
            <div className="mt-4 text-center">
              <p 
                className="text-primary italic text-[18px]"
                style={{ fontFamily: 'Brush Script MT, cursive' }}
              >
                {polaroid.alt}
              </p>
            </div>
          </div>

          {/* Tape pieces on corners */}
          <div className="absolute -top-1 -left-1 w-8 h-6 bg-yellow-100/60 transform -rotate-45 opacity-70"
               style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
          <div className="absolute -top-1 -right-1 w-8 h-6 bg-yellow-100/60 transform rotate-45 opacity-70"
               style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}/>
        </div>
        ))}
      </div>
      {/* Rustic Paper Invitation */}
      <div
        className="relative z-10 max-w-2xl w-full"
        data-testid="invitation-paper"
      >
        {/* Paper with elegant design */}
        <div 
          className="relative bg-white/10 border border-gold/30 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold opacity-40"/>
          <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-gold opacity-40"/>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-gold opacity-40"/>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold opacity-40"/>

          {/* Content */}
          <div className="text-center relative z-10">
            {/* Ornamental divider top */}
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"/>
              <svg className="w-6 h-6 mx-3 text-gold" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
              </svg>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"/>
            </div>

            <h2 
              className="text-4xl md:text-5xl font-script italic text-gold mb-6"
              style={{ fontFamily: 'Boska, serif' }}
            >
              You're Invited
            </h2>

            <p 
              className="text-lg md:text-xl text-gold-light leading-relaxed mb-6 italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Come witness the moment we tie the knot and start our greatest adventure together
            </p>

            <div
              className="text-base md:text-lg text-gold-light"
            >
              <p className="mb-2">with love, laughter,</p>
              <p>and a lifetime of memories</p>
            </div>

            {/* Ornamental divider bottom */}
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"/>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"/>
            </div>
          </div>

        </div>

        {/* Elegant seal */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 border-gold/40 bg-[#112417]">
            <img src={Gemini_Generated_Image_vt2kv3vt2kv3vt2k_removebg_preview} alt="I&R" className="h-12 w-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Countdown Section */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mt-20 px-4">
        <motion.div 
          className="mb-12"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.3 } : { duration: 0 }}
        >
          <h2 className="text-4xl font-display text-foreground mb-2" data-testid="text-countdown-title">
            Forever starts soon
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-4 gap-4 md:gap-8 max-w-lg mx-auto"
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 0.6 } : { duration: 0 }}
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="text-center"
              initial={animationsEnabled ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={animationsEnabled ? { 
                duration: 0.6, 
                ease: "easeOut", 
                delay: 0.8 + (index * 0.1) 
              } : { duration: 0 }}
              data-testid={`countdown-${item.label.toLowerCase()}`}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-display mb-1 text-[#f9c31f]"
                key={item.value}
                initial={animationsEnabled ? { opacity: 0.7, scale: 0.9 } : { opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={animationsEnabled ? { duration: 0.3 } : { duration: 0 }}
              >
                {item.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xs font-body uppercase tracking-wider text-muted-foreground">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Text - Full Width */}
      <div className="w-full overflow-hidden mt-12 relative z-10">
        <div className={`flex whitespace-nowrap ${animationsEnabled ? 'animate-scroll-left' : ''}`}>
          {/* First set of text */}
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={`set1-${index}`} className="inline-flex items-center mx-8">
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-script italic text-gold"
                style={{ fontFamily: 'Boska, serif' }}
                data-testid={`text-invited-${index + 1}`}
              >
                You're invited!
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={`set2-${index}`} className="inline-flex items-center mx-8">
              <span 
                className="text-4xl md:text-5xl lg:text-6xl font-script italic text-gold"
                style={{ fontFamily: 'Boska, serif' }}
                data-testid={`text-invited-dup-${index + 1}`}
              >
                You're invited!
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 10s linear infinite;
        }
      `}</style>
      {/* Floating rustic elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RusticInvitationReveal;