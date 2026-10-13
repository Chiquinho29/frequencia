'use client'

import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { AudioGenerator } from '@/components/audio-generator'
import { VideoLinks } from '@/components/video-links'
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Headphones,
  LockKeyhole,
  Menu,
  Pause,
  Play,
  Sparkles,
  Volume2,
  X,
} from 'lucide-react'

  const meditationLinks = [
    'https://www.youtube.com/watch?v=kYRUqjVDF8I',
    'https://www.youtube.com/watch?v=mI3ziH9EpxY',
    'https://www.youtube.com/watch?v=gbw4aAL5zDQ',
    'https://www.youtube.com/watch?v=9J6Qph-7vLA',
    'https://www.youtube.com/watch?v=8rCQuMLW70g',
    'https://www.youtube.com/watch?v=4oEPnVOqzr0',
    'https://www.youtube.com/watch?v=lFixjPkfMp0',
    'https://www.youtube.com/watch?v=z9gTIX2emls',
    'https://www.youtube.com/watch?v=O3xHKoxUG1U',
    'https://www.youtube.com/watch?v=sy0lyW-6-FI',
    'https://www.youtube.com/watch?v=WCACcgpO3Hc',
    'https://www.youtube.com/watch?v=EnIfZBPt3gE',
    'https://www.youtube.com/watch?v=U-7yCtxi-sg',
    'https://www.youtube.com/watch?v=SCw6Exn884U',
    'https://www.youtube.com/watch?v=GB-z8xrRkV4',
    'https://www.youtube.com/watch?v=UbQz6SpOguo',
    'https://www.youtube.com/watch?v=6wjzZTYhXy0',
    'https://www.youtube.com/watch?v=55pgr8HPg1g',
    'https://www.youtube.com/watch?v=nd7Jy0OEtyE',
    'https://www.youtube.com/watch?v=uWcrS18CsQw',
    'https://www.youtube.com/watch?v=-ElAmReMfa4',
    'https://www.youtube.com/watch?v=RTLWsi7P-Eo',
    'https://www.youtube.com/watch?v=W_tT7slViYg',
    'https://www.youtube.com/watch?v=KxRpK9ZGq4Y',
    'https://www.youtube.com/watch?v=_M4AoR6ZEKw',
    'https://youtu.be/1_wsuOzDuhg',
    'https://www.youtube.com/watch?v=TkEVsYmQiAM',
    'https://youtu.be/OA-Uae1qmns',
    'https://youtu.be/xkHUKLYjmWM',
    'https://www.youtube.com/watch?v=KzCwEV21Pkc',
  ]

const meditations = [
  ['Despertar de la luz interior', 'Un espacio para comenzar a escucharte con suavidad.'],
  ['Volver al momento presente', 'Ancla tu atención en la belleza de este instante.'],
  ['Respirar con conciencia', 'Deja que cada respiración te devuelva a ti.'],
  ['Escuchar el silencio', 'Encuentra calma en aquello que no necesita palabras.'],
  ['Habitar tu cuerpo', 'Reconoce tu cuerpo como un lugar seguro para estar.'],
  ['Reconocer tu propia luz', 'Mira con amabilidad todo lo que ya vive en ti.'],
  ['Agradecer este comienzo', 'Celebra el primer paso de tu camino interior.'],
  ['Soltar las tensiones', 'Permite que el cuerpo se vuelva más liviano.'],
  ['Dejar ir lo que pesa', 'Abre espacio para respirar con más libertad.'],
  ['Crear espacio interior', 'Haz una pausa para volver a lo esencial.'],
  ['Aceptar el presente', 'Recibe este momento tal como se presenta.'],
  ['Abrazar tus emociones', 'Escucha lo que sientes sin exigirte cambiarlo.'],
  ['Descansar sin culpa', 'El descanso también es una forma de cuidarte.'],
  ['Renovar tu serenidad', 'Regresa a tu centro con paciencia y presencia.'],
  ['Cultivar la confianza', 'Da un paso desde la certeza de tu propio ritmo.'],
  ['Reconocer tu valor', 'Recuerda que tu presencia tiene un lugar aquí.'],
  ['Escuchar tu intuición', 'Afina la escucha de esa voz tranquila en tu interior.'],
  ['Elegir pensamientos amables', 'Cambia la exigencia por una mirada más compasiva.'],
  ['Fortalecer tu paz', 'Protege ese espacio de calma que estás cultivando.'],
  ['Conectar con tu propósito', 'Acércate a aquello que da sentido a tu camino.'],
  ['Honrar tu camino', 'Reconoce cada paso que te trajo hasta aquí.'],
  ['Abrirte a nuevas posibilidades', 'Deja que lo nuevo encuentre un lugar en ti.'],
  ['Practicar la gratitud', 'Observa los pequeños regalos que habitan tu día.'],
  ['Compartir tu luz', 'Lleva tu presencia amable a cada encuentro.'],
  ['Cultivar la compasión', 'Empieza por ofrecerte la misma ternura que das.'],
  ['Vivir con intención', 'Elige cómo quieres habitar este día.'],
  ['Confiar en tu proceso', 'No tienes que llegar: ya estás caminando.'],
  ['Integrar tu aprendizaje', 'Une todo lo que has descubierto sobre ti.'],
  ['Celebrar tu transformación interior', 'Honra la persona que estás eligiendo ser.'],
  ['Continuar brillando', 'Tu práctica puede seguir acompañándote cada día.'],
]

