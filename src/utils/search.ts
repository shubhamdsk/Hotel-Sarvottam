import type { MenuItem } from '../types/menu';

/** Case- and space-insensitive form used for both the query and the dish names. */
export function normalize(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

/** A dish matches if the query appears in either language. */
export function matchesQuery(item: MenuItem, normalizedQuery: string): boolean {
  if (normalizedQuery === '') {
    return true;
  }
  return (
    normalize(item.name.mr).includes(normalizedQuery) ||
    normalize(item.name.en).includes(normalizedQuery)
  );
}
