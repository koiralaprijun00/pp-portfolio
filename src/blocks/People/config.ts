export const People = {
  slug: 'people',
  fields: [
    {
      name: 'people',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'title', type: 'text', required: false },
        { name: 'image', type: 'upload', relationTo: 'media', required: false },
        { name: 'url', type: 'text', required: false },
      ],
    },
  ],
}
