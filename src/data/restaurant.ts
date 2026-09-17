/**
 * Everything the card says about the restaurant itself: the wordmark strings,
 * the strap line, the ordering note and the closing thank-you. Kept out of the
 * components so the wording can be changed without touching any markup.
 */
import type { LocalizedText } from '../types/menu';

export const RESTAURANT = {
  /** Reads "हॉटेल" above the name on the crest. */
  prefix: 'हॉटेल',
  name: 'सर्वोत्तम',
  nameEn: 'Sarvottam',
  kind: 'फॅमिली रेस्टॉरंट',
  kindEn: 'Family Restaurant',
  dietaryMark: { mr: 'शुद्ध शाकाहारी', en: 'Pure Vegetarian' } satisfies LocalizedText,
} as const;

/**
 * The promises printed under the crest. "शुद्ध शाकाहारी" is deliberately not
 * one of them - it is said once, at the top of the page, and carried on the
 * card by the green mark beside the crest.
 */
export const TAGLINES: readonly string[] = ['ताजे साहित्य', 'घरची चव'];

/** The only note the owner wants at the foot of every card. */
export const ORDER_NOTE = 'टीप : ऑर्डर दिल्यानंतर वीस मिनिटे वेळ लागेल.';

/** Closing block, printed once at the end of the last card. */
export const CLOSING = {
  thanks: '|| मनःपूर्वक धन्यवाद ||',
  thanksEn: 'Thank You',
  visit: 'पुन्हा भेट द्या !',
  visitEn: 'Visit Again !',
} as const;
