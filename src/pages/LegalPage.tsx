import { PageMeta } from '../components/Shared'

export default function LegalPage({ type }: { type: 'privacy' | 'cookie' }) {
  const privacy = type === 'privacy'
  return (
    <section className="legal-page section-pad">
      <PageMeta title={privacy ? 'Privacy' : 'Cookie'} description={`Informativa ${privacy ? 'privacy' : 'cookie'} della demo NIRA.`} />
      <div className="shell legal-content">
        <p className="eyebrow">Informativa demo</p>
        <h1>{privacy ? 'Privacy' : 'Cookie'}</h1>
        {privacy ? (
          <>
            <p>Questa versione dimostrativa non invia né salva dati su un server. Il modulo prepara localmente un testo e apre WhatsApp solo dopo la conferma dell’utente.</p>
            <h2>Prima della pubblicazione</h2>
            <p>L’informativa definitiva dovrà indicare titolare del trattamento, contatti, finalità, basi giuridiche, tempi di conservazione e fornitori effettivamente usati dal sito.</p>
          </>
        ) : (
          <>
            <p>La demo non installa cookie analitici, pubblicitari o di profilazione. Non sono presenti sistemi di analytics o contenuti incorporati da piattaforme esterne.</p>
            <h2>Prima della pubblicazione</h2>
            <p>La policy dovrà essere aggiornata se verranno aggiunti analytics, mappe, video incorporati, strumenti pubblicitari o altri servizi che usano cookie.</p>
          </>
        )}
        <p className="legal-warning">Testo provvisorio. Richiede verifica legale prima dell’uso pubblico.</p>
      </div>
    </section>
  )
}
