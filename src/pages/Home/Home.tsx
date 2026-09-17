import { Link } from 'react-router'
import styles from './Home.module.css'

const OPTIONS = [
  { to: '/site-a', label: 'Sample Site A' },
  { to: '/site-b', label: 'Sample Site B' },
  { to: '/site-c', label: 'Sample Site C' },
]

export function Home() {
  return (
    <main className={styles.home}>
      <h1>ThreeChoice</h1>
      <p>Pick a sample site to preview:</p>
      <ul className={styles.options}>
        {OPTIONS.map((option) => (
          <li key={option.to}>
            <Link to={option.to} className={styles.optionLink}>
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
