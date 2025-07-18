export const Affiliations = {
  slug: 'affiliations',
  fields: [
    {
      name: 'affiliations',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'logo', type: 'upload', relationTo: 'media', required: false },
        { name: 'url', type: 'text', required: false },
        { name: 'description', type: 'text', required: false },
      ],
    },
  ],
}
