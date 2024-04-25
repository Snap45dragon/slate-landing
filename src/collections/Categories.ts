import { revalidatePath } from 'next/cache'
import { CollectionConfig, FieldHook } from 'payload/types'

const formatSlug: FieldHook = async ({ value, data }) =>
  data?.name?.replace(/ /g, '-').toLowerCase() ?? value

export const Categories: CollectionConfig = {
  slug: 'categories',
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
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
