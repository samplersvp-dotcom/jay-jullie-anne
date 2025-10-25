import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import giftQR from '@assets/gift_qr_1761217362043.png';

const GiftSection = () => {
  return (
    <motion.section 
      className="bg-emerald-600 py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 9.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 border border-white/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Gift Card Container */}
        <motion.div 
          className="bg-white/20 border border-white/30 rounded-3xl p-8 max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 9.8 }}
        >
          {/* Gift Icon */}
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Gift className="w-8 h-8 text-white" data-testid="icon-gift" />
          </div>

          {/* Section Title */}
          <h2 className="text-5xl font-display italic text-white mb-8" data-testid="text-gifts-title">
            Gifts
          </h2>

          {/* Gift Message */}
          <div className="bg-white/20 border border-white/30 rounded-xl p-6">
            <div className="space-y-2">
              <p className="text-sm font-body text-white leading-relaxed">
                With all that we have, we've been truly blessed.
              </p>
              <p className="text-sm font-body text-white leading-relaxed">
                Your presence and prayers are all that we request.
              </p>
              <p className="text-sm font-body text-white leading-relaxed">
                But if to give nonetheless,
              </p>
              <p className="text-sm font-body text-white leading-relaxed">
                Monetary gift is one we suggest.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment QR Code */}
        <motion.div 
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 10.4 }}
        >
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <div className="text-center">
              <img 
                src={giftQR}
                alt="Payment QR Code"
                className="w-full max-w-xs mx-auto object-contain"
                data-testid="img-gift-qr"
              />
              <p className="text-sm text-gray-600 mt-4">
                BDO to BDO transfers are free.<br />
                Fees may apply for non-BDO transfers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GiftSection;