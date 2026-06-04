import { defineField, defineType } from "sanity"

export const curatorType = defineType({
	name: "curator",
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
			name: "email",
			type: "string",
			title: "Email",
		}),
		defineField({
			name: "bio",
			type: "text",
			title: "Bio",
		}),
		defineField({
			name: "portrait",
			type: "image",
			title: "Portrait",
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
})