const motivationalTexts = [
  'Hoy eliges comenzar. Tu prosperidad nace de una mente que se permite avanzar con calma.',
  'Tu valor no depende de la velocidad. Cada paso consciente abre una nueva posibilidad.',
  'Respira y recuerda: tienes recursos, ideas y fuerza para construir una vida más abundante.',
  'La paz interior es una forma de riqueza. Protégela con pensamientos que te sostengan.',
  'Lo que hoy parece pequeño puede convertirse en una transformación profunda si lo cuidas.',
  'Mereces recibir cosas buenas sin culpa. Abre las manos y también el corazón.',
  'Tu atención es energía. Dirígela hacia lo que quieres cultivar, no hacia lo que temes.',
  'Cuando te tratas con amabilidad, tu mente encuentra espacio para crear nuevas soluciones.',
  'Suelta la comparación. Tu camino tiene su propio ritmo y también puede llevarte muy lejos.',
  'Cada decisión que cuida tu bienestar es una inversión en la vida que estás construyendo.',
  'No necesitas tener todo resuelto. Solo necesitas confiar en el siguiente paso posible.',
  'Tu historia no está limitada por el pasado. Hoy puedes elegir una interpretación más luminosa.',
  'La abundancia también vive en tu tiempo, tu salud, tus vínculos y tu capacidad de agradecer.',
  'Permítete descansar sin abandonar tus sueños. El reposo también prepara la expansión.',
  'Hay sabiduría en tu intuición. Escúchala con silencio antes de buscar respuestas afuera.',
  'Tu mente aprende con repetición. Alimenta cada día la idea de que sí puedes crecer.',
  'No eres tus pensamientos pasajeros. Eres quien puede observarlos y elegir cuáles alimentar.',
  'La confianza se construye cumpliendo pequeñas promesas que te haces a ti mismo.',
  'Tu sensibilidad no es debilidad. Es una brújula que puede guiarte hacia lo que importa.',
  'Celebra lo que ya has superado. Reconocer tu avance fortalece tu próximo movimiento.',
  'Cuando ordenas tu interior, las oportunidades comienzan a sentirse más claras y cercanas.',
  'Tu energía merece límites. Decir no a lo que te desgasta es decir sí a tu propósito.',
  'La gratitud no niega los retos; te ayuda a recordar que también existen caminos y apoyos.',
  'Tu presencia puede inspirar a otros, pero hoy tu primera tarea es estar presente para ti.',
  'La prosperidad se vuelve sostenible cuando está acompañada de equilibrio y cuidado personal.',
  'Confía en la semilla que estás plantando. Algunas respuestas necesitan tiempo para florecer.',
  'Puedes cambiar de dirección sin considerar perdido todo lo que aprendiste en el camino.',
  'Tu futuro se acerca a través de las acciones simples que eliges repetir hoy.',
  'Deja que tu luz ocupe espacio. No tienes que hacerte pequeño para que otros se sientan cómodos.',
  'Termina este recorrido recordando que tu bienestar y tu abundancia pueden crecer juntos.',
]

