import { CONTACT } from '../../data/contact';
import { CLOSING, RESTAURANT } from '../../data/restaurant';

/** Closes the website with the address, the phone number and the opening hours. */
export function SiteFooter(): React.JSX.Element {
  return (
    <footer className="site-footer no-print">
      <p className="site-footer__name" lang="mr">
        {RESTAURANT.prefix} {RESTAURANT.name} — {RESTAURANT.kind}
      </p>

      <address className="site-footer__contact">
        <span lang="mr">{CONTACT.address.mr}</span>
        <a href={`tel:${CONTACT.phone.tel}`}>{CONTACT.phone.display}</a>
        <span lang="mr">{CONTACT.hours.mr}</span>
      </address>

      <p className="site-footer__closing" lang="mr">
        {CLOSING.visit}
      </p>
    </footer>
  );
}
