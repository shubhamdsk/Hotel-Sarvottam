import { CONTACT } from '../../data/contact';
import { ORDER_NOTE } from '../../data/restaurant';

interface CardFooterProps {
  readonly pageNumber: number;
  readonly totalPages: number;
}

/** The ordering note, the address and the phone number - nothing else. */
export function CardFooter({ pageNumber, totalPages }: CardFooterProps): React.JSX.Element {
  return (
    <footer className="card-footer">
      <p className="card-footer__note" lang="mr">
        {ORDER_NOTE}
      </p>

      <address className="card-footer__contact">
        <span className="card-footer__address" lang="mr">
          {CONTACT.address.mr}
        </span>
        <a className="card-footer__phone" href={`tel:${CONTACT.phone.tel}`}>
          {CONTACT.phone.display}
        </a>
        <span className="card-footer__hours" lang="mr">
          {CONTACT.hours.mr}
        </span>
      </address>

      <p className="card-footer__page">
        पान {pageNumber} / {totalPages}
      </p>
    </footer>
  );
}
