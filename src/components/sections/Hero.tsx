import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import heroBg from '../../../public/images/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Replace with your own hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-deewan-dark/60" />
      </div>

      <div className="relative container-custom backdrop-blur-[5px]  md:backdrop-blur-[10px] bg  p-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 bg-white border border-deewan-gold/50 text-yellow-500 rounded-full text-sm uppercase tracking-wider mb-4">
            Since 2005
          </span>
          <h1 className="text-5xl md:text-7xl  lg:text-8xl font-display font-bold mb-6">
            Der Wiener Deewan
          </h1>
          <p className="text-xl md:text-2xl text-[#C9A84C] max-w-3xl mx-auto mb-8">
            Pakistani Food • Essen für Alle • All You Can Eat • Pay As You Wish
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-[#C9A84C] backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-deewan-gold" />
              <span className="text-sm">Mo–Sa: 11–23h</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4 text-deewan-gold" />
              <span className="text-sm">Liechtensteinstraße 10, 1090 Wien</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/buffet" className="btn-primary inline-flex items-center gap-2">
              Explore Buffet
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex hover:text-[#C9A84C] items-center gap-2 px-8 py-3 border-2 border-white rounded-full font-medium hover:bg-white hover:text-deewan-dark transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}