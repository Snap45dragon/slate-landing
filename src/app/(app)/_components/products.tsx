import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  category?: string
}

const Products = async (params: Props) => {
  const payload = await getPayload({ config })
  const categories = await payload.find({ collection: 'categories', depth: 1, pagination: false })
  const products = await payload.find({
    collection: 'products',
    depth: 2,
    pagination: false,
    where: params.category ? { 'category.slug': { equals: params.category } } : {},
  })
  console.log(params.category)
  console.log(products)
  if (products.totalDocs === 0) notFound()

  return (
    <div className="contact-page-form">
      <div className="container w-container">
        <div className="contact-page-wrap">
          <h2 className="section-title text-center">Explore our wide range of products</h2>
          <div
            className="w-layout-grid contact-page-grid wf-grid"
            style={{
              paddingTop: '56px',
              position: 'relative',
              alignItems: 'start',
              gridColumnGap: 0,
            }}
          >
            <div className="categories-sidebar">
              <div className="sidebar-widget background-color">
                <h2 className="widget-title">Categories</h2>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <Link href="/products" className="w-inline-block">
                        <h3
                          className="sidebar-category-title"
                          style={!params.category ? { color: 'var(--primary-color)' } : {}}
                        >
                          All
                        </h3>
                      </Link>
                    </div>
                    {categories.docs.map((category, index) => (
                      <div key={index} role="listitem" className="w-dyn-item">
                        <Link href={`/products/${category.slug}`} className="w-inline-block">
                          <h3
                            className="sidebar-category-title"
                            style={
                              params.category === category.slug
                                ? { color: 'var(--primary-color)' }
                                : {}
                            }
                          >
                            {category.name}
                          </h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-wrap">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items w-row">
                  {products.docs.map((product, index) => (
                    <div
                      key={index}
                      role="listitem"
                      className="blog-collection-item w-dyn-item w-col w-col-6"
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
                        </div>
                        <h2 className="blog-title">{product.name}</h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
