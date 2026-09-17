import { Link } from 'react-router'
import styles from './SiteC.module.css'

export function SiteC() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <span className={styles.badge}>Sample Site C</span>
        <Link to="/" className={styles.back}>
          ← Back to picker
        </Link>
      </aside>
      <section className={styles.content}>
        <h1>Playful &amp; Warm</h1>
        <p>A sidebar layout with a warm, energetic color palette.</p>
      </section>
    </main>
  )
}
