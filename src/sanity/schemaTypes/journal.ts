import { defineField, defineType } from "sanity";

export const journalType = defineType({
  name: "journal",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "excerpt",
      type: "string",
      title: "Excerpt",
    }),
    defineField({
      name: "date",
      type: "datetime",
      title: "Date",
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Content",
    }),
    defineField({
      name: "cover",
      type: "image",
      title: "Cover",
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
      name: "itinerary",
      type: "reference",
      title: "Itinerary",
      to: { type: "itinerary" },
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
