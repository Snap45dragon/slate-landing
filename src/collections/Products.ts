import { revalidatePath } from 'next/cache'
import { CollectionConfig, FieldHook } from 'payload'

const formatSlug: FieldHook = async ({ value, data }) =>
  data?.name?.replace(/ /g, '-').toLowerCase().trim() ?? value

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  hooks: {
    afterChange: [() => revalidatePath('/', 'layout')],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'related_products',
      label: 'Related Products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
    },
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeChange: [formatSlug],
      },
      admin: {
        readOnly: true,
      },
    },
  ],
}
