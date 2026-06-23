import { motion } from 'framer-motion'
import { curries } from '../data/menuData'

export default function Buffet() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom">
        <h1 className="section-title text-center">Our Buffet</h1>
        <p className="section-subtitle mx-auto text-center mb-12">
          Daily changing selection – all vegetarian/vegan from September 2025.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curries.map((curry) => (
            <div key={curry.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="h-56 bg-deewan-warm">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/buffet-${curry.id}.jpg')` }} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{curry.name}</h3>
                <p className="text-gray-600 mt-2">{curry.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {curry.isVegan && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Vegan</span>}
                  <span className="text-xs bg-deewan-gold/20 text-deewan-spice px-2 py-1 rounded-full">
                    Spice {Array(curry.spiceLevel).fill('🌶').join('')}
                  </span>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  {curry.ingredients.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-deewan-warm rounded-2xl p-8 text-center">
          <h2 className="font-display text-2xl font-bold">Buffet Hours</h2>
          <p className="text-lg mt-2">Monday–Saturday: 11:30 – 22:30</p>
          <p className="text-sm text-gray-600 mt-1">Pay as you wish – you decide the price!</p>
        </div>
      </div>
    </motion.div>
  )
}