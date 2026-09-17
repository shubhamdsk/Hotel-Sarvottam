import { TAGLINES } from '../../data/restaurant';

/** The three promises printed under the crest, separated by gold diamonds. */
export function Taglines(): React.JSX.Element {
  return (
    <ul className="taglines">
      {TAGLINES.map((tagline) => (
        <li key={tagline} className="taglines__item">
          {tagline}
        </li>
      ))}
    </ul>
  );
}
