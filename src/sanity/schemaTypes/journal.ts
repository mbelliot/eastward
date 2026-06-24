import { defineField, defineType } from 'sanity'

export const journalType = defineType({
  name: 'journal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'content', type: 'blockContent' }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cover',
      type: 'image',
      title: 'Cover',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'itinerary',
      type: 'reference',
      title: 'Itinerary',
      to: { type: 'itinerary' },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
