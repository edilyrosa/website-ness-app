import { Inter } from "next/font/google";
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Confecciones NESS",
  description: "Taller artesanal de accesorios femeninos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth focus:scroll-smooth">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" href="/favicon.ico" sizes="16x16"/>
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="32x32 16x16"/>
      </Head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
