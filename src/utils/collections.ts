/**
 * Deal a list into newspaper-style columns: the list is read down the first
 * column and then down the next, so the dish numbers stay in order.
 *
 * Splitting in JavaScript rather than with CSS `column-count` keeps the print
 * output predictable - a dish can never be torn across a column break.
 */
export function splitIntoColumns<T>(items: readonly T[], columns: number): readonly (readonly T[])[] {
  if (columns <= 1 || items.length === 0) {
    return [items];
  }

  const perColumn = Math.ceil(items.length / columns);
  const result: T[][] = [];

  for (let start = 0; start < items.length; start += perColumn) {
    result.push(items.slice(start, start + perColumn));
  }

  return result;
}
