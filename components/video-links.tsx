'use client'

const videoLinks = [
  'https://www.youtube.com/watch?v=kYRUqjVDF8I', 'https://www.youtube.com/watch?v=mI3ziH9EpxY', 'https://www.youtube.com/watch?v=gbw4aAL5zDQ', 'https://www.youtube.com/watch?v=9J6Qph-7vLA', 'https://www.youtube.com/watch?v=8rCQuMLW70g', 'https://www.youtube.com/watch?v=4oEPnVOqzr0', 'https://www.youtube.com/watch?v=lFixjPkfMp0', 'https://www.youtube.com/watch?v=z9gTIX2emls', 'https://www.youtube.com/watch?v=O3xHKoxUG1U', 'https://www.youtube.com/watch?v=sy0lyW-6-FI', 'https://www.youtube.com/watch?v=WCACcgpO3Hc', 'https://www.youtube.com/watch?v=EnIfZBPt3gE', 'https://www.youtube.com/watch?v=U-7yCtxi-sg', 'https://www.youtube.com/watch?v=SCw6Exn884U', 'https://www.youtube.com/watch?v=GB-z8xrRkV4', 'https://www.youtube.com/watch?v=UbQz6SpOguo', 'https://www.youtube.com/watch?v=6wjzZTYhXy0', 'https://www.youtube.com/watch?v=55pgr8HPg1g', 'https://www.youtube.com/watch?v=nd7Jy0OEtyE', 'https://www.youtube.com/watch?v=uWcrS18CsQw', 'https://www.youtube.com/watch?v=-ElAmReMfa4', 'https://www.youtube.com/watch?v=RTLWsi7P-Eo', 'https://www.youtube.com/watch?v=W_tT7slViYg', 'https://www.youtube.com/watch?v=KxRpK9ZGq4Y', 'https://www.youtube.com/watch?v=_M4AoR6ZEKw', 'https://youtu.be/1_wsuOzDuhg', 'https://www.youtube.com/watch?v=TkEVsYmQiAM', 'https://youtu.be/OA-Uae1qmns', 'https://youtu.be/xkHUKLYjmWM', 'https://www.youtube.com/watch?v=KzCwEV21Pkc',
]

export function VideoLinks({ titles }: { titles: string[] }) {
  return <section className="video-links-panel" aria-labelledby="video-links-title">
    <div className="section-kicker">Complemento · Paz interior y abundancia</div>
    <h2 id="video-links-title">TUS 30 MEDITACIONES<br /><i>EN VIDEO</i></h2>
    <p className="video-links-intro">Cada día, acompaña tu lectura con una meditación para cultivar la paz interior, el equilibrio emocional y una mentalidad de abundancia.</p>
    <div className="video-links-grid">
      {videoLinks.map((url, index) => <article className="video-link-card" key={url}>
        <span>DÍA {index + 1}</span>
        <h3>{titles[index]}</h3>
        <p>Meditación complementaria</p>
        <a className="video-link-button" href={url} target="_blank" rel="noopener noreferrer">Ver meditación <b aria-hidden="true">↗</b></a>
      </article>)}
    </div>
  </section>
}

export { videoLinks }
