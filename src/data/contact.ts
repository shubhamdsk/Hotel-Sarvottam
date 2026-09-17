/**
 * Where the restaurant is and when it is open, as published on its Google
 * Business listing. Printed at the foot of every card.
 */
import type { LocalizedText } from '../types/menu';

export interface ContactDetails {
  readonly address: LocalizedText;
  readonly phone: { readonly display: string; readonly tel: string };
  readonly hours: LocalizedText;
  readonly rating: { readonly score: number; readonly reviews: number; readonly source: string };
  readonly mapsUrl: string;
}

export const CONTACT: ContactDetails = {
  address: {
    mr: 'मु. पो. कोकणगाव, ता. संगमनेर, जि. अहिल्यानगर — ४१३७१४',
    en: 'Kokangaon, Sangamner, Maharashtra 413714',
  },
  phone: {
    display: '+91 70302 07706',
    tel: '+917030207706',
  },
  hours: {
    mr: 'दररोज दुपारी १२ ते रात्री ११:३०',
    en: 'Open daily 12:00 pm – 11:30 pm',
  },
  rating: {
    score: 4.6,
    reviews: 69,
    source: 'Google',
  },
  mapsUrl: 'https://share.google/ZNi7lPu3n58JuhiK4',
};
