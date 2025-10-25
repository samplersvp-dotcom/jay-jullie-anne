import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { X } from 'lucide-react';

// Prenup photos
import prenup1 from '@assets/prenup1_1761211706827.jpg';
import prenup2 from '@assets/prenup2_1761211706827.jpg';
import prenup3 from '@assets/prenup3_1761211838864.jpg';
import prenup4 from '@assets/prenup4_1761211838866.jpg';
import prenup5 from '@assets/prenup5_1761211838868.jpg';
import prenup6 from '@assets/prenup6_1761211838869.jpg';
import prenup7 from '@assets/prenup7_1761211838869.jpg';
import prenup8 from '@assets/prenup8_1761211838870.jpg';
import prenup9 from '@assets/prenup9_1761211838870.jpg';
import prenup10 from '@assets/prenup10_1761211838871.jpg';
import prenup11 from '@assets/prenup11_1761211838871.jpg';
import prenup12 from '@assets/prenup12_1761211838871.jpg';
import prenup13 from '@assets/prenup13_1761211838873.jpg';
import prenup14 from '@assets/prenup14_1761211838874.jpg';
import prenup15 from '@assets/prenup15_1761211838875.jpg';

const MemorableMomentsSection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: prenup1, alt: "Prenup photo 1", height: "h-80" },
    { src: prenup2, alt: "Prenup photo 2", height: "h-64" },
    { src: prenup3, alt: "Prenup photo 3", height: "h-72" },
    { src: prenup4, alt: "Prenup photo 4", height: "h-80" },
    { src: prenup5, alt: "Prenup photo 5", height: "h-96" },
    { src: prenup6, alt: "Prenup photo 6", height: "h-72" },
    { src: prenup7, alt: "Prenup photo 7", height: "h-64" },
    { src: prenup8, alt: "Prenup photo 8", height: "h-80" },
    { src: prenup9, alt: "Prenup photo 9", height: "h-72" },
    { src: prenup10, alt: "Prenup photo 10", height: "h-64" },
    { src: prenup11, alt: "Prenup photo 11", height: "h-96" },
    { src: prenup12, alt: "Prenup photo 12", height: "h-80" },
    { src: prenup13, alt: "Prenup photo 13", height: "h-72" },
    { src: prenup14, alt: "Prenup photo 14", height: "h-80" },
    { src: prenup15, alt: "Prenup photo 15", height: "h-96" }
  ];

  return (
    <motion.section 
      id="prenup-photos" 
      className="section-hard-blue py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 flex flex-col items-center justify-center min-h-[140px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <h2 className="text-5xl font-script italic font-black text-gold-bright mb-8" data-testid="text-prenup-photos-title">
            Save the Date Photos
          </h2>
          <p className="text-xl font-script italic max-w-2xl mx-auto leading-relaxed text-white/90">
            Captured moments before forever begins
          </p>
        </motion.div>

        {/* Pinterest-style Masonry Grid */}
        <motion.div 
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(index)}
              data-testid={`img-prenup-${index}`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.height} object-cover group-hover:brightness-90 transition-all duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-script text-lg">View Photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">Prenup Photo Gallery</DialogTitle>
            <DialogDescription className="sr-only">View prenup photo in full size</DialogDescription>
            
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200"
                data-testid="button-close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              {selectedImage !== null && (
                <motion.img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`img-lightbox-${selectedImage}`}
                />
              )}

              {/* Navigation Buttons */}
              {selectedImage !== null && selectedImage > 0 && (
                <button
                  onClick={() => setSelectedImage(selectedImage - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 z-10"
                  data-testid="button-prev-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {selectedImage !== null && selectedImage < images.length - 1 && (
                <button
                  onClick={() => setSelectedImage(selectedImage + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors duration-200 z-10"
                  data-testid="button-next-image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image Counter */}
              {selectedImage !== null && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 text-white px-4 py-2 rounded-full">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </motion.section>
  );
};

export default MemorableMomentsSection;
