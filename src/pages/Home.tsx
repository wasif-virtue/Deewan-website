import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import BuffetShowcase from '../components/sections/BuffetShowcase'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutPreview />
      <BuffetShowcase />
      {/* Add Testimonials or Newsletter if you wish */}
    </motion.div>
  )
}