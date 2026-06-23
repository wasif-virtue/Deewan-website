import { motion } from 'framer-motion'
import { newsItems } from '../data/newsData'

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom">
        <h1 className="section-title text-center">News & Updates</h1>
        <div className="max-w-3xl mx-auto space-y-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-md">
              <div className="text-sm text-deewan-gold font-medium">{item.date}</div>
              <h2 className="font-display text-xl font-bold mt-1">{item.title}</h2>
              <p className="text-gray-700 mt-2">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}