import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

const Company: GlobalConfig = {
  slug: 'company',
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
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'catalogue',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'social_links',
      label: 'Social Links',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'not_found_image',
      label: 'Not Found Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Company
