import type { DishPrice } from '../../types/menu';
import { describePrice, formatPrice } from '../../utils/price';

interface DishPriceTagProps {
  readonly price: DishPrice;
}

/** The price, always in its own column so the eye can run straight down it. */
export function DishPriceTag({ price }: DishPriceTagProps): React.JSX.Element {
  return (
    <span className="dish__price">
      <span aria-hidden="true">{formatPrice(price)}</span>
      <span className="visually-hidden">{describePrice(price)}</span>
    </span>
  );
}
