import { motion } from 'framer-motion'

export default function PayAsYouWish() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom flex flex-col max-w-4xl mx-auto">
        <img src="/images/payasyou.jpg" alt="" />
        <h1 className="section-title text-center">Pay As You Wish</h1>
        <div className="prose prose-lg">
          <p>
            <strong>All you can eat – pay as you wish!</strong> Our guests decide the
            price for their meal according to their satisfaction and financial means.
          </p>
          <p>
            This principle has been working since 2005, thanks to the fairness of our
            guests. The Wiener Deewan is a living experiment in participatory pricing.
          </p>
          <h2>Studies & Media</h2>
          <ul>
            <li>„How Free Is Your Lunch?“ – Gerhard Riener, University of Essex, 2008</li>
            <li>BBC article „The pay-offs and perils of pay-as-you-wish“ (2014)</li>
            <li>Numerous academic papers and features</li>
          </ul>
          <h2>Similar projects worldwide</h2>
          <ul>
            <li>Lentil as Anything (Melbourne, Australia)</li>
            <li>Seva Café (Ahmedabad, India)</li>
            <li>Youdit & You (Munich, Germany)</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}