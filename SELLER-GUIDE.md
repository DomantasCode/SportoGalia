# Pardavėjo Vadovas - Kaip Perduoti Projektą Pirkėjui

## Šis dokumentas tik jums - kaip saugiai ir profesionaliai perduoti projektą

---

## Prieš Pardavimą - Checklist

### 1. Paruoškite Kodą

- [ ] **Išvalykite debug kodą**
  ```bash
  # Patikrinkite ar nėra console.log, debugger statements
  grep -r "console.log" app/
  grep -r "debugger" app/
  ```

- [ ] **Ištrinkite asmeninę informaciją**
  - Patikrinkite `.env` - NIEKADA neperduokite su tikrais credentials
  - Patikrinkite comments kode - ar nėra asmeninių pastabų
  - Ištrinkite `.env` failą (palikite tik `.env.example`)

- [ ] **Išvalykite git history (jei reikia)**
  ```bash
  # Jei git history turi sensitive info, galite reset'inti
  rm -rf .git
  git init
  git add .
  git commit -m "Initial commit - Sportogalia v1.0"
  ```

- [ ] **Patikrinkite ar veikia build**
  ```bash
  npm run build
  npm start
  # Testuokite visas funkcijas
  ```

- [ ] **Update dokumentaciją**
  - README.md - ar viskas correct?
  - DEPLOYMENT-GUIDE.md - ar yra viskas?
  - Pašalinkite šį SELLER-GUIDE.md prieš perduodami!

### 2. Patikrinkite Failus

**Reikalingi failai:**
```
✅ app/ - visas aplankas
✅ components/ - visi komponentai
✅ data/ - news.json
✅ public/ - visos nuotraukos
✅ .env.example - su placeholder'iais
✅ .gitignore - correct setup
✅ package.json
✅ package-lock.json
✅ next.config.mjs
✅ tailwind.config.js
✅ postcss.config.js
✅ jsconfig.json
✅ README.md
✅ DEPLOYMENT-GUIDE.md
✅ KOMERCINIS-PASIULYMAS.md (opcionalus)
```

**NEPERDUOKITE:**
```
❌ .env - tikri credentials
❌ node_modules/ - per didelis
❌ .next/ - build artifacts
❌ .git/ - jūsų git history (jei turi sensitive info)
❌ SELLER-GUIDE.md - šis failas tik jums
❌ .claude/ - AI assistant config
❌ Bet kokie test failai su tikrais duomenimis
```

---

## Pardavimo Metodai

### Metodas 1: GitHub Private Repository (REKOMENDUOJAMAS)

**Privalumai:**
- ✅ Profesionalus
- ✅ Pirkėjas gauna pilną git history
- ✅ Lengva atnaujinti jei reikia
- ✅ Pirkėjas gali iškart deploy'inti į Vercel

**Žingsniai:**

#### 1. Sukurkite naują Private Repository

```bash
# 1. Eikite į github.com
# 2. Spauskite "New repository"
# 3. Pavadinimas: sportogalia-client-delivery
# 4. PRIVATE repository
# 5. Sukurkite
```

#### 2. Push'inkite švarius failus

```bash
# Išvalykite sensitive data
rm .env

# Commit'inkite clean version
git add .
git commit -m "Clean version for client delivery"

# Push į naują repo
git remote add delivery https://github.com/YOUR-USERNAME/sportogalia-client-delivery.git
git push delivery main
```

#### 3. Invite pirkėją

```bash
# GitHub → Repository → Settings → Collaborators → Add people
# Įveskite pirkėjo GitHub username arba email
# Jie gaus invitation
```

#### 4. Po apmokėjimo - Transfer ownership

```bash
# GitHub → Repository → Settings → Danger Zone → Transfer ownership
# Įveskite pirkėjo username
# Repository tampa pirkėjo, jūs prarandate prieigą
```

**Email Template pirkėjui:**
```
Subject: Sportogalia - GitHub Prieiga

Sveiki,

Dėkoju už pirkimą! Projektą rasite GitHub:

Repository: https://github.com/YOUR-USERNAME/sportogalia-client-delivery

1. Priimkite invitation (patikrinkite email)
2. Clone repository:
   git clone https://github.com/YOUR-USERNAME/sportogalia-client-delivery.git

3. Sekite DEPLOYMENT-GUIDE.md instrukcijas

Admin prieiga:
- URL: https://your-domain.com/admin
- Password: admin123 (PAKEISKITE ASAP!)

Support: [jūsų email] (1 mėnesis)

Sėkmės!
```

---

### Metodas 2: ZIP File Delivery

**Privalumai:**
- ✅ Paprastas
- ✅ Neturi GitHub
- ✅ Vienkartinis transfer

**Žingsniai:**

#### 1. Paruoškite clean directory

