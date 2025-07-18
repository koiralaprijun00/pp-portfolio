export const Impact = {
  slug: 'impact',
  fields: [
    {
      name: 'stats',
      type: 'array',
      required: true,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'number', required: true },
        { name: 'description', type: 'text', required: false },
      ],
    },
  ],
}
