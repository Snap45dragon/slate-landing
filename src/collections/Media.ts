import { revalidatePath } from 'next/cache'
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    disableLocalStorage: true,
  },
  hooks: {
    afterChange: [() => revalidatePath('/', 'layout')],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'filename',
      type: 'text',
      required: true,
    },
  ],
}
