import styles from './Preview.module.css'

export default function Preview() {
  return (
    <section className={styles.section} id="preview">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>Interface pensada<br />para o dia a dia.</h2>
          <p className={styles.sub}>
            Dark mode nativo, sidebar com filtros, cards organizados por prioridade e modais limpos para criar e editar tarefas sem ruído visual.
          </p>
          <ul className={styles.list}>
            <li>Tarefas separadas por status</li>
            <li>Ordenação automática por prioridade</li>
            <li>Edição inline com feedback imediato</li>
            <li>Conta de usuário editável</li>
          </ul>
        </div>

        <div className={styles.mockup}>
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span /><span /><span />
            </div>
            <div className={styles.windowBody}>
              <div className={styles.sidebar}>
                <div className={styles.sidebarLogo}>do<span>it</span></div>
                <div className={styles.sidebarItem}>Filtros</div>
                <div className={styles.sidebarInput} />
                <div className={styles.sidebarInput} style={{ width: '60%' }} />
                <div className={styles.sidebarBtn} />
              </div>
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div className={styles.contentTitle} />
                  <div className={styles.newBtn} />
                </div>
                <div className={styles.sectionLabel}>
                  <span style={{ background: '#f59e0b' }} />
                  Pendentes
                </div>
                {[{ p: '#ef4444' }, { p: '#f59e0b' }, { p: '#22c55e' }].map((t, i) => (
                  <div className={styles.taskCard} key={i}>
                    <div className={styles.taskBar} style={{ background: t.p }} />
                    <div className={styles.taskBody}>
                      <div className={styles.taskTitle} style={{ width: `${60 + i * 15}%` }} />
                      <div className={styles.taskDesc} />
                      <div className={styles.taskBadges}>
                        <div className={styles.badge} style={{ background: 'rgba(245,158,11,0.15)' }} />
                        <div className={styles.badge} style={{ width: 40, background: 'rgba(239,68,68,0.15)' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.glow} />
        </div>
      </div>
    </section>
  )
}
