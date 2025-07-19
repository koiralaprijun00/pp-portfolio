import type { Block } from 'payload'

export const Impact: Block = {
  slug: 'impact',
  interfaceName: 'ImpactBlock',
  fields: [
    {
      name: 'stats',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'number',
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
    plural: 'Impact Sections',
    singular: 'Impact Section',
  },
}
