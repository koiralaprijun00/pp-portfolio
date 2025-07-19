import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type ResearcherHomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const researcherHome: (
  args: ResearcherHomeArgs,
) => RequiredDataFromCollectionSlug<'pages'> = ({ heroImage, metaImage }) => {
  return {
    title: 'Prakash Paudel - Professor of Computer Science and Engineering',
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'About Me',
            url: '/about',
          },
        },
        {
          link: {
            type: 'custom',
            appearance: 'outline',
            label: 'Contact',
            url: '/contact',
          },
        },
      ],
      media: heroImage.id,
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'PRAKASH PAUDEL',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Professor of Computer Science and Engineering',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Leading researcher in artificial intelligence, machine learning, and sustainable computing. Dedicated to advancing technology for social impact and environmental sustainability.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      // Impact Section Block
      {
        blockName: 'Impact Section',
        blockType: 'impact',
        stats: [
          {
            label: 'Publications',
            value: 45,
            description: 'including peer-reviewed journal articles and conference papers',
          },
          {
            label: 'Grants Secured',
            value: 12,
            description:
              'research and capacity building grants from national and international agencies',
          },
          {
            label: 'People Worked',
            value: 85,
            description:
              'including research scientists, post-doctoral researchers, and support staff',
          },
          {
            label: 'Young Researchers Trained',
            value: 65,
            description: 'including research interns, thesis students, and junior researchers',
          },
          {
            label: 'Events Organized',
            value: 28,
            description: 'including international conferences, workshops, and seminars',
          },
          {
            label: 'Researchers Collaborated',
            value: 120,
            description: 'from 25+ countries across Europe, Asia, North America, and Australia',
          },
        ],
      },
      // Publications Section Block
      {
        blockName: 'Publications Section',
        blockType: 'publications',
        researchArticles: [
          {
            title: 'Deep Learning Approaches for Climate Change Prediction',
            url: 'https://doi.org/10.1016/j.envsoft.2023.105432',
          },
          {
            title: 'Sustainable Computing: Green AI for Environmental Impact',
            url: 'https://doi.org/10.1109/TSC.2023.123456',
          },
          {
            title: 'Machine Learning in Healthcare: A Comprehensive Review',
            url: 'https://doi.org/10.1016/j.jbi.2023.104321',
          },
          {
            title: 'AI Ethics and Responsible Technology Development',
            url: 'https://doi.org/10.1007/s13347-023-00645-2',
          },
        ],
        popularArticles: [
          {
            title: 'The Future of AI: Balancing Innovation with Responsibility',
            url: 'https://medium.com/@prakashpaudel/ai-future-innovation-responsibility',
          },
          {
            title: 'How Machine Learning is Revolutionizing Climate Science',
            url: 'https://towardsdatascience.com/ml-climate-science-revolution',
          },
          {
            title: 'Sustainable Computing: Why Green AI Matters',
            url: 'https://techcrunch.com/sustainable-computing-green-ai',
          },
        ],
        blogPosts: [
          {
            title: 'My Journey in AI Research: Lessons Learned',
            url: 'https://prakashpaudel.com/blog/ai-research-journey',
          },
          {
            title: 'Building Ethical AI Systems: A Practical Guide',
            url: 'https://prakashpaudel.com/blog/ethical-ai-systems',
          },
          {
            title: 'The Role of Academia in AI Development',
            url: 'https://prakashpaudel.com/blog/academia-ai-development',
          },
        ],
      },
      // Media & Outreach Section Block
      {
        blockName: 'Media & Outreach Section',
        blockType: 'mediaOutreach',
        media: [
          {
            title: 'Featured in Nature: AI for Climate Change',
            url: 'https://www.nature.com/articles/s41586-023-12345-6',
            description: 'Interview about AI applications in climate science research',
          },
          {
            title: 'TEDx Talk: The Future of Sustainable Computing',
            url: 'https://www.ted.com/talks/prakash_paudel_sustainable_computing',
            description: 'Keynote presentation on green AI and sustainable technology',
          },
          {
            title: 'BBC Technology: AI Ethics in Modern Society',
            url: 'https://www.bbc.com/technology/ai-ethics-modern-society',
            description: 'Expert commentary on AI ethics and responsible development',
          },
          {
            title: 'MIT Technology Review: Green AI Revolution',
            url: 'https://www.technologyreview.com/green-ai-revolution',
            description: 'Coverage of sustainable computing research initiatives',
          },
        ],
      },
      // Featured Works Section Block
      {
        blockName: 'Featured Works Section',
        blockType: 'featuredWorks',
        works: [
          {
            title: 'ClimateAI Platform',
            description: 'An AI-powered platform for climate change prediction and analysis',
            url: 'https://climateai.prakashpaudel.com',
          },
          {
            title: 'Green Computing Framework',
            description: 'A comprehensive framework for sustainable AI development',
            url: 'https://github.com/prakashpaudel/green-computing',
          },
          {
            title: 'AI Ethics Toolkit',
            description: 'Open-source tools for building ethical AI systems',
            url: 'https://github.com/prakashpaudel/ai-ethics-toolkit',
          },
        ],
      },
      // Affiliations Section Block
      {
        blockName: 'Affiliations Section',
        blockType: 'affiliations',
        affiliations: [
          {
            name: 'University of Technology',
            description: 'Professor of Computer Science and Engineering',
            url: 'https://university.edu',
          },
          {
            name: 'AI Research Institute',
            description: 'Senior Research Fellow',
            url: 'https://ai-research.org',
          },
          {
            name: 'Climate Science Consortium',
            description: 'Advisory Board Member',
            url: 'https://climate-consortium.org',
          },
          {
            name: 'IEEE Computer Society',
            description: 'Distinguished Member',
            url: 'https://www.computer.org',
          },
        ],
      },
      // Testimonials Section Block
      {
        blockName: 'Testimonials Section',
        blockType: 'testimonials',
        testimonials: [
          {
            quote:
              'Prakash is a visionary researcher whose work on sustainable AI has fundamentally changed how we approach technology development. His commitment to ethical AI is inspiring.',
            author: 'Dr. Sarah Johnson',
            authorTitle: 'Director, AI Ethics Institute',
          },
          {
            quote:
              'Working with Prakash has been transformative. His expertise in machine learning and his dedication to mentoring young researchers has shaped my career profoundly.',
            author: 'Dr. Michael Chen',
            authorTitle: 'Former PhD Student, Now Research Scientist at Google',
          },
          {
            quote:
              "Prakash's research on climate change prediction using AI is groundbreaking. His interdisciplinary approach and commitment to real-world impact make him a true leader in the field.",
            author: 'Prof. Elena Rodriguez',
            authorTitle: 'Professor of Environmental Science',
          },
        ],
      },
      // People Section Block
      {
        blockName: 'People Section',
        blockType: 'people',
        people: [
          {
            name: 'Dr. Sarah Johnson',
            title: 'AI Ethics Researcher',
            url: 'https://sarahjohnson.com',
          },
          {
            name: 'Dr. Michael Chen',
            title: 'Machine Learning Specialist',
            url: 'https://michaelchen.com',
          },
          {
            name: 'Prof. Elena Rodriguez',
            title: 'Environmental Scientist',
            url: 'https://elenarodriguez.com',
          },
          {
            name: 'Dr. James Wilson',
            title: 'Climate Data Analyst',
            url: 'https://jameswilson.com',
          },
        ],
      },
    ],
    meta: {
      title: 'Prakash Paudel - Professor of Computer Science and Engineering',
      description:
        'Leading researcher in artificial intelligence, machine learning, and sustainable computing. Professor at University of Technology.',
      image: metaImage.id,
    },
    publishedAt: new Date().toISOString(),
  }
}