```bash
# 1. Nukopijuokite projektą
cp -r Sportas Sportas-clean

cd Sportas-clean

# 2. Ištrinkite nereikalingus failus
rm -rf node_modules
rm -rf .next
rm -rf .git
rm .env
rm SELLER-GUIDE.md
rm -rf .claude

# 3. Patikrinkite .gitignore (opcionalus jei nėra .git)
```

#### 2. Sukurkite ZIP

**Windows:**
```bash
# Right-click aplanką → Send to → Compressed folder
# Arba PowerShell:
Compress-Archive -Path Sportas-clean -DestinationPath Sportogalia-v1.0.zip
```

**Mac/Linux:**
```bash
zip -r Sportogalia-v1.0.zip Sportas-clean/
```

#### 3. Upload į Cloud

**Variantai:**
- **Google Drive** - Upload ir share link
- **Dropbox** - Upload ir share link
- **WeTransfer** - Iki 2GB nemokamas
- **Send.firefox.com** - Iki 1GB

#### 4. Siųskite pirkėjui

**Email Template:**
```
Subject: Sportogalia - Projekto Failai

Sveiki,

Dėkoju už pirkimą!

Download link: [JŪSŲ CLOUD LINK]
Slaptažodis (jei reikia): [PASSWORD]

Failų turinys:
- Visas source code
- Visos nuotraukos
- Dokumentacija (README.md, DEPLOYMENT-GUIDE.md)
- .env.example template

Instrukcijos:
1. Download ir unzip
2. Skaitykite DEPLOYMENT-GUIDE.md
3. Sekite žingsnius deployment

Admin prieiga:
- URL: /admin
- Password: admin123 (PAKEISKITE!)

Support: [jūsų email] (1 mėnesis)

Sėkmės!
```

---

### Metodas 3: Direct Vercel Transfer

**Šis metodas tik jei JŪS jau host'inate ant Vercel ir norite transfer'inti visą projektą.**

#### 1. Transfer Vercel projektą

```bash
# Vercel Dashboard → Project → Settings → General
# → Transfer Project
# → Įveskite pirkėjo Vercel email
```

#### 2. Transfer domeną (jei applicable)

```bash
# Vercel Dashboard → Domain Settings → Transfer
# Arba pirkėjas prideda savo domainą
```

#### 3. Perduokite GitHub repo (Metodas 1)

Pirkėjas turės ir code ir deployment.

---

## Po Pardavimo - Support

### 1 Mėnesio Support Planas

**Kas įeina:**
- ✅ Email support
- ✅ Bug fixes (jei yra)
- ✅ Deployment pagalba
- ✅ Configuration questions
- ✅ Minor tweaks

**Kas NEĮEINA:**
- ❌ Naujos funkcijos
- ❌ Dizaino pakeitimai
- ❌ Content upload
- ❌ SEO optimization
- ❌ Performance tuning

### Email Response Template

**Pavyzdys 1: Deployment klausimai**
```
Subject: Re: Deployment klausimai

Sveiki,

Dėl jūsų klausimo apie environment variables:

1. Eikite į Vercel dashboard
2. Project Settings → Environment Variables
3. Pridėkite visus iš .env.example
4. Redeploy projektą

Jei vis dar neveikia, atsiųskite screenshot error message.

Pagarbiai
```

**Pavyzdys 2: Bug report**
```
Subject: Re: Forms neveikia

Sveiki,

Dėl forms problemos:

Greičiausiai trūksta environment variables. Patikrinkite:
1. Ar SMTP_HOST, SMTP_USER, etc. pridėti Vercel?
2. Ar Gmail App Password correct? (ne įprastas password)
3. Test su šiuo: [concrete solution]

Jei nepadės, gali būti kad:
- Gmail blokuoja (check Gmail security settings)
- SMTP_PORT wrong (turi būti 587)

Praneškite ar padėjo!
```

### Tracking Support Requests

Sukurkite paprastą Excel arba Google Sheets:

| Data | Pirkėjas | Klausimas | Status | Išspręsta |
|------|----------|-----------|--------|-----------|
| 2025-01-10 | Jonas | Deployment | Open | - |
| 2025-01-11 | Petras | Email setup | Closed | 2025-01-11 |

---

## Papildomos Pajamos - Upsell Opportunities

Po sėkmingo pardavimo, galite pasiūlyti:

### 1. Extended Support (+€100-200)
- 3 mėnesių support vietoj 1
- Priority response (24h vietoj 48h)

### 2. Custom Domain Setup (+€50)
- Jūs setup'inate domeną jiems
- DNS configuration
- SSL setup

### 3. Content Upload Service (+€100-300)
- Jūs upload'inate jų content
- Nuotraukų optimization
- Initial news articles

### 4. Custom Design Tweaks (+€150-400)
- Spalvų pakeitimai
- Logo integration
- Custom sections

