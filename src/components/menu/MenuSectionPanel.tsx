import { useMemo } from 'react';
import type { MenuSection, SectionColumnCount } from '../../types/menu';
import { splitIntoColumns } from '../../utils/collections';
import { DishRow } from './DishRow';
import { SectionBanner } from './SectionBanner';

interface MenuSectionPanelProps {
  readonly section: MenuSection;
  readonly columns: SectionColumnCount;
}

/**
 * A course: the gold banner, then its dishes on an off-white panel. Wide
 * sections run in two columns, short ones stay in a single column so they can
 * stand beside another short section.
 */
export function MenuSectionPanel({ section, columns }: MenuSectionPanelProps): React.JSX.Element {
  const headingId = `section-${section.id}`;

  /* numbering runs down the first column and continues down the next */
  const dishColumns = useMemo(() => {
    let number = 0;
    return splitIntoColumns(section.items, columns).map((items) =>
      items.map((item) => ({ item, number: ++number })),
    );
  }, [section.items, columns]);

  return (
    <section className="menu-section" aria-labelledby={headingId}>
      <SectionBanner title={section.title} icon={section.icon} headingId={headingId} />

      <div className={`menu-section__panel menu-section__panel--cols-${columns}`}>
        {dishColumns.map((entries, columnIndex) => (
          <ul className="menu-section__column" key={`${section.id}-column-${columnIndex}`}>
            {entries.map(({ item, number }) => (
              <DishRow key={item.id} item={item} index={number} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
