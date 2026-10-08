import styles from './Download.module.css'

export default function Download() {
  // Substitua pelo link real quando disponível
  const DOWNLOAD_LINK = '#'

  return (
    <section className={styles.section} id="download">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.bg} />
          <div className={styles.content}>
            <p className={styles.eyebrow}>Download gratuito</p>
            <h2 className={styles.title}>Pronto para começar?</h2>
            <p className={styles.sub}>
              Instale o DoIt e tenha controle total das suas tarefas sem depender de nenhuma assinatura ou conexão com a internet.
            </p>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Sistema</span>
                <span className={styles.infoValue}>Windows 10 / 11</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Tamanho</span>
                <span className={styles.infoValue}>~100 MB</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Versão</span>
                <span className={styles.infoValue}>1.0.0</span>
              </div>
              <div className={styles.divider} />
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Licença</span>
                <span className={styles.infoValue}>Gratuito</span>
              </div>
            </div>

            <a
              href={DOWNLOAD_LINK}
              className={styles.btn}
              onClick={e => DOWNLOAD_LINK === '#' && e.preventDefault()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Baixar DoIt para Windows
            </a>

            <p className={styles.note}>
              Ao instalar, o Windows pode exibir um aviso de segurança. Clique em "Mais informações" e depois em "Executar mesmo assim".
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
