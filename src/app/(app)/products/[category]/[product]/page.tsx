import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { convertLexicalToHTML, defaultHTMLConverters } from '@payloadcms/richtext-lexical'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    product: string
  }
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const products = await payload.find({
    collection: 'products',
    depth: 2,
  })
  return products.docs.map((product) => ({
    params: {
      product: product.slug,
    },
  }))
}

const ProductPage = async ({ params }: Props) => {
  const payload = await getPayloadHMR({ config })
  const products = await payload.find({
    collection: 'products',
    depth: 2,
    where: { slug: { equals: params.product } },
  })
  if (products.totalDocs === 0) notFound()
  const product = products.docs[0]
  const description = await convertLexicalToHTML({
    data: product.description,
    converters: defaultHTMLConverters,
    payload: payload,
  })

  return (
    <div className="blog-single-wrap">
      <div className="container w-container">
        <div className="single-content-wrap">
          <div className="w-layout-grid blog-single-grid wf-grid">
            <div className="blog-single-content-wrap">
              <img
                loading="lazy"
                width={915}
                src={product.image.url}
                alt={product.image.alt}
                className="blog-single-image"
              />
            </div>
            <div className="blog-single-sidebar">
              <div className="breadcrumb-wrap" style={{ fontSize: '18px' }}>
                <Link href="/products" className="breadcrumb-link">
                  Products
                </Link>
                <div className="breadcrumb-separator">/</div>
                <Link href={`/products/${product.category.slug}`} className="breadcrumb-link">
                  {product.category.name}
                </Link>
              </div>
              <h1 className="blog-single-title">{product.name}</h1>
              <div
                className="sidebar-widget first-widget"
                style={{ borderTop: '1px solid #e5e5e5', paddingTop: '48px' }}
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <section className="blog-section">
        <div
          className="section-title-wrap"
          style={{ backgroundColor: '#f4f0ec', paddingTop: '24px', paddingBottom: '28px' }}
        >
          <h2 className="section-title center-small-space">Related Products</h2>
          <p className="section-title-content">Continue to write your living</p>
        </div>
        <div className="container w-container">
          <div className="blog-wrap home-page-blog">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {product.related_products?.map((product, index) => (
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
    </div>
  )
}

export default ProductPage
