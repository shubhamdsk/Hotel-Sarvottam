/**
 * Files served as-is from `public/`, so the image on the page and the file a
 * printer is handed are the same file. `BASE_URL` keeps the paths right under
 * the project's GitHub Pages sub-path.
 */
const publicUrl = (file: string): string => `${import.meta.env.BASE_URL}${file}`;

/** QR codes: one opens this menu, one opens Google's review sheet. */
export const QR = {
  menu: publicUrl('qr/menu-qr.svg'),
  review: publicUrl('qr/review-qr.svg'),
} as const;
