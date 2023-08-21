import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Open Jira',
  description: 'Open Jira',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
