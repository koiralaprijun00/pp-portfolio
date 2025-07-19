import type { Block } from 'payload'

export const MediaOutreach: Block = {
  slug: 'mediaOutreach',
  interfaceName: 'MediaOutreachBlock',
  fields: [
    {
      name: 'media',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
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
    plural: 'Media & Outreach Sections',
    singular: 'Media & Outreach Section',
  },
}
