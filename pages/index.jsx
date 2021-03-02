import Link from 'next/link'
import styles from './index.module.css'

export default function Index() {
  return (
    <div className="container">
      <h1 className="page-title">{`Hello 👋 Welcome to Next Imagegen`}</h1>
      <ul className={styles.ul}>
        <li>
          <Link href='/vercel'>
            <a className={styles.link}>Generate Vercel Logos</a>
          </Link>
        </li>
        
        <li>
          <Link href='/github'>
            <a className={styles.link}>Generate Next.js User Card</a>
          </Link>
        </li>
      </ul>
        
    </div>
  )
}
