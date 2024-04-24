import { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticDir: 'media',
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
