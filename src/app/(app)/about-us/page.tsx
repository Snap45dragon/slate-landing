import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { convertLexicalToHTML, defaultHTMLConverters } from '@payloadcms/richtext-lexical'
import { AboutUs } from '@/payload-types'

const AboutPage = async () => {
  const payload = await getPayloadHMR({ config })
  const aboutUs: AboutUs = await payload.findGlobal({ slug: 'about-us' })
  const convertToHTML = async (data: any) =>
    await convertLexicalToHTML({
      data: data,
      converters: defaultHTMLConverters,
      payload: payload,
    })
  return (
    <div>
      <section className="about-blockquote-section">
        <div className="container w-container">
          <div className="intro-blockquote-wrap">
            <blockquote
              dangerouslySetInnerHTML={{ __html: await convertToHTML(aboutUs.quote) }}
            ></blockquote>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container w-container">
          {aboutUs.sections.map(async (section, index) => (
            <div
              className="w-layout-grid about-grid-wrap wf-grid"
              style={index % 2 !== 0 ? { gridTemplateColumns: '1fr .8fr' } : {}}
            >
              <div
                className="about-content-wrap"
                style={index % 2 !== 0 ? { marginLeft: '12%', order: 999 } : {}}
              >
                <h2 className="about-heading">
                  <strong>{section.title}</strong>
                </h2>
                <p
                  className="about-content"
                  dangerouslySetInnerHTML={{ __html: await convertToHTML(section.description) }}
                ></p>
              </div>
              <img
                src={section.image.url}
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
            <p
              className="section-title-content"
              dangerouslySetInnerHTML={{ __html: await convertToHTML(aboutUs.closing.description) }}
            ></p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
