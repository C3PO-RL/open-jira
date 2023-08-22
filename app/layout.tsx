import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import ThemeRegistry from './ThemeRegistry'
import { UIProvider } from '../context/ui'
import { Layout } from '@/components/layouts'
import { EntriesProvider } from '@/context/entries'

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
        <EntriesProvider>
          <UIProvider>
            <ThemeRegistry options={{ key: 'mui' }}>
              <Layout>{children}</Layout>
            </ThemeRegistry>
          </UIProvider>
        </EntriesProvider>
      </body>
    </html>
  )
}
