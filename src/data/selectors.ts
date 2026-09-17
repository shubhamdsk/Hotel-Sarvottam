/** Lookups over the menu data, with a loud failure if an id ever goes stale. */
import type { MenuSection } from '../types/menu';
import { MENU_SECTIONS, type SectionId } from './menuSections';

/** Thrown when the page composition references a section that no longer exists. */
export class MenuDataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MenuDataError';
  }
}

const SECTIONS_BY_ID: ReadonlyMap<string, MenuSection> = new Map(
  MENU_SECTIONS.map((section) => [section.id, section]),
);

export function getSection(id: SectionId): MenuSection {
  const section = SECTIONS_BY_ID.get(id);
  if (!section) {
    throw new MenuDataError(`Unknown menu section "${id}". Check src/data/menuPages.ts.`);
  }
  return section;
}

export const TOTAL_DISH_COUNT: number = MENU_SECTIONS.reduce(
  (total, section) => total + section.items.length,
  0,
);
