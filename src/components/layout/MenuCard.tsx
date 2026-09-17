import type { RenderedPage } from '../../types/view';
import { MenuSectionPanel } from '../menu/MenuSectionPanel';
import { CardFooter } from './CardFooter';
import { CardHeader } from './CardHeader';
import { ClosingNote } from './ClosingNote';

interface MenuCardProps {
  readonly rendered: RenderedPage;
  readonly totalPages: number;
}

/**
 * One A3 card. It is laid out at its true printed size in millimetres - the
 * screen preview is only a scaled-down view of the same sheet, so what is on
 * screen is exactly what comes out of the printer.
 */
export function MenuCard({ rendered, totalPages }: MenuCardProps): React.JSX.Element {
  const { page, blocks } = rendered;

  return (
    <article className="menu-card" id={page.id} aria-labelledby={`${page.id}-title`}>
      <div className="menu-card__sheet">
        <h2 className="visually-hidden" id={`${page.id}-title`}>
          पान {page.number} — {page.title.mr} | Page {page.number} — {page.title.en}
        </h2>

        <CardHeader />

        <div className="menu-card__board">
          {blocks.map((block) => (
            <div
              className={
                block.sections.length > 1 ? 'menu-card__block menu-card__block--pair' : 'menu-card__block'
              }
              key={block.id}
            >
              {block.sections.map(({ section, columns }) => (
                <MenuSectionPanel key={section.id} section={section} columns={columns} />
              ))}
            </div>
          ))}
        </div>

        {page.showsClosing === true ? <ClosingNote /> : null}

        <CardFooter pageNumber={page.number} totalPages={totalPages} />
      </div>
    </article>
  );
}
