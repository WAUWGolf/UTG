# Trädgårdsgänget — claude.md
### Komplett projektinstruktion för webbplats · Version 1.0
### Ursviks Trädgårdsgäng AB · tradgardsganget.se

> **Hur du använder det här dokumentet**
> Ladda upp denna fil som projektinstruktion i ett Claude Project. Ge sedan din instruktion — "bygg startsidan", "uppdatera tjänstesidan", etc. Claude har då hela designsystemet, alla tokens, all copy-vägledning och teknisk spec som kontext.

---

## DEL 1 — VERKSAMHET & IDENTITET

### Om företaget
Ursviks Trädgårdsgäng AB erbjuder professionella trädgårdstjänster i Stockholms län. Verksamheten riktar sig till privatpersoner, bostadsrättsföreningar och företag. Bolaget har F-skattsedel och erbjuder RUT-avdrag för godkända tjänster.

### Juridisk identitet
```
Bolagsnamn:      Ursviks Trädgårdsgäng AB
Org.nr:          559431-2737
Postort:         174 46 Sundbyberg
Län:             Stockholms län
E-post:          info@tradgardsganget.se
Telefon:         076-405 13 70
Webb:            https://tradgardsganget.se
Facebook:        https://www.facebook.com/Ursviks-Tradgards-Gang-112878280893630/
Instagram:       https://www.instagram.com/ursvikstradgardsgang/
```

### Teamet
- **Niklas Andersson** — Grundare
- **Alfred** — Medarbetare, delägare i Good To Go Golf
- **Patrik Wicklén** — Medarbetare
- **Simson Pollak** — Medarbetare (anslöt 2025)

### Tjänster (11 st)
```
1.  Gräsklippning
2.  Trädbeskärning
3.  Häckklippning
4.  Ogräsrensning
5.  Gårdsstädning
6.  Röjning
7.  Parkskötsel
8.  Gödsling gräsmatta
9.  Krattning
10. Trädgårdspassning
11. Övriga tjänster
```

### Selling points
- F-skatt — seriöst bolag med alla skatter och avgifter i ordning
- RUT-avdrag — upp till 50 % av arbetskostnaden (för godkända tjänster)
- Faktura med 30 dagars betalning
- Framkörningsavgift 35 kr/mil
- Inne på femte säsongen med återkommande nöjda kunder
- Verksamma i hela Stockholms län

### Prismodell
Inga priser visas på hemsidan. Alla priser lämnas via offert efter förfrågan. CTA:er ska alltid leda till kontaktformulär eller telefon — aldrig till en prislista.

---

## DEL 2 — DESIGNSYSTEM

### Designfilosofi
Ljus, naturnära, modern. Sajten ska kännas som en frisk trädgård — öppen, grön, tillgänglig. Designen är helt frikopplad från GTG/WAUW-ekosystemet och har sitt eget visuella språk. Professionellt men inte stelt, lokalt men inte amatörmässigt.

### Färgpalett
```css
:root {
  /* Bakgrunder */
  --bg-primary:       #FAFAF5;     /* Varm off-white, body-bakgrund */
  --bg-secondary:     #F2F2EC;     /* Sektionsbakgrund, kort */
  --bg-accent:        #E8F0E4;     /* Grön tint, highlight-sektioner */
  --bg-dark:          #1A2E1A;     /* Footer, mörkare sektioner */

  /* Gröna accenter — primärfärg */
  --green-primary:    #4A7C59;     /* Primär grön — knappar, CTA */
  --green-dark:       #2C5E3F;     /* Hover, aktiv state */
  --green-light:      #6B9E7A;     /* Sekundär accent */
  --green-dim:        rgba(74, 124, 89, 0.08);  /* Bakgrundstint */
  --green-line:       rgba(74, 124, 89, 0.20);  /* Borders, avdelare */

  /* Text */
  --text-primary:     #1A2E1A;     /* Rubriker, huvudtext */
  --text-body:        #3D4F3D;     /* Brödtext */
  --text-muted:       rgba(26, 46, 26, 0.55);   /* Sekundär text */
  --text-dim:         rgba(26, 46, 26, 0.35);    /* Placeholder, hint */
  --text-on-dark:     #F2F2EC;     /* Text på mörk bakgrund */
  --text-on-dark-muted: rgba(242, 242, 236, 0.6);

  /* Stödfärger */
  --earth:            #8B7355;     /* Jordig accent — sparsmakat */
  --earth-light:      #C4B49A;     /* Ljus jordton */
}
```

