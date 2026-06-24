import type { SchemaTypeDefinition } from 'sanity'
import { curatorType } from './curator'
import { destinationType } from './destination'
import { featureType } from './feature'
import { infoType } from './info'
import { itineraryType } from './itinerary'
import { journalType } from './journal'
import { stayType } from './stay'
import { testimonialType } from './testimonial'
import { themeType } from './theme'
import { blockContentType } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    themeType,
    featureType,
    curatorType,
    destinationType,
    stayType,
    itineraryType,
    journalType,
    testimonialType,
    infoType,
    blockContentType,
  ],
}
