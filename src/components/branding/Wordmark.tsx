import { useId } from 'react';
import { RESTAURANT } from '../../data/restaurant';

const MARATHI_STACK = "'Tiro Devanagari Marathi','Nirmala UI','Mangal',serif";
const CALLIGRAPHIC_STACK = "'Tillana','Tiro Devanagari Marathi','Nirmala UI',serif";

/**
 * The crest: a gold rule, the word हॉटेल, the calligraphic name, wheat sprigs
 * and the green ribbon.
 *
 * It is drawn as inline SVG rather than loaded as an image file for two
 * reasons: the name has to be set in a webfont that only the document knows
 * about, and inline markup gives the printer vectors instead of a bitmap. The
 * gradient ids are made unique per instance, because the crest appears on all
 * four cards of the same document.
 */
export function Wordmark(): React.JSX.Element {
  const uid = useId().replace(/:/g, '');
  const gold = `gold-${uid}`;
  const word = `word-${uid}`;
  const ribbon = `ribbon-${uid}`;
  const sprig = `sprig-${uid}`;

  return (
    <svg
      className="wordmark"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 288"
      role="img"
      aria-label={`${RESTAURANT.prefix} ${RESTAURANT.name} ${RESTAURANT.kind}`}
    >
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6e7bd" />
          <stop offset="28%" stopColor="#d9b455" />
          <stop offset="55%" stopColor="#c9a227" />
          <stop offset="78%" stopColor="#e7cf8e" />
          <stop offset="100%" stopColor="#7d6413" />
        </linearGradient>
        <linearGradient id={word} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9a7a1a" />
          <stop offset="40%" stopColor="#c9a227" />
          <stop offset="62%" stopColor="#f3e3ae" />
          <stop offset="100%" stopColor="#7d6413" />
        </linearGradient>
        <linearGradient id={ribbon} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#17573f" />
          <stop offset="100%" stopColor="#0a2b20" />
        </linearGradient>
        <g id={sprig}>
          <path
            d="M0 0 C 34 -10 70 -14 104 -8"
            fill="none"
            stroke="#c9a227"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <ellipse cx="16" cy="-12" rx="13" ry="6" fill={`url(#${gold})`} transform="rotate(-32 16 -12)" />
          <ellipse cx="38" cy="-19" rx="15" ry="6.5" fill={`url(#${gold})`} transform="rotate(-24 38 -19)" />
          <ellipse cx="62" cy="-22" rx="15" ry="6.5" fill={`url(#${gold})`} transform="rotate(-14 62 -22)" />
          <ellipse cx="86" cy="-20" rx="12" ry="5.5" fill={`url(#${gold})`} transform="rotate(-6 86 -20)" />
          <ellipse cx="28" cy="3" rx="11" ry="5" fill={`url(#${gold})`} transform="rotate(22 28 3)" />
          <ellipse cx="52" cy="2" rx="12" ry="5" fill={`url(#${gold})`} transform="rotate(16 52 2)" />
          <ellipse cx="76" cy="-2" rx="10" ry="4.5" fill={`url(#${gold})`} transform="rotate(10 76 -2)" />
        </g>
      </defs>

      <g>
        <line x1="196" y1="22" x2="296" y2="22" stroke="#c9a227" strokeWidth="2" />
        <line x1="344" y1="22" x2="444" y2="22" stroke="#c9a227" strokeWidth="2" />
        <path d="M320 12 L330 22 L320 32 L310 22 Z" fill={`url(#${gold})`} />
      </g>

      <text
        x="320"
        y="56"
        textAnchor="middle"
        fontFamily={MARATHI_STACK}
        fontSize="25"
        letterSpacing="8"
        fill="#f6e7bd"
      >
        {RESTAURANT.prefix}
      </text>

      <text
        x="320"
        y="168"
        textAnchor="middle"
        fontFamily={CALLIGRAPHIC_STACK}
        fontSize="104"
        fontWeight="700"
        fill={`url(#${word})`}
        stroke="#2a1508"
        strokeWidth="1.1"
        textLength="368"
        lengthAdjust="spacingAndGlyphs"
      >
        {RESTAURANT.name}
      </text>

      <use href={`#${sprig}`} transform="translate(14,140)" />
      <use href={`#${sprig}`} transform="translate(626,140) scale(-1,1)" />

      <g>
        <path d="M150 192 H490 L516 221 L490 250 H150 L124 221 Z" fill={`url(#${ribbon})`} />
        <path
          d="M150 192 H490 L516 221 L490 250 H150 L124 221 Z"
          fill="none"
          stroke="#e7cf8e"
          strokeWidth="2"
        />
        <text
          x="320"
          y="231"
          textAnchor="middle"
          fontFamily={MARATHI_STACK}
          fontSize="29"
          fill="#fdf6e2"
          textLength="272"
          lengthAdjust="spacingAndGlyphs"
        >
          {RESTAURANT.kind}
        </text>
      </g>

      <g>
        <line x1="214" y1="272" x2="296" y2="272" stroke="#c9a227" strokeWidth="1.5" />
        <line x1="344" y1="272" x2="426" y2="272" stroke="#c9a227" strokeWidth="1.5" />
        <path d="M320 264 L327 272 L320 280 L313 272 Z" fill={`url(#${gold})`} />
      </g>
    </svg>
  );
}
