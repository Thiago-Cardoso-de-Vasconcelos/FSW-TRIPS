import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { NextAuthProvider } from '@/providers/auth';
import Header from '../components/Header';
import Footer from '@/components/Footer';
import ToastProvider from '@/providers/toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FWS Trips',
  description: 'Sistemas de Reserva de Viagens!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={poppins.className}>
        <ToastProvider>
          <NextAuthProvider>
            <div className='min-h-screen flex flex-col'>
              <Header />
              <div className='flex-grow'>{children}</div>
              <Footer />
            </div>
          </NextAuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
