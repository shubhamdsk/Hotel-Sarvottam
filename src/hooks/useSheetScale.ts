import { useEffect } from 'react';
import {
  SCREEN_GUTTER_PX,
  SHEET_LAYOUT_MIN_PX,
  SHEET_SCALE_PROPERTY,
  SHEET_WIDTH_PX,
} from '../constants/layout';

/**
 * Keeps the A3 preview honest on wide screens.
 *
 * From `SHEET_LAYOUT_MIN_PX` up, the card is laid out at its true A3 size and
 * only nudged down if the window is a little narrower than the paper, so what
 * is on screen is what comes out of the printer. Below that width the card has
 * a web layout of its own (see `@mixin web`), which must not be scaled - so the
 * factor is pinned back to 1 and the stylesheet takes over.
 */
export function useSheetScale(): void {
  useEffect(() => {
    const root = document.documentElement;

    const apply = (): void => {
      const width = root.clientWidth;

      if (width < SHEET_LAYOUT_MIN_PX) {
        root.style.setProperty(SHEET_SCALE_PROPERTY, '1');
        return;
      }

      const available = width - SCREEN_GUTTER_PX * 2;
      const scale = Math.min(1, available / SHEET_WIDTH_PX);
      root.style.setProperty(SHEET_SCALE_PROPERTY, scale.toFixed(4));
    };

    apply();
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('resize', apply);
      root.style.removeProperty(SHEET_SCALE_PROPERTY);
    };
  }, []);
}
