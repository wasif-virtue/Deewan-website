import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom flex flex-col">
        <img src="/images/about-1.jpg" alt="" className="h-full" />
        <h1 className="section-title text-center">About Der Wiener Deewan</h1>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p>
            Am 30. April 2005 eröffnete sich der Wiener Deewan, ein Curry‑Lokal mit
            pakistanischem Buffet und dem Grundsatz <strong>all you can eat / pay as you wish</strong>.
            Die Gäste bedienen sich am mehrmals täglich wechselnden Buffet mit
            vegetarisch‑veganem Schwerpunkt und bezahlen danach an der Kassa je nach
            Menge, Zufriedenheit, Liquidität einen Preis, der ihnen richtig erscheint.
          </p>
          <p>
            Was anfangs als befristetes Experiment gedacht war, kann aufgrund der
            überwiegenden Fairness der Gäste seit 2005 beibehalten werden.
            Der Wiener Deewan bewegt sich als Idealversuch unter Realbedingungen im
            grünen Bereich und kann mittlerweile 5 Wochen im Jahr Ferien machen.
          </p>
          <p>
            <strong>Ab September 2025 sind alle 5 Curries vegetarisch (und auch vegan).</strong>
          </p>
          <h2>Das Team</h2>
          <p>
            Betrieben wird der Deewan von Natalie Deewan und Afzaal Deewan, zusammen
            mit einem festen Team von 9 Mitarbeiter*innen.
          </p>
          {/* Add more content from the original site */}
        </div>
      </div>
    </motion.div>
  )
}