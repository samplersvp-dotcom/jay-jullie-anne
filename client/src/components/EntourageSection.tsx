import { motion } from 'framer-motion';

const EntourageSection = () => {
  return (
    <motion.section 
      id="entourage" 
      className="bg-primary py-12 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 8.5 }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-display italic text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.5 }}
          data-testid="heading-entourage"
        >
          Entourage
        </motion.h2>

        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 8.8 }}
        >
          {/* Parents Section - 2 COLUMNS always */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-parents-groom">
              <h3 className="font-display italic text-sm text-white mb-2">Parents of the Groom</h3>
              <p className="text-white font-normal italic text-xs">Mr. Leonardo Lladones</p>
              <p className="text-white font-normal italic text-xs">Mrs. Cristina Lladones</p>
            </div>
            <div data-testid="section-parents-bride">
              <h3 className="font-display italic text-sm text-white mb-2">Parents of the Bride</h3>
              <p className="text-white font-normal italic text-xs">Mr. Rimar Gacilo</p>
              <p className="text-white font-normal italic text-xs">Mrs. Pacita Gacilo</p>
            </div>
          </div>

          {/* Principal Sponsors - 2 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-white mb-4" data-testid="heading-principal-sponsors">Principal Sponsors</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
              <p className="text-white font-normal italic text-xs">Mr. Virgilio Cebreros</p>
              <p className="text-white font-normal italic text-xs">Mrs. Ofelia Cebreros</p>
              <p className="text-white font-normal italic text-xs">Mr. Eliver Calumpiano</p>
              <p className="text-white font-normal italic text-xs">Mrs. Rolita Calumpiano</p>
              <p className="text-white font-normal italic text-xs">Mr. Bernardo Gacilo</p>
              <p className="text-white font-normal italic text-xs">Mrs. Cristine Gacilo</p>
              <p className="text-white font-normal italic text-xs">Mr. Jose Mari Felipe</p>
              <p className="text-white font-normal italic text-xs">Mrs. Rhea mae Felipe</p>
              <p className="text-white font-normal italic text-xs">Mr. Andrew John Olayvar</p>
              <p className="text-white font-normal italic text-xs">Mrs. Cheenee Ann Olayvar</p>
              <p className="text-white font-normal italic text-xs">Mr. Cecil Beltran</p>
              <p className="text-white font-normal italic text-xs">Mrs. Vilma Beltran</p>
              <p className="text-white font-normal italic text-xs">Mr. Mervin Dygico</p>
              <p className="text-white font-normal italic text-xs">Mrs. Jofhiline Dygico</p>
              <p className="text-white font-normal italic text-xs">Mr. Donato Fortes</p>
              <p className="text-white font-normal italic text-xs">Mrs. Delia Fortes</p>
              <p className="text-white font-normal italic text-xs">Mr. Oscar Reyes</p>
              <p className="text-white font-normal italic text-xs">Mrs. Sonia Reyes</p>
              <p className="text-white font-normal italic text-xs">Mr. Ramir Mencias</p>
              <p className="text-white font-normal italic text-xs">Mrs. Anabel Mencias</p>
              <p className="text-white font-normal italic text-xs"></p>
              <p className="text-white font-normal italic text-xs">Mrs. Adelina Blando</p>
              <p className="text-white font-normal italic text-xs"></p>
              <p className="text-white font-normal italic text-xs">Mrs. Marilyn M. Del Moro</p>
            </div>
          </div>

          {/* Secondary Sponsors - 3 COLUMNS always */}
          <div>
            <h3 className="font-display italic text-lg text-white mb-4" data-testid="heading-secondary-sponsors">Secondary Sponsors</h3>
            <div className="grid grid-cols-3 gap-6">
              <div data-testid="section-candle">
                <h4 className="font-normal italic text-xs text-white mb-1">Candle</h4>
                <p className="text-white font-normal italic text-xs">Ms. Lyza Marie Jacob</p>
                <p className="text-white font-normal italic text-xs">Mr. Edrian Mencias</p>
              </div>
              <div data-testid="section-veil">
                <h4 className="font-normal italic text-xs text-white mb-1">Veil</h4>
                <p className="text-white font-normal italic text-xs">Ms. Ara jane Lladones</p>
                <p className="text-white font-normal italic text-xs">Mr. Rico Lagartos</p>
                <p className="text-white font-normal italic text-xs">Ms. Angelica Joy Cabral</p>
                <p className="text-white font-normal italic text-xs">Mr. John lloyd Lladones</p>
              </div>
              <div data-testid="section-cord">
                <h4 className="font-normal italic text-xs text-white mb-1">Cord</h4>
                <p className="text-white font-normal italic text-xs">Ms. Roshel Lladones</p>
                <p className="text-white font-normal italic text-xs">Mr. John Paul Gacilo</p>
                <p className="text-white font-normal italic text-xs">Ms. Marian Rae Morelos</p>
                <p className="text-white font-normal italic text-xs">Mr. John Darwin Rosales</p>
              </div>
            </div>
          </div>

          {/* Wedding Party - 2 COLUMNS */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-best-man">
              <h4 className="font-display italic text-sm text-white mb-2">Best Man</h4>
              <p className="text-white font-normal italic text-xs">Engr. Daniel Sena</p>
            </div>
            <div data-testid="section-maid-honor">
              <h4 className="font-display italic text-sm text-white mb-2">Maid of Honor</h4>
              <p className="text-white font-normal italic text-xs">Ms. Stephanie Cortes</p>
              <p className="text-white font-normal italic text-xs">Ms. Mikaela Isabel Reyes</p>
            </div>
          </div>

          {/* Bridesmaids and Groomsmen */}
          <div className="grid grid-cols-2 gap-8">
            <div data-testid="section-groomsmen">
              <h4 className="font-display italic text-sm text-white mb-2">Groomsmen</h4>
              <p className="text-white font-normal italic text-xs">Mr. Robert Gacilo</p>
              <p className="text-white font-normal italic text-xs">Mr. Jonathan Gacilo</p>
            </div>
            <div data-testid="section-bridesmaids">
              <h4 className="font-display italic text-sm text-white mb-2">Bridesmaids</h4>
              <p className="text-white font-normal italic text-xs">Ms. Maria Sophia Lagartos</p>
              <p className="text-white font-normal italic text-xs">Ms. Ariane Pauline Castulo</p>
            </div>
          </div>

          {/* Ring, Coin, and Bible Bearers */}
          <div className="grid grid-cols-3 gap-6">
            <div data-testid="section-ring-bearer">
              <h4 className="font-display italic text-sm text-white mb-2">Ring Bearer</h4>
              <p className="text-white font-normal italic text-xs">Jhaziel Tuayon</p>
            </div>
            <div data-testid="section-coin-bearer">
              <h4 className="font-display italic text-sm text-white mb-2">Coin Bearer</h4>
              <p className="text-white font-normal italic text-xs">Noah Diasanta</p>
            </div>
            <div data-testid="section-bible-bearer">
              <h4 className="font-display italic text-sm text-white mb-2">Bible Bearer</h4>
              <p className="text-white font-normal italic text-xs">Rouge Vermilion Felipe</p>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default EntourageSection;
