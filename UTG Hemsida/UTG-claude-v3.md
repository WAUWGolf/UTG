# Trädgårdsgänget — claude.md
### Komplett projektinstruktion för webbplats · Version 3.0
### Ursviks Trädgårdsgäng AB · tradgardsganget.se

> **Hur du använder det här dokumentet**
> Ladda upp denna fil som projektinstruktion i ett Claude Project. Ge sedan din instruktion — "bygg startsidan", "uppdatera tjänstesidan", etc. Claude har då hela designsystemet, alla tokens, all copy-vägledning och teknisk spec som kontext.
>
> **Chatbotens kunskapsbas** finns i separat fil: `tg-knowledge.md`. Den innehåller all trädgårdskunskap, säsongskalender, pomologisk beskärning, skötselråd och tjänstelogik. Kunskapsbasen bäddas in som systemprompt i Netlify Function (`tg-ai-stream.js`).

---

## DEL 1 — VERKSAMHET & IDENTITET

### Om företaget
Ursviks Trädgårdsgäng AB erbjuder professionella trädgårdstjänster i Stockholms län. Verksamheten riktar sig till privatpersoner, bostadsrättsföreningar och företag. Bolaget har F-skattsedel och erbjuder RUT-avdrag för godkända tjänster.

### Juridisk identitet
```
Bolagsnamn:      Ursviks Trädgårdsgäng AB
Org.nr:          559431-2737
Adress:          Länsmansbacken 3, 174 46 Sundbyberg
Län:             Stockholms län
E-post:          info@tradgardsganget.se
Telefon:         076-405 13 70
Webb:            https://tradgardsganget.se
Facebook:        https://www.facebook.com/Ursviks-Tradgards-Gang-112878280893630/
Instagram:       https://www.instagram.com/ursvikstradgardsgang/
Logotyp-URL:     https://img.mailinblue.com/10836458/images/content_library/original/69ce3ac3902b30a66c70a240.png
```

### Teamet
- **Niklas Andersson** — Grundare
- **Alfred** — Medarbetare, delägare i Good To Go Golf
- **Patrik Wicklén** — Medarbetare
- **Simson Pollak** — Medarbetare (anslöt 2025)

### Tjänster

**Beskärning:**
- Underhållsbeskärning av fruktträd
- Restaureringsbeskärning av förvuxna träd
- Formklippning av prydnadsträd
- Häckklippning
- Buskbeskärning
- Rosenbeskärning

**Trädgårdsskötsel:**
- Gräsklippning
- Ogräsrensning
- Gödsling av gräsmatta
- Krattning / lövhantering
- Vårstädning
- Höststädning
- Trädgårdspassning

**Anläggning & övrigt:**
- Rabattanläggning
- Gräsmatteanläggning
- Röjning (sly, högt gräs)
- Gårdsstädning
- Parkskötsel (BRF:er)
- Bortforsling av trädgårdsavfall
- Stubbfräsning

### Selling points
- F-skatt — seriöst bolag med alla skatter och avgifter i ordning
- RUT-avdrag — upp till 50 % av arbetskostnaden, dras direkt på fakturan
- Faktura med 30 dagars betalning
- Framkörningsavgift 35 kr/mil
- Inne på femte säsongen med återkommande nöjda kunder
- Verksamma i hela Stockholms län
- Besiktning och arbetsbeskrivning med bilder innan arbete påbörjas

### Prismodell
Inga priser visas på hemsidan. Alla priser lämnas via offert efter förfrågan. CTA:er ska alltid leda till kontaktformulär eller telefon — aldrig till en prislista.

### Löpande skötsel — merförsäljningsprodukt
```
NYTT FÖR 2026 — Löpande trädgårdsskötsel

Slipp tänka på trädgården — vi har koll

✔ 4–6 besök per år, anpassat efter säsong
✔ Beskärning, vårstäd, höstfix — allt ingår
✔ Digitalt trädkort med foto & skötselplan
✔ 15 % rabatt på allt tilläggsarbete
✔ Fri rådgivning via mejl & telefon
✔ Prioriterad bokning, ingen väntelista

FRÅN 750 kr/mån efter RUT-avdrag
(ordinarie 1 500 kr/mån inkl. moms)
```
Denna sektion ska finnas som en visuellt framträdande ruta på startsidan och tjänstesidan.

