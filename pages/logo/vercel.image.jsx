import styles from './vercel.image.module.css'

export default function VercelImage({title = 'Vercel'}) {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <svg viewBox="0 0 75 65" fill="#000">
          <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
        </svg>
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  )
}
