
import { useState } from 'react'
import styles from './Preview.module.css'

const slides = [
  {
    title: 'Visão geral',
    description: 'Todas as suas tarefas organizadas em um só lugar.',
    image: '/preview/dashboard.png',
  },
  {
    title: 'Filtros e organização',
    description: 'Encontre rapidamente as tarefas que precisa realizar.',
    image: '/preview/filtros.png',
  },
  {
    title: 'Prioridades',
    description: 'Visualize o que merece sua atenção primeiro.',
    image: '/preview/prioridades.png',
  },
  {
    title: 'Criação de tarefas',
    description: 'Crie e edite tarefas com praticidade.',
    image: '/preview/criacao.png',
  },
]

// Adicione a URL do vídeo quando ele estiver pronto.
// Exemplo: '/videos/demo-doit.mp4'
const DEMO_VIDEO = '/videos/demo-doit.mp4'

function TaskMockup() {
  const tasks = [
    { color: '#ef4444', width: '65%' },
    { color: '#f59e0b', width: '80%' },
    { color: '#22c55e', width: '72%' },
  ]

  return (
    <div className={styles.window}>
      <div className={styles.windowBar}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.windowBody}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarLogo}>
            do<span>it</span>
          </div>

          <div className={styles.sidebarItem}>Filtros</div>
          <div className={styles.sidebarInput} />
          <div
            className={styles.sidebarInput}
            style={{ width: '60%' }}
          />
          <div className={styles.sidebarBtn} />
        </aside>

        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.contentTitle} />
            <div className={styles.newBtn} />
          </div>

          <div className={styles.sectionLabel}>
            <span />
            Pendentes
          </div>

          {tasks.map((task, index) => (
            <div className={styles.taskCard} key={task.color}>
              <div
                className={styles.taskBar}
                style={{ background: task.color }}
              />

              <div className={styles.taskBody}>
                <div
                  className={styles.taskTitle}
                  style={{ width: task.width }}
                />
                <div className={styles.taskDesc} />

                <div className={styles.taskBadges}>
                  <div className={styles.badge} />
                  <div className={styles.badgeSecondary} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Preview() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [imageErrors, setImageErrors] = useState({})

  const [videoOpen, setVideoOpen] = useState(false)

  const currentSlide = slides[activeSlide]

  function changeSlide(direction) {
    setActiveSlide((current) =>
      (current + direction + slides.length) % slides.length
    )
  }

  return (
    <section className={styles.section} id="preview">
      <div className={styles.inner}>
        <div className={styles.text}>
          <span className={styles.eyebrow}>
            CONHEÇA O DOIT
          </span>

          <h2 className={styles.title}>
            Interface pensada
            <br />
            para o dia a dia.
          </h2>

          <p className={styles.sub}>
            Dark mode nativo, filtros intuitivos e tarefas
            organizadas por prioridade. Tudo o que você precisa
            para manter sua rotina em ordem, sem ruído visual.
          </p>

          <ul className={styles.list}>
            <li>Tarefas separadas por status</li>
            <li>Ordenação automática por prioridade</li>
            <li>Edição inline com feedback imediato</li>
            <li>Conta de usuário editável</li>
          </ul>

          {DEMO_VIDEO && (
            <button
              type="button"
              className={styles.videoButton}
              onClick={() => setVideoOpen(true)}
            >
              <span className={styles.playIcon}>▶</span>
              Assistir demonstração
            </button>
          )}
        </div>

        <div className={styles.previewArea}>
          <div className={styles.previewHeader}>
            <div>
              <span className={styles.previewLabel}>
                EXPLORAR INTERFACE
              </span>

              <h3 className={styles.slideTitle}>
                {currentSlide.title}
              </h3>
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => changeSlide(-1)}
                aria-label="Imagem anterior"
              >
                ←
              </button>

              <span className={styles.counter}>
                {String(activeSlide + 1).padStart(2, '0')}
                <span> / </span>
                {String(slides.length).padStart(2, '0')}
              </span>

              <button
                type="button"
                className={styles.arrow}
                onClick={() => changeSlide(1)}
                aria-label="Próxima imagem"
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.mockup}>
            <div className={styles.glow} />

            <div className={styles.slideFrame}>
              {!imageErrors[activeSlide] ? (
                <img
                  key={currentSlide.image}
                  className={styles.slideImage}
                  src={currentSlide.image}
                  alt={`Doit — ${currentSlide.title}`}
                  onError={() =>
                    setImageErrors((errors) => ({
                      ...errors,
                      [activeSlide]: true,
                    }))
                  }
                />
              ) : (
                <TaskMockup />
              )}
            </div>
          </div>

          <div className={styles.previewFooter}>
            <p className={styles.slideDescription}>
              {currentSlide.description}
            </p>

            <div
              className={styles.dots}
              aria-label="Selecionar imagem"
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`${styles.dot} ${
                    index === activeSlide ? styles.dotActive : ''
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Mostrar ${slide.title}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {videoOpen && DEMO_VIDEO && (
        <div
          className={styles.videoOverlay}
          onClick={() => setVideoOpen(false)}
        >
          <div
            className={styles.videoModal}
            role="dialog"
            aria-modal="true"
            aria-label="Demonstração do Doit"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeVideo}
              onClick={() => setVideoOpen(false)}
              aria-label="Fechar vídeo"
            >
              ×
            </button>

            <video
              className={styles.video}
              src={DEMO_VIDEO}
              controls
              autoPlay
              playsInline
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
