import { defineField, defineType } from "sanity"
import { slideType } from "./slide"

export const itineraryType = defineType({
	name: "itinerary",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "tagline",
			type: "string",
			title: "Tagline",
		}),
		defineField({
			name: "days",
			type: "number",
			title: "Days",
		}),
		defineField({
			name: "price",
			type: "string",
			title: "Price",
		}),
		defineField({
			name: "featured",
			type: "boolean",
			title: "Featured",
		}),
		defineField({
			name: "overview",
			type: "text",
			title: "Overview",
		}),
		defineField({
			name: "schedule",
			type: "array",
			of: [slideType("segment")],
		}),
		defineField({
			name: "foods",
			type: "array",
			of: [slideType("food")],
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
			name: "features",
			type: "array",
			title: "Features",
			of: [
				{
					type: "reference",
					to: { type: "feature" },
				},
			],
		}),
		defineField({
			name: "destinations",
			type: "array",
			title: "Destinations",
			of: [
				{
					type: "reference",
					to: { type: "destination" },
				},
			],
		}),
		defineField({
			name: "themes",
			type: "array",
			title: "Themes",
			of: [
				{
					type: "reference",
					to: { type: "theme" },
				},
			],
		}),
		defineField({
			name: "curator",
			type: "reference",
			title: "Curator",
			to: { type: "curator" },
		}),
		defineField({
			name: "stays",
			type: "array",
			title: "Stays",
			of: [
				{
					type: "reference",
					to: { type: "stay" },
				},
			],
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
})
