import { getPayload } from 'payload'
import config from '@payload-config'
import Form from './form'
import { Company } from '@/payload-types'

const ContactUsPage = async () => {
  const payload = await getPayload({ config })
  const contactUs = await payload.findGlobal({ slug: 'contact-us', depth: 1 })
  const company = (await payload.findGlobal({ slug: 'company', depth: 1 })) as AdjustDepth<
    Company,
    1
  >

  return (
    <div>
      <section className="contact-page-form">
        <div className="container w-container">
          <div className="contact-page-wrap">
            <h2 className="section-title text-center contact-us-title">{contactUs.title}</h2>
            <div className="w-layout-grid contact-page-grid wf-grid">
              <div className="contact-detail-wrap">
                <div className="contact-detail-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35fa244c2bd431a603_contact-icon-one.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href={`mailto:${contactUs.email}`} className="contact-link">
                    {contactUs.email}
                  </a>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon-wrap">
                    <img
                      src="https://uploads-ssl.webflow.com/6194e0af852e05a5be106504/619c8d35c483a1848884ce54_contact-icon-three.svg"
                      loading="lazy"
                      alt="Contact Icon"
                    />
                  </div>
                  <a href={`https://${contactUs.website}`} className="contact-link">
                    {contactUs.website}
                  </a>
                </div>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-section">
        <div className="container w-container">
          <div className="call-to-action-wrap">
            <h2 className="call-to-action-title">{contactUs.social_card.title}</h2>
            <p className="call-to-action-content">{contactUs.social_card.description}</p>
            <div className="contact-social-wrap">
              {company.social_links.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="contact-social-link w-inline-block"
                  target="_blank"
                >
                  <img src={`/api/media/file/${social.icon.filename}`} alt={social.icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUsPage
