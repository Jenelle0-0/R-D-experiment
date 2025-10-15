import './globals.css'

export const metadata = {
  title: 'R-D Experiment',
  description: 'Pre-rendering vs client-side rendering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
          {children}
        </main>
      </body>
    </html>
  )
}
