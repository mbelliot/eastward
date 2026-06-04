import { defineField, defineType } from "sanity";

export const infoType = defineType({
  name: "info",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      type: "string",
      title: "Brand name",
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Address",
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Phone",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "whatsapp",
      type: "url",
      title: "Whatsapp",
    }),
    defineField({
      name: "instagram",
      type: "url",
      title: "Instagram",
    }),
    defineField({
      name: "terms",
      type: "text",
      title: "Terms",
    }),
    defineField({
      name: "privacy",
      type: "text",
      title: "Privacy",
    }),
  ],
});
