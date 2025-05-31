import Header from "@/layout/Header";
import "./globals.css";
import Footer from "@/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <meta charset="UTF-8" /> */}
        <meta
          property="og:title"
          content="I’m Quang Cối, based in Hanoi, Vietnam!"
        />
        <meta
          property="og:description"
          content="Designing the future, one idea at a time! Nothing is impossible"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/diisbdixw/image/upload/v1746896053/ogImage_ymomsy.jpg"
        />
        <meta property="og:url" content="https://quanghv.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="quanghv.netlify.app" />

        <link rel="icon" type="image/svg+xml" href="/avatar.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quang Cối</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.misn.css"
          rel="stylesheet"
        />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@4.1.8/dist/tailwind.min.css"
          rel="stylesheet"
        /> */}
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
