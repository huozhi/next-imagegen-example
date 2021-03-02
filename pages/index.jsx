import Link from 'next/link'
import styles from './index.module.css'

export default function Index() {
  return (
    <div className="container">
      <h1>{`Hello 👋`}</h1>
      <ul className={styles.ul}>
        <li>
          <Link href='/vercel'>
            <a className={styles.link}>Generate Vercel Logos</a>
          </Link>
        </li>
      </ul>
        
    </div>
  )
}
