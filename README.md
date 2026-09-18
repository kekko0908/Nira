# NIRA - Event Design & Planning

![NIRA Event Design & Planning](public/logo-nira.png)

Sito editoriale e immersivo per NIRA, studio di event design e planning attivo tra Napoli, Campi Flegrei e Campania.

Il progetto traduce il brand in un’esperienza digitale premium: tipografia ad alto impatto, palette essenziale, composizioni asimmetriche, interazioni contestuali e percorsi chiari per eventi, servizi e location.

## Esperienza

- Hero interattiva con quattro tipologie di evento e transizioni accessibili.
- Sistema cromatico ridotto ad avorio, inchiostro e viola NIRA.
- Griglie editoriali dinamiche per eventi e location, senza carousel o controlli superflui.
- Atlante interattivo dei servizi con attività e professionisti visibili a colpo d’occhio.
- Quattro percorsi NIRA presentati come livelli progressivi di supporto.
- Sezioni dedicate a NIRA Baby, fondatori, metodo, location e contatto WhatsApp.
- Pagine dettaglio per categorie di evento e tipologie di location.
- Layout responsive verificato su desktop e mobile.

## Accessibilità e qualità

- Navigazione da tastiera e focus states visibili.
- Gerarchia semantica dei titoli e label esplicite nei form.
- Target interattivi adatti al touch.
- Supporto a `prefers-reduced-motion`.
- Immagini below-the-fold caricate in lazy loading.
- Nessun overflow orizzontale alle risoluzioni verificate.

## Stack

- React 19
- TypeScript
- Vite
- React Router
- Motion
- Lucide Icons
- Newsreader + Albert Sans
- Vitest + ESLint

## Avvio locale

```bash
npm install
npm run dev
```

Il server di sviluppo sarà disponibile all’indirizzo mostrato da Vite.

## Comandi

```bash
npm run build
npm run lint
npm test
```

## Struttura principale

```text
src/
  components/   Componenti condivisi, form e moduli interattivi
  data/         Contenuti strutturati di eventi, servizi e location
  lib/          Utility per il brief WhatsApp
  pages/        Homepage e pagine di percorso
  styles.css    Design system e responsive layout
public/
  images/       Immagini dimostrative ottimizzate
```

## Nota sui contenuti

Le immagini sono rappresentative e i relativi crediti sono disponibili in `public/image-credits.txt`. Contenuti, disponibilità delle location, informative legali e materiali fotografici definitivi devono essere validati prima della pubblicazione.

## Brand

NIRA unisce relazione, direzione creativa e produzione in un unico progetto. Il sito mantiene il claim:

> Il tuo evento, seguito dall’idea alla regia.

