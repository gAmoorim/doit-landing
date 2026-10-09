import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.logo}>
            do<span>it</span>
          </span>

          <p className={styles.copy}>
            © {new Date().getFullYear()} doIt. Todos os direitos reservados.
          </p>

          <p className={styles.copy}>
            Desenvolvido por gAmoorim.
          </p>
        </div>
          <div className={styles.right}>
          <a
            href="https://github.com/gAmoorim/doIt"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/gamoorimr/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}