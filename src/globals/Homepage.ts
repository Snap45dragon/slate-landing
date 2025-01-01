import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'

const Homepage: GlobalConfig = {
  slug: 'homepage',
  hooks: {
    afterChange: [() => revalidatePath('/')],
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'button',
          type: 'text',
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
      name: 'services',
      type: 'group',
      label: ' ',
      fields: [
        {
          name: 'service',
          type: 'array',
          maxRows: 3,
          minRows: 3,
          required: true,
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
    },
    {
      name: 'introduction',
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
        {
          name: 'button',
          type: 'text',
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
      name: 'numbers',
      type: 'group',
      fields: [
        {
          name: 'number',
          label: ' ',
          type: 'array',
          maxRows: 4,
          minRows: 4,
          required: true,
          fields: [
            {
              type: 'row',
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
        },
      ],
    },
    {
      name: 'top_categories',
      label: 'Top Categories',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'testimonial',
          label: ' ',
          type: 'array',
          minRows: 3,
          maxRows: 3,
          required: true,
          fields: [
            {
              name: 'name',
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
              name: 'tag',
              type: 'text',
              required: true,
            },
            {
              name: 'review',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'brands',
      type: 'group',
      fields: [
        {
          name: 'brand',
          label: ' ',
          type: 'array',
          minRows: 5,
          maxRows: 5,
          required: true,
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'top_products',
      label: 'Top Products',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'products',
          type: 'relationship',
          relationTo: 'products',
          hasMany: true,
          required: true,
        },
      ],
    },
    {
      name: 'cta_card',
      label: 'CTA Card',
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
        {
          name: 'button',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default Homepage
