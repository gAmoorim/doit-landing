import { useEffect, useRef, useState } from 'react'
import styles from './Features.module.css'

const features = [
  {
    icon: '🔐',
    title: 'Multi-usuários com autenticação',
    desc: 'Cada pessoa tem sua conta com login e senha. Suas tarefas são privadas e protegidas com JWT e bcrypt.',
    accent: '#e94560'
  },
  {
    icon: '📋',
    title: 'Organização completa',
    desc: 'Prioridade, status, categoria, etiquetas e data de vencimento. Tudo para nunca perder um prazo.',
    accent: '#60a5fa'
  },
  {
    icon: '🔍',
    title: 'Filtros inteligentes',
    desc: 'Busque por título, filtre por status ou categoria — com suporte a acentos e variações de escrita.',
    accent: '#a78bfa'
  },
  {
    icon: '🔄',
    title: 'Sessão persistente',
    desc: 'Fique logado por 5 dias. Abra o app e volte de onde parou, sem precisar fazer login toda vez.',
    accent: '#34d399'
  },
  {
    icon: '💾',
    title: 'Backup local',
    desc: 'Exporte e importe seu banco de dados quando quiser. Seus dados nunca dependem de servidores externos.',
    accent: '#fbbf24'
  },
  {
    icon: '📵',
    title: '100% Offline',
    desc: 'Zero dependência de internet. O banco de dados fica na sua máquina, sempre disponível.',
    accent: '#f472b6'
  }
]

function FeatureCard({ icon, title, desc, accent, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className={styles.cardAccent} style={{ background: accent }} />
      <div className={styles.iconWrap} style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Feito para quem leva<br />produtividade a sério.</h2>
          <p className={styles.sub}>Sem assinaturas. Sem nuvem. Sem distrações.</p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}