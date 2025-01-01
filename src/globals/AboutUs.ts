import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

const AboutUs: GlobalConfig = {
  slug: 'about-us',
  label: 'About Us',
  hooks: {
    afterChange: [() => revalidatePath('/about-us')],
  },
  fields: [
    {
      name: 'quote',
      type: 'richText',
      required: true,
    },
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      required: true,
      fields: [
        {
          name: 'title',
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
      ],
    },
    {
      name: 'closing',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          required: true,
        },
      ],
    },
  ],
}

export default AboutUs
