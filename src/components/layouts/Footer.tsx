import { Link } from 'react-router-dom'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-deewan-dark text-gray-800 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact */}
        <div>
          <h3 className="font-display text-xl font-bold text-[#C9A48C] mb-4">Kontakt</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-deewan-gold " />
              Liechtensteinstraße 10, 1090 Wien
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-deewan-gold" />
              <a href="tel:+4319251185" className="hover:text-[#C9A48C]">01-9251185</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-deewan-gold" />
              <a href="mailto:d1@deewan.at" className="hover:text-[#C9A48C]">d1@deewan.at</a>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="font-display text-xl font-bold text-[#C9A48C] mb-4">Öffnungszeiten</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-deewan-gold" />
              Mo–Sa: 11–23 Uhr
            </li>
            <li>Buffet: 11:30 – 22:30</li>
            <li className="text-deewan-gold">Sonntag & Feiertage: geschlossen</li>
            <li className="text-sm mt-2">Sommerferien: 3.8. – 23.8.2026</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-xl font-bold text-[#C9A48C] mb-4">Rechtliches</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/impressum" className="hover:text-white">Impressum</Link>
            </li>
            <li>
              <Link to="/impressum" className="hover:text-white">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-custom mt-8 pt-8 border-t border-white/10 text-center text-sm">
        &copy; {new Date().getFullYear()} Der Wiener Deewan – Pakistani Food • Essen für Alle
      </div>
    </footer>
  )
}