### 5. Additional Features (+€500-2000)
- Online booking system
- Payment integration
- Member portal
- Advanced admin features

### 6. SEO Setup (+€200-500)
- Google Analytics
- Google Search Console
- Meta tags optimization
- Sitemap submission

### Email Template - Upsell
```
Subject: Sportogalia - Papildomos Paslaugos

Sveiki,

Džiaugiuosi, kad sėkmingai deploy'inote svetainę!

Jei norite išspausti maksimumą iš svetainės, galiu pasiūlyti:

🔧 Extended Support (3 mėn) - €150
📈 SEO Setup & Analytics - €300
🎨 Custom Design Tweaks - €200
💳 Payment Integration - €800

Ar kas nors iš šių jums įdomu?

Pagarbiai
```

---

## Legal & Safety

### Sutartis (Contract Template)

**PROJEKTO PERDAVIMO SUTARTIS**

Tarp:
- **Pardavėjas:** [Jūsų vardas/įmonė]
- **Pirkėjas:** [Pirkėjo vardas/įmonė]

**Objektas:**
Svetainės "Sportogalia" source code, dizainas ir dokumentacija.

**Kaina:** €[SUMA]

**Teisės:**
- Pirkėjas gauna visas teises į kodą
- Gali modifikuoti kaip nori
- Gali naudoti komerciniams tikslams
- NEGALI perparduoti kaip šabloną

**Support:**
1 mėnesio email support bug fixes.

**Garantijos:**
Kodas veikia kaip aprašyta dokumentacijoje.

**Mokėjimas:**
- 50% išankstinis
- 50% po projekto perdavimo

Pasirašyta:
[Data] [Pardavėjo parašas] [Pirkėjo parašas]

---

### Payment Methods

**Rekomenduojami:**
- **Banko pavedimas** - Saugiausias
- **PayPal** - Paprastas, bet 2.9% fee
- **Wise** (TransferWise) - Tarptautiniai
- **Stripe** - Jei turite business

**VENGTI:**
- Western Union - Scam risk
- Cryptocurrency - Jei nesate įsitikinę
- "I'll pay later" - VISUOMET 50% išankstinis!

### Red Flags - Scam Warning

🚩 **Neparduokite jei:**
- Prašo siųsti failus prieš mokėjimą
- Prašo "test version" be mokėjimo
- Email atrodo suspicious (weird domains)
- Prašo per daug personal info
- Sako "I'll pay after I check if it works for 2 weeks"

✅ **Saugus procesas:**
1. Aptarti reikalavimus
2. **50% išankstinis mokėjimas**
3. Perduoti projektą
4. **50% galutinis mokėjimas**
5. Transfer GitHub ownership / send files

---

## Pricing Guide - Ką Imti?

### Base Product
**€800 - €1,500** - Depends on:
- Pirkėjo biudžetas
- Ar verslui ar asmeniui
- Konkurencija rinkoje
- Kaip greitai norite parduoti

### Additional Services

| Paslauga | Kaina |
|----------|-------|
| Extended Support (3 mėn) | +€150 |
| Custom Domain Setup | +€50 |
| Content Upload | +€200 |
| Design Customization | +€300 |
| SEO Setup | +€300 |
| Payment Integration | +€800 |

### Package Deals

**Starter Package: €1,200**
- Source code
- 1 mėn support
- Deployment guide

**Professional Package: €1,800**
- Source code
- 3 mėn support
- Domain setup
- Initial content upload
- SEO basic setup

**Premium Package: €2,500**
- Viskas iš Professional
- Design customization
- Payment integration
- Google Analytics setup

---

## Marketing - Kaip Rasti Pirkėjų

### 1. Tiesioginiai Klientai

**Sport Centers:**
- Google: "kineziterapija vaikams" + jūsų miestas
- Suraskite centrus be svetainių arba su senais
- Cold email arba skambučiai

**Email Template:**
```
Subject: Moderni svetainė jūsų centrui

Sveiki,

Pastebėjau, kad [BUSINESS NAME] teikia puikias paslaugas,
bet svetainė galėtų būti modernesnė.

Turiu gatavą, profesionalų sprendimą kineziterapijos centrų:
- Modernus dizainas
- Online registracijos
- Admin panelė
- Pilnai veikiantis

Kaina: €1,200 (įprastai €3,000+ development)

Galiu parodyti demo?

Pagarbiai,
[Jūsų vardas]
[Telefonas]
```

### 2. Freelance Platformos

**Flippa.com:**
1. List kaip "Starter Site"
2. Kaina: €800-1,200
3. Include screenshots
4. Highlight features

**Listing Title:**
"Modern Sports Academy Website - Next.js - Admin Panel - Ready to Deploy"