---

## DEL 2 — DESIGNSYSTEM

### Designfilosofi
Ljus, naturnära, professionell. Samma visuella språk som företagets offerter — skogsgrön som primärfärg, guld som varm accent. Sajten ska kännas trovärdig, jordnära och kvalitativ.

### Färgpalett
```css
:root {
  /* Bakgrunder */
  --bg-primary:       #FAFAF5;
  --bg-secondary:     #F2F2EC;
  --bg-accent:        #EDF3EA;
  --bg-dark:          #1A2A10;
  --bg-white:         #FFFFFF;

  /* Skogsgrön — primärfärg (från offertdesign) */
  --green-primary:    #2D5016;
  --green-hover:      #3A6B1E;
  --green-light:      #4A8028;
  --green-dim:        rgba(45, 80, 22, 0.06);
  --green-line:       rgba(45, 80, 22, 0.18);

  /* Guld — sekundär accent (från offertdesign) */
  --gold:             #8B7533;
  --gold-light:       #A89245;
  --gold-dim:         rgba(139, 117, 51, 0.08);
  --gold-line:        rgba(139, 117, 51, 0.20);

  /* Text */
  --text-primary:     #1A1A1A;
  --text-body:        #3D3D3D;
  --text-muted:       rgba(26, 26, 26, 0.55);
  --text-dim:         rgba(26, 26, 26, 0.35);
  --text-on-dark:     #F2F2EC;
  --text-on-dark-muted: rgba(242, 242, 236, 0.6);
  --text-on-green:    #FFFFFF;
}
```

