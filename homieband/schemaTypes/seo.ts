import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO & OpenGraph',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      description: 'The main title for your website (used in browser tabs and search results)',
      validation: (Rule) => Rule.required().max(60).warning('Longer titles may be truncated in search results'),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'A brief description of your website (used in search results and social media)',
      validation: (Rule) => Rule.required().max(160).warning('Longer descriptions may be truncated'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OpenGraph Image',
      type: 'image',
      description: 'The image that appears when your site is shared on social media (recommended: 1200x630px)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'ogTitle',
      title: 'OpenGraph Title',
      type: 'string',
      description: 'Title specifically for social media sharing (if different from site title)',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated'),
    }),
    defineField({
      name: 'ogDescription',
      title: 'OpenGraph Description',
      type: 'text',
      description: 'Description specifically for social media sharing (if different from site description)',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated'),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Keywords for SEO (comma-separated)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'The canonical URL of your website (e.g., https://www.homie.band)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'ogImage',
    },
    prepare(selection) {
      return {
        title: selection.title || 'SEO & OpenGraph Settings',
        media: selection.media,
      }
    },
  },
}) 