const stages = [
  ['01', 'Despertar', 'Días 1—7', 'Volver al cuerpo, la respiración y el presente.'],
  ['02', 'Liberar', 'Días 8—14', 'Soltar con suavidad aquello que ya no necesitas sostener.'],
  ['03', 'Fortalecer', 'Días 15—21', 'Cultivar confianza, paz y una mirada más amable.'],
  ['04', 'Expandir', 'Días 22—30', 'Integrar tu aprendizaje y llevar tu luz al mundo.'],
]

function Stars() {
  return <div className="stars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
}

export default function Page() {
  const [view, setView] = useState<'home' | 'welcome' | 'app'>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState(1)
  const [reflectionOpen, setReflectionOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [completed, setCompleted] = useState<number[]>([1, 2, 3])
  const [faq, setFaq] = useState<number | null>(0)
  const progress = Math.round((completed.length / 30) * 100)
  const selectedMeditation = meditations[selectedDay - 1]
  const stage = selectedDay <= 7 ? stages[0] : selectedDay <= 14 ? stages[1] : selectedDay <= 21 ? stages[2] : stages[3]
  const dayLabel = useMemo(() => String(selectedDay).padStart(2, '0'), [selectedDay])

  useEffect(() => {
    if (view === 'app') setReflectionOpen(false)
  }, [view])

  if (view === 'app') {
    return <AppView {...{ setView, menuOpen, setMenuOpen, selectedDay, setSelectedDay, playing, setPlaying, completed, setCompleted, progress, selectedMeditation, stage, dayLabel, reflectionOpen, setReflectionOpen }} />
  }

  if (view === 'welcome') {
    return <WelcomeView onBack={() => setView('home')} onStart={() => { setReflectionOpen(false); setView('app') }} />
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Frecuencia Divina 7, inicio"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegación principal">
          <a className="nav-service" href="/ensenanzas-alto-control" data-access="ensenanzas-alto-control" onClick={() => setMenuOpen(false)}>Enseñanzas de alto control</a>
          <a className="nav-service" href="/consultoria-individual" data-access="consultoria-individual" onClick={() => setMenuOpen(false)}>Consultoría individual</a>
          <a className="nav-service" href="/acelerador-abundancia" data-access="acelerador-abundancia" onClick={() => setMenuOpen(false)}>Acelerador de abundancia</a>
        </nav>
        <button className="mobile-menu" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="inicio">
        <Stars /><div className="hero-halo" />
        <div className="hero-copy">
          <p className="eyebrow">Una práctica · Un momento · Tú</p>
          <h1>FRECUENCIA<br /><span>DIVINA 7</span></h1>
          <p className="hero-subtitle">30 días para cultivar calma, presencia y conexión con tu luz interior.</p>
          <p className="hero-text">Regálate siete minutos al día. Un espacio de serenidad creado para respirar, soltar el ruido y volver a conectar contigo.</p>
          <button className="gold-button" onClick={() => setView('welcome')}>Comenzar mi experiencia <ArrowRight size={17} /></button>
          <p className="microcopy">Sin prisa. Sin perfección. Solo siete minutos para ti.</p>
        </div>
        <div className="orbital-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="moon"><span>✦</span></div><div className="orbital-label">TU MOMENTO<br /><b>07:00</b></div></div>
        <a className="scroll-cue" href="#experiencia"><span />Descubre el espacio</a>
      </section>

      <section className="intro-section section-wrap" id="experiencia">
        <div className="section-kicker">01 / La experiencia</div>
        <div className="intro-grid"><h2>Un ritual pequeño<br /><i>para volver a ti.</i></h2><div><p className="lead">Frecuencia Divina 7 es una invitación a hacer una pausa consciente durante 30 días.</p><p>Una práctica guiada de siete minutos que cabe en tu día y abre un espacio para escucharte, respirar y estar presente. No se trata de hacerlo perfecto. Se trata de volver, una y otra vez, a tu propia luz.</p></div></div>
        <div className="feature-row"><Feature num="01" title="Siete minutos" text="Una práctica breve, profunda y posible." /><Feature num="02" title="A tu propio ritmo" text="Un camino sin exigencias, diseñado para acompañarte." /><Feature num="03" title="Un espacio para ti" text="Meditación, reflexión y presencia en un mismo lugar." /></div>
      </section>

      <section className="method-section"><div className="section-wrap method-grid"><div><div className="section-kicker">02 / El método</div><h2>Respirar.<br /><i>Escuchar.</i><br />Volver.</h2></div><div className="method-copy"><div className="method-number">7<span>min</span></div><p>Cada práctica sigue una estructura sencilla para ayudarte a llegar al momento presente: una llegada, una respiración consciente y una intención para llevar contigo.</p><div className="method-line"><span>01</span><b>Llegar</b><small>Encuentra tu lugar y tu ritmo.</small></div><div className="method-line"><span>02</span><b>Habitar</b><small>Deja que la respiración te acompañe.</small></div><div className="method-line"><span>03</span><b>Integrar</b><small>Guarda lo que descubriste en ti.</small></div></div></div></section>

      <section className="journey-section section-wrap" id="recorrido"><div className="section-kicker">03 / El recorrido</div><div className="journey-heading"><h2>Cuatro etapas.<br /><i>Un solo camino.</i></h2><p>Treinta días para acompañarte desde el primer respiro hasta una conexión más íntima con tu propio proceso.</p></div><div className="stage-grid">{stages.map(([num, title, days, text]) => <div className="stage-card" key={num}><span className="stage-num">{num}</span><h3>{title}</h3><p className="stage-days">{days}</p><p>{text}</p><ArrowRight size={18} /></div>)}</div></section>

      <section className="included-section"><div className="section-wrap included-grid"><div className="celestial-disc"><Headphones size={34} strokeWidth={1} /><span>30<br /><small>prácticas</small></span></div><div><div className="section-kicker">04 / Tu espacio</div><h2>Todo lo que necesitas<br /><i>para estar presente.</i></h2><ul className="check-list"><li><Check /> 30 meditaciones guiadas de 7 minutos</li><li><Check /> Diario personal para integrar tu experiencia</li><li><Check /> Calendario de progreso y pequeños rituales</li><li><Check /> Un espacio privado que crece contigo</li></ul><button className="text-button" onClick={() => setView('welcome')}>Explorar mi espacio <ArrowRight size={16} /></button></div></div></section>

      <section className="faq-section section-wrap" id="preguntas"><div className="section-kicker">05 / Preguntas frecuentes</div><div className="faq-grid"><h2>Antes de<br /><i>comenzar.</i></h2><div>{['¿Cómo funciona el programa?', '¿Cuánto dura cada meditación?', '¿Puedo repetir una práctica?', '¿Puedo acceder desde mi celular?'].map((q, i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{q}</span>{faq === i ? <ChevronDown /> : <ChevronRight />}</button>{faq === i && <p>{i === 0 ? 'Durante 30 días encontrarás una práctica guiada de siete minutos. Puedes hacerla cuando quieras y avanzar a tu propio ritmo.' : i === 1 ? 'Cada meditación dura aproximadamente siete minutos, para que puedas crear un ritual posible incluso en los días más ocupados.' : i === 2 ? 'Sí. Repetir una práctica puede ser una forma hermosa de profundizar en lo que necesitas hoy.' : 'Sí. La experiencia está diseñada para acompañarte desde cualquier dispositivo.'}</p>}</div>)}</div></div></section>

      <section className="final-cta"><Stars /><div className="section-kicker">Tu momento comienza aquí</div><h2>Siete minutos pueden<br /><i>cambiar tu día.</i></h2><p>Haz espacio para la calma. Tu luz ya está ahí.</p><button className="gold-button" onClick={() => setView('welcome')}>Comenzar mi experiencia <ArrowRight size={17} /></button></section>
      <footer className="site-footer"><a className="brand" href="#inicio"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></a><p>Un espacio para volver a ti.</p><div><a href="#preguntas">Ayuda</a><a href="#">Privacidad</a><a href="#">Términos</a></div></footer>
    </main>
  )
}

function WelcomeView({ onBack, onStart }: { onBack: () => void; onStart: () => void }) {
  return (
    <main className="welcome-shell">
      <Stars />
      <header className="welcome-header">
        <button className="brand brand-button" onClick={onBack} aria-label="Volver al inicio"><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></button>
        <span className="welcome-step">PREPARACIÓN · 01</span>
      </header>
      <section className="welcome-content" aria-labelledby="welcome-title">
        <div className="welcome-symbol" aria-hidden="true">✦</div>
        <p className="eyebrow">Un camino de presencia y abundancia</p>
        <h1 id="welcome-title">Tu transformación<br /><i>comienza con la paciencia.</i></h1>
        <p className="welcome-intro">Un día a la vez. Una meditación a la vez.</p>
        <div className="welcome-card">
          <p>Este camino de 30 días fue creado para que vivas cada experiencia con calma, presencia y amor.</p>
          <ul>
            <li><span>✦</span><strong>No te saltes ningún día.</strong> Cada etapa forma parte de tu proceso de conexión interior.</li>
            <li><span>✦</span><strong>No adelantes las meditaciones.</strong> No necesitas correr hacia el día siguiente. Tu momento es hoy.</li>
            <li><span>✦</span><strong>Lee un texto y mira un video por día.</strong> Dedica estos minutos exclusivamente a ti, sin prisas ni exigencias.</li>
          </ul>
          <p className="welcome-reminder">Recuerda: la paz comienza cuando dejamos de apresurarnos.</p>
          <p>No te preocupes por llegar al día 30. Concéntrate en vivir plenamente el día de hoy.</p>
          <p>Y si algún día no puedes continuar, no te castigues. Simplemente retoma tu camino donde lo dejaste.</p>
        </div>
        <div className="welcome-footer-copy"><strong>FRECUENCIA DIVINA 7</strong><span>30 días para cultivar tu paz interior, paso a paso.</span><em>✦ No te adelantes. No te presiones. Confía en tu propio ritmo.</em></div>
        <button className="gold-button welcome-start" onClick={onStart}>Comenzar mi recorrido <ArrowRight size={17} /></button>
      </section>
    </main>
  )
}

function Feature({ num, title, text }: { num: string; title: string; text: string }) { return <div className="feature"><span>{num}</span><h3>{title}</h3><p>{text}</p></div> }

function AppView({ setView, menuOpen, setMenuOpen, selectedDay, setSelectedDay, playing, setPlaying, completed, setCompleted, progress, selectedMeditation, stage, dayLabel, reflectionOpen, setReflectionOpen }: any) {
  const markComplete = () => { if (!completed.includes(selectedDay)) setCompleted([...completed, selectedDay]) }
  useEffect(() => {
    if (!reflectionOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setReflectionOpen(false) }
    const closeOnCorner = (event: MouseEvent) => {
      const modal = (event.target as HTMLElement).closest('.daily-reflection')
      if (!modal) return
      const rect = modal.getBoundingClientRect()
      if (event.clientX >= rect.right - 58 && event.clientY <= rect.top + 58) setReflectionOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('click', closeOnCorner)
    return () => { document.removeEventListener('keydown', closeOnEscape); document.removeEventListener('click', closeOnCorner) }
  }, [reflectionOpen, setReflectionOpen])
  return <main className="app-shell"><header className="app-header"><button className="brand brand-button" onClick={() => setView('home')}><span className="brand-mark">✦</span><span>FRECUENCIA<br /><em>DIVINA 7</em></span></button><nav className="app-nav"><button className="active">Mi recorrido</button><button>Mi diario</button><button>Mi perfil</button></nav><button className="avatar" aria-label="Abrir perfil">L</button><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}><Menu /></button></header>{menuOpen && <div className="mobile-app-menu"><button>Mi recorrido</button><button>Mi diario</button><button>Mi perfil</button></div>}<div className="app-content"><section className="abundance-panel" aria-labelledby="abundance-title"><img src="/luz-abundancia.png" alt="Luz dorada atravesando nubes, símbolo de calma y abundancia" /><div className="abundance-panel-content"><span className="eyebrow">Tu energía · Tu espacio · Tu abundancia</span><h2 id="abundance-title">Abre espacio para<br /><i>recibir tu luz.</i></h2><p>Respira profundo. Todo lo que necesitas para florecer también vive dentro de ti.</p><button className="gold-button" onClick={() => setSelectedDay(1)}>Comenzar con el día 01 <ArrowRight size={17} /></button></div><div className="abundance-glow" aria-hidden="true" /></section><section className="practice-grid" aria-label="Prácticas de 30 días">{meditations.map(([title, description], index) => { const day = index + 1; return <button className={`practice-card${selectedDay === day ? ' is-selected' : ''}`} type="button" onClick={() => { setSelectedDay(day); setReflectionOpen(true) }} key={title}><span className="practice-card-day">DÍA {String(day).padStart(2, '0')}</span><h2>{title}</h2><p>{description}</p><span className="practice-card-action" role="link" tabIndex={0} onClick={(event) => { event.stopPropagation(); setSelectedDay(day); setReflectionOpen(true) }} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); event.stopPropagation(); window.open(meditationLinks[day - 1], '_blank', 'noopener,noreferrer') } }}><Sparkles /> Ver video de la práctica</span></button> })}</section>{reflectionOpen && <div className="reflection-overlay" role="dialog" aria-modal="true" aria-labelledby="reflection-title"><div className="reflection-modal"><button className="reflection-close" type="button" aria-label="Cerrar reflexión" onClick={() => setReflectionOpen(false)}><X /></button><div className="section-kicker">Reflexión del día · Día {dayLabel}</div><h2 id="reflection-title">{selectedMeditation[0]}</h2><p>{motivationalTexts[selectedDay - 1]}</p><div className="reflection-actions"><button className="gold-button" type="button" onClick={() => { setReflectionOpen(false); setPlaying(true) }}><Play data-icon="inline-start" /> Escuchar práctica</button><button className="text-button" type="button" onClick={() => setReflectionOpen(false)}>Cerrar</button></div></div></div>}<section className={reflectionOpen ? 'daily-reflection is-open' : 'daily-reflection is-closed'} aria-live="polite"><div className="section-kicker">Reflexión del día · Día {dayLabel}</div><h2>{selectedMeditation[0]}</h2><p>{motivationalTexts[selectedDay - 1]}</p><span className="reflection-note">Lee despacio, respira y elige una acción amable para llevar contigo.</span></section><AudioGenerator day={selectedDay} title={selectedMeditation[0]} youtubeUrl={meditationLinks[selectedDay - 1]} /><div className="app-topline"><div><p className="eyebrow">MI RECORRIDO · DÍA {dayLabel}</p><h1>Bienvenida a tu<br /><i>espacio de luz.</i></h1></div><div className="progress-stat"><strong>{progress}%</strong><span>completado</span><div className="progress-bar"><i style={{ width: `${progress}%` }} /></div><small>{completed.length} de 30 días</small></div></div><div className="app-grid"><section className="player-card"><div className="player-orb"><span>{dayLabel}</span></div><div className="player-meta"><span className="stage-pill">ETAPA {stage[0]} · {stage[1].toUpperCase()}</span><h2>{selectedMeditation[0]}</h2><p>{selectedMeditation[1]}</p><div className="audio-line"><span>0:00</span><div><i style={{ width: playing ? '28%' : '0%' }} /></div><span>7:00</span></div><div className="player-controls"><button aria-label="Meditación anterior" onClick={() => setSelectedDay(Math.max(1, selectedDay - 1))}><ChevronLeft /></button><button className="play-button" aria-label={playing ? 'Pausar' : 'Reproducir'} onClick={() => setPlaying(!playing)}>{playing ? <Pause /> : <Play fill="currentColor" />}</button><button aria-label="Siguiente meditación" onClick={() => setSelectedDay(Math.min(30, selectedDay + 1))}><ChevronRight /></button><button className="volume" aria-label="Volumen"><Volume2 /></button></div><button className="complete-button" onClick={markComplete}>{completed.includes(selectedDay) ? <><Check /> Práctica completada</> : 'Marcar como completada'}</button><small className="audio-note">Esta meditación estará disponible próximamente.</small></div></section><aside className="daily-card"><div className="card-heading"><span>Para hoy</span><Sparkles /></div><blockquote>“No necesitas hacerlo perfecto.<br />Solo necesitas regalarte<br />este momento.”</blockquote><div className="daily-divider" /><p>Tu intención de hoy</p><strong>Estar presente con amabilidad.</strong><button className="text-button">Abrir mi diario <ArrowRight size={16} /></button></aside></div><section className="library-section"><div className="library-heading"><div><p className="eyebrow">BIBLIOTECA</p><h2>Tu camino de 30 días</h2></div><span>Selecciona una práctica para comenzar</span></div><div className="day-grid">{meditations.map(([title, desc], i) => { const day = i + 1; const done = completed.includes(day); return <button key={day} className={`day-card ${day === selectedDay ? 'selected' : ''} ${done ? 'done' : ''}`} onClick={() => setSelectedDay(day)}><span className="day-number">{String(day).padStart(2, '0')}</span><span className="day-info"><b>{title}</b><small>{desc}</small><em>{done ? 'Completado' : day === selectedDay ? 'Disponible ahora' : '7 minutos'}</em></span>{done && <Check className="day-check" />}</button> })}</div></section><VideoLinks titles={meditations.map(([title]) => title)} /></div></main>
}
