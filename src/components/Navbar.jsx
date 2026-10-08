import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>do<span>it</span></a>
      <ul className={styles.links}>
        <li><a href="#features">Funcionalidades</a></li>
        <li><a href="#preview">Preview</a></li>
        <li><a href="#download" className={styles.cta}>Baixar</a></li>
      </ul>
    </nav>
  )
}