**Description:**
```
Fully functional sports academy website built with Next.js 14.

Features:
✅ 7 pages (Home, About, Services, Trainers, News, Contact, Register)
✅ Admin panel with full CRUD
✅ Contact & registration forms with email
✅ Modern, responsive design
✅ SEO optimized
✅ Deploy to Vercel in 15 minutes

Tech: Next.js 14, React 19, Tailwind CSS
Price: €1,200 (Development cost: €3,000+)

Includes:
- Full source code
- Documentation
- Deployment guide
- 1 month support
```

### 3. Facebook / LinkedIn

**Post Template:**
```
🏃 Parduodu gatavą sporto akademijos svetainę

Profesionalus, modernus sprendimas:
• Next.js 14 + Tailwind CSS
• Admin panelė
• Kontaktų formos
• Responsive dizainas
• Dokumentacija

Idealus sporto centrų, kineziterapijos klinikoms.

Kaina: €1,200
DM arba [your email]

#webdevelopment #lietuva #sportas
```

### 4. Web Design Facebook Groups

Lietuviškos grupės:
- "Web Dizainerių grupė"
- "Freelanceriai Lietuvoje"
- "IT profesionalai"

Tarptautinės:
- "Web Designers for Hire"
- "Freelance Web Developers"

---

## Success Metrics - Track Results

### KPIs

| Metrika | Target |
|---------|--------|
| Inquiries per week | 2-3 |
| Demo requests | 30% inquiries |
| Sale conversion | 20% of demos |
| Average price | €1,200 |
| Time to sale | 2 weeks |

### Sales Funnel

```
100 views (ad/post)
  ↓
10 inquiries (10%)
  ↓
3 demos (30%)
  ↓
1 sale (33%)
```

**Realistic timeline:**
- Week 1-2: Marketing & outreach
- Week 3-4: Demos & negotiations
- Week 5: First sale

**Optimistic:** 2-3 sales per month = €2,400-4,500/mėn

---

## Final Checklist Before Handoff

### Code Checklist
- [ ] Visas kodas švarus
- [ ] Nėra console.logs
- [ ] Nėra asmeninių komentarų
- [ ] .env ištrinta
- [ ] .env.example correct
- [ ] README updated
- [ ] Build veikia

### Documentation Checklist
- [ ] README.md complete
- [ ] DEPLOYMENT-GUIDE.md included
- [ ] KOMERCINIS-PASIULYMAS.md (opcionalus)
- [ ] SELLER-GUIDE.md PAŠALINTAS

### Delivery Checklist
- [ ] GitHub repo created / ZIP prepared
- [ ] Admin credentials shared
- [ ] Email template sent
- [ ] Payment received (at least 50%)
- [ ] Support tracking setup

### Legal Checklist
- [ ] Sutartis pasirašyta (jei reikia)
- [ ] Mokėjimas gautas
- [ ] Invoice issued
- [ ] Ownership transferred

---

## Tips iš Patirties

### Do's ✅
- **Profesionalus komunikavimas** - Fast responses
- **Aiškios instrukcijos** - Per daug geriau nei per mažai
- **50% upfront** - VISUOMET
- **Screenshot everything** - Delivery proof
- **Follow up** - Po 1 savaitės paklausti kaip sekasi

### Don'ts ❌
- **Never send before payment** - Bent 50%
- **Don't overpromise** - Būkite realistų su funkcijomis
- **Don't give unlimited support** - 1 mėnuo = aiški riba
- **Don't do free custom work** - Tai atskirai apmokama
- **Don't ghost** - Net jei neperka, būkite profesionalūs

---

## Next Steps

1. **Paruoškite delivery package** (šis checklist)
2. **Sukurkite marketing materials** (screenshots, demo video)
3. **Pradėkite marketing** (cold emails, posts)
4. **First sale celebration!** 🎉

**Galimi rezultatai:**
- 1-3 sales per mėnesį
- €800-1,500 per sale
- €2,400-4,500/mėn passive income
- Minimal work (1-2 val per sale)

---

## Resources

**Useful Links:**
- [Flippa Seller Guide](https://flippa.com/sell)
- [How to Write Cold Emails](https://www.youtube.com/results?search_query=cold+email+guide)
- [Freelance Pricing Guide](https://www.freelancermap.com/freelancer-tips/12-freelance-pricing)

**Tools:**
- [Loom](https://loom.com) - Demo videos
- [Calendly](https://calendly.com) - Schedule demos
- [PayPal](https://paypal.com) - Accept payments
- [Notion](https://notion.so) - Track sales pipeline

---

**Sėkmės parduodant!** 💰

Jei turite klausimų apie pardavimo procesą, galite man rašyti.

*Šis dokumentas - TIKTAI JUMS. Pašalinkite prieš perduodant klientui!*

---

*Dokumentas atnaujintas: 2025-01-09*
