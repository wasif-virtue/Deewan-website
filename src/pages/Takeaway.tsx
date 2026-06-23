import { motion } from 'framer-motion'

export default function Takeaway() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom">
        <h1 className="section-title text-center">Takeaway & Catering</h1>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="font-display text-2xl font-bold mb-4">Takeaway Boxes</h2>
            <ul className="space-y-2">
              <li><strong>Small box (500g)</strong> – VEG: €7</li>
              <li><strong>Large box (1000g)</strong> – VEG: €12</li>
              <li><strong>Sweet (small)</strong> – €5</li>
              <li><strong>Salad + yoghurt-mint sauce</strong> – €3.50</li>
              <li><strong>Naan bread</strong> – free</li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">Delivery via Lieferando (2.2 km radius).</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="font-display text-2xl font-bold mb-4">Catering</h2>
            <p>
              Pakistani Curry-Buffet with 3–5 different curries, basmati rice, sauces,
              bread, salads, desserts.
            </p>
            <p className="mt-2"><strong>Prices:</strong> from €13 per person (veg), from €14 (mixed with meat).</p>
            <p className="mt-2">For 30–300 persons. Contact: <a href="mailto:d1@deewan.at" className="text-deewan-gold">d1@deewan.at</a></p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}