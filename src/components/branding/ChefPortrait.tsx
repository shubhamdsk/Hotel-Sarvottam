import chefImage from '../../assets/brand/chef.webp';

/**
 * The house chef, cut out of his background and served as a 44 KB WebP - small
 * enough not to hold up the print dialog, sharp enough at the 30 mm he is
 * printed at.
 */
export function ChefPortrait(): React.JSX.Element {
  return (
    <img
      className="chef-portrait"
      src={chefImage}
      alt="सर्वोत्तमचे शेफ — Sarvottam's chef"
      width={480}
      height={593}
      decoding="async"
    />
  );
}
