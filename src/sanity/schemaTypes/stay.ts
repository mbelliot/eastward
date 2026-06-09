import { defineField, defineType } from "sanity"

export const stayType = defineType({
	name: "stay",
	type: "document",
	fields: [
		defineField({
			name: "name",
			type: "string",
			title: "Name",
		}),
		defineField({
			name: "description",
			type: "string",
			title: "Description",
		}),
		defineField({
			name: "type",
			type: "string",
			title: "Type",
			options: {
				list: [
					{ title: "Resort", value: "Resort" },
					{ title: "Boutique", value: "Boutique" },
					{ title: "Glamping", value: "Glamping" },
					{ title: "Villa", value: "Villa" },
					{ title: "Palace", value: "Palace" },
					{ title: "Lodge", value: "Lodge" },
				],
			},
		}),
		defineField({
			name: "destination",
			type: "reference",
			title: "Destination",
			to: { type: "destination" },
		}),
		defineField({
			name: "website",
			type: "url",
			title: "Website",
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
