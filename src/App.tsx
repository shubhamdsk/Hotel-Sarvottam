import { MenuDocument } from './components/layout/MenuDocument';
import { SearchResults } from './components/menu/SearchResults';
import { PhotoGallery } from './components/site/PhotoGallery';
import { ReviewInvite } from './components/site/ReviewInvite';
import { SiteFooter } from './components/site/SiteFooter';
import { SiteHero } from './components/site/SiteHero';
import { EmptyState } from './components/ui/EmptyState';
import { MenuToolbar } from './components/ui/MenuToolbar';
import { MENU_PAGES } from './data/menuPages';
import { useMenuFilter } from './hooks/useMenuFilter';
import { useSheetScale } from './hooks/useSheetScale';

/**
 * One page: the hotel at the top, then either the full menu as its four printed
 * cards or - as soon as anything is searched or filtered - the matching dishes
 * gathered into a single list.
 */
export default function App(): React.JSX.Element {
  const {
    query,
    setQuery,
    onlySignature,
    toggleOnlySignature,
    clear,
    isFiltering,
    pages,
    results,
    matchCount,
  } = useMenuFilter();

  useSheetScale();

  return (
    <>
      <SiteHero />

      <MenuToolbar
        query={query}
        onQueryChange={setQuery}
        onlySignature={onlySignature}
        onToggleSignature={toggleOnlySignature}
        isFiltering={isFiltering}
        onClear={clear}
      />

      <main className="app" id="menu">
        {!isFiltering && <MenuDocument pages={pages} totalPages={MENU_PAGES.length} />}
        {isFiltering && matchCount > 0 && (
          <SearchResults sections={results} matchCount={matchCount} />
        )}
        {isFiltering && matchCount === 0 && <EmptyState query={query} onClear={clear} />}
      </main>

      <PhotoGallery />
      <ReviewInvite />
      <SiteFooter />
    </>
  );
}
