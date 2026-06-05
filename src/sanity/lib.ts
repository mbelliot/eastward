// lib/sanity.ts

import { sanityClient } from "sanity:client"
import { createImageUrlBuilder } from "@sanity/image-url"

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source) {
	return builder.image(source)
}
