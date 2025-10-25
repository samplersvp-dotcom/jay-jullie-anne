import { useAnimationContext } from '@/contexts/AnimationContext';

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  
  const text = "You're invited!";
  const repeatCount = 20; // Number of times to repeat the text for seamless loop

  return (
    <section id="slideshow" className="w-full overflow-hidden py-8 bg-primary">
      <div className="relative">
        <div className={`flex whitespace-nowrap ${animationsEnabled ? 'animate-scroll-left' : ''}`}>
          {/* First set of text */}
          {Array.from({ length: repeatCount }).map((_, index) => (
            <div key={`set1-${index}`} className="inline-flex items-center mx-8">
              <span 
                className="text-6xl md:text-7xl lg:text-8xl font-script italic text-gold"
                style={{ fontFamily: 'Boska, serif' }}
                data-testid={`text-loop-${index + 1}`}
              >
                {text}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {Array.from({ length: repeatCount }).map((_, index) => (
            <div key={`set2-${index}`} className="inline-flex items-center mx-8">
              <span 
                className="text-6xl md:text-7xl lg:text-8xl font-script italic text-gold"
                style={{ fontFamily: 'Boska, serif' }}
                data-testid={`text-loop-dup-${index + 1}`}
              >
                {text}
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
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ImageLoop;
