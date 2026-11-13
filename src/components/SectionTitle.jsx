/**
 * SectionTitle — label bernomor + headline editorial + subheadline.
 *
 * Contoh:
 * <SectionTitle
 *   number="01"
 *   label="About RIVARIA"
 *   title={<>More than just an event.<br /><em>It's your story.</em></>}
 *   subtitle="..."
 * />
 */
export default function SectionTitle({
  number,
  label,
  title,
  subtitle,
  as: Heading = 'h2',
  light = false,
  align = 'left',
  className = '',
  id,
}) {
  const classes = [
    'section-title',
    light ? 'section-title--light' : '',
    align === 'center' ? 'section-title--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {label && (
        <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>
          {number && <span className="eyebrow__num">{number}</span>}
          {number && <span className="eyebrow__sep">/</span>}
          <span>{label}</span>
        </span>
      )}
      <Heading id={id} className={`heading ${light ? 'heading--light' : ''}`}>
        {title}
      </Heading>
      {subtitle && <p className="section-title__sub">{subtitle}</p>}
    </div>
  )
}
