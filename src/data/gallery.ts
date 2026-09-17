/**
 * The photo strip on the website. Captions describe the scene rather than
 * naming a dish, so nothing is ever labelled as something it is not.
 */
import type { PhotoId } from '../assets/photos';
import type { LocalizedText } from '../types/menu';

export interface GalleryPhoto {
  readonly id: PhotoId;
  readonly caption: LocalizedText;
}

/** The photograph behind the opening section of the site. */
export const HERO_PHOTO: PhotoId = 'storefront';

export const GALLERY: readonly GalleryPhoto[] = [
  { id: 'special-platter', caption: { mr: 'स्पेशल प्लेटर', en: 'Special platter' } },
  { id: 'biryani', caption: { mr: 'गरमागरम बिर्याणी', en: 'Biryani, fresh off the pan' } },
  { id: 'gravy-handi', caption: { mr: 'घरच्या मसाल्यातील ग्रेव्ही', en: 'Gravy in our own masala' } },
  { id: 'sizzler-platter', caption: { mr: 'तव्यावरची स्पेशल डिश', en: 'Straight off the tawa' } },
  { id: 'dining-hall', caption: { mr: 'प्रशस्त फॅमिली हॉल', en: 'Our family dining hall' } },
  { id: 'evening-lights', caption: { mr: 'संध्याकाळचं हॉटेल', en: 'The hotel after dark' } },
];
