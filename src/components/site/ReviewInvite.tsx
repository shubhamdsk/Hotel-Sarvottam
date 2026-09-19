import { QR } from '../../constants/assets';
import { CONTACT } from '../../data/contact';
import { RESTAURANT } from '../../data/restaurant';

/**
 * Asks the guest to rate the hotel on Google: the QR code for a phone at the
 * table, the same destination as a link for anyone reading on a computer.
 */
export function ReviewInvite(): React.JSX.Element {
  const { rating, reviewUrl } = CONTACT;

  return (
    <section className="review no-print" aria-labelledby="review-title">
      <div className="review__text">
        <p className="review__eyebrow" lang="en">
          {rating.source.en} Review
        </p>

        <h2 className="review__title" id="review-title" lang="mr">
          जेवण आवडलं ? आपला अभिप्राय सांगा
        </h2>

        <p className="review__body" lang="mr">
          तुमच्या एका रिव्ह्यूमुळे नव्या पाहुण्यांना आमचं हॉटेल सापडतं. दोन ओळी लिहा, तारे द्या —
          तेवढंच पुरेसं आहे.
        </p>

        <p className="review__rating" lang="mr">
          {rating.source.mr}वर आमचं रेटिंग <strong>{rating.score}</strong> — {rating.reviews} रिव्ह्यू
        </p>

        <a className="review__link" href={reviewUrl} target="_blank" rel="noopener noreferrer">
          <span lang="mr">{rating.source.mr}वर रिव्ह्यू द्या</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <figure className="review__qr">
        <img
          src={QR.review}
          alt={`${rating.source.mr} रिव्ह्यू QR — ${RESTAURANT.prefix} ${RESTAURANT.name} ${RESTAURANT.kind}`}
          width={200}
          height={200}
          loading="lazy"
          decoding="async"
        />
        <figcaption lang="mr">फोनने स्कॅन करा</figcaption>
      </figure>
    </section>
  );
}
