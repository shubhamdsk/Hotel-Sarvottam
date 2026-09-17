import { useCallback, useMemo, useState } from 'react';
import { MENU_PAGES, type PageBlock } from '../data/menuPages';
import { getSection } from '../data/selectors';
import type { MenuItem, MenuSection } from '../types/menu';
import type { RenderedBlock, RenderedPage, RenderedSection } from '../types/view';
import { matchesQuery, normalize } from '../utils/search';

export interface MenuFilterResult {
  readonly query: string;
  readonly setQuery: (query: string) => void;
  readonly onlySignature: boolean;
  readonly toggleOnlySignature: () => void;
  readonly clear: () => void;
  /** True while the guest is narrowing the menu down. */
  readonly isFiltering: boolean;
  /** The full menu, dealt out over the four printed cards. */
  readonly pages: readonly RenderedPage[];
  /** Everything that matched, gathered onto one page. */
  readonly results: readonly MenuSection[];
  readonly matchCount: number;
}

function renderBlock(block: PageBlock): RenderedBlock {
  const ids = block.kind === 'full' ? [block.sectionId] : block.sectionIds;
  const columns = block.kind === 'full' ? 2 : 1;

  const sections: RenderedSection[] = ids.map((id) => ({
    section: getSection(id),
    columns,
  }));

  return { id: ids.join('+'), sections };
}

/** The four cards never change, so they are built once. */
const PAGES: readonly RenderedPage[] = MENU_PAGES.map((page) => {
  const blocks = page.blocks.map(renderBlock);
  const dishCount = blocks.reduce(
    (total, block) => total + block.sections.reduce((sum, { section }) => sum + section.items.length, 0),
    0,
  );
  return { page, blocks, dishCount };
});

/** Sections in the order they appear on the cards, so results read the same way. */
const SECTIONS_IN_CARD_ORDER: readonly MenuSection[] = PAGES.flatMap((page) =>
  page.blocks.flatMap((block) => block.sections.map(({ section }) => section)),
);

/**
 * Owns the search box and the "house specials only" toggle.
 *
 * Searching does not re-cut the printed cards: the matches are gathered into a
 * single list instead, which is what a guest on a phone actually wants.
 */
export function useMenuFilter(): MenuFilterResult {
  const [query, setQuery] = useState('');
  const [onlySignature, setOnlySignature] = useState(false);

  const normalizedQuery = normalize(query);
  const isFiltering = normalizedQuery !== '' || onlySignature;

  const results = useMemo<readonly MenuSection[]>(() => {
    if (!isFiltering) {
      return [];
    }

    return SECTIONS_IN_CARD_ORDER.flatMap((section) => {
      const items: MenuItem[] = section.items.filter(
        (item) =>
          (!onlySignature || item.isSignature === true) && matchesQuery(item, normalizedQuery),
      );
      return items.length === 0 ? [] : [{ ...section, items }];
    });
  }, [isFiltering, normalizedQuery, onlySignature]);

  const matchCount = useMemo(
    () => results.reduce((total, section) => total + section.items.length, 0),
    [results],
  );

  const toggleOnlySignature = useCallback(() => setOnlySignature((value) => !value), []);

  const clear = useCallback(() => {
    setQuery('');
    setOnlySignature(false);
  }, []);

  return {
    query,
    setQuery,
    onlySignature,
    toggleOnlySignature,
    clear,
    isFiltering,
    pages: PAGES,
    results,
    matchCount,
  };
}
