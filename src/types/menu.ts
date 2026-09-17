import type { SectionIconId } from '../assets/icons';

/**
 * The card is bilingual: Marathi leads because that is what guests read, the
 * English reading follows in a quieter size.
 */
export interface LocalizedText {
  readonly mr: string;
  readonly en: string;
}

/**
 * Prices are plain numbers in rupees. `fullAmount` is set only for the dishes
 * that are sold as a half plate and a full plate (rice and pulao).
 */
export interface DishPrice {
  readonly amount: number;
  readonly fullAmount?: number;
}

export interface MenuItem {
  /** Stable, human readable id - also used as the React key. */
  readonly id: string;
  readonly name: LocalizedText;
  readonly price: DishPrice;
  /** House special: printed with a star beside the name. */
  readonly isSignature?: boolean;
}

export interface MenuSection {
  readonly id: string;
  readonly title: LocalizedText;
  readonly icon: SectionIconId;
  readonly items: readonly MenuItem[];
}

/** How many dish columns a section is laid out in on the printed card. */
export type SectionColumnCount = 1 | 2;
