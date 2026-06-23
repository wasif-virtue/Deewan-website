export default function Impressum() {
  return (
    <div className="py-20 container-custom max-w-3xl mx-auto">
      <h1 className="section-title">Impressum & Datenschutz</h1>
      <div className="prose prose-lg">
        <p><strong>Der Wiener Deewan</strong></p>
        <p>
          Liechtensteinstraße 10<br />
          A-1090 Wien
        </p>
        <p>
          Tel.: 01-9251185<br />
          E‑Mail: d1@deewan.at
        </p>
        <p>
          <strong>Geschäftsführung:</strong> Natalie Deewan, Afzaal Deewan
        </p>
        <p>
          <strong>Firmenbuch:</strong> FN 123456a<br />
          <strong>UID:</strong> ATU12345678
        </p>
        <h2>Datenschutz</h2>
        <p>
          Personenbezogene Daten werden vertraulich behandelt und nicht an Dritte
          weitergegeben. Nähere Informationen finden Sie auf Anfrage.
        </p>
        <p className="text-sm mt-8">Stand: Juni 2026</p>
      </div>
    </div>
  )
}