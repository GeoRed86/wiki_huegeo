import { useState } from 'react'
import './App.css'
import md01 from '../docs_huegeo/01_inicio_huegeo.md?raw'
import md02 from '../docs_huegeo/02_instalacion_huegeo.md?raw'
import md03 from '../docs_huegeo/03_active_directory_huegeo.md?raw'
import md04 from '../docs_huegeo/04_cliente_dominio_huegeo.md?raw'
import md05 from '../docs_huegeo/05_servicios_red_huegeo.md?raw'
import md06 from '../docs_huegeo/06_gpo_huegeo.md?raw'

const imageModules = import.meta.glob('../docs_huegeo/img_huegeo/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const imageMap = Object.entries(imageModules).reduce((acc, [key, value]) => {
  const normalizedKey = key.replace('../docs_huegeo/img_huegeo/', '')
  acc[normalizedKey] = value
  return acc
}, {})

const markdownSections = [
  {
    id: 'inicio',
    title: '01. Inicio',
    description: 'Introducción a la infraestructura de dominio y a los recursos necesarios.',
    markdown: md01,
  },
  {
    id: 'instalacion',
    title: '02. Instalación',
    description: 'Configuración de máquinas virtuales, red interna y preparación del entorno.',
    markdown: md02,
  },
  {
    id: 'active-directory',
    title: '03. Active Directory',
    description: 'Instalación y configuración del servicio central del dominio.',
    markdown: md03,
  },
  {
    id: 'cliente-dominio',
    title: '04. Cliente y dominio',
    description: 'Creación de unidades organizativas, usuarios y grupos.',
    markdown: md04,
  },
  {
    id: 'servicios-red',
    title: '05. Servicios de red',
    description: 'Configuración de DHCP, red y unión del cliente al dominio.',
    markdown: md05,
  },
  {
    id: 'gpo',
    title: '06. GPO',
    description: 'Aplicación de políticas de grupo para controlar la experiencia del usuario.',
    markdown: md06,
  },
]

const cleanText = (value) =>
  value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const resolveImage = (src) => {
  const normalized = src.replace(/^\.\/img_huegeo\//, '').replace(/^img_huegeo\//, '').replace(/^\.\//, '')
  return imageMap[normalized] ?? null
}

const buildGallery = (markdown, title) => {
  const blocks = markdown.match(/<div align="center">[\s\S]*?<\/div>/g) ?? []

  return blocks.flatMap((block) => {
    const paragraphs = [...block.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((match) => cleanText(match[1]))
      .filter(Boolean)

    const description = paragraphs.join(' ')
    const images = [...block.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/g)].map((match) => match[1])

    return images.map((src) => ({
      title,
      text: description || 'Paso de la guía técnica.',
      image: resolveImage(src),
    }))
  }).filter((item) => item.image)
}

const sections = markdownSections.map((section) => ({
  ...section,
  cards: buildGallery(section.markdown, section.title),
}))

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [activeCard, setActiveCard] = useState(0)

  const section = sections[activeSection]
  const card = section.cards[activeCard] ?? null

  const changeCard = (direction) => {
    const total = section.cards.length
    if (!total) return
    const next = (activeCard + direction + total) % total
    setActiveCard(next)
  }

  return (
    <div className="wiki-shell">
      <div className="wiki-layout">
        <aside className="wiki-sidebar">
          <div className="wiki-brand">Wiki Windows Server</div>
          <nav className="wiki-nav">
            {sections.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`wiki-tab ${index === activeSection ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(index)
                  setActiveCard(0)
                }}
              >
                {item.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="wiki-main">
          <header className="wiki-header">
            <div>
              <h1>{section.title}</h1>
              <p>{section.description}</p>
            </div>
          </header>

          <section className="wiki-content">
            {card ? (
              <>
                <div className="wiki-card">
                  <div className="wiki-card-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="wiki-card-body">
                    <div className="wiki-card-meta">Imagen {activeCard + 1} de {section.cards.length}</div>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </div>
                </div>

                <div className="wiki-controls">
                  <button type="button" className="wiki-control-btn" onClick={() => changeCard(-1)}>
                    ◀ Anterior
                  </button>
                  <span className="wiki-counter">Ficha {activeCard + 1} / {section.cards.length}</span>
                  <button type="button" className="wiki-control-btn" onClick={() => changeCard(1)}>
                    Siguiente ▶
                  </button>
                </div>

                <div className="wiki-gallery">
                  {section.cards.map((item, index) => (
                    <button
                      key={`${item.title}-${index}`}
                      type="button"
                      className={`wiki-mini-card ${index === activeCard ? 'selected' : ''}`}
                      onClick={() => setActiveCard(index)}
                    >
                      <div className="wiki-mini-thumb">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="wiki-mini-copy">
                        <strong>{item.title}</strong>
                        <span>{item.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="wiki-empty">No hay contenido disponible para esta sección.</div>
            )}
          </section>
        </main>
      </div>

      <footer className="wiki-footer">
        <p>© 2026 Wiki Windows Server. Todos los derechos reservados.</p>
        <div className="wiki-footer-links">
          <a href="mailto:ghuertaquinteros@gmail.com">ghuertaquinteros@gmail.com</a>
          <a href="https://github.com/GeoRed86/wiki_huegeo.git" target="_blank" rel="noreferrer">
            https://github.com/GeoRed86/wiki_huegeo.git
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
