import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Company } from '@/payload-types'
import './custom.css'

export const metadata = {
  title: 'Slate Hardwares',
  description: 'Your quality store for furniture hardware needs.',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadHMR({ config })
  const company: Company = await payload.findGlobal({ slug: 'company', depth: 1 })
  return (
    <html lang="en">
      <body>
        <Navbar company={company} />
        {children}
        <Footer company={company} />
      </body>
    </html>
  )
}
