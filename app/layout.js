import './globals.css'

export const metadata = {
  title: 'R-D Experiment: Pre-rendering vs Client-side Rendering Demo',
  description: 'This experiment demonstrates the differences between pre-rendering and client-side rendering using Next.js. This website is the pre-rendered version.',
  viewport: 'width=device-width, initial-scale=1',
  other: {
    "google-site-verification": "oEKr8HfUMuU5I5jRnd7RnUfRIzFWHknTTUBVaiYn0jQ",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
