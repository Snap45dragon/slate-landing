import { getPayload } from 'payload'
import config from '@payload-config'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
import { Company } from '@/payload-types'
import './custom.css'
import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Slate Hardwares',
  description: 'Your quality store for furniture hardware needs.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayload({ config })
  const company = (await payload.findGlobal({ slug: 'company', depth: 1 })) as AdjustDepth<
    Company,
    1
  >
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Navbar company={company} />
        {children}
        <Footer company={company} />
      </body>
    </html>
  )
}
