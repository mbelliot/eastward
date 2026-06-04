import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "quote",
      type: "string",
      title: "Quote",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      title: "Featured",
    }),
    defineField({
      name: "destination",
      type: "reference",
      title: "Destination",
      to: { type: "destination" },
    }),
    defineField({
      name: "itinerary",
      type: "reference",
      title: "Itinerary",
      to: { type: "itinerary" },
    }),
    defineField({
      name: "headshot",
      type: "image",
      title: "Headshot",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
