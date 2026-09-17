/** Physical constants of the printed card. Everything else is derived. */

/** A3 portrait, the size the cards are printed at. */
export const SHEET = {
  widthMm: 297,
  heightMm: 420,
} as const;

/** CSS reference pixels per millimetre (96 dpi). */
export const MM_TO_PX = 96 / 25.4;

export const SHEET_WIDTH_PX = SHEET.widthMm * MM_TO_PX;

/** Breathing room kept around the card when it is previewed on screen. */
export const SCREEN_GUTTER_PX = 32;

/** Dish columns inside a full-width section panel. */
export const DISH_COLUMNS = 2;

/** Custom property the screen preview scale is published on. */
export const SHEET_SCALE_PROPERTY = '--sheet-scale';

/**
 * Window width from which the true A3 sheet is shown, in px. Below it the card
 * switches to the web layout and is never scaled. Must match `$bp-sheet` in
 * `styles/abstracts/_variables.scss`.
 */
export const SHEET_LAYOUT_MIN_PX = 1200;
