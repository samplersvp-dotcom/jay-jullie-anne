import { motion } from 'framer-motion';
import { Camera, Gift } from 'lucide-react';
import giftQR from '@assets/gift_qr_1761218317807.png';

const HashtagGiftsSection = () => {
  return (
    <motion.section 
      id="hashtag-gifts" 
      className="bg-emerald-600 py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white/30 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Oh Snap! Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-white" data-testid="icon-camera" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-white mb-4 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            data-testid="text-ohsnap-title"
          >
            Oh Snap!
          </motion.h2>

          <motion.div
            className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <p 
              className="text-lg text-white leading-relaxed mb-6"
              data-testid="text-social-message"
            >
              We'd love to see the beautiful moments you capture on our special day!
              <br />
              <br />
              Kindly mention us on our social media accounts when you share photos and videos from the celebration.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-lg p-4">
              <p className="text-base sm:text-xl md:text-2xl font-semibold text-white tracking-wide break-words" data-testid="text-wedding-hashtag">
                #JAYWalaNangSoLIANNE
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Gifts Section */}
        <motion.div 
          className="bg-card/30 border border-border rounded-xl p-8 shadow-soft hover-elegant transition-all duration-500 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-white" data-testid="icon-gift" />
            </div>
          </motion.div>

          <motion.h2 
            className="font-display italic text-white mb-6 text-[48px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            data-testid="text-gifts-title"
          >
            Gifts
          </motion.h2>

          <motion.div
            className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <p 
              className="text-lg text-white leading-relaxed"
              data-testid="text-gifts-message"
            >
              We're so grateful for your prayers, love, and presence on our special day.
              <br />
              If you wish to share an additional blessing,
              <br />
              a monetary gift would be deeply appreciated as we start our life together. 🌿
            </p>
          </motion.div>

          {/* Payment QR Code */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <img 
                  src={giftQR}
                  alt="Payment QR Code"
                  className="w-full max-w-xs mx-auto object-contain"
                  data-testid="img-gift-qr-hashtag"
                />
                <p className="text-sm text-gray-600 mt-4">
                  BDO to BDO transfers are free.<br />
                  Fees may apply for non-BDO transfers.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HashtagGiftsSection;
