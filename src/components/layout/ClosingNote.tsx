import { CLOSING } from '../../data/restaurant';

/** Printed once, at the end of the last card. */
export function ClosingNote(): React.JSX.Element {
  return (
    <div className="closing-note">
      <p className="closing-note__thanks" lang="mr">
        {CLOSING.thanks}
      </p>
      <p className="closing-note__script" lang="en">
        {CLOSING.thanksEn}
      </p>
      <p className="closing-note__visit" lang="mr">
        {CLOSING.visit}
        <span className="closing-note__visit-en" lang="en">
          {CLOSING.visitEn}
        </span>
      </p>
    </div>
  );
}
