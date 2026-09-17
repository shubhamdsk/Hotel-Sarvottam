import type { DishPrice } from '../types/menu';

const RUPEE = '₹';

/**
 * `₹140/-` for a single price, `₹70/100` where a half and a full plate are both
 * sold. Both forms are the ones the owner has always printed.
 */
export function formatPrice(price: DishPrice): string {
  return price.fullAmount === undefined
    ? `${RUPEE}${price.amount}/-`
    : `${RUPEE}${price.amount}/${price.fullAmount}`;
}

/** Spoken form, so a screen reader does not read "/-" as punctuation soup. */
export function describePrice(price: DishPrice): string {
  return price.fullAmount === undefined
    ? `${price.amount} rupees`
    : `${price.amount} rupees half plate, ${price.fullAmount} rupees full plate`;
}
