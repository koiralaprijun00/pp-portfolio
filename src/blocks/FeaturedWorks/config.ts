export const FeaturedWorks = {
  slug: 'featuredWorks',
  fields: [
    {
      name: 'works',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media', required: false },
        { name: 'url', type: 'text', required: false },
        { name: 'description', type: 'text', required: false },
      ],
    },
  ],
}
