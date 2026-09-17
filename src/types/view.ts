import type { MenuPage } from '../data/menuPages';
import type { MenuSection, SectionColumnCount } from './menu';

/** A section together with the width it is drawn at on the card. */
export interface RenderedSection {
  readonly section: MenuSection;
  readonly columns: SectionColumnCount;
}

/** One horizontal band of a card: a single wide section, or two narrow ones. */
export interface RenderedBlock {
  readonly id: string;
  readonly sections: readonly RenderedSection[];
}

export interface RenderedPage {
  readonly page: MenuPage;
  readonly blocks: readonly RenderedBlock[];
  readonly dishCount: number;
}
