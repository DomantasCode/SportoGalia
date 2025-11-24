# Deployment Guide - Sportogalia
## Kaip įdiegti svetainę į savo Vercel paskyrą

Šis vadovas padės jums per 15-20 minučių paleisti svetainę ant Vercel hostingo **NEMOKAMAI**.

---

## Būtini Įrankiai

Prieš pradėdami, įsitikinkite kad turite:

- [x] **Node.js** (v18 ar naujesnė) - [Download](https://nodejs.org/)
- [x] **Git** - [Download](https://git-scm.com/)
- [x] **Vercel paskyra** (nemokama) - [Sign Up](https://vercel.com/signup)
- [x] **GitHub paskyra** (rekomenduojama) - [Sign Up](https://github.com/signup)

---

## Metodas 1: Deploy per GitHub (REKOMENDUOJAMAS)

### Žingsnis 1: Sukurkite GitHub Repository

1. Eikite į [github.com](https://github.com) ir prisijunkite
2. Spauskite "New repository"
3. Įveskite pavadinimą, pvz., `sportogalia-website`
4. Pasirinkite **Private** (jei nenorite, kad būtų viešas)
5. **NESPAUSKITE** "Initialize with README" - repository turi būti tuščias
6. Spauskite "Create repository"

### Žingsnis 2: Upload'inkite Kodą į GitHub

Atverkite Command Prompt / Terminal projekto aplanke ir vykdykite:

```bash
# 1. Inicializuokite git (jei dar nepadaryta)
git init

# 2. Pridėkite visus failus
git add .

# 3. Sukurkite pirmą commit
git commit -m "Initial commit - Sportogalia website"

# 4. Prijunkite jūsų GitHub repository
# (Pakeiskite 'YOUR-USERNAME' ir 'sportogalia-website' į savo duomenis)
git remote add origin https://github.com/YOUR-USERNAME/sportogalia-website.git

# 5. Push'inkite kodą į GitHub
git branch -M main
git push -u origin main
```

**Pavyzdys:**
```bash
git remote add origin https://github.com/jurgis123/sportogalia-website.git
git push -u origin main
```

### Žingsnis 3: Deploy į Vercel

1. Eikite į [vercel.com](https://vercel.com) ir prisijunkite
2. Spauskite "Add New Project"
3. Pasirinkite "Import Git Repository"
4. Suteikite Vercel prieigą prie GitHub (jei prašoma)
5. Pasirinkite savo `sportogalia-website` repository
6. **Framework Preset:** Vercel automatiškai aptiks "Next.js"
7. **Environment Variables:** Palikite tuščią dabar (pridėsite vėliau)
8. Spauskite "Deploy"

⏱️ **Deployment trunka 2-3 minutes**

### Žingsnis 4: Pridėkite Environment Variables

Po deployment:

1. Eikite į Project Settings → Environment Variables
2. Pridėkite šiuos kintamuosius (jei norite veikiančių formų):

| Key | Value | Aprašymas |
|-----|-------|-----------|
| `SMTP_HOST` | `smtp.gmail.com` | Gmail SMTP serveris |
| `SMTP_PORT` | `587` | SMTP portas |
| `SMTP_USER` | `jusu-email@gmail.com` | Jūsų Gmail adresas |
| `SMTP_PASSWORD` | `xxxx xxxx xxxx xxxx` | Gmail App Password |
| `SMTP_FROM` | `noreply@jusudomenas.lt` | Siuntėjo adresas |
| `CONTACT_EMAIL` | `info@jusudomenas.lt` | Kur gauti pranešimus |

3. Spauskite "Save"
4. Eikite į Deployments → Three dots → "Redeploy"

**Gmail App Password Gavimas:**
- Eikite į [Google Account Security](https://myaccount.google.com/security)
- Įjunkite "2-Step Verification"
- Eikite į "App passwords"
- Sukurkite naują password "Mail" kategorijai
- Naudokite gautą 16 simbolių password `SMTP_PASSWORD` lauke

### Žingsnis 5: Custom Domain (Opcionalus)

1. Vercel dashboarde eikite į Project → Settings → Domains
2. Spauskite "Add"
3. Įveskite savo domeną, pvz., `sportogalia.lt`
4. Vercel pateiks DNS nustatymus
5. Eikite į savo domeno providerį (pvz., hostinger.lt)
6. Pridėkite DNS įrašus:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME Record**: `www` → `cname.vercel-dns.com`
7. Laukite 24-48 val. DNS propagacijai

🎉 **Baigta! Jūsų svetainė dabar yra live!**

---

## Metodas 2: Deploy be GitHub (ZIP Upload)

### Žingsnis 1: Paruoškite Projektą

1. Ištrinkite `node_modules` aplanką (jei yra)
2. Ištrinkite `.next` aplanką (jei yra)
3. Įsitikinkite, kad turite šiuos failus:
   - `package.json`
   - `next.config.js` arba `next.config.mjs`
   - Visą `app/` aplanką
   - `.env.example` (ne .env!)

### Žingsnis 2: Install Vercel CLI

```bash
npm install -g vercel
```

### Žingsnis 3: Login ir Deploy

```bash
# Login į Vercel
vercel login

# Navigate į projekto aplanką
cd C:\path\to\Sportas

# Deploy
vercel
```

Vercel CLI paklaus kelių klausimų:
- **Set up and deploy?** → Yes
- **Which scope?** → Pasirinkite savo paskyrą
- **Link to existing project?** → No
- **Project name?** → `sportogalia` (arba bet kas)
- **Directory?** → `.` (current)
- **Override settings?** → No

⏱️ **Deploy trunka 2-3 minutes**

Po deploy komanda pateiks URL, pvz.:
```
https://sportogalia-abc123.vercel.app
```

### Žingsnis 4: Pridėkite Environment Variables

```bash
# Pridėkite environment variables vieną po kito
vercel env add SMTP_HOST
# Įveskite: smtp.gmail.com

vercel env add SMTP_PORT
# Įveskite: 587

vercel env add SMTP_USER
# Įveskite: jusu-email@gmail.com

vercel env add SMTP_PASSWORD
# Įveskite: jūsų gmail app password

vercel env add SMTP_FROM
# Įveskite: noreply@sportogalia.lt

vercel env add CONTACT_EMAIL
# Įveskite: info@sportogalia.lt

# Redeploy su naujais variables
vercel --prod
```

---

## Metodas 3: Vercel Dashboard Upload

1. Eikite į [vercel.com/new](https://vercel.com/new)
2. Pasirinkite "Deploy from a template" arba "Import third-party Git repository"
3. Arba: Drag & drop ZIP failą (be node_modules!)
4. Pridėkite environment variables kaip Metode 1
5. Spauskite "Deploy"

---

## Po Deployment: Pritaikymai

### 1. Pakeiskite Admin Slaptažodį

**LABAI SVARBU!** Pirmiausia pakeiskite admin slaptažodį:

1. Atidarykite `app/admin/page.js`
2. Raskite eilutę:
```javascript
const ADMIN_PASSWORD = 'admin123'
```
3. Pakeiskite į savo slaptažodį:
```javascript
const ADMIN_PASSWORD = 'jusu-saugus-slaptazodis-2025'
```
4. Commit ir push į GitHub:
```bash
git add app/admin/page.js
git commit -m "Update admin password"
git push
```
5. Vercel automatiškai redeploy'ins per 1 min

### 2. Atnaujinkite Kontaktus

Redaguokite šiuos failus:

**app/kontaktai/page.js:**
- Telefono numerį
- Email adresą
- Adresą
- Darbo laiką

**components/Footer.js:**
- Footer kontaktus
- Social media links

**app/layout.js:**
- Meta description
- Site name
- OpenGraph info

### 3. Įkelkite Savo Nuotraukas

1. Įkelkite nuotraukas į `public/images/`
2. Atnaujinkite Image paths komponentuose
3. Rekomenduojamas format: WebP arba JPG
4. Optimizuokite nuotraukas (< 500KB kiekviena)

### 4. Pakeiskite Logo

1. Įkelkite logo į `public/images/logo.png`
2. Arba pakeiskite tekstinį logo `components/Header.js`:
```javascript
<span className="text-2xl font-bold">JŪSŲ PAVADINIMAS</span>
```

---

## Automatinis Deployment Workflow

Po pirminio setup, kiekvienas code update automatiškai deploy'ina:

1. **Padarote pakeitimus lokale**
2. **Commit ir push į GitHub:**
```bash
git add .
git commit -m "Updated content"
git push
```
3. **Vercel automatiškai deploy'ina** (1-2 min)
4. **Gausite email** kai deployment baigtas

---

## Troubleshooting

### Problema: "Build Failed"

**Sprendimas:**
1. Patikrinkite Vercel build logs
2. Dažniausiai trūksta `package.json` arba `next.config.js`
3. Arba yra syntax error kode

```bash
# Test build lokale
npm run build
```

Jei veikia lokale, turėtų veikti ir Vercel.

### Problema: "Environment Variables Not Working"

**Sprendimas:**
1. Eikite į Project Settings → Environment Variables
2. Patikrinkite ar visi kintamieji correct
3. Svarbu: Po pridėjimo, reikia **Redeploy**
4. Deployments → Three dots → Redeploy

### Problema: "Domain Not Working"

**Sprendimas:**
1. Patikrinkite DNS settings domeno providerio pusėje
2. DNS propagacija gali užtrukti iki 48 val
3. Naudokite [DNS Checker](https://dnschecker.org/) tikrinti

### Problema: "Forms Not Sending Emails"

**Sprendimas:**
1. Patikrinkite ar environment variables pridėti
2. Patikrinkite Gmail App Password (ne įprastas password!)
3. Test lokale su tais pačiais env variables:
```bash
# Create .env file lokale
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
# ... etc

npm run dev
# Test formas
```

### Problema: "Admin Panel 404"

**Sprendimas:**
1. Admin panel turėtų būti: `https://jusu-domenas.com/admin`
2. Patikrinkite ar `app/admin/page.js` failas egzistuoja
3. Clear browser cache

---

## Performance Optimization

Vercel automatiškai daro:
- ✅ Global CDN
- ✅ Image optimization
- ✅ Code splitting
- ✅ Compression

Papildomai galite:

### 1. Įjungti Analytics

1. Vercel Dashboard → Project → Analytics
2. Spauskite "Enable"
3. Nemokamas iki 100k requests/mėn

### 2. Optimizuoti Nuotraukas

Prieš upload'inant, optimizuokite:
- [TinyPNG.com](https://tinypng.com/)
- [Squoosh.app](https://squoosh.app/)

### 3. Įjungti Speed Insights

1. Project → Speed Insights
2. Spauskite "Enable"
3. Matykite real user metrics

---

## Backup Strategy

### Automatinis Git Backup

Kiekvienas commit yra backup. Bet kada galite:

```bash
# Grįžti prie ankstesnės versijos
git log --oneline
git checkout <commit-hash>
```

### Download Full Code

1. GitHub repository → Code → Download ZIP
2. Arba lokale:
```bash
git clone https://github.com/YOUR-USERNAME/sportogalia-website.git backup
```

### Database Backup (news.json)

JSON failas automatiškai git, bet papildomai:
1. Download `data/news.json` lokale
2. Backup kas mėnesį

---

## Updating Next.js / Dependencies

Kartą per kelis mėnesius:

```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Or major updates
npm install next@latest react@latest react-dom@latest

# Test lokale
npm run build
npm run dev

# If OK, commit and push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

---

## Security Checklist

Po deployment patikrinkite:

- [ ] Admin slaptažodis pakeistas
- [ ] `.env` failas NĖRA commit'intas (tik `.env.example`)
- [ ] GitHub repo yra Private (jei nemokamai parduodate)
- [ ] Email credentials saugūs
- [ ] SSL sertifikatas aktyvus (Vercel automatiškai)
- [ ] Forms turi CAPTCHA arba rate limiting (opcionalus)

---

## Costs

### Vercel Hobby Plan (Nemokamas)
- ✅ Unlimited websites
- ✅ 100 GB bandwidth/mėn
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Serverless Functions

**Kaina: €0/mėn**

### Jei viršijate limits:
- **Pro Plan:** $20/mėn
- Bet 99% svetainių niekada neviršija nemokamo plano

---

## Support

Jei kilo problemų:

### Vercel Dokumentacija
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

### Community
- [Vercel Discord](https://vercel.com/discord)
- [Next.js GitHub](https://github.com/vercel/next.js/discussions)

### Projekto Support (1 mėnesis)
- Email: [pardavėjo email]
- Atsakymo laikas: 24 val

---

## Greita Pradžia - Cheat Sheet

```bash
# 1. Upload į GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 2. Import į Vercel
# → vercel.com → New Project → Import GitHub repo

# 3. Pridėti Environment Variables
# → Project Settings → Environment Variables → Add

# 4. Redeploy
# → Deployments → Redeploy

# 5. Custom Domain
# → Project Settings → Domains → Add
```

---

## Išvada

Deployment į Vercel yra:
- ⚡ Greitas (15-20 min)
- 💰 Nemokamas
- 🔄 Automatinis (git push = deploy)
- 🌍 Global CDN
- 🔒 Saugus (HTTPS automatiškai)

**Jūsų svetainė bus production-ready ir prieinama pasauliniam mastu per 20 minučių!**

---

**Sėkmės su jūsų nauja svetaine!** 🚀

*Dokumentas atnaujintas: 2025-01-09*
