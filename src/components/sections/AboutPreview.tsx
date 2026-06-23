import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import aboutImg from '../../../public/images/about-2.jpg';

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Der Wiener Deewan – in half a minute</h2>
            <p className="text-lg text-gray-700 mb-6">
              Curry Restaurant with <strong>all‑you‑can‑eat‑pay‑as‑you‑wish</strong> buffet,
              featuring vegetarian Pakistani food: 5 veg & vegan curries + dhal, basmati rice,
              salad, naan, sweets… Guests choose the price for their meal according to their
              satisfaction – and keep the balance since 2005!
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Read more
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 bg-deewan-warm rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Replace with your image */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${aboutImg})` }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}