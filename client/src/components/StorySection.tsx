import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import { Sparkles, Compass, Heart, BookOpen, MessageCircle, X } from 'lucide-react';

// Import new images
import lovestory1 from '@assets/lovestory1_1761211706824.jpg';
import lovestory2 from '@assets/lovestory2_1761211706824.jpg';
import lovestory3 from '@assets/lovestory3_1761211706825.jpg';
import lovestory4 from '@assets/lovestory4_1761211706825.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StorySection = () => {
  const { animationsEnabled } = useAnimationContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ [key: number]: { x: number; y: number } }>({});
  const [showFullStoryModal, setShowFullStoryModal] = useState(false);

  const fullStoryText = `It all started with friendship — simple, fun, and full of good laughs. No expectations, no labels, just two people who enjoyed each other's company.

Then one day, out of nowhere, came the question that started it all: "Try natin kung magwo-work tayo?"

No pressure, no monsarries and anniversaries, no love songs needed — just pure effort, constant communication, and a whole lot of understanding.

But plot twist! LDR pala 😅

Jay from Camarines Norte and Lianne from Antipolo. Two different places, same heartbeat. 💖

There were times na mahirap, may days na miss mo lang talaga 'yung isa't isa, pero laban lang! Kahit gaano kalayo, we always found ways to make each other feel close. From random calls, surprise visits, to those small "good morning" and "ingat ka" messages — every little thing became part of our big story.

And now, seven years later, here we are — no longer miles apart, but finally side by side. From "try natin" to "yes, it worked," and now, "this is forever."

Because when love is real, distance is just a test — and ours passed with flying colors. 💫`;

  const storyCards = [
    {
      id: 1,
      title: "It Started With Friendship",
      shortText: "Simple, fun, and full of good laughs. No expectations, no labels, just two people who enjoyed each other's company. Then came the question: \"Try natin kung magwo-work tayo?\"",
      image: lovestory1,
      icon: MessageCircle
    },
    {
      id: 2,
      title: "LDR Journey",
      shortText: "Plot twist — LDR pala! 😅 Jay from Camarines Norte and Lianne from Antipolo. Two different places, same heartbeat. 💖",
      image: lovestory2,
      icon: Compass
    },
    {
      id: 3,
      title: "Making It Work",
      shortText: "There were hard times, days when we missed each other so much. But we fought through it! Random calls, surprise visits, small messages — every little thing became part of our big story.",
      image: lovestory3,
      icon: Sparkles
    },
    {
      id: 4,
      title: "Seven Years Later",
      shortText: "No longer miles apart, but finally side by side. From \"try natin\" to \"yes, it worked,\" and now, \"this is forever.\" Distance was just a test — and ours passed with flying colors. 💫",
      image: lovestory4,
      icon: Heart
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontal = horizontalRef.current;

    if (!container || !horizontal || !animationsEnabled) return;

    // Detect mobile/tablet viewports
    const isMobile = window.innerWidth < 1024;
    const scrollMultiplier = isMobile ? 3 : 2;
    const scrubValue = isMobile ? 0.3 : 0.2;

    // Create horizontal scrolling animation with dynamic width calculation
    const horizontalScrollTween = gsap.to(horizontal, {
      x: () => -(horizontal.scrollWidth - container.offsetWidth),
      ease: "none",
    });

    // Create ScrollTrigger with dynamic end calculation - Give each card much more vertical scroll space
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${(horizontal.scrollWidth - container.offsetWidth) * scrollMultiplier}`,
      pin: true,
      scrub: scrubValue,
      animation: horizontalScrollTween,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    });

    // Refresh ScrollTrigger after images and fonts load
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    // Add load listener for window to refresh after fonts and lazy images
    window.addEventListener('load', handleRefresh);

    // Add load listeners to all images to refresh after each image loads
    const images = horizontal.querySelectorAll('img');
    images.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', handleRefresh, { once: true });
      }
    });

    // Initial refresh to handle any already loaded content
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    // Animate story cards on load
    gsap.fromTo(".story-card", {
      opacity: 0,
      y: 50,
      scale: 0.9
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".story-card",
        start: "top 80%",
      }
    });

    return () => {
      window.removeEventListener('load', handleRefresh);
      images.forEach(img => {
        img.removeEventListener('load', handleRefresh);
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [animationsEnabled]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition(prev => ({
      ...prev,
      [cardId]: { x, y }
    }));
  };

  const handleMouseLeave = (cardId: number) => {
    setMousePosition(prev => {
      const newPosition = { ...prev };
      delete newPosition[cardId];
      return newPosition;
    });
  };

  return (
    <motion.section 
      id="story" 
      className="bg-primary relative overflow-hidden isolate"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 3.5 } : { duration: 0 }}
    >
      {/* Header */}
      <div className="text-center py-16 sm:py-20 px-4 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={animationsEnabled ? { duration: 0.8, ease: "easeOut", delay: 3.8 } : { duration: 0 }}
        >
          <h2 className="text-4xl sm:text-5xl font-script italic font-black mb-6 sm:mb-8 text-gold" data-testid="text-story-title">
            Together Forever
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto mb-4 text-gold-light">
            Scroll to discover our commitment to each other
          </p>
          
          {/* SVG Arrow Indicator */}
          <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold animate-bounce" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
            <span className="text-xs sm:text-sm text-gold-light">Scroll down</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold animate-pulse" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
            </svg>
          </div>
        </motion.div>
      </div>
      {/* Horizontal Scrolling Container */}
      <div 
        ref={containerRef} 
        className="relative overflow-hidden"
        style={{ height: '100vh' }}
      >
        <div 
          ref={horizontalRef}
          className="flex h-full items-center will-change-transform"
          style={{ width: `${storyCards.length * 100 + 100}vw` }}
        >
          {/* Story Cards */}
          {storyCards.map((card, index) => (
            <div
              key={card.id}
              className="story-card flex-shrink-0 h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12"
              style={{ width: '100vw', minWidth: '100vw' }}
            >
              <div 
                className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative overflow-hidden rounded-3xl p-8 md:p-12 transition-all duration-300 border border-gold/30 shadow-lg min-h-[600px] mt-12 sm:mt-0"
                style={{
                  background: mousePosition[card.id] 
                    ? `radial-gradient(600px circle at ${mousePosition[card.id].x}px ${mousePosition[card.id].y}px, rgba(212, 168, 83, 0.12), #0d1f13 40%), #0d1f13`
                    : '#0d1f13'
                }}
                onMouseMove={(e) => handleMouseMove(e, card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
                data-testid={`card-story-${card.id}`}
              >
                {/* Content */}
                <div className={`space-y-6 sm:space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gold/20 rounded-full flex items-center justify-center border-2 border-gold/40">
                      <card.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gold" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-script italic mb-4 sm:mb-6 text-gold" data-testid={`text-story-card-${card.id}-title`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-lg sm:text-xl leading-relaxed text-gold-light" data-testid={`text-story-card-${card.id}-text`}>
                    {card.shortText}
                  </p>

                  {/* Read Full Story Button - Only on last card */}
                  {card.id === 4 && (
                    <button
                      onClick={() => setShowFullStoryModal(true)}
                      className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-gold text-gold-foreground hover:bg-gold-bright rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      data-testid="button-read-full-story"
                    >
                      <BookOpen className="w-5 h-5" />
                      Read Full Story
                    </button>
                  )}

                  {/* SVG Decorative Element */}
                  <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                    <div className="w-12 sm:w-16 h-px bg-gold/60"></div>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gold/70" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                    </svg>
                    <div className="w-12 sm:w-16 h-px bg-gold/60"></div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square max-w-[70vw] sm:max-w-sm md:max-w-md mx-auto relative">
                    {/* Square image with rounded corners on all screen sizes */}
                    <img
                      src={card.image}
                      alt={`${card.title} moment`}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                      data-testid={`img-story-card-${card.id}`}
                    />

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold/70 animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z"/>
                      </svg>
                    </div>

                    <div className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gold/60 animate-pulse" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Final "The Vow" Section */}
          <div className="story-card flex-shrink-0 w-screen h-full flex items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto text-center relative">
              {/* Background SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 600">
                <defs>
                  <radialGradient id="vowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <circle cx="400" cy="300" r="250" fill="url(#vowGradient)"/>
                
                {/* Decorative hearts */}
                <g className="animate-pulse">
                  <path d="M200,150 C200,140 185,130 175,140 C165,130 155,140 155,150 C155,160 175,180 200,200 C225,180 245,160 245,150 C245,140 235,130 225,140 C215,130 200,140 200,150 Z" 
                        fill="white" opacity="0.2"/>
                  <path d="M600,450 C600,440 585,430 575,440 C565,430 555,440 555,450 C555,460 575,480 600,500 C625,480 645,460 645,450 C645,440 635,430 625,440 C615,430 600,440 600,450 Z" 
                        fill="white" opacity="0.2"/>
                </g>
              </svg>

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-script italic font-black mb-6 sm:mb-8 text-gold" data-testid="text-story-vow-title">
                  Our Vow
                </h3>
                
                <div className="max-w-2xl mx-auto">
                  <p className="text-xl sm:text-2xl leading-relaxed italic mb-4 text-gold">
                    "Love is patient, love is kind."
                  </p>
                  <p className="text-base sm:text-lg font-body text-gold-light">
                    1 Corinthians 13:4
                  </p>
                </div>
                
                {/* SVG Hearts decoration */}
                <div className="flex justify-center items-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold animate-pulse" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-gold/60"></div>
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gold animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '0.5s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                  <div className="w-16 sm:w-24 h-px bg-gold/60"></div>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold animate-pulse" viewBox="0 0 24 24" style={{ animationDelay: '1s' }}>
                    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      {showFullStoryModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setShowFullStoryModal(false)}
          data-testid="modal-full-story-overlay"
        >
          <div 
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-full-story-content"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowFullStoryModal(false)}
              className="sticky top-4 right-4 float-right z-10 p-2 bg-gold hover:bg-gold-bright text-gold-foreground rounded-full transition-colors duration-200 shadow-lg"
              data-testid="button-close-full-story"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Story Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-script italic text-primary mb-8 text-center">
                Our Love Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                {fullStoryText.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center gap-6">
                <svg className="w-12 h-12 text-gold animate-pulse" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.04L12,21.35Z"/>
                </svg>
                
                <button
                  onClick={() => setShowFullStoryModal(false)}
                  className="px-8 py-3 bg-gold hover:bg-gold-bright text-gold-foreground rounded-lg transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                  data-testid="button-exit-full-story"
                >
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default StorySection;
