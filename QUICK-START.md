# 🚀 QUICK START - Sportogalia

## Jūsų svetainė live per 20 minučių!

---

## Žingsnis 1: Download Kodą (2 min)

**Jei gavote GitHub prieigą:**
```bash
git clone https://github.com/[USERNAME]/[REPO].git
cd [REPO]
```

**Jei gavote ZIP:**
- Download ir unzip failą
- Atverkite Terminal/CMD tame aplanke

---

## Žingsnis 2: Install Dependencies (3 min)

```bash
npm install
```

Palaukite kol įsidiegs visos priklausomybės (~2-3 min).

---

## Žingsnis 3: Test Lokale (2 min)

```bash
npm run dev
```

Atverkite naršyklėje: **http://localhost:3000**

✅ Veikia? Puiku! Pereikite prie Žingsnio 4.
❌ Neveikia? Patikrinkite ar Node.js įdiegtas: `node --version` (reikia v18+)

---

## Žingsnis 4: Push į GitHub (5 min)

### A. Sukurkite naują GitHub repository

1. Eikite į [github.com](https://github.com) → "New repository"
2. Pavadinimas: `sportogalia` (arba bet kas)
3. **Private** (jei nenorite viešo)
4. Create repository (NEĮJUNKITE "Initialize with README")

### B. Upload kodą

```bash
# Jei gavote ZIP be .git:
git init
git add .
git commit -m "Initial commit"

# Prijunkite GitHub (pakeiskite USERNAME/REPO):
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

**Pavyzdys:**
```bash
git remote add origin https://github.com/jonas123/sportogalia.git
git push -u origin main
```

---

## Žingsnis 5: Deploy į Vercel (5 min)

### A. Import projektą

1. Eikite į [vercel.com/new](https://vercel.com/new)
2. Login (GitHub rekomenduojamas)
3. "Import Git Repository"
4. Pasirinkite savo `sportogalia` repo
5. Vercel automatiškai aptiks Next.js
6. **Spauskite "Deploy"** (nekonfigūruokite nieko dar)

⏱️ Laukite 2-3 min...

🎉 **Deploy baigtas!** Gausite URL: `https://sportogalia-xxxx.vercel.app`

### B. Pridėkite Environment Variables

**Tik jei norite veikiančių formų (email):**

1. Vercel dashboard → Jūsų projektas
2. Settings → Environment Variables
3. Pridėkite šiuos:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = jusu-email@gmail.com
SMTP_PASSWORD = [Gmail App Password]
SMTP_FROM = noreply@jusudomenas.lt
CONTACT_EMAIL = info@jusudomenas.lt
```

**Gmail App Password gavimas:**
- Google Account → Security → 2-Step Verification → App passwords
- Create → Mail → Generate
- Naudokite 16 simbolių password

4. **Save** ir **Redeploy** (Deployments → ... → Redeploy)

---

## Žingsnis 6: Pakeiskite Admin Password (2 min)

**KRITIŠKAI SVARBU!**

1. Atidarykite `app/admin/page.js`
2. Raskite:
```javascript
const ADMIN_PASSWORD = 'admin123'
```
3. Pakeiskite į:
```javascript
const ADMIN_PASSWORD = 'jusu-saugus-password-2025'
```
4. Save ir push:
```bash
git add app/admin/page.js
git commit -m "Change admin password"
git push
```

Vercel automatiškai redeploy'ins per 1-2 min.

---

## ✅ BAIGTA!

### Jūsų Svetainė:
- **URL:** https://sportogalia-xxxx.vercel.app
- **Admin:** https://sportogalia-xxxx.vercel.app/admin
- **Password:** [jūsų naujas]

---

## Kas Toliau?

### Būtini Pritaikymai:

1. **Kontaktų info** - `app/kontaktai/page.js`
   - Pakeiskite telefono numerį
   - Email adresą
   - Adresą

2. **Footer** - `components/Footer.js`
   - Pakeiskite kontaktus
   - Social media links (jei turite)

3. **Logo** - Vienas iš:
   - Įkelkite `public/images/logo.png`
   - Arba pakeiskite tekstą `components/Header.js`:
     ```javascript
     <span className="text-2xl font-bold">JŪSŲ PAVADINIMAS</span>
     ```

4. **Apie Mus** - `app/apie-mus/page.js`
   - Pritaikykite tekstą sau

5. **Nuotraukos** - `public/images/`
   - Įkelkite savo nuotraukas
   - Pakeiskite paths komponentuose

### Opcionalūs Patobulinimai:

6. **Custom Domain** - Vercel Settings → Domains
   - Pridėkite savo domeną (pvz., `sportogalia.lt`)
   - Konfigūruokite DNS

7. **SEO** - `app/layout.js`
   - Atnaujinkite meta tags
   - Site name, description

8. **Naujienos** - Admin panel → `/admin`
   - Pridėkite savo naujienas
   - Ištrinkite demo naujienas

---

## Kaip Atnaujinti Content?

### Paprastas būdas - Per Admin Panel:
1. Eikite į `/admin`
2. Login su savo password
3. Redaguokite naujienas

### Developer būdas - Per Code:

```bash
# 1. Padarykite pakeitimus lokale
# 2. Commit ir push:
git add .
git commit -m "Update content"
git push

# Vercel automatiškai deploy'ins naują versiją!
```

---

## 🆘 Troubleshooting

### "Build failed" Vercel
- Patikrinkite ar `npm run build` veikia lokale
- Žiūrėkite Vercel build logs dėl error messages

### Forms neveikia
- Patikrinkite Environment Variables Vercel
- Gmail App Password (NE regular password!)
- Redeploy po env variables pridėjimo

### Admin panel 404
- URL turi būti: `/admin` (ne `/admin.html` ar pan.)
- Clear browser cache

### Changes nematomi
- Po git push, laukite 1-2 min Vercel deployment
- Vercel dashboard rodys deployment status
- Hard refresh naršyklėje (Ctrl+F5)

---

## 📖 Pilna Dokumentacija

- **[README.md](README.md)** - Projekto struktūra ir funkcionalumas
- **[DEPLOYMENT-GUIDE.md](DEPLOYMENT-GUIDE.md)** - Detali deployment instrukcija
- **[KOMERCINIS-PASIULYMAS.md](KOMERCINIS-PASIULYMAS.md)** - Produkto aprašymas

---

## 💬 Support

Turite klausimų? Susisiekite:
- **Email:** [seller email]
- **Support laikas:** 1 mėnesis po pirkimo
- **Response:** Per 24-48 val

---

## 🎉 Sveikiname!

Jūsų profesionali svetainė dabar veikia ir prieinama visam pasauliui!

**Patarimai:**
- ✅ Backup'inkite kodą reguliariai (git!)
- ✅ Pakeiskite admin password ASAP
- ✅ Testuokite visas funkcijas
- ✅ Share su draugais!

**Next steps:**
- Pritaikykite dizainą (spalvas, logo)
- Įkelkite tikrą content
- Pridėkite custom domainą
- Google Analytics (opcionalus)

---

**Mėgaukitės savo nauja svetaine!** 🚀

*Updated: 2025-01-09*
