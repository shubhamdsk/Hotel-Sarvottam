/**
 * How the sections are dealt out across the four A3 cards.
 *
 * A card is a list of blocks. A `full` block gives a section the whole width of
 * the sheet (two dish columns); a `pair` block stands two short sections side by
 * side, which keeps three-line sections such as सूप and सलाड from floating in
 * half an empty panel.
 *
 * Moving a section from one card to another is a one-line change here - no
 * component knows which card it lives on.
 */
import type { LocalizedText } from '../types/menu';
import type { SectionId } from './menuSections';

export interface FullWidthBlock {
  readonly kind: 'full';
  readonly sectionId: SectionId;
}

export interface PairedBlock {
  readonly kind: 'pair';
  readonly sectionIds: readonly [SectionId, SectionId];
}

export type PageBlock = FullWidthBlock | PairedBlock;

export interface MenuPage {
  readonly id: string;
  /** 1-based, as printed on the card. */
  readonly number: number;
  /** Printed on the card and read out to screen readers. */
  readonly title: LocalizedText;
  /** Short name for the navigation pills, e.g. "स्टार्टर / Starters". */
  readonly navLabel: LocalizedText;
  readonly blocks: readonly PageBlock[];
  /** The thank-you block is printed once, on the last card. */
  readonly showsClosing?: boolean;
}

const full = (sectionId: SectionId): FullWidthBlock => ({ kind: 'full', sectionId });
const pair = (first: SectionId, second: SectionId): PairedBlock => ({
  kind: 'pair',
  sectionIds: [first, second],
});

/** Every card in the printed menu, in order. */
export const MENU_PAGES: readonly MenuPage[] = [
  {
    id: 'page-1',
    number: 1,
    title: { mr: 'स्टार्टर आणि मेन कोर्स', en: 'Starters & Main Course' },
    navLabel: { mr: 'स्टार्टर', en: 'Starters' },
    blocks: [full('starters'), full('main-course'), full('maharashtrian'), pair('soup', 'salad')],
  },
  {
    id: 'page-2',
    number: 2,
    title: { mr: 'भाज्या आणि व्हेजिटेबल्स', en: 'Pure Veg & Vegetables' },
    navLabel: { mr: 'मेन कोर्स', en: 'Main Course' },
    blocks: [full('pure-veg'), full('vegetables'), pair('fasting-special', 'cold-drinks')],
  },
  {
    id: 'page-3',
    number: 3,
    title: { mr: 'पनीर, शेफ स्पेशल आणि चायनीज', en: 'Paneer, Chef Specials & Chinese' },
    navLabel: { mr: 'पनीर व चायनीज', en: 'Paneer & Chinese' },
    blocks: [full('paneer-special'), full('chef-specials'), full('chinese')],
  },
  {
    id: 'page-4',
    number: 4,
    title: { mr: 'हंडी, तंदूर आणि राईस', en: 'Handi, Tandoor & Rice' },
    navLabel: { mr: 'तंदूर व राईस', en: 'Tandoor & Rice' },
    blocks: [full('special-handi'), full('tandoor'), full('special-rice'), full('chinese-rice')],
    showsClosing: true,
  },
];

/** Number of printed cards, used for the "1 / 4" mark in the footer. */
export const PAGE_COUNT = MENU_PAGES.length;
