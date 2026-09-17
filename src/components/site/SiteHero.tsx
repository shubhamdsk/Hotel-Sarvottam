import { PHOTOS } from '../../assets/photos';
import { VegMark } from '../branding/VegMark';
import { CONTACT } from '../../data/contact';
import { HERO_PHOTO } from '../../data/gallery';
import { RESTAURANT } from '../../data/restaurant';
import { TOTAL_DISH_COUNT } from '../../data/selectors';

/**
 * The opening of the website: the hotel as guests see it from the road, with
 * the things they came to find - what it is, when it is open, and the phone
 * number. Screen only; the printed cards begin with the crest instead.
 */
export function SiteHero(): React.JSX.Element {
  return (
    <header className="site-hero no-print">
      <img
        className="site-hero__photo"
        src={PHOTOS[HERO_PHOTO]}
        alt="रात्रीच्या रोषणाईत हॉटेल सर्वोत्तम — Hotel Sarvottam lit up at night"
        width={1600}
        height={900}
        fetchPriority="high"
        decoding="async"
      />

      {/* The one place the kitchen's pure-veg promise is made; the printed
          cards carry no mark of their own. */}
      <p className="site-hero__veg">
        <VegMark />
        <span lang="mr">{RESTAURANT.dietaryMark.mr}</span>
        <span lang="en">{RESTAURANT.dietaryMark.en}</span>
      </p>

      <div className="site-hero__body">
        <h1 className="site-hero__title" lang="mr">
          {RESTAURANT.prefix} <strong>{RESTAURANT.name}</strong>
        </h1>

        <p className="site-hero__subtitle" lang="mr">
          {RESTAURANT.kind}
        </p>

        <dl className="site-hero__facts">
          <div className="site-hero__fact">
            <dt>मानांकन</dt>
            <dd>
              ★ {CONTACT.rating.score.toFixed(1)}{' '}
              <small>({CONTACT.rating.reviews} reviews)</small>
            </dd>
          </div>
          <div className="site-hero__fact">
            <dt>वेळ</dt>
            <dd lang="mr">{CONTACT.hours.mr}</dd>
          </div>
          <div className="site-hero__fact">
            <dt>दूरध्वनी</dt>
            <dd>{CONTACT.phone.display}</dd>
          </div>
          <div className="site-hero__fact">
            <dt>पदार्थ</dt>
            <dd lang="mr">{TOTAL_DISH_COUNT}+ पदार्थ</dd>
          </div>
        </dl>

        <p className="site-hero__address" lang="mr">
          {CONTACT.address.mr}
        </p>
      </div>
    </header>
  );
}
