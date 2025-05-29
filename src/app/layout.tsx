import Header from '@/layout/Header';
import './globals.css';
import Footer from '@/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.8/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="h-full bg-zinc-50 dark:bg-black">
        <div>
          <div className="relative flex w-full flex-col">
            <Header />
            <main className="flex-auto">
              <div className="sm:px-8 mt-30 sm:mt-40">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