### Typografi
```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">
```

| Roll | Font | Vikt | Storlek |
|---|---|---|---|
| H1 / Hero | DM Serif Display | 400 | clamp(36px, 6vw, 64px) |
| H2 / Sektionsrubrik | DM Serif Display | 400 | clamp(28px, 4vw, 44px) |
| H3 / Kortrubrik | DM Serif Display | 400 | clamp(20px, 2.5vw, 26px) |
| Italic accent | DM Serif Display | 400 italic | Samma som rubriknivå |
| Body stor | DM Sans | 400 | 17px, line-height 1.75 |
| Body standard | DM Sans | 400 | 15px, line-height 1.7 |
| Labels / UI | DM Sans | 500–600 | 11–13px |
| Knappar | DM Sans | 600 | 13px |
| Nav-länkar | DM Sans | 500 | 13px |

```css
h1, h2, h3 {
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  color: var(--text-primary);
  line-height: 1.15;
}
h1 { font-size: clamp(2.2rem, 6vw, 4rem); }
h2 { font-size: clamp(1.75rem, 4vw, 2.75rem); }
h3 { font-size: clamp(1.25rem, 2.5vw, 1.6rem); }

body {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-body);
  background: var(--bg-primary);
  -webkit-font-smoothing: antialiased;
}
```

### Italic-accentregeln
DM Serif Display italic används för ETT accentord per rubrik — aldrig hela meningen.
```html
<!-- Rätt -->
<h2>Din trädgård, <em>utan bekymmer</em></h2>

<!-- Fel -->
<h2><em>Din trädgård, utan bekymmer</em></h2>
```

### Visuella effekter

**Subtil textur (valfritt — ersätter filmkorn)**
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.015;
  pointer-events: none;
  z-index: 0;
}
```

**Fade-up animationer**
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.fade { opacity: 0; }
.fade.visible { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.fade.visible.d1 { animation-delay: 0s; }
.fade.visible.d2 { animation-delay: 0.1s; }
.fade.visible.d3 { animation-delay: 0.15s; }
.fade.visible.d4 { animation-delay: 0.2s; }
.fade.visible.d5 { animation-delay: 0.25s; }
```

```javascript
// Intersection Observer — klistra in före </body>
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.fade').forEach(el => observer.observe(el));
```

---

## DEL 3 — KOMPONENTER

### Section label
```css
.section-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--green-primary);
  margin-bottom: 20px;
}
```

### CTA-knappar
```css
/* Primär */
.btn-primary {
  background: var(--green-primary);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: var(--green-dark); transform: translateY(-1px); }

/* Sekundär (outline) */
.btn-secondary {
  background: transparent;
  color: var(--green-primary);
  border: 1.5px solid var(--green-line);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 13px 28px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: border-color 0.2s, color 0.2s;
}
.btn-secondary:hover { border-color: var(--green-primary); color: var(--green-dark); }

/* Ghost (textlänk) */
.btn-ghost {
  color: var(--green-primary);
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 1px solid var(--green-line);
  padding-bottom: 2px;
  transition: color 0.2s, border-color 0.2s;
}
.btn-ghost:hover { color: var(--green-dark); border-color: var(--green-primary); }
```

### Kort
```css
.card {
  background: #fff;
  border: 1px solid var(--green-line);
  border-radius: 12px;
  padding: 32px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.card:hover {
  border-color: var(--green-primary);
  box-shadow: 0 4px 24px rgba(74, 124, 89, 0.08);
}
```

