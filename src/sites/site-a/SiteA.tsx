import { Link } from 'react-router'
import styles from './SiteA.module.css'

export function SiteA() {
  return (
    <main className={styles.page}>
      <span className={styles.badge}>Sample Site A</span>
      <h1>Clean &amp; Minimal</h1>
      <p>A light, spacious layout with plenty of whitespace.</p>
      <Link to="/" className={styles.back}>
        ← Back to picker
      </Link>
    </main>
  )
}
