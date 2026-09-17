import { useId } from 'react';
import { MENU_PAGES } from '../../data/menuPages';
import { RESTAURANT } from '../../data/restaurant';

interface MenuToolbarProps {
  readonly query: string;
  readonly onQueryChange: (query: string) => void;
  readonly onlySignature: boolean;
  readonly onToggleSignature: () => void;
  readonly isFiltering: boolean;
  readonly onClear: () => void;
}

/**
 * Screen-only controls: jump to a card, search a dish in either language, or
 * show just the house specials. The card links step aside while a search is
 * running, because the matches are shown as one list rather than four cards.
 */
export function MenuToolbar({
  query,
  onQueryChange,
  onlySignature,
  onToggleSignature,
  isFiltering,
  onClear,
}: MenuToolbarProps): React.JSX.Element {
  const searchId = useId();

  return (
    <nav className="toolbar no-print" aria-label="मेनू नेव्हिगेशन / Menu navigation">
      <span className="toolbar__brand">
        <span className="toolbar__brand-mr" lang="mr">
          {RESTAURANT.name}
        </span>
        <span className="toolbar__brand-en" lang="en">
          {RESTAURANT.kindEn}
        </span>
      </span>

      {isFiltering ? null : (
        <ul className="toolbar__pages">
          {MENU_PAGES.map((page) => (
            <li key={page.id}>
              <a className="toolbar__page-link" href={`#${page.id}`} title={page.title.mr}>
                <span className="toolbar__page-number" aria-hidden="true">
                  {page.number}
                </span>
                <span className="toolbar__page-name" lang="mr">
                  {page.navLabel.mr}
                </span>
                <span className="visually-hidden">{page.navLabel.en}</span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <div className="toolbar__tools">
        <label className="toolbar__search" htmlFor={searchId}>
          <span className="visually-hidden">पदार्थ शोधा / Search a dish</span>
          <span aria-hidden="true">⌕</span>
          <input
            id={searchId}
            type="search"
            value={query}
            placeholder="पदार्थ शोधा / Search a dish"
            autoComplete="off"
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </label>

        <button
          type="button"
          className={onlySignature ? 'toolbar__chip toolbar__chip--on' : 'toolbar__chip'}
          onClick={onToggleSignature}
          aria-pressed={onlySignature}
        >
          ★ स्पेशल
        </button>

        {isFiltering ? (
          <button type="button" className="toolbar__chip toolbar__chip--solid" onClick={onClear}>
            संपूर्ण मेनू / Full menu
          </button>
        ) : null}
      </div>
    </nav>
  );
}
