import Header from '@/layout/Header';
import './globals.css';
import Footer from '@/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: 20 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
