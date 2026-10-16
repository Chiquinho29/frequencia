'use client'

import { useMemo, useState } from 'react'

const videoLinks = [
  'https://youtube.com/watch?v=AYrqrmvm3us', 'https://youtu.be/gpJrmutDCPc', 'https://youtu.be/VgyftYGODhw', 'https://youtu.be/jbfAg54moRQ', 'https://youtu.be/3hkq6fd0gn4', 'https://youtu.be/sxC3pe8T_R8', 'https://youtu.be/a0_TvxdxRu8', 'https://youtu.be/Skj3TYYcEyI', 'https://youtu.be/oZgGLgINUto', 'https://youtu.be/TCDTeFbapwU', 'https://youtu.be/Hc-Uv3CH39s', 'https://youtu.be/J9FeBBCkg8o', 'https://youtu.be/XpTXWmSeC64', 'https://youtu.be/CHAv2KgZNaM', 'https://youtu.be/rSI-TyoKLuU', 'https://youtu.be/uM8Dd6oIwJo', 'https://youtu.be/93uWhKquLw0', 'https://youtu.be/LcbysVitODg', 'https://youtu.be/dPnjlksmAvo', 'https://www.youtube.com/watch?v=jTyxeMzBxY8', 'https://www.youtube.com/watch?v=4LP28e3h_ck', 'https://www.youtube.com/watch?v=cYXKqQcsv1M', 'https://www.youtube.com/watch?v=UrYZBsmbp2Q', 'https://www.youtube.com/watch?v=Pkv1Nqm8NxY', 'https://www.youtube.com/watch?v=NlW7WD0tQ5o', 'https://www.youtube.com/watch?v=pIBQinQpZ7U', 'https://www.youtube.com/watch?v=bVrv2s2WOtw', 'https://www.youtube.com/watch?v=WMoS64j0ZgE', 'https://www.youtube.com/watch?v=ABveLtmYcMk', 'https://www.youtube.com/watch?v=EYWGl3CMwY0',
]

function getVideoId(url: string) {
  try {
    const parsed = new URL(url)
    return parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : parsed.searchParams.get('v')
  } catch {
    return null
  }
}

export function PremiumYouTubePlayer({ url, title }: { url: string; title: string }) {
  const videoId = getVideoId(url)
  if (!videoId) return <p className="premium-player-error">No pudimos cargar esta meditación. Prueba con otra.</p>
  return <div className="premium-player" aria-label={`Reproductor de ${title}`}>
    <iframe src={`https://www.youtube.com/embed/${videoId}?playsinline=1&rel=0&controls=1`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
  </div>
}

export function VideoLinks({ titles }: { titles: string[] }) {
  const [selected, setSelected] = useState<number | null>(null)
  const selectedUrl = selected === null ? null : videoLinks[selected]
  const selectedTitle = selected === null ? '' : titles[selected]
  const selectedLabel = useMemo(() => selected === null ? '' : `Día ${String(selected + 1).padStart(2, '0')}`, [selected])

  return <section className="video-links-panel" aria-labelledby="video-links-title">
    <div className="section-kicker">Complemento · Paz interior y abundancia</div>
    <h2 id="video-links-title">TUS 30 MEDITACIONES<br /><i>EN VIDEO</i></h2>
    <p className="video-links-intro">Cada día, acompaña tu lectura con una meditación para cultivar la paz interior, el equilibrio emocional y una mentalidad de abundancia.</p>
    {selectedUrl && <div className="premium-player-panel"><div><span className="section-kicker">{selectedLabel}</span><h3>{selectedTitle}</h3></div><PremiumYouTubePlayer url={selectedUrl} title={selectedTitle} /></div>}
    <div className="video-links-grid">
      {videoLinks.map((url, index) => <article className={`video-link-card${selected === index ? ' is-selected' : ''}`} key={`${url}-${index}`}>
        <div><span>DÍA {String(index + 1).padStart(2, '0')}</span><h3>{titles[index]}</h3><p>Meditación complementaria</p></div>
        <button className="video-link-button" type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}>Ver meditación <b aria-hidden="true">↗</b></button>
      </article>)}
    </div>
  </section>
}

export { videoLinks }
