import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload/types'

const ContactUs: GlobalConfig = {
  slug: 'contact-us',
  label: 'Contact Us',
  hooks: {
    afterChange: [() => revalidatePath('/contact-us')],
  },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
      required: true,
    },
    {
      name: 'social_card',
      label: 'Social Card',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default ContactUs
