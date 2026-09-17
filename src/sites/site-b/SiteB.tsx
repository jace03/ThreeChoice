import { Link } from 'react-router'
import styles from './SiteB.module.css'

export function SiteB() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <span className={styles.badge}>Sample Site B</span>
        <h1>Bold &amp; Dark</h1>
        <p>A high-contrast dark theme with a card-based layout.</p>
        <Link to="/" className={styles.back}>
          ← Back to picker
        </Link>
      </div>
    </main>
  )
}
