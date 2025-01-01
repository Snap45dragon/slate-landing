import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

const NotFoundPage = async () => {
  const payload = await getPayload({ config })
  const company = await payload.findGlobal({ slug: 'company', depth: 2 })
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content w-form">
        <div className="w-layout-grid error-page-grid">
          <div className="error-page-content">
            <h1 className="error-page-title">404</h1>
            <h2 className="error-page-subtitle">
              We are sorry, but the page you requested was not found
            </h2>
            <Link href="/" className="button error-button w-button">
              Back To Home
            </Link>
          </div>
          <div className="error-page-image">
            <img
              src={company.not_found_image.url}
              loading="lazy"
              sizes="100vw"
              alt={company.not_found_image.alt}
              className="error-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
