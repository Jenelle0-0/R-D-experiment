import './globals.css'

export const metadata = {
  title: 'R-D Experiment',
  description: 'Pre-rendering vs client-side rendering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="oEKr8HfUMuU5I5jRnd7RnUfRIzFWHknTTUBVaiYn0jQ" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
