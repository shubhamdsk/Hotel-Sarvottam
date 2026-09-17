import { RESTAURANT } from '../../data/restaurant';

/**
 * The FSSAI vegetarian mark - a green disc inside a green square - drawn to the
 * proportions used on packaged food in India.
 */
export function VegMark(): React.JSX.Element {
  return (
    <svg
      className="veg-mark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-label={`${RESTAURANT.dietaryMark.mr} — ${RESTAURANT.dietaryMark.en}`}
    >
      <rect x="1.5" y="1.5" width="61" height="61" rx="6" fill="#ffffff" />
      <rect x="4" y="4" width="56" height="56" rx="4" fill="none" stroke="#0f7a2e" strokeWidth="5" />
      <circle cx="32" cy="32" r="16" fill="#0f7a2e" />
    </svg>
  );
}
