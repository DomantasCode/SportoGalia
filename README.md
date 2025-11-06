# Sportogalia - Vaikų ir šeimos sporto akademija

Šiuolaikinis sporto akademijos website, sukurtas naudojant Next.js 14, React ir Tailwind CSS. Svetainė skirta vaikų ir šeimos sporto akademijai, teikiančiai kineziterapijos ir sporto paslaugas.

## Funkcionalumas

### Viešieji puslapiai
- **Pagrindinis puslapis** - Hero sekcija, 3 kortelės su pagrindinėmis paslaugomis, CTA sekcija
- **Apie mus** - Akademijos misija, vertybės, filosofija
- **Paslaugos** - Detalus paslaugų aprašymas (grupinė/individuali kineziterapija, treniruotės)
- **Treneriai** - Trenerių profiliai su kvalifikacijomis
- **Naujienos** - Naujienų sąrašas ir individualūs straipsniai
- **Kontaktai** - Kontaktinė informacija ir forma
- **Registracija** - Registracijos forma su validacija

### Admin panelė (/admin)
- Prisijungimo sistema (slaptažodis: **admin123**)
- Naujienų valdymas (CRUD operacijos)
- Naujienų kūrimas ir redagavimas
- Naujienų trynimas

### Kitos funkcijos
- Responsive dizainas (mobile/tablet/desktop)
- Email siuntimas (kontaktų ir registracijos formos)
- Smooth scroll navigacija
- Dinaminis routing naujienoms
- SEO optimizacija

## Technologijos

- **Next.js 14** - React framework su App Router
- **React 19** - UI biblioteka
- **Tailwind CSS** - Utility-first CSS framework
- **Nodemailer** - Email siuntimui
- **JSON** - Duomenų saugojimui (naujienos)

## Projekto struktūra

```
Sportas/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── admin/news/       # Naujienų CRUD API
│   │   ├── contact/          # Kontaktų API
│   │   └── register/         # Registracijos API
│   ├── admin/                # Admin panelė
│   ├── apie-mus/             # Apie mus puslapis
│   ├── paslaugos/            # Paslaugos puslapis
│   ├── treneriai/            # Treneriai puslapis
│   ├── naujienos/            # Naujienos
│   │   └── [slug]/           # Dinaminis naujienos puslapis
│   ├── kontaktai/            # Kontaktai puslapis
│   ├── registracija/         # Registracijos puslapis
│   ├── layout.js             # Root layout
│   ├── page.js               # Pagrindinis puslapis
│   └── globals.css           # Globalūs stiliai
├── components/               # React komponentai
│   ├── Header.js             # Navigacija
│   ├── Footer.js             # Footer
│   ├── ContactForm.js        # Kontaktų forma
│   └── RegistrationForm.js   # Registracijos forma
├── data/                     # JSON duomenys
│   └── news.json             # Naujienų duomenys
├── public/                   # Statiniai failai
│   └── images/               # Nuotraukos
├── .env.example              # Environment variables pavyzdys
├── .gitignore
├── jsconfig.json             # Path aliases
├── tailwind.config.js        # Tailwind konfigūracija
├── postcss.config.js
├── package.json
└── README.md
```

## Instaliavimas ir paleidimas

### 1. Klonuokite projektą
```bash
git clone <repository-url>
cd Sportas
```

### 2. Įdiekite priklausomybes
```bash
npm install
```

### 3. Sukonfigūruokite email (neprivaloma)
Nukopijuokite `.env.example` į `.env` ir užpildykite savo SMTP duomenis:

```bash
cp .env.example .env
```

Redaguokite `.env` failą:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@sportogalia.lt
CONTACT_EMAIL=info@sportogalia.lt
```

**Gmail vartotojams:**
- Reikia sukurti "App Password" savo Google paskyroje
- Eikite į: Google Account → Security → 2-Step Verification → App passwords
- Sukurkite naują app password ir naudokite jį SMTP_PASSWORD laukelyje

### 4. Paleiskite development serverį
```bash
npm run dev
```

Svetainė bus prieinama: http://localhost:3000

### 5. Build produkcijai
```bash
npm run build
npm start
```

## Naudojimas

### Admin panelė

1. Atidarykite http://localhost:3000/admin
2. Įveskite slaptažodį: **admin123**
3. Galite:
   - Kurti naujas naujienas
   - Redaguoti esamas
   - Ištrinti naujienas

### Naujienų pridėjimas

1. Prisijunkite prie admin panelės
2. Spauskite "+ Nauja naujiena"
3. Užpildykite formą:
   - **Pavadinimas** - Naujienos antraštė
   - **Slug** - URL (pvz., "nauja-naujiena")
   - **Santrauka** - Trumpas aprašymas
   - **Turinys** - Pilnas straipsnis
   - **Autorius** - Autoriaus vardas
4. Spauskite "Išsaugoti"

Naujiena bus matoma puslapyje: `/naujienos/[slug]`

### Email konfigūracija

Formos (kontaktai ir registracija) naudoja Nodemailer. Jei nekonfigūruosite SMTP, gausite klaidas bandant siųsti formas.

**Alternatyvos:**
- **Development:** Naudokite [Ethereal Email](https://ethereal.email/) - automatiškai generuoja fake email paskyrą testavimui
- **Production:** Gmail, SendGrid, AWS SES, Mailgun, ir kt.

## Dizainas

Svetainė sukurta pagal sportogalia.lt dizainą:
- Minimalistinis, švarus dizainas
- Balta spalvų schema su mėlynu akcentu
- Professional typography (Inter šriftas)
- Responsive layouts visuose įrenginiuose
- Smooth animations ir transitions

## Galimi patobulinimai

- [ ] Tikros nuotraukos vietoje placeholder'ių
- [ ] Fotografijų upload funkcionalumas admin panelėje
- [ ] Daugiau autentifikacijos lygių (JWT, session-based)
- [ ] Duomenų bazės integracija (MongoDB, PostgreSQL)
- [ ] Online booking sistema
- [ ] Member portal
- [ ] Payment integration
- [ ] Newsletter subscription
- [ ] Testimonials sekcija
- [ ] FAQ puslapis
- [ ] Multi-language support (LT/EN)

## Pagalba

Jei turite klausimų ar problemų:

1. Patikrinkite ar visos priklausomybės įdiegtos (`npm install`)
2. Patikrinkite ar development serveris veikia (`npm run dev`)
3. Patikrinkite console errors naršyklėje (F12 → Console)
4. Patikrinkite terminal output dėl serverio klaidų

## Licenzija

Šis projektas sukurtas kaip pavyzdys ir gali būti laisvai naudojamas bei modifikuojamas.

---

**Sukurta su ❤️ naudojant Next.js ir Tailwind CSS**
