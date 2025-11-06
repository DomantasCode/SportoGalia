# Sportogalia - Hostinger Deployment Instrukcijos

## Failas paruoštas deployment'ui
✅ `sportogalia-hostinger.zip` - Šis failas yra paruoštas įkėlimui į Hostinger

## Kas yra ZIP faile?
- `.next/` - Production build
- `app/` - Next.js aplikacijos kodas
- `components/` - React komponentai
- `data/` - JSON duomenų failai
- `public/` - Paveikslėliai ir kiti statiniai failai
- `package.json` - NPM priklausomybės
- `package-lock.json` - NPM lock failas
- `tailwind.config.js` - Tailwind CSS konfigūracija
- `postcss.config.js` - PostCSS konfigūracija
- `jsconfig.json` - JavaScript konfigūracija

## SVARBU: node_modules nėra įtraukti
ZIP failas NETURI `node_modules/` folderio (per didelis). Juos reikės įdiegti Hostingeryje.

---

## Deployment instrukcijos Hostinger

### 1. Prisijunkite prie Hostinger
- Eikite į https://www.hostinger.com
- Prisijunkite prie savo paskyros

### 2. Pasirinkite Node.js hostingą
- Eikite į Hosting → Pasirinkite savo planą
- Patikrinkite, ar turite Node.js palaikymą (Premium ar aukštesnį planą)

### 3. Įkelkite ZIP failą

#### Variantas A: Per File Manager
1. Atidarykite File Manager
2. Eikite į `public_html` arba savo domeno folderį
3. Ištrinkite visus senus failus (jei yra)
4. Upload `sportogalia-hostinger.zip`
5. Dešiniuoju pele ant ZIP → Extract

#### Variantas B: Per SSH
1. Atidarykite SSH terminalą Hostinger
2. Įkelkite failą per FTP/SFTP į serverį
3. Paleiskite:
```bash
cd ~/public_html
unzip sportogalia-hostinger.zip
```

### 4. Įdiekite priklausomybes
Per SSH terminalą:
```bash
cd ~/public_html
npm install --production
```

### 5. Sukonfigūruokite Node.js aplikaciją
1. Eikite į Hostinger → Advanced → Node.js
2. Spauskite "Create Application"
3. Nustatykite:
   - **Application mode**: Production
   - **Application root**: `public_html` (arba jūsų folderio kelias)
   - **Application URL**: Jūsų domenas (pvz., sportogalia.lt)
   - **Application startup file**: `node_modules/next/dist/bin/next`
   - **Node.js version**: 18.x ar naujesnė

4. Spauskite "Create"

### 6. Paleiskite aplikaciją
Per SSH:
```bash
cd ~/public_html
npm start
```

Arba Hostinger panele:
- Node.js sekcijoje spauskite "Restart" prie savo aplikacijos

### 7. Patikrinkite
- Atidarykite savo domeną naršyklėje
- Turėtumėte matyti veikiančią Sportogalia svetainę

---

## Troubleshooting

### Problema: "Cannot find module 'next'"
**Sprendimas**: Įsitikinkite, kad paleidote `npm install` serveryje

### Problema: "Port 3000 already in use"
**Sprendimas**: Hostinger automatiškai priskirs portą. Įsitikinkite, kad Application startup file yra `node_modules/next/dist/bin/next`

### Problema: Paveikslėliai neatsiranda
**Sprendimas**: Patikrinkite, ar `public/` folderis buvo teisingai išarchyvuotas

### Problema: 500 Error
**Sprendimas**:
1. Patikrinkite Node.js aplikacijos logus Hostinger panelėje
2. Įsitikinkite, kad Node.js versija yra 18.x ar naujesnė
3. Paleiskite `npm run build` dar kartą serveryje

---

## Environment Variables (jei reikia)
Jei turite `.env` failą (pvz., email konfigūracijai):

1. Hostinger panelėje eikite į Node.js → Savo aplikacija
2. Spauskite "Edit"
3. Pridėkite Environment Variables

Arba sukurkite `.env` failą serveryje:
```bash
cd ~/public_html
nano .env
```

Įrašykite reikalingas reikšmes, pvz.:
```
EMAIL_USER=info@sportogalia.lt
EMAIL_PASS=jūsų-slaptažodis
```

---

## Atnaujinimų deployment
Kai reikia atnaujinti svetainę:

1. Lokaliai paleiskite `npm run build`
2. Sukurkite naują ZIP failą
3. Įkelkite į serverį
4. Išarchyvuokite (perrašys senus failus)
5. Paleiskite `npm install` (jei pridėjote naujų priklausomybių)
6. Restart aplikaciją Hostinger panelėje

---

## Pagalba
- Hostinger dokumentacija: https://support.hostinger.com
- Next.js dokumentacija: https://nextjs.org/docs

Sėkmės! 🚀
