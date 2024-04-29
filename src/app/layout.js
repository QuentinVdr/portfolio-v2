import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quentin VERDIER | Portfolio',
  description: 'Portfolio de Quentin VERDIER, jeune développeur fullstack en alternance.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
