import { defineField, defineType } from 'sanity'
import { slideType } from './slide'

export const destinationType = defineType({
  name: 'destination',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'country',
      type: 'string',
      title: 'Country',
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    }),
    defineField({
      name: 'appeal',
      type: 'text',
      title: 'Appeal',
    }),
    defineField({
      name: 'attractions',
      title: 'Attractions',
      type: 'array',
      of: [slideType('attraction')],
    }),
    defineField({
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [slideType('activity')],
    }),
    defineField({
      name: 'foods',
      type: 'array',
      of: [slideType('food')],
    }),
    defineField({
      name: 'commentary',
      type: 'text',
      title: 'Commentary',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
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
      name: 'portrait',
      type: 'image',
      title: 'Portrait',
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
    }),
    defineField({
      name: 'themes',
      type: 'array',
      title: 'Themes',
      of: [
        {
          type: 'reference',
          to: { type: 'theme' },
        },
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
