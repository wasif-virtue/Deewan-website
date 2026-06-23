import { motion } from 'framer-motion'

export default function Events() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="section-title text-center">Events – Play as You Wish</h1>
        <div className="prose prose-lg">
          <p>
            <strong>KAMAJAM / N’KOJAM</strong> – Jamsession of the N’KO Drum Group
            (formerly KAMA Drum Group).
          </p>
          <p>
            <strong>When:</strong> Every first Monday of the month, 20:30 – 22:00
            <br />
            <strong>Where:</strong> Wiener Deewan, Liechtensteinstraße 10
          </p>
          <p className="text-sm text-gray-500">
            *Update September 2024: Unfortunately, the jamsessions of the N’KO Drum
            Group no longer take place.
          </p>
          <h2>Past events archive</h2>
          <p>
            From 2006 to 2009, a series of improvised music events called
            „play as you wish“ took place – featuring many local and international artists.
          </p>
          {/* You can list some highlights */}
        </div>
      </div>
    </motion.div>
  )
}