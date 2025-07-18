export const Hero = {
  slug: 'hero',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'intro', type: 'textarea', required: true },
    { name: 'imageUrl', type: 'upload', relationTo: 'media', required: false },
  ],
}
