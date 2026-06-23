import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { curries } from '../../data/menuData'

export default function BuffetShowcase() {
  // Show only first 3 curries as preview
  const previewCurries = curries.slice(0, 3)

  return (
    <section className="py-20 bg-deewan-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Buffet</h2>
          <p className="section-subtitle mx-auto">
            5 different curries daily – all vegetarian & vegan from September 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCurries.map((curry, index) => (
            <motion.div
              key={curry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-deewan-warm relative">
                {/* Replace with your curry images */}
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/images/buffet-${curry.id}.jpg')` }} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{curry.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{curry.description}</p>
                <div className="flex flex-wrap gap-2">
                  {curry.isVegan && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Vegan</span>
                  )}
                  <span className="text-xs bg-deewan-gold/20 text-deewan-spice px-2 py-1 rounded-full">
                    Spice {Array(curry.spiceLevel).fill('🌶').join('')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/buffet" className="btn-primary inline-block">
            View full buffet
          </Link>
        </div>
      </div>
    </section>
  )
}