/**
 * Photographs of the restaurant, taken from its own Google Business listing and
 * re-encoded as WebP. They are used on the website only - the printed cards
 * stay type-only.
 */
import biryani from './biryani.webp';
import diningHall from './dining-hall.webp';
import eveningLights from './evening-lights.webp';
import familySeating from './family-seating.webp';
import gravyHandi from './gravy-handi.webp';
import sizzlerPlatter from './sizzler-platter.webp';
import specialPlatter from './special-platter.webp';
import storefront from './storefront.webp';

export const PHOTOS = {
  storefront,
  'dining-hall': diningHall,
  'evening-lights': eveningLights,
  'family-seating': familySeating,
  biryani,
  'sizzler-platter': sizzlerPlatter,
  'gravy-handi': gravyHandi,
  'special-platter': specialPlatter,
} as const;

export type PhotoId = keyof typeof PHOTOS;
