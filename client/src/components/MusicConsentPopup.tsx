import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicConsentPopupProps {
  onConsent: (consent: boolean) => void;
  isVisible: boolean;
}

const MusicConsentPopup = ({ onConsent, isVisible }: MusicConsentPopupProps) => {
  const handleConsent = (consent: boolean) => {
    onConsent(consent);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl p-10 md:p-12 max-w-md w-full shadow-2xl"
          >
            <div className="text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <Music className="h-16 w-16 text-emerald-600" strokeWidth={1.5} />
              </motion.div>
              
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-medium text-emerald-700">
                  Play music?
                </h2>
                
                <p className="text-emerald-600 leading-relaxed text-sm md:text-base">
                  Enhance your experience with background music
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  onClick={() => handleConsent(true)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-6 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                  data-testid="button-allow-music"
                >
                  <Volume2 className="h-5 w-5 mr-2" />
                  Play Music
                </Button>
                <Button
                  onClick={() => handleConsent(false)}
                  variant="ghost"
                  className="w-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 font-medium py-6 px-6 rounded-lg transition-all duration-200"
                  data-testid="button-skip-music"
                >
                  <VolumeX className="h-5 w-5 mr-2" />
                  Continue Silently
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicConsentPopup;