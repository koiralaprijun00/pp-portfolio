import type { Block } from 'payload'

export const PersonalHero: Block = {
  slug: 'personalHero',
  interfaceName: 'PersonalHeroBlock',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
      admin: {
        description: 'Full name (e.g., "Prakash Paudel")',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Professional Title',
      admin: {
        description: 'Main professionals title (e.g., "Professor of Computer Science")',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      label: 'Subtitle',
      admin: {
        description:
          'Additional title or specialization (e.g., "AI & Machine Learning Researcher")',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      admin: {
        description: 'Brief professional description (2-3 sentences)',
      },
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
      label: 'Professional Photo',
      admin: {
        description: 'Upload a professional headshot or photo',
      },
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Key Statistics',
      admin: {
        description: 'Add key statistics to highlight achievements',
      },
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          label: 'Value',
          admin: {
            description: 'e.g., "45" or "12+"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Label',
          admin: {
            description: 'e.g., "Publications" or "Grants Secured"',
          },
        },
      ],
      maxRows: 4,
    },
    {
      name: 'primaryCTA',
      type: 'group',
      label: 'Primary Call to Action',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Button Text',
          admin: {
            description: 'e.g., "View Publications" or "Contact Me"',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
          admin: {
            description: 'e.g., "/publications" or "/contact"',
          },
        },
      ],
    },
    {
      name: 'secondaryCTA',
      type: 'group',
      label: 'Secondary Call to Action (Optional)',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Button Text',
          admin: {
            description: 'e.g., "Download CV" or "Learn More"',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL',
          admin: {
            description: 'e.g., "/cv" or "/about"',
          },
        },
      ],
    },
  ],
}
