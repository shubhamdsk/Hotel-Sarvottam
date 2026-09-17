import { PHOTOS } from '../../assets/photos';
import { GALLERY } from '../../data/gallery';

/** The restaurant's own photographs. Screen only. */
export function PhotoGallery(): React.JSX.Element {
  return (
    <section className="gallery no-print" aria-labelledby="gallery-title">
      <h2 className="gallery__title" id="gallery-title" lang="mr">
        आमच्या हॉटेलमधून
        <span className="gallery__title-en" lang="en">
          From our kitchen &amp; our tables
        </span>
      </h2>

      <ul className="gallery__grid">
        {GALLERY.map((photo) => (
          <li className="gallery__item" key={photo.id}>
            <img
              className="gallery__photo"
              src={PHOTOS[photo.id]}
              alt={`${photo.caption.mr} — ${photo.caption.en}`}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
            <p className="gallery__caption" lang="mr">
              {photo.caption.mr}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
