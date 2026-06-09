import { defineArrayMember, defineField } from "sanity"

export function slideType(
	name: string = "slide",
	titleName: string = "title",
	bodyName: string = "body",
	imageName: string = "image",
) {
	return defineArrayMember({
		name,
		type: "object",
		fields: [
			defineField({
				name: titleName,
				type: "string",
				validation: (Rule) => Rule.required(),
			}),
			defineField({ name: bodyName, type: "array", of: [{ type: "block" }] }),
			defineField({
				name: imageName,
				type: "image",
				options: { hotspot: true },
				fields: [
					{
						name: "alt",
						type: "string",
						title: "Alternative Text",
					},
				],
				validation: (Rule) => Rule.required(),
			}),
		],
	})
}
