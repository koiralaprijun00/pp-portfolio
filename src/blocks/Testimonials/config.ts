export const Testimonials = {
  slug: 'testimonials',
  fields: [
    {
      name: 'testimonials',
      type: 'array',
      fields: [
        { name: 'quote', type: 'textarea', required: true },
        { name: 'author', type: 'text', required: true },
        { name: 'authorTitle', type: 'text', required: false },
        { name: 'image', type: 'upload', relationTo: 'media', required: false },
      ],
    },
  ],
}
