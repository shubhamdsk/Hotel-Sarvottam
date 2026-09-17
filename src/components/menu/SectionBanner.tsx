import { SECTION_ICONS, type SectionIconId } from '../../assets/icons';
import type { LocalizedText } from '../../types/menu';

interface SectionBannerProps {
  readonly title: LocalizedText;
  readonly icon: SectionIconId;
  /** Id of the heading, so the section can point at it with aria-labelledby. */
  readonly headingId: string;
}

/** The gold plate that names a course, in the gold of the chef's cap. */
export function SectionBanner({ title, icon, headingId }: SectionBannerProps): React.JSX.Element {
  return (
    <div className="section-banner">
      <img className="section-banner__icon" src={SECTION_ICONS[icon]} alt="" aria-hidden="true" />
      <h3 className="section-banner__title" id={headingId}>
        <span className="section-banner__title-mr" lang="mr">
          {title.mr}
        </span>
        <span className="section-banner__title-en" lang="en">
          {title.en}
        </span>
      </h3>
    </div>
  );
}
