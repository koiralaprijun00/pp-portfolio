export const MediaOutreach = {
  slug: 'mediaOutreach',
  fields: [
    {
      name: 'media',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'description', type: 'text', required: false },
      ],
    },
  ],
}