### Typografi
```html
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
DM Serif Display italic för ETT accentord per rubrik — aldrig hela meningen.
```html
<h2>Din trädgård, <em>utan bekymmer</em></h2>
```

### Visuella effekter

**Subtil textur**
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.012;
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

### Grön avdelare
```css
.green-rule {
  width: 48px;
  height: 2px;
  background: var(--green-primary);
  margin: 20px 0;
}
```

### CTA-knappar
```css
.btn-primary {
  background: var(--green-primary);
  color: var(--text-on-green);
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
.btn-primary:hover { background: var(--green-hover); transform: translateY(-1px); }

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
.btn-secondary:hover { border-color: var(--green-primary); color: var(--green-hover); }

.btn-gold {
  background: var(--gold);
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
.btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }

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
.btn-ghost:hover { color: var(--green-hover); border-color: var(--green-primary); }
```

### Kort
```css
.card {
  background: var(--bg-white);
  border: 1px solid var(--green-line);
  border-radius: 12px;
  padding: 32px;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.card:hover {
  border-color: var(--green-primary);
  box-shadow: 0 4px 24px rgba(45, 80, 22, 0.08);
}
```

### Merförsäljningsruta (löpande skötsel)
```css
.upsell-box {
  background: var(--gold-dim);
  border: 1px solid var(--gold-line);
  border-radius: 12px;
  padding: 40px;
}
.upsell-box .upsell-badge {
  display: inline-block;
  background: var(--gold);
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 4px;
  margin-bottom: 16px;
}
.upsell-box .upsell-features li {
  padding: 6px 0 6px 24px;
  position: relative;
  color: var(--text-body);
  font-size: 15px;
  list-style: none;
}
.upsell-box .upsell-features li::before {
  content: '✔';
  position: absolute;
  left: 0;
  color: var(--green-primary);
  font-weight: 600;
}
```

### RUT-avdrag info-box
```css
.rut-info {
  background: var(--bg-accent);
  border-left: 3px solid var(--green-primary);
  border-radius: 0 8px 8px 0;
  padding: 20px 24px;
  font-size: 14px;
  color: var(--text-body);
  line-height: 1.6;
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

.nav-logo {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  font-weight: 400;
  color: var(--green-primary);
  text-decoration: none;
}
```

### Footer (kanonisk — identisk på alla sidor)
- Bakgrund: `var(--bg-dark)` (#1A2A10)
- Text: `var(--text-on-dark)`
- Accent: `var(--gold)` (tunn separator)
```
Trädgårdsgänget
Ursviks Trädgårdsgäng AB · Org.nr 559431-2737
Länsmansbacken 3, 174 46 Sundbyberg
info@tradgardsganget.se · 076-405 13 70
Facebook · Instagram
Vi gör Sundbybergs trädgårdar vackrare — sedan 2021
© 2026 Ursviks Trädgårdsgäng AB
```

### Bild-placeholders
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
/vintertjanster        → vintertjanster.html (intresseformulär)
/integritetspolicy     → integritetspolicy.html
/cookiepolicy          → cookiepolicy.html
```

### Startsida — innehåll
```
1. HERO
   - Section label: "Trädgårdstjänster i Stockholms län"
   - Rubrik: "Vi tar hand om din trädgård — så att du kan njuta av den"
   - Body: Kort intro om professionella trädgårdstjänster med RUT-avdrag
   - Primär CTA: "Kontakta oss" → /kontakt
   - Sekundär CTA: "Se våra tjänster" → /tjanster

2. TJÄNSTEÖVERSIKT (3–4 kort)
   - Visa de mest populära: Gräsklippning, Häckklippning, Beskärning
   - Bild-placeholder och kort beskrivning per kort
   - INGA priser — CTA: "Be om offert" → /kontakt
   - Länk: "Visa alla tjänster →" → /tjanster

3. SÅ HÄR JOBBAR VI
   - Beskriv kundresan: kontakt → besiktning → offert med arbetsbeskrivning → utförande
   - Betona: "Du och vi har alltid samma bild av vad som ska göras"

4. VARFÖR TRÄDGÅRDSGÄNGET (USP-sektion)
   - F-skatt & RUT-avdrag (50 % direkt på fakturan)
   - Femte säsongen — erfarenhet och återkommande kunder
   - Hela Stockholms län
   - Arbetsbeskrivning med bilder — alltid
   - Personlig service

5. RUT-AVDRAG FÖRKLARING
   - Använd .rut-info-komponenten
   - "RUT-avdrag (50 %) dras direkt på fakturan — du behöver inte göra något själv."

6. LÖPANDE SKÖTSEL (merförsäljning)
   - Använd .upsell-box med guld-accent
   - Badge: "NYTT FÖR 2026"
   - Rubrik: "Slipp tänka på trädgården — vi har koll"
   - Alla 6 fördelar + pris (från 750 kr/mån efter RUT)
   - CTA: "Boka kostnadsfritt samtal" → /kontakt

7. SOCIAL PROOF
   - Placeholder-citat från nöjda kunder

8. KONTAKT-CTA
   - "Berätta om din trädgård" + CTA

9. FOOTER
```

### Tjänster-sida — innehåll
```
1. HERO
   - Rubrik: "Allt din trädgård behöver"
   - Body: "Från beskärning och gräsklippning till komplett trädgårdsskötsel."

2. TJÄNSTEGRID (grupperat i sektioner)

   Grupp: "Beskärning"
   Kort per tjänst med bild-placeholder, kort beskrivning, CTA → /kontakt

   Grupp: "Trädgårdsskötsel"
   Kort per tjänst, CTA → /kontakt

   Grupp: "Anläggning & övrigt"
   Kort per tjänst, CTA → /kontakt

3. INGA PRISER — varje kort avslutas med "Be om offert →"

4. RUT-INFO (.rut-info)

5. LÖPANDE SKÖTSEL (.upsell-box)

6. KONTAKT-CTA
```

### Om oss-sida
```
1. HERO: "Vi startade med en gräsklippare och en idé"
2. BERÄTTELSEN — femte säsongen, passion, lokal förankring
3. TEAMET — kort med foto-placeholder + bio: Niklas, Alfred, Patrik, Simson
4. "Vi gör Sundbybergs trädgårdar vackrare — sedan 2021"
5. KONTAKT-CTA
```

### FAQ-sida
```
- Har ni F-skatt? → Ja + RUT-avdrag
- Hur fungerar RUT-avdraget? → 50 % direkt på fakturan
- Vad kostar det? → Varierar, vi lämnar alltid kostnadsfri offert
- Tillkommer andra kostnader? → Framkörning 35 kr/mil, alltid transparens
- Vilka betalningsalternativ? → Faktura 30 dagar
- Var är ni verksamma? → Hela Stockholms län
- Erbjuder ni löpande skötsel? → Ja, från 750 kr/mån efter RUT
- Hur går det till? → Kontakt → besiktning → offert med arbetsbeskrivning → utförande

Schema markup: FAQPage (JSON-LD)
```

### Kontakt-sida
```
1. HERO: "Berätta om din trädgård"
2. KONTAKTFORMULÄR: Förnamn, Efternamn, Telefon, E-post, Tjänst (dropdown), Gatuadress, Postnummer, Ort, Meddelande
3. KONTAKTINFO: telefon, e-post, område
4. Sociala medier
```

### Vintertjänster-sida (intresseformulär)
```
1. HERO: "Vintertjänster — kommer snart"
2. BODY: "Vi planerar att lansera vintertjänster. Berätta vad du behöver."
3. FORMULÄR:
   - Namn, Adress, E-post, Telefon
   - Checkboxar: Snöröjning, Halkbekämpning, Vinterskydd växter, Julbelysning, Annat
   - Storlek uppfart/yta (ungefärligt)
   - Övrigt meddelande
4. "Du binder dig inte till något — vi hör av oss när det är dags."
```

---

## DEL 5 — AI-CHATBOT

### Översikt
Sajten har en AI-driven chatbot med djup trädgårdskunskap. Den fungerar som en digital trädgårdsrådgivare — ger säsongsanpassade skötselråd, rekommenderar tjänster baserat på kundens situation, och guidar mot kontakt för offert.

### Teknisk arkitektur
```
[Chatbot-widget i HTML/JS]
        ↓ POST { messages, pageContext }
[Netlify Function: /.netlify/functions/tg-ai-stream]
        ↓ Systemprompt = tg-knowledge.md (inbäddad)
[Claude API: claude-sonnet-4-20250514, streaming]
        ↓ SSE-stream
[Klient: visar svar i realtid]
```

### Kunskapsbas
All chatbot-kunskap finns i `tg-knowledge.md` (separat fil). Den innehåller:
1. Personlighet och regler (ton, vad den aldrig gör)
2. Säsongskalender (månad för månad, baserad på verklig jobbdata)
3. Gräsmatta (klippfrekvens, en-tredjedelsregeln, gödsling, mossa, torka)
4. Häckar (typer, klipptider, skötselråd)
5. Beskärning — pomologisk kunskap (uppbyggnad, underhåll, restaurering, säsonger per trädslag)
6. Övrig trädgårdsskötsel (ogräs, vårstäd, höststäd, trädgårdspassning)
7. Tjänstelogik ("kunden säger X → botten rekommenderar Y")
8. Löpande skötsel — merförsäljning (när och hur den lyfts)
9. Vintertjänster — intresseformulär

Hela innehållet i `tg-knowledge.md` bäddas in som `SYSTEM_PROMPT` i Netlify Function. Uppdatera kunskapsbasen genom att redigera filen och pusha.

### Chatbot UI
Flytande widget nere till höger:
- Chatknapp: grön cirkel med chatt-ikon
- Chatfönster: vit bakgrund, skogsgrön header med "Trädgårdsgänget"
- Avatar: grön cirkel med "T"
- Quick prompts: "Vad behöver min trädgård just nu?", "Hur fungerar RUT?", "Berätta om löpande skötsel"
- Streaming via SSE
- Markdown-formatering (bold, länkar, radbrytningar)

### API-nyckel
Lagrad som environment variable i Netlify: `ANTHROPIC_API_KEY`

---

## DEL 6 — TEKNISKA REGLER

### Plattform
- **Hosting:** Netlify (repo: WAUWGolf/UTG på GitHub)
- **Ren HTML, CSS, vanilla JS** — inga ramverk
- **Inga externa CSS-ramverk**
- **Google Fonts:** DM Serif Display + DM Sans
- **Leverans:** Komplett HTML per sida — all CSS och JS inline

### Mappstruktur
```
UTG/
├── index.html
├── tjanster.html
├── om-oss.html
├── faq.html
├── kontakt.html
├── vintertjanster.html
├── integritetspolicy.html
├── cookiepolicy.html
├── tg-consent.js
├── /bilder/
│   ├── tjanster/
│   └── team/
└── /netlify/
    └── functions/
        └── tg-ai-stream.js
```

### Responsivitet
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobil landscape */ }
@media (max-width: 480px)  { /* Mobil portrait */ }
```
- `overflow-x: hidden` på html + body
- Touch-targets minst 44px
- Hamburger-meny under 820px
- Grid kollapsar till en kolumn på mobil

### Grid-system
```css
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 768px) {
  .grid-2, .grid-3 { grid-template-columns: 1fr; }
}
```

### Sektionsstruktur
```css
section {
  position: relative; z-index: 1;
  padding: 80px 48px;
  max-width: 1100px; margin: 0 auto;
}
@media (max-width: 768px) { section { padding: 60px 24px; } }
```

---

## DEL 7 — COPY-REGLER

### Ton: Vänlig professionell
- **Varm och personlig** — inte corporate
- **Du-tilltal** alltid
- **Tydlig och konkret**
- **Lokal** — Sundbyberg, Stockholms län
- **Aldrig säljande** — tonen andas "vi hjälper dig"

### Skrivregler
```
✅  "i stället" (två ord)
✅  "50 %" (mellanslag före %)
✅  du-tilltal
✅  Korta meningar

❌  Inga superlativ: "bäst", "unika", "Stockholms finaste"
❌  Aldrig "billigt", "prisvärt", "budget"
❌  Aldrig "klicka här" som CTA-text
❌  Inga utropstecken i rubriker
❌  Aldrig tredje person — använd "vi"
❌  Inga priser på hemsidan (utom löpande skötsel)
```

### Micro-copy / knappar
```
✅  "Be om offert"
✅  "Kontakta oss"
✅  "Ring oss"
✅  "Boka kostnadsfritt samtal"
✅  "Se alla tjänster →"
❌  "Klicka här" / "Läs mer" / "Submit"
```

---

## DEL 8 — SEO & JURIDIK

### Meta-taggar
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
    "streetAddress": "Länsmansbacken 3",
    "addressLocality": "Sundbyberg",
    "postalCode": "174 46",
    "addressRegion": "Stockholms län",
    "addressCountry": "SE"
  },
  "areaServed": { "@type": "State", "name": "Stockholms län" },
  "paymentAccepted": "Faktura",
  "sameAs": [
    "https://www.facebook.com/Ursviks-Tradgards-Gang-112878280893630/",
    "https://www.instagram.com/ursvikstradgardsgang/"
  ]
}
</script>
```

### GDPR / Consent
Consent-banner (`tg-consent.js`): ljus design, skogsgrön CTA, Google Consent Mode v2.

---

## DEL 9 — INSTRUKTIONER TILL CLAUDE

När du bygger sidor för Trädgårdsgänget, följ alltid:

1. **Ljust tema** — `var(--bg-primary)` som bakgrund. Mörk bakgrund ENBART footer
2. **Skogsgrön #2D5016** — primärfärg för rubriker i nav, knappar, labels, linjer
3. **Guld #8B7533** — sekundär accent för merförsäljning och badges
4. **DM Serif Display** för rubriker, **DM Sans** för allt annat
5. **Fade-up animationer** med IntersectionObserver
6. **INGA PRISER** på hemsidan (utom löpande skötsel 750 kr/mån) — alla CTA:er leder till kontakt
7. **RUT-avdrag** ska nämnas tidigt och förklaras tydligt
8. **Löpande skötsel** (.upsell-box) på startsidan och tjänstesidan
9. **Kundresan** ("besiktning → arbetsbeskrivning med bilder") ska lyftas
10. **Footer:** Ursviks Trädgårdsgäng AB · org.nr · "sedan 2021"
11. **Leverera komplett HTML** — all CSS och JS inline
12. **Bild-placeholders** tills riktiga bilder finns
13. **Schema markup** — LocalBusiness + FAQPage
14. **Chatbot-widget** på alla sidor
15. **UTF-8** — korrekt rendering av å, ä, ö
16. **Designen matchar offerternas visuella språk**

---

## DEL 10 — PROMPT-KIT

### Systemprompt (klistra in i början av varje session)
```
Du hjälper mig bygga och optimera tradgardsganget.se.
Trädgårdsgänget erbjuder professionella trädgårdstjänster i Stockholms län.
Sajten hostas på Netlify (GitHub: WAUWGolf/UTG) som ren HTML/CSS/JS.

Följ designsystemet i claude.md.
Leverera komplett HTML i en fil. Aldrig externa CSS-ramverk.
Google Fonts: DM Serif Display + DM Sans.
Ljust tema. Skogsgrön (#2D5016) primärfärg. Guld (#8B7533) accent.
INGA priser på sajten — alla CTA:er leder till kontakt för offert.
Designen ska matcha företagets offerter visuellt.
```

### Prompt: Bygg startsidan
```
Bygg en komplett startsida (index.html) baserat på claude.md.
Inkludera: hero, tjänsteöversikt (utan priser), "så här jobbar vi"-sektion,
USP:er, RUT-förklaring, löpande skötsel (upsell-box), social proof, kontakt-CTA, footer.
Schema markup (LocalBusiness). Responsivt. Fade-up animationer. Chatbot-widget.
```

### Prompt: Bygg tjänstesidan
```
Bygg tjanster.html baserat på claude.md.
Gruppera tjänsterna: Beskärning, Trädgårdsskötsel, Anläggning & övrigt.
INGA priser — varje kort avslutas med "Be om offert →".
RUT-info. Löpande skötsel upsell-box. Kontakt-CTA.
```

### Prompt: Bygg chatbot-widget
```
Bygg chatbot-widgeten baserat på claude.md DEL 5.
Flytande widget nere till höger. Skogsgrön header. Quick prompts.
Streaming via SSE från /.netlify/functions/tg-ai-stream.
Leverera som fristående komponent att klistra in före </body>.
```

### Prompt: Bygg Netlify Function
```
Bygg netlify/functions/tg-ai-stream.js.
Bädda in hela innehållet från tg-knowledge.md som SYSTEM_PROMPT.
Streaming via Anthropic API (claude-sonnet-4-20250514).
CORS-hantering. API-nyckel via process.env.ANTHROPIC_API_KEY.
```

### Prompt: Bygg vintertjänster-sidan
```
Bygg vintertjanster.html baserat på claude.md.
Intresseformulär — inte en tjänstesida.
Checkboxar för: snöröjning, halkbekämpning, vinterskydd, julbelysning.
"Du binder dig inte till något." Kontaktinfo i footer.
```

---

## VERSIONERING

- v1.0 — April 2026 (initial, ljus design med egen palett)
- v2.0 — April 2026 (offertens designspråk: skogsgrön, guld, riktpriser, merförsäljning)
- v3.0 — April 2026 (priser borttagna från sajten, kunskapsbasen separerad till tg-knowledge.md, vintertjänster-sida, kundresa-sektion tillagd)
