import './globals.css'

export const metadata = {
  title: 'R-D Experiment',
  description: 'Pre-rendering vs client-side rendering',
  other: {
    "google-site-verification": "oEKr8HfUMuU5I5jRnd7RnUfRIzFWHknTTUBVaiYn0jQ",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
