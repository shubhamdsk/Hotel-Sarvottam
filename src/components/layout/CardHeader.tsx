import { ChefPortrait } from '../branding/ChefPortrait';
import { Taglines } from '../branding/Taglines';
import { Wordmark } from '../branding/Wordmark';

/**
 * The masthead every card opens with: crest, chef, promises.
 *
 * The pure-veg mark is deliberately absent - it is stated once, at the top of
 * the page, instead of on all four cards.
 */
export function CardHeader(): React.JSX.Element {
  return (
    <header className="card-header">
      <Wordmark />

      <div className="card-header__chef">
        <ChefPortrait />
      </div>

      <Taglines />
    </header>
  );
}
