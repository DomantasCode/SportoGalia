import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sportogalia - Vaikų ir šeimos sporto akademija',
  description: 'Kineziterapija ir sportas vaikams ir šeimoms. Judėjimas - tai džiaugsmas, o ne pareiga.',
  keywords: 'kineziterapija, sportas vaikams, judėjimas, laikysena, stiprinimas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="lt">
      <head>
        <link rel="icon" href="/images/logo-favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
