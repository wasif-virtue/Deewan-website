import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="section-title text-center">Contact & Location</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="font-display text-2xl font-bold mb-4">Get in touch</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-deewan-gold mt-1" />
                <div>
                  <strong>Address</strong><br />
                  Liechtensteinstraße 10, A-1090 Wien
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-deewan-gold mt-1" />
                <div>
                  <strong>Phone</strong><br />
                  <a href="tel:+4319251185" className="hover:text-deewan-gold">01-9251185</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-deewan-gold mt-1" />
                <div>
                  <strong>Email</strong><br />
                  <a href="mailto:d1@deewan.at" className="hover:text-deewan-gold">d1@deewan.at</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-deewan-gold mt-1" />
                <div>
                  <strong>Opening Hours</strong><br />
                  Mo–Sa: 11–23 Uhr<br />
                  Buffet: 11:30 – 22:30<br />
                  <span className="text-deewan-spice">Sun & holidays: closed</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="font-display text-2xl font-bold mb-4">Accessibility</h2>
            <ul className="space-y-2">
              <li>🔔 <strong>Rolli‑Glocke</strong> at entrance – we help you over the 2 steps</li>
              <li>♿ Toilets are not wheelchair accessible (8 steps to basement)</li>
              <li>📚 Books, games, W‑LAN, newspapers available</li>
              <li>🐕 <strong>No dog, no smoke</strong></li>
            </ul>
            <div className="mt-6 p-4 bg-deewan-warm rounded-xl">
              <p className="text-sm">
                <strong>U‑Bahn:</strong> U2 Schottentor (exit Hohenstaufengasse)
              </p>
              <p className="text-sm mt-1">
                <strong>Payment:</strong> We accept card, Pluxee (ex‑Sodexo), Edenred vouchers
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}