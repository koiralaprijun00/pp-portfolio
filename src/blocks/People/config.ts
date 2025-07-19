import type { Block } from 'payload'

export const People: Block = {
  slug: 'people',
  interfaceName: 'PeopleBlock',
  fields: [
    {
      name: 'people',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: false,
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
      ],
    },
  ],
  labels: {
    plural: 'People Sections',
    singular: 'People Section',
  },
}
