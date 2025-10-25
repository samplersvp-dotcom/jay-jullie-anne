"use client";
import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAnimationContext } from '@/contexts/AnimationContext';
import ceremonyImage from '@assets/church_1761212838572.jpg';

const VenueSection = () => {
  const { animationsEnabled } = useAnimationContext();
  const venues = [
    {
      title: 'Ceremony',
      name: 'Parish of Immaculate Heart of Mary',
      address: 'Parish of Immaculate Heart of Mary',
      image: ceremonyImage,
      mapUrl: 'https://maps.app.goo.gl/cQg4VqGJaz78fuQR9',
      mapEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Parish+of+Immaculate+Heart+of+Mary&zoom=15',
      description: 'Join us at the Parish of Immaculate Heart of Mary as we exchange our vows and begin our journey together in the presence of God, family, and friends.',
      details: 'Guest arrival starts at 7:30 AM. The ceremony begins at 8:00 AM. Please arrive early to be seated.',
      startTime: '8:00 AM'
    },
    {
      title: 'Reception',
      name: 'Jamesville Hotel and Resort',
      address: 'Jamesville Hotel and Resort',
      image: undefined,
      mapUrl: 'https://maps.app.goo.gl/MuXqn1ZBfMXhP6SY6',
      mapEmbed: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Jamesville+Hotel+and+Resort&zoom=15',
      description: 'Join us at Jamesville Hotel and Resort for our wedding reception. Celebrate with us as we continue our special day with dinner, dancing, and memories.',
      details: 'Reception follows immediately after the ceremony. Dinner will be served.',
      startTime: '10:00 AM'
    }
  ];

  return (
    <motion.section 
      id="venue" 
      className="bg-emerald-600 py-12 px-4"
      initial={animationsEnabled ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={animationsEnabled ? { duration: 1, delay: 6.5 } : { duration: 0 }}
    >
      {/* Section Title */}
      <motion.div 
        className="text-center mb-16"
        initial={animationsEnabled ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={animationsEnabled ? { duration: 0.8, delay: 6.8 } : { duration: 0 }}
      >
        <h1 className="text-5xl md:text-6xl font-display italic text-white mb-2" data-testid="text-venue-section-title">
          Venue
        </h1>
      </motion.div>

      {/* Venues */}
      <div className="space-y-20 max-w-6xl mx-auto">
        {venues.map((venue, index) => (
          <motion.div 
            key={index}
            className="bg-card/30 border border-primary/20 rounded-3xl overflow-hidden shadow-lg"
            initial={animationsEnabled ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={animationsEnabled ? { duration: 0.8, delay: 7.2 + (index * 0.3) } : { duration: 0 }}
          >
            {/* Header */}
            <div className="text-center py-12 px-6">
              <h2 className="text-3xl md:text-4xl font-display italic text-white mb-4" data-testid={`text-${venue.title.toLowerCase()}-title`}>
                {venue.title}
              </h2>
              <h3 className="text-xl md:text-2xl font-display italic text-white/80 mb-3" data-testid={`text-${venue.title.toLowerCase()}-name`}>
                {venue.name}
              </h3>
              <div className="flex items-center justify-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <p className="text-sm" data-testid={`text-${venue.title.toLowerCase()}-address`}>
                  {venue.address}
                </p>
              </div>
            </div>

            {/* Venue Image */}
            {venue.image && (
              <div className="px-8 pb-8">
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    data-testid={`img-${venue.title.toLowerCase()}-venue`}
                  />
                </div>
              </div>
            )}

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">
              {/* About Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 border-l-2 border-white pl-3">
                  About the Venue
                </h4>
                <p className="text-white/80 leading-relaxed pl-3" data-testid={`text-${venue.title.toLowerCase()}-description`}>
                  {venue.description}
                </p>
                <p className="text-sm text-white/70 italic pl-3" data-testid={`text-${venue.title.toLowerCase()}-details`}>
                  {venue.details}
                </p>
              </div>

              {/* Map Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-white/60 border-l-2 border-white pl-3">
                  Location Map
                </h4>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <iframe
                    src={venue.mapEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    data-testid={`map-${venue.title.toLowerCase()}-embed`}
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 pb-8 pt-4 border-t border-white/20 mx-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-wide">Start Time</p>
                  <p className="text-lg font-semibold text-white" data-testid={`text-${venue.title.toLowerCase()}-start-time`}>
                    {venue.startTime}
                  </p>
                </div>
              </div>

              <a
                href={venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-white/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                data-testid={`button-${venue.title.toLowerCase()}-location`}
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default VenueSection;
