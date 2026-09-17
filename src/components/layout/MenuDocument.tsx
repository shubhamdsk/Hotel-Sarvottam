import type { RenderedPage } from '../../types/view';
import { MenuCard } from './MenuCard';

interface MenuDocumentProps {
  readonly pages: readonly RenderedPage[];
  /** Cards in the full menu, so a filtered view still prints "पान 2 / 4". */
  readonly totalPages: number;
}

/** The four cards, stacked - one printed sheet each. */
export function MenuDocument({ pages, totalPages }: MenuDocumentProps): React.JSX.Element {
  return (
    <div className="menu-document">
      {pages.map((rendered) => (
        <MenuCard key={rendered.page.id} rendered={rendered} totalPages={totalPages} />
      ))}
    </div>
  );
}
