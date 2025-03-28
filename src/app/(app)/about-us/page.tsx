import { getPayload } from 'payload'
import config from '@payload-config'
import { AboutUs } from '@/payload-types'
import { RichText } from '@payloadcms/richtext-lexical/react'

const AboutPage = async () => {
  const payload = await getPayload({ config })
  const aboutUs = (await payload.findGlobal({ slug: 'about-us', depth: 1 })) as AdjustDepth<
    AboutUs,
    1
  >
  return (
    <div>
      <section className="about-blockquote-section">
        <div className="container w-container">
          <div className="intro-blockquote-wrap">
            <blockquote>
              <RichText data={aboutUs.quote} />
            </blockquote>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container w-container">
          {aboutUs.sections.map(async (section, index) => (
            <div
              key={index}
              className={
                index % 2 !== 0
                  ? 'w-layout-grid about-grid-wrap wf-grid about-toggle'
                  : 'w-layout-grid about-grid-wrap wf-grid'
              }
            >
              <div
                className={
                  index % 2 !== 0 ? 'about-content-wrap left-spacing' : 'about-content-wrap'
                }
                style={index % 2 !== 0 ? { order: 999 } : {}}
              >
                <h2 className="about-heading">
                  <strong>{section.title}</strong>
                </h2>
                <p className="about-content">
                  <RichText data={section.description} />
                </p>
              </div>
              <img
                src={`/api/media/file/${section.image.filename}`}
                loading="lazy"
                alt={section.image.alt}
                className="about-image"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="professionals-section about-page" style={{ marginBottom: '80px' }}>
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">{aboutUs.closing.title}</h2>
            <p className="section-title-content">
              <RichText data={aboutUs.closing.description} />
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
