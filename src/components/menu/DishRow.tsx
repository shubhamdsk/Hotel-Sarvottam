import type { MenuItem } from '../../types/menu';
import { DishPriceTag } from './DishPriceTag';

interface DishRowProps {
  readonly item: MenuItem;
  /** Position within its section, printed in front of the name. */
  readonly index: number;
}

/**
 * One dish: number, name, price.
 *
 * The Marathi name is the loudest thing on the card; the English reading sits
 * beside it a clear step down; the dotted leader carries the eye to a price
 * that is always in the same place.
 */
export function DishRow({ item, index }: DishRowProps): React.JSX.Element {
  const isSignature = item.isSignature === true;

  return (
    <li className={isSignature ? 'dish dish--signature' : 'dish'}>
      <span className="dish__index" aria-hidden="true">
        {index}
      </span>

      <span className="dish__name">
        {isSignature ? (
          <span className="dish__star" title="स्पेशल — house special">
            ★
          </span>
        ) : null}
        <span className="dish__name-mr" lang="mr">
          {item.name.mr}
        </span>
        <span className="dish__name-en" lang="en">
          {item.name.en}
        </span>
        <i className="dish__leader" aria-hidden="true" />
      </span>

      <DishPriceTag price={item.price} />
    </li>
  );
}
