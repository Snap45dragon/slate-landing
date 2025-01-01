import { getPayload } from 'payload'
import config from '@payload-config'
import Products from '../../_components/products'

type Props = {
  params: Promise<{
    category: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const categories = await payload.find({ collection: 'categories', depth: 1, pagination: false })
  return categories.docs.map((category) => ({
    params: {
      category: category.slug,
    },
  }))
}

const ProductsPage = async ({ params }: Props) => {
  const { category } = await params
  return <Products category={category} />
}

export default ProductsPage
