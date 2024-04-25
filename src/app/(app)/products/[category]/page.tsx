import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Products from '../../_components/products'

type Props = {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config })
  const categories = await payload.find({ collection: 'categories', depth: 1, pagination: false })
  return categories.docs.map((category) => ({
    params: {
      category: category.slug,
    },
  }))
}

const ProductsPage = async ({ params }: Props) => {
  return <Products category={params.category} />
}

export default ProductsPage
