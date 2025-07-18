export const Publications = {
  slug: 'publications',
  fields: [
    {
      name: 'researchArticles',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'popularArticles',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'blogPosts',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
}
