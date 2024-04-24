import { CollectionConfig, FieldHook } from 'payload/types'

const formatSlug: FieldHook = async ({ value, data }) =>
  data?.name?.replace(/ /g, '-').toLowerCase() ?? value

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
