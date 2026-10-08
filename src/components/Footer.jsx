import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>do<span>it</span></span>
          <p className={styles.copy}>Desenvolvido por gAmoorim</p>
        </div>
        <div className={styles.right}>
          <a
            href="https://github.com/gAmoorim/doIt"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
