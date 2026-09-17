import type { MenuSection } from '../../types/menu';
import { MenuSectionPanel } from './MenuSectionPanel';

interface SearchResultsProps {
  readonly sections: readonly MenuSection[];
  readonly matchCount: number;
}

/**
 * Search and filter results, gathered onto a single page instead of being dealt
 * back out over the four cards - a guest looking for one dish should not have
 * to work out which card it lives on.
 */
export function SearchResults({ sections, matchCount }: SearchResultsProps): React.JSX.Element {
  return (
    <section className="results" aria-labelledby="results-title" aria-live="polite">
      <div className="results__head">
        <h2 className="results__title" id="results-title" lang="mr">
          {matchCount} पदार्थ सापडले
          <span className="results__title-en" lang="en">
            {matchCount} {matchCount === 1 ? 'dish' : 'dishes'} found
          </span>
        </h2>

        <p className="results__hint" lang="mr">
          {sections.length} विभागांमधून · एकाच पानावर
        </p>
      </div>

      <div className="results__list">
        {sections.map((section) => (
          <MenuSectionPanel key={section.id} section={section} columns={1} />
        ))}
      </div>
    </section>
  );
}
