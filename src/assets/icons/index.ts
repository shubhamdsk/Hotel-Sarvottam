/** Line icons that sit on each section banner. */
import chili from './chili.svg';
import dal from './dal.svg';
import drink from './drink.svg';
import fasting from './fasting.svg';
import handi from './handi.svg';
import leaf from './leaf.svg';
import paneer from './paneer.svg';
import papad from './papad.svg';
import rice from './rice.svg';
import salad from './salad.svg';
import soup from './soup.svg';
import star from './star.svg';
import tandoor from './tandoor.svg';
import veg from './veg.svg';
import wok from './wok.svg';

export const SECTION_ICONS = {
  'chili': chili,
  'dal': dal,
  'drink': drink,
  'fasting': fasting,
  'handi': handi,
  'leaf': leaf,
  'paneer': paneer,
  'papad': papad,
  'rice': rice,
  'salad': salad,
  'soup': soup,
  'star': star,
  'tandoor': tandoor,
  'veg': veg,
  'wok': wok,
} as const;

export type SectionIconId = keyof typeof SECTION_ICONS;
