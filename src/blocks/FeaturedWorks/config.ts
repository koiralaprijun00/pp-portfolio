import type { Block } from 'payload'

export const FeaturedWorks: Block = {
  slug: 'featuredWorks',
  interfaceName: 'FeaturedWorksBlock',
  fields: [
    {
      name: 'works',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: false,
        },
        {
          name: 'url',
          type: 'text',
          required: false,
        },
        {
          name: 'description',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
  labels: {
    plural: 'Featured Works Sections',
    singular: 'Featured Works Section',
  },
}
