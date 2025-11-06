# 🚀 Sportogalia - Vercel Deployment Instrukcijos

✅ **Kodas jau yra GitHub:** https://github.com/DomantasCode/SportoGalia

---

## 📋 Deployment žingsniai

### 1️⃣ Prisijunkite prie Vercel

1. Eikite į **https://vercel.com**
2. Spauskite **"Sign Up"** arba **"Log In"**
3. Pasirinkite **"Continue with GitHub"**
4. Autorizuokite Vercel prieigą prie GitHub

---

### 2️⃣ Import projekto iš GitHub

1. Po prisijungimo spauskite **"Add New..."** → **"Project"**
2. Pamatysite savo GitHub repositories sąrašą
3. Raskite **"SportoGalia"** repository
4. Spauskite **"Import"**

---

### 3️⃣ Konfigūruokite projektą

Vercel automatiškai aptiks Next.js projektą ir užpildys nustatymus:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**Palikite viską kaip yra** - Vercel automatiškai viską sukonfigūruos!

---

### 4️⃣ Pridėkite Environment Variables (SVARBU!)

Prieš deployment'ą, pridėkite email konfigūraciją:

1. Deployment lange spauskite **"Environment Variables"**
2. Pridėkite šias reikšmes:

#### Jei naudojate Gmail:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = jusu-email@gmail.com
SMTP_PASSWORD = jusu-app-password
SMTP_FROM = noreply@sportogalia.lt
CONTACT_EMAIL = info@sportogalia.lt
```

**⚠️ SVARBU apie Gmail App Password:**
- NEgalite naudoti paprastą Gmail slaptažodį
- Reikia sukurti **App Password**:
  1. Eikite į https://myaccount.google.com/security
  2. Įjunkite **2-Step Verification**
  3. Eikite į **App passwords**
  4. Sukurkite naują App password
  5. Naudokite tą 16 simbolių kodą kaip `SMTP_PASSWORD`

#### Arba naudokite kitus SMTP tiekėjus:
- SendGrid
- Mailgun
- Amazon SES
- Custom SMTP serveris

---

### 5️⃣ Deploy!

1. Spauskite **"Deploy"**
2. Vercel pradės:
   - ✅ Įdiegti priklausomybes (`npm install`)
   - ✅ Build projektą (`npm run build`)
   - ✅ Deploy svetainę

3. Po **2-3 minučių** pamatysite:
   - ✅ **Success!** pranešimą
   - 🌐 Jūsų svetainės URL (pvz. `sportogalia.vercel.app`)

---

## 🌐 Prijunkite savo domeną (sportogalia.lt)

### Žingsnis 1: Pridėkite domeną Vercel

1. Eikite į savo projektą Vercel
2. Spauskite **"Settings"** → **"Domains"**
3. Įveskite: `sportogalia.lt` ir `www.sportogalia.lt`
4. Spauskite **"Add"**

### Žingsnis 2: Atnaujinkite DNS Hostinger

Vercel parodys DNS records, kuriuos reikia pridėti. Eikite į **Hostinger DNS Management**:

#### A Record:
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 14400
```

#### CNAME Record:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 14400
```

### Žingsnis 3: Palaukite

- DNS propagacija gali užtrukti **5-48 valandas**
- Dažniausiai veikia per **1-2 valandas**
- Galite patikrinti: https://dnschecker.org

---

## 🔄 Automatinis deployment

**Puiki naujiena!** Kai tik push'insite pakeitimus į GitHub:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel **automatiškai** rebuild'ins ir deploy'ins naują versiją! 🎉

---

## 📧 Email formos testavimas

Po deployment patikrinkite:

1. **Kontaktų forma** (`/kontaktai`)
   - Užpildykite formą
   - Spauskite "Siųsti"
   - Turėtumėte gauti email į `CONTACT_EMAIL`

2. **Registracijos forma** (`/registracija`)
   - Patikrinkite Exoclass iframe veikimą
   - Forma turėtų veikti normaliai

---

## 🐛 Troubleshooting

### Problema: Email forma neveikia
**Sprendimas:**
1. Vercel → Settings → Environment Variables
2. Patikrinkite ar visos reikšmės teisingos
3. Jei pakeitėte, reikia **Redeploy**:
   - Deployments → Latest → kebabas (...) → Redeploy

### Problema: Paveikslėliai neatsiranda
**Sprendimas:**
- Vercel automatiškai optimizuoja images
- Jei vistiek neveikia, patikrinkite Vercel Logs

### Problema: Build klaida
**Sprendimas:**
1. Vercel → Deployments → Failed deployment → View Logs
2. Patikrinkite klaidos pranešimą
3. Ištaisykite lokalioje versijoje
4. Push į GitHub - Vercel automatiškai rebuild'ins

---

## 📊 Peržiūrėkite Analytics

Vercel suteikia nemokamą analytics:
1. Vercel → Savo projektas → Analytics
2. Matysite:
   - Lankytojų skaičių
   - Puslapių peržiūras
   - Performance metrics

---

## 💰 Kaina

**100% NEMOKAMA** su šiais limitais:
- ✅ Unlimited puslapiai
- ✅ Automatinis SSL
- ✅ 100GB bandwidth per mėnesį
- ✅ Unlimited deployment'ai
- ✅ Custom domenas

Jūsų projektas tikrai tilps į nemokamą planą! 🎉

---

## 🔗 Naudingi linkai

- **Jūsų GitHub Repo:** https://github.com/DomantasCode/SportoGalia
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs

---

## 📝 Po Deployment

1. ✅ Patikrinkite ar visos svetainės dalys veikia
2. ✅ Išbandykite kontaktų formą
3. ✅ Patikrinkite registracijos formą
4. ✅ Peržiūrėkite visas naujienas
5. ✅ Pridėkite savo domeną (sportogalia.lt)

---

## 🎉 Sveikiname!

Jūsų svetainė dabar yra live internete! 🚀

**Preview URL:** https://sportogalia.vercel.app (arba panašus)

Dalijinkitės su draugais ir pradėkite naudoti! 💪
