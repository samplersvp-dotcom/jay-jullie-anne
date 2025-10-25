import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
import { useAnimationContext } from '@/contexts/AnimationContext';
import heroImage from '@assets/hero-section_1761404726433.JPG';

const HeroSection = () => {
  const [showElements, setShowElements] = useState(false);
  const { animationsEnabled } = useAnimationContext();

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Image Background */}
      <img
        src={heroImage}
        alt="Wedding couple"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center' }}
      />
      {/* Dark green gradient overlay matching site theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(140,40%,8%)]/70 via-[hsl(140,35%,12%)]/60 to-[hsl(140,40%,8%)]/80"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-8 sm:px-12 lg:px-16 max-w-7xl w-full">
        <div className="mb-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-[hsl(45,90%,85%)] tracking-wide leading-tight" data-testid="text-main-invitation" style={{ fontFamily: 'Boska, serif', fontWeight: 300 }}>
            {animationsEnabled ? (
              <TypeAnimation
                sequence={[
                  'Jay\n&\nLianne',
                  () => {
                    setShowElements(true);
                  }
                ]}
                wrapper="span"
                speed={{ type: 'keyStrokeDelayInMs', value: 273 }}
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                cursor={true}
                repeat={0}
                className="typewriter-text"
              />
            ) : (
              <span 
                style={{ 
                  whiteSpace: 'pre-line',
                  display: 'inline-block'
                }}
                className="typewriter-text"
              >
                Jay
                <br />
                &
                <br />
                Lianne
              </span>
            )}
          </h1>
        </div>

        <div className={`transition-all duration-700 ${(animationsEnabled && showElements) ? 'animate-fade-up opacity-100' : (!animationsEnabled ? 'opacity-100' : 'opacity-0')}`}>
          <div className="text-right">
            <p className="text-3xl sm:text-4xl md:text-5xl text-[hsl(45,90%,85%)] font-light tracking-wider" style={{ fontFamily: 'Boska, serif', fontWeight: 200 }} data-testid="text-date">
              08
              <br />
              24
              <br />
              25
            </p>
          </div>
        </div>
      </div>

      {/* Improved mobile responsiveness */}
      <style>{`
        .hero-section {
          min-height: 100vh !important;
        }
        @media (min-width: 768px) {
          .hero-section {
            min-height: 100vh !important;
          }
        }
        @media (max-width: 767px) {
          .hero-section {
            background-attachment: scroll !important;
            background-size: cover !important;
            padding-top: 1rem;
            padding-bottom: 1rem;
            min-height: 100vh !important;
          }
          .hero-section h1 {
            font-size: 3rem !important;
            line-height: 1.2 !important;
          }
        }

        /* Custom underscore cursor for TypeAnimation */
        .typewriter-text .react-type-animation-cursor {
          color: hsl(45, 90%, 85%);
          animation: blink 1.2s infinite;
        }

        .typewriter-text .react-type-animation-cursor::after {
          content: '_';
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;