### Navigation (kanonisk — identisk på alla sidor)
```
[Trädgårdsgänget]   Tjänster   Om oss   FAQ   Kontakt   [Ring oss →]
```
```css
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 68px;
  background: rgba(250, 250, 245, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--green-line);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 clamp(1.5rem, 4vw, 3rem);
}
```

**Logotyp:**
```css
.nav-logo {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: 0.01em;
}
```
Logotypen är text: "Trädgårdsgänget" i DM Serif Display. Ingen bildlogotyp — textbaserad.

### Footer (kanonisk — identisk på alla sidor)
```
Trädgårdsgänget
Ursviks Trädgårdsgäng AB · Org.nr 559431-2737
Stockholms län · 174 46 Sundbyberg

Kontakt: info@tradgardsganget.se · 076-405 13 70
Sociala: Facebook · Instagram

Navigering: Startsida · Tjänster · Om oss · FAQ · Kontakt
Juridik: Integritetspolicy · Cookiepolicy

© 2026 Ursviks Trädgårdsgäng AB
```
- Bakgrund: `var(--bg-dark)` (#1A2E1A)
- Text: `var(--text-on-dark)` och `var(--text-on-dark-muted)`
- Länkar: `var(--green-light)` (#6B9E7A)

### Bildbehandling
```css
.img-wrap {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}
.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```
Bilder ska INTE ha mörkt filter (till skillnad från GTG/WAUW). Ljusa, naturliga bilder som visar faktiskt utfört trädgårdsarbete.

### Bild-placeholders
Använd denna struktur tills riktiga bilder finns:
```html
<div class="img-placeholder" style="
  background: var(--bg-accent);
  border-radius: 12px;
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 13px;
">
  [Bild: Gräsklippning i villaträdgård]
</div>
```

---

## DEL 4 — SIDSTRUKTUR

### Sidkarta
```
/ (startsida)          → index.html
/tjanster              → tjanster.html
/om-oss                → om-oss.html
/faq                   → faq.html
/kontakt               → kontakt.html
/integritetspolicy     → integritetspolicy.html
/cookiepolicy          → cookiepolicy.html
```

### Startsida — innehåll
```
1. HERO
   - Section label: "Trädgårdstjänster i Stockholms län"
   - Rubrik: "Vi tar hand om din trädgård — så att du kan njuta av den"
   - Body: Kort intro om att vi erbjuder professionella trädgårdstjänster med RUT-avdrag
   - Primär CTA: "Kontakta oss" → /kontakt
   - Sekundär CTA: "Se våra tjänster" → /tjanster

2. TJÄNSTEÖVERSIKT (3–4 kort)
   - Visa de mest populära tjänsterna med bild-placeholder och kort beskrivning
   - Länk: "Visa alla tjänster →" → /tjanster

3. VARFÖR TRÄDGÅRDSGÄNGET (USP-sektion)
   - F-skatt & RUT-avdrag
   - Femte säsongen — erfarenhet
   - Hela Stockholms län
   - Personlig service — alltid samma kontaktperson

4. SOCIAL PROOF
   - Placeholder-citat från nöjda kunder (fylls i senare)

5. KONTAKT-CTA
   - Kort sektion med "Berätta om din trädgård" + kontaktformulär eller länk till /kontakt

6. FOOTER
```

### Tjänster-sida — innehåll
```
1. HERO
   - Rubrik: "Allt din trädgård behöver"
   - Body: "Oavsett om det handlar om gräsklippning, beskärning eller en komplett gårdsstädning — vi finns här."

2. TJÄNSTEGRID
   - Alla 11 tjänster som kort med bild-placeholder, kort beskrivning och CTA "Boka denna tjänst" → /kontakt

3. KONTAKT-CTA
   - "Osäker på vad du behöver? Ring oss — vi hjälper dig."
```

### Om oss-sida — innehåll
```
1. HERO
   - Rubrik: "Vi startade med en gräsklippare och en idé"

2. BERÄTTELSEN
   - Hur Niklas startade verksamheten, passion för trädgård
   - Nu inne på femte säsongen med växande kundkrets

3. TEAMET
   - Kort med foto-placeholder + bio för Niklas, Alfred, Patrik, Simson

4. KONTAKT-CTA
```

### FAQ-sida — innehåll
```
Fråga: Har ni F-skatt?
Svar: Ja, vi har F-skattsedel och erbjuder RUT-avdrag för godkända tjänster.

Fråga: Ges RUT-avdrag för alla era tjänster?
Svar: Vi erbjuder RUT-avdrag för de tjänster som är godkända på Skatteverkets hemsida. Du kan få upp till 50 % av arbetskostnaden avdraget.

Fråga: Tillkommer andra kostnader?
Svar: Vi informerar alltid om alla kostnader i förväg. Framkörningsavgift ligger på 35 kr/mil.

Fråga: Vilka betalningsalternativ finns?
Svar: Vi erbjuder betalning via faktura med 30 dagars betalning.

Fråga: Var är ni verksamma?
Svar: Vi arbetar i hela Stockholms län.

Implementera med <details>/<summary> för accordion ELLER som öppen lista.
Lägg till FAQPage-schema (JSON-LD).
```

### Kontakt-sida — innehåll
```
1. HERO
   - Rubrik: "Berätta om din trädgård"
   - Body: "Fyll i formuläret eller ring oss direkt. Vi återkommer med en offert."

2. KONTAKTFORMULÄR
   Fält: Förnamn, Efternamn, Telefon, E-post, Välj tjänst (dropdown), Gatuadress, Postnummer, Ort, Meddelande
   Knapp: "Skicka förfrågan"

3. KONTAKTINFO
   - Telefon: 076-405 13 70
   - E-post: info@tradgardsganget.se
   - Stockholms län, 174 46 Sundbyberg
```

---

## DEL 5 — AI-CHATBOT

### Översikt
Sajten ska ha en AI-driven chatbot som kan svara på kundfrågor om tjänster, RUT-avdrag, bokningsprocess, mm. Samma arkitektur som GTG Concierge.

### Teknisk arkitektur
```
[Klient: chatbot-widget i HTML/JS]
        ↓ POST med messages + pageContext
[Netlify Function: /.netlify/functions/tg-ai-stream]
        ↓ Proxy till Anthropic API med streaming
[Claude API: claude-sonnet-4-20250514]
        ↓ SSE-stream tillbaka
[Klient: visar svar i realtid]
```

### Netlify Function
Skapa filen `netlify/functions/tg-ai-stream.js`. Funktionen:
1. Tar emot `{ messages, pageContext }` via POST
2. Injicerar systempromten (se nedan) med kunskapsdatabasen
3. Anropar Anthropic API med streaming (`stream: true`)
4. Returnerar SSE-stream till klienten

API-nyckeln lagras som environment variable: `ANTHROPIC_API_KEY` i Netlify dashboard.

### Kunskapsdatabas — hur du matar in den
Systempromten till chatboten innehåller ALL information den behöver. Du uppdaterar den genom att redigera systempromten i Netlify Function-filen. Strukturen:

```javascript
const SYSTEM_PROMPT = `
Du är Trädgårdsgängets digitala assistent på tradgardsganget.se.
Du hjälper besökare med frågor om våra trädgårdstjänster.
Svara alltid på svenska. Var vänlig, professionell och hjälpsam.
Håll svaren korta och tydliga — max 2–3 meningar om frågan är enkel.

## VERKSAMHETSFAKTA
- Företag: Ursviks Trädgårdsgäng AB
- Org.nr: 559431-2737
- Telefon: 076-405 13 70
- E-post: info@tradgardsganget.se
- Verksamma i: Hela Stockholms län
- Säsong: Vi är inne på vår femte säsong

## TJÄNSTER
Vi erbjuder: gräsklippning, trädbeskärning, häckklippning, ogräsrensning, gårdsstädning, röjning, parkskötsel, gödsling av gräsmatta, krattning, trädgårdspassning och övriga trädgårdstjänster.

## PRISER
Vi lämnar ALDRIG priser i chatten. Svara alltid:
"Priserna varierar beroende på trädgårdens storlek och arbetsinsats. Kontakta oss via formuläret eller ring 076-405 13 70 så ger vi dig en kostnadsfri offert."

## RUT-AVDRAG
- Vi har F-skatt och erbjuder RUT-avdrag
- Upp till 50 % av arbetskostnaden kan dras av
- Gäller för tjänster godkända av Skatteverket
- Länk: https://skatteverket.se/foretag/skatterochavdrag/rotochrut

## BETALNING
- Faktura med 30 dagars betalning
- Framkörningsavgift: 35 kr/mil

## BOKNING
All bokning sker via:
1. Kontaktformuläret på /kontakt
2. Telefon: 076-405 13 70
3. E-post: info@tradgardsganget.se

## REGLER
- Svara ALDRIG med priser eller prisuppskattningar
- Hänvisa alltid till kontakt för offert
- Om du inte vet svaret, säg det ärligt och hänvisa till telefon
- Nämn aldrig konkurrenter
- Använd du-tilltal
`;
```

**Så uppdaterar du kunskapsdatabasen:**
1. Öppna `netlify/functions/tg-ai-stream.js`
2. Redigera `SYSTEM_PROMPT`-strängen
3. Committa och pusha till GitHub → Netlify deployas automatiskt
4. Chatboten har omedelbart den nya informationen

Du kan lägga till säsongsinfo, nya tjänster, kampanjer etc. genom att redigera denna sträng.

### Chatbot UI-komponent
Chatboten implementeras som en flytande widget nere till höger (inte helskärm som GTG Concierge). Komponenter:

```
[Flytande knapp: 💬 "Fråga oss"] → öppnar chatfönster
[Chatfönster: header + meddelandearea + input]
[Quick prompts: "Vilka tjänster erbjuder ni?", "Har ni RUT-avdrag?", "Hur bokar jag?"]
```

Designa chatboten i samma ljusa palette som sajten:
- Chatfönster: vit bakgrund, grön header
- Assistentens avatar: grön cirkel med "T" (för Trädgårdsgänget)
- Användarens meddelanden: grön bakgrund
- Assistentens meddelanden: ljusgrå bakgrund

---

## DEL 6 — TEKNISKA REGLER

### Plattform
- **Hosting:** Netlify
- **Ingen ramverk:** Ren HTML, CSS och vanilla JS
- **Inga externa CSS-ramverk:** Aldrig Bootstrap, Tailwind, etc.
- **Google Fonts:** DM Serif Display + DM Sans (alltid)
- **Leverans:** Komplett HTML per sida — all CSS och JS inline i en fil

### Mappstruktur (Netlify)
```
/
├── index.html
├── tjanster.html
├── om-oss.html
├── faq.html
├── kontakt.html
├── integritetspolicy.html
├── cookiepolicy.html
├── /bilder/
│   ├── hero.jpg
│   ├── tjanster/
│   │   ├── grasklippning.jpg
│   │   ├── tradbeskaring.jpg
│   │   └── ...
│   └── team/
│       ├── niklas.jpg
│       ├── alfred.jpg
│       ├── patrik.jpg
│       └── simson.jpg
├── /netlify/
│   └── functions/
│       └── tg-ai-stream.js
└── tg-consent.js
```

### Responsivitet
```css
/* Breakpoints */
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobil landscape */ }
@media (max-width: 480px)  { /* Mobil portrait */ }
```
- `overflow-x: hidden` på html + body
- Touch-targets minst 44px
- Hamburger-meny på mobil (under 820px)
- Grid kollapsar till en kolumn på mobil

### Grid-system
```css
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
  }
}
```

### Sektionsstruktur
```css
section {
  position: relative;
  z-index: 1;
  padding: 80px 48px;
  max-width: 1100px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  section { padding: 60px 24px; }
}
```

---

## DEL 7 — COPY-REGLER

### Ton: Vänlig professionell
- **Varm och personlig** — inte corporate, inte kompis
- **Du-tilltal** alltid
- **Tydlig och konkret** — beskriv vad vi gör, inte vad vi tycker om oss själva
- **Lokal** — vi är från Sundbyberg, vi jobbar i Stockholms län
- **Aldrig säljande** — tonen andas "vi hjälper dig" inte "köp nu"

### Skrivregler
```
✅  "i stället" (två ord)
✅  "50 %" (mellanslag före %)
✅  du-tilltal
✅  Korta meningar, max 2–3 per stycke
✅  Visa (bilder) i stället för att berätta (adjektiv)

❌  Inga superlativ: "bäst", "unika", "Stockholms finaste"
❌  Aldrig "billigt", "prisvärt", "budget"
❌  Aldrig "klicka här" eller "läs mer" som CTA-text
❌  Inga utropstecken i rubriker
❌  Aldrig tredje person ("Trädgårdsgänget erbjuder...") — använd "vi"
```

### Micro-copy / knappar
```
✅  "Kontakta oss"
✅  "Boka trädgårdstjänst"
✅  "Be om offert"
✅  "Ring oss"
✅  "Se alla tjänster →"
❌  "Klicka här"
❌  "Läs mer"
❌  "Submit"
❌  "Kom igång idag!"
```

---

## DEL 8 — SEO & JURIDIK

### Meta-taggar (per sida)
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[Sidnamn] — Trädgårdsgänget — Trädgårdstjänster Stockholms län</title>
<meta name="description" content="[Unik beskrivning, 120–155 tecken]">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#FAFAF5">
<meta property="og:title" content="[Sidnamn] — Trädgårdsgänget">
<meta property="og:description" content="[Beskrivning]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tradgardsganget.se/[sida]">
<meta property="og:site_name" content="Trädgårdsgänget">
```

### Schema markup (startsidan)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Trädgårdsgänget",
  "legalName": "Ursviks Trädgårdsgäng AB",
  "description": "Professionella trädgårdstjänster i Stockholms län med RUT-avdrag",
  "url": "https://tradgardsganget.se",
  "telephone": "+46764051370",
  "email": "info@tradgardsganget.se",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sundbyberg",
    "postalCode": "174 46",
    "addressRegion": "Stockholms län",
    "addressCountry": "SE"
  },
  "areaServed": {
    "@type": "State",
    "name": "Stockholms län"
  },
  "priceRange": "$$",
  "paymentAccepted": "Faktura",
  "sameAs": [
    "https://www.facebook.com/Ursviks-Tradgards-Gang-112878280893630/",
    "https://www.instagram.com/ursvikstradgardsgang/"
  ]
}
</script>
```

### GDPR / Consent
Använd en consent-banner baserad på samma mönster som `gtg-consent.js`, men anpassad:
- Consent-nyckel: `tg_consent`
- Anpassad till ljus palette (ljus bakgrund, grön CTA)
- Länkar till /integritetspolicy och /cookiepolicy
- Google Consent Mode v2

### Prestanda
- Google Fonts med `display=swap`
- Bilder: lazy-load (`loading="lazy"`) utom hero
- Inga bilder > 200KB utan lazy loading
- Alla bilder har `alt`-text på svenska

---

## DEL 9 — INSTRUKTIONER TILL CLAUDE

När du bygger sidor för Trädgårdsgänget, följ alltid:

1. **Ljust tema** — `var(--bg-primary)` som bakgrund, ALDRIG mörk bakgrund (förutom footer)
2. **DM Serif Display** för rubriker, **DM Sans** för allt annat — aldrig andra fonter
3. **Grön primäraccent** (`#4A7C59`) — knappar, labels, hover-states
4. **Subtil textur-overlay** (valfritt, lägre opacity än GTG/WAUW)
5. **Fade-up animationer** med IntersectionObserver på alla sektioner
6. **Inga priser** — alla CTA:er leder till kontakt
7. **Footer:** alltid Ursviks Trädgårdsgäng AB + org.nr 559431-2737
8. **Leverera komplett HTML** i en fil — all CSS och JS inline
9. **Bild-placeholders** med beskrivande text tills riktiga bilder finns
10. **Du-tilltal** och vänlig professionell ton i all copy
11. **RUT-avdrag** ska nämnas tidigt och tydligt — det är ett starkt selling point
12. **Responsivt** — alla sidor ska fungera på mobil, tablet och desktop
13. **Schema markup** på startsidan (LocalBusiness) och FAQ-sidan (FAQPage)
14. **Chatbot-widget** — inkludera på alla sidor, flytande nere till höger
15. **Svenskt tecken** — säkerställ korrekt rendering av å, ä, ö (charset UTF-8)

---

## DEL 10 — PROMPT-KIT

### Systemprompt (klistra in i början av varje session)
```
Du hjälper mig bygga och optimera tradgardsganget.se — Trädgårdsgängets webbplats.
Trädgårdsgänget erbjuder professionella trädgårdstjänster i Stockholms län.
Sajten hostas på Netlify som ren HTML/CSS/JS.

Alla sidor ska följa designsystemet i denna claude.md.
Leverera alltid komplett, produktionsklar HTML i en enda fil.
Använd aldrig externa CSS-ramverk.
Använd alltid Google Fonts: DM Serif Display + DM Sans.
Ljust tema med grön accent. Aldrig mörk bakgrund (utom footer).
Inga priser på sajten — all prissättning via offert.
```

### Prompt: Bygg startsidan
```
Bygg en komplett startsida (index.html) för Trädgårdsgänget baserat på claude.md.

Inkludera:
1. Navigation med alla sidor + "Ring oss"-CTA
2. Hero med rubrik, intro, och dubbla CTA:er (Kontakt + Tjänster)
3. Tjänsteöversikt — 3 populära tjänster som kort med bild-placeholder
4. USP-sektion: F-skatt, RUT, femte säsongen, hela Stockholms län
5. Social proof (placeholder-citat)
6. Kontakt-CTA-sektion
7. Footer med full bolagsinfo
8. Fade-up animationer, responsivt, Schema markup (LocalBusiness)
```

### Prompt: Bygg tjänstesidan
```
Bygg en komplett tjänstesida (tjanster.html) baserat på claude.md.

Inkludera alla 11 tjänster som kort med:
- Bild-placeholder
- Rubrik
- Kort beskrivning (2–3 meningar)
- CTA: "Be om offert" → /kontakt

Avsluta med en kontakt-CTA-sektion.
```

### Prompt: Bygg kontaktsidan
```
Bygg en komplett kontaktsida (kontakt.html) baserat på claude.md.

Inkludera:
- Hero med rubrik "Berätta om din trädgård"
- Kontaktformulär (förnamn, efternamn, telefon, e-post, tjänst-dropdown, gatuadress, postnummer, ort, meddelande)
- Kontaktinfo (telefon, e-post, område)
- Sociala medier-länkar
```

### Prompt: Bygg chatbot-widgeten
```
Bygg chatbot-widgeten för Trädgårdsgänget baserat på claude.md (DEL 5).

Skapa:
1. Flytande chatknapp (nere till höger)
2. Chatfönster med header, meddelandearea och input
3. Quick prompts: "Vilka tjänster erbjuder ni?", "Har ni RUT-avdrag?", "Hur bokar jag?"
4. Streaming-stöd via SSE från /.netlify/functions/tg-ai-stream
5. Markdown-formatering av svar (bold, länkar, radbrytningar)

Leverera som en fristående komponent (HTML + CSS + JS) som kan klistras in före </body> på vilken sida som helst.
```

### Prompt: Bygg Netlify Function
```
Bygg Netlify Function (netlify/functions/tg-ai-stream.js) baserat på claude.md (DEL 5).

Funktionen ska:
1. Ta emot POST med { messages, pageContext }
2. Injicera SYSTEM_PROMPT med all verksamhetsdata
3. Anropa Anthropic API (claude-sonnet-4-20250514) med streaming
4. Returnera SSE-stream till klienten
5. Hantera CORS och felhantering

API-nyckel via process.env.ANTHROPIC_API_KEY.
```

---

## VERSIONERING

- v1.0 — April 2026 (initial version)
- Uppdateras när: designtokens ändras, nya tjänster läggs till, prismodell ändras, eller chatbot-kunskap behöver utökas
