import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.grid} />
      </div>

      <div className={styles.inner}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Suas tarefas,<br />
            <span>organizadas.</span>
          </h1>
          <p className={styles.sub}>
            Um aplicativo desktop completo para gerenciar suas tarefas com prioridade, categorias e multi-usuários — sem depender de internet.
          </p>
           <div className={styles.badge}>Windows · Gratuito · Offline</div>
          <div className={styles.actions}>
            <a href="#download" className={styles.btnPrimary}>Baixar para Windows</a>
            <a href="#features" className={styles.btnGhost}>Ver funcionalidades</a>
          </div>
          <p className={styles.note}>Windows 10 ou superior · ~100 MB</p>
        </div>

        <div className={styles.right}>
          <div className={styles.logoDisplay}>
            do<span>it</span>
          </div>
          <div className={styles.floatCard} style={{ top: '12%', right: '-8%' }}>
            <span className={styles.dot} style={{ background: '#ef4444' }} />
            Alta prioridade
          </div>
          <div className={styles.floatCard} style={{ bottom: '18%', left: '-6%' }}>
            <span className={styles.dot} style={{ background: '#4ade80' }} />
            3 concluídas hoje
          </div>
        </div>
      </div>
    </section>
  )
}
