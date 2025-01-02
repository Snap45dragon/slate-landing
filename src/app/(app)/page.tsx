import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { Homepage } from '@/payload-types'

const HomePage = async () => {
  const payload = await getPayload({ config })
  const homepage = (await payload.findGlobal({
    slug: 'homepage',
    depth: 2,
  })) as AdjustDepth<Homepage, 2>
  return (
    <div>
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${homepage.hero.image.url})` }}
      >
        <div className="hero-content-wrap">
          <div className="container w-container">
            <div className="hero-content-area">
              <h1 className="hero-wrap-title">
                {homepage?.hero?.title}
                <br />
              </h1>
              <p className="hero-wrap-description">{homepage.hero.description}</p>
              <Link href="/products" className="button banner-button w-button">
                {homepage.hero.button}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="container w-container">
          <div className="service-content-wrap">
            <div className="w-layout-grid service-grid-wrap wf-grid">
              {homepage.services.service.map((service, index) => (
                <div key={index} className="service-item">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-content">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="intro-section">
        <div className="container w-container">
          <div className="w-layout-grid intro-grid-wrap wf-grid">
            <div className="intro-content-wrap">
              <h2 className="intro-section-title">{homepage.introduction.title}</h2>
              <p className="intro-content" style={{}}>
                {homepage.introduction.description}
              </p>
              <Link href="/about-us" className="button w-button">
                {homepage.introduction.button}
              </Link>
            </div>
            <img
              src={homepage.introduction.image.url}
              loading="lazy"
              alt={homepage.introduction.image.alt}
              className="right-radius-image"
            />
          </div>
        </div>
      </section>
      <section className="counter-section">
        <div className="container w-container">
          <div className="w-layout-grid counter-grid-wrap wf-grid">
            {homepage.numbers.number.map((number, index) => (
              <div key={index} className="counter-item">
                <h3 className="count-number">{number.title}</h3>
                <p className="counter-title">{number.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="project-listing-wrap home-page-projects">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">{homepage.top_categories.title}</h2>
            <p className="section-title-content">{homepage.top_categories.description}</p>
          </div>
          <div className="project-items home-page-projects">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {homepage.top_categories.categories.map((category, index) => (
                  <div key={index} className="w-dyn-item w-col w-col-6">
                    <div className="project-item">
                      <Link
                        href={`/products/${category.slug}`}
                        className="project-link-block w-inline-block"
                      >
                        <img
                          loading="lazy"
                          src={category.image.url}
                          alt={category.image.alt}
                          className="project-listing-image"
                        />
                      </Link>
                      <div className="project-listing-details">
                        <div className="project-title-wrap">
                          <Link
                            href={`/products/${category.slug}`}
                            className="project-title-link w-inline-block"
                          >
                            <h2 className="project-title">{category.name}</h2>
                          </Link>
                          <Link
                            href={`/products/${category.slug}`}
                            className="project-category-link"
                          >
                            {category.description}
                          </Link>
                        </div>
                        <div className="project-readmore">
                          <a
                            href={`/products/${category.slug}`}
                            className="project-single-link w-inline-block"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={9}
                              height={16}
                              fill="none"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1.771 14.686 7.714 8 1.77 1.314"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container w-container">
          <div className="testimonial-content-wrap">
            <h2 className="section-title text-center">{homepage.testimonials.title}</h2>
            <div className="w-layout-grid testimonial-grid wf-grid">
              {homepage.testimonials.testimonial.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-detail">
                    <div className="testimonial-image-wrap">
                      <img
                        src={testimonial.image.url}
                        loading="lazy"
                        alt={testimonial.image.alt}
                        className="testimonial-client"
                      />
                      <div className="client-detail">
                        <h3 className="client-name">{testimonial.name}</h3>
                        <div className="client-location">{testimonial.tag}</div>
                      </div>
                    </div>
                    <p className="testimonial-content">{testimonial.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="clients-section">
        <div className="container w-container">
          <div className="w-layout-grid client-gird-wrap wf-grid">
            {homepage.brands.brand.map((brand, index) => (
              <div
                key={index}
                id="w-node-cc80d0cd-42e4-2620-442a-514667d49987-b3106505"
                className="client-image-wrap"
              >
                <img src={brand.image.url} loading="lazy" alt={brand.image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="blog-section">
        <div className="container w-container">
          <div className="section-title-wrap">
            <h2 className="section-title center-small-space">{homepage.top_products.title}</h2>
            <p className="section-title-content">{homepage.top_products.description}</p>
          </div>
          <div className="blog-wrap home-page-blog">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {homepage.top_products.products.map((product, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className="blog-collection-item w-dyn-item w-col w-col-4"
                  >
                    <Link
                      href={`/products/${product.category.slug}/${product.slug}`}
                      className="blog-item"
                    >
                      <div className="blog-image-wrap">
                        <div className="blog-listing-image-container">
                          <img
                            loading="lazy"
                            src={product.image.url}
                            alt={product.image.alt}
                            className="blog-listing-image"
                          />
                        </div>
                        <div className="category-link blog-category w-inline-block">
                          <div className="blog-category">{product.category.name}</div>
                        </div>
                      </div>
                      <h2 className="blog-title">{product.name}</h2>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-section">
        <div className="container w-container">
          <div className="call-to-action-wrap">
            <h2 className="call-to-action-title">{homepage.cta_card.title}</h2>
            <p className="call-to-action-content">{homepage.cta_card.description}</p>
            <Link href="/contact-us" className="button-colored call-to-action-button w-button">
              {homepage.cta_card.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
