import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/sections/Footer';
import { MotionProvider } from '@/components/MotionProvider';

const lato = localFont({
  src: [
    {
      path: '../../public/fonts/lato-latin-300-normal.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/lato-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/playfair-display-latin-400-normal.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/playfair-display-latin-400-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/playfair-display-latin-700-normal.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

const siteUrl = 'https://josisouzabeauty.com.br';

export const viewport: Viewport = {
  themeColor: '#F9F8F6',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Josi Souza | Nail Design & Alongamento em Gel em João Pessoa',
    template: '%s | Josi Souza Beauty',
  },
  description:
    'Especialista em Nail Design, Alongamento em Gel, Banho em Gel, Blindagem e Spa dos Pés em João Pessoa e Santa Rita - PB. Realce sua beleza natural com biossegurança e conforto.',
  keywords: [
    'nail design joão pessoa',
    'alongamento em gel joão pessoa',
    'spa dos pés joão pessoa',
    'banho em gel santa rita',
    'blindagem de unhas',
    'esmaltação em gel',
    'manicure joão pessoa',
    'estética natural',
    'josi souza beauty',
  ],
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Josi Souza', url: siteUrl }],
  creator: 'Josi Souza',
  publisher: 'Josi Souza Beauty',
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/monogram.svg',
    shortcut: '/monogram.svg',
    apple: '/monogram.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Josi Souza Beauty',
    title: 'Josi Souza | Nail Design & Estética Natural em João Pessoa',
    description:
      'Alongamento em gel, spa dos pés e estética natural em João Pessoa e Santa Rita - PB. Agende seu atendimento exclusivo com a Nail Designer Josi Souza.',
    images: [
      {
        url: `${siteUrl}/og-image-v2.jpg`,
        width: 1200,
        height: 630,
        alt: 'Josi Souza – Nail Design & Estética Natural em João Pessoa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josi Souza | Nail Design & Estética Natural em João Pessoa',
    description:
      'Alongamento em gel, banho em gel e spa dos pés com acabamento natural e duradouro em João Pessoa.',
    images: [`${siteUrl}/og-image-v2.jpg`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['BeautySalon', 'NailSalon', 'LocalBusiness'],
      '@id': `${siteUrl}/#salon`,
      name: 'Josi Souza Beauty',
      alternateName: 'Josi Souza Nail Design',
      url: siteUrl,
      image: `${siteUrl}/josi-souza-profile.webp`,
      logo: `${siteUrl}/monogram.svg`,
      description:
        'Especialista em Nail Design, Alongamento em Gel, Blindagem e Spa dos Pés em João Pessoa e Santa Rita - PB.',
      telephone: '+5583986209170',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua Severino Antônio da Silva, 492',
        addressLocality: 'João Pessoa',
        addressRegion: 'PB',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        addressCountry: 'BR',
        addressRegion: 'PB',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'João Pessoa',
        },
        {
          '@type': 'City',
          name: 'Santa Rita',
        },
      ],
      sameAs: ['https://instagram.com/josisouza.beauty'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços de Unhas e Estética',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Alongamento em Gel',
              description: 'Unhas longas, resistentes e com acabamento impecável.',
            },
            price: '150.00',
            priceCurrency: 'BRL',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Manutenção Natural',
              description: 'Manutenção do alongamento com acabamento natural.',
            },
            price: '100.00',
            priceCurrency: 'BRL',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Banho em Gel',
              description: 'Camada protetora para fortalecer unhas naturais.',
            },
            price: '100.00',
            priceCurrency: 'BRL',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Spa dos Pés',
              description: 'Hidratação profunda, remoção de células mortas e massagem relaxante.',
            },
            price: '100.00',
            priceCurrency: 'BRL',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Blindagem',
              description: 'Proteção para unhas naturais com acabamento delicado.',
            },
            price: '50.00',
            priceCurrency: 'BRL',
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como funciona o agendamento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para garantir um atendimento exclusivo e personalizado, nossos agendamentos são realizados unicamente via WhatsApp.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais formas de pagamento aceitas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Trabalhamos com Pix e cartões de crédito/débito. Para cursos e mentorias, oferecemos condições especiais de parcelamento.',
          },
        },
        {
          '@type': 'Question',
          name: 'Onde fica localizado o espaço?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Atendemos nas regiões de João Pessoa e Santa Rita. O endereço exato ou local de atendimento é enviado após a confirmação do seu agendamento.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual a durabilidade do alongamento em gel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A durabilidade está diretamente ligada ao cuidado e à manutenção, recomendada a cada 20-25 dias.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`scroll-smooth ${lato.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-text font-sans selection:bg-primary selection:text-white overflow-x-hidden antialiased">
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
