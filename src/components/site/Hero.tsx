import { useEffect, useRef } from 'react';

const APPS = [
  {
    cls: 'ic-clubhouse',
    href: 'https://yourclubhouse.net',
    name: 'Your Clubhouse',
    status: 'live on iOS ↗',
    icon: '/icons/clubhouse.png',
  },
  {
    cls: 'ic-cube',
    href: 'https://rubiventures.com/cube',
    name: 'The Cube',
    status: 'on the app store ↗',
    icon: '/icons/cube.png',
  },
];

const PROOF = [
  { v: '2', c: <>apps shipped<br />to the App Store</> },
  { v: '250+', c: <>users ranking<br />golf courses</> },
  { v: '10+', c: <>client workflows<br />in production</> },
  { v: '80%', c: <>faster search<br />on FluHub</> },
];

const Hero = () => {
  const stage = useRef<HTMLDivElement>(null);

  // Pointer parallax — the icons lean toward the cursor.
  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const move = (e: PointerEvent) => {
      const r = node.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      node.style.setProperty('--mx', `${(px * 18).toFixed(2)}deg`);
      node.style.setProperty('--my', `${(-py * 12).toFixed(2)}deg`);
    };
    const reset = () => {
      node.style.setProperty('--mx', '0deg');
      node.style.setProperty('--my', '0deg');
    };

    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', reset);
    return () => {
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
    };
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow rise d1">
              Founder, Rubi Ventures <span className="sep">◆</span> AI Analyst, SoftSnow AI
            </p>
            <h1 className="rise d2">
              Apps people open.
              <br />
              <em>Agents companies run on.</em>
            </h1>
            <p className="hero-sub rise d3">
              I'm Drew. I build both — those two are mine, shipped under my own studio, and I build{' '}
              <strong>AI agents in production</strong> for real clients at the same time.
            </p>
            <div className="hero-cta rise d3">
              <a className="visit g" href="#work">see the work ↓</a>
              <a className="visit r" href="#ask">ask my agent ↓</a>
            </div>
          </div>

          <div className="stage rise d4" ref={stage}>
            {APPS.map((app) => (
              <a
                key={app.name}
                className={`ic ${app.cls}`}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ic-3d">
                  <img src={app.icon} alt={`${app.name} app icon`} />
                  <span className="gloss" />
                  <span className="rim" />
                </span>
                <span className="ic-label">
                  <span className="nm">{app.name}</span>
                  <span className="st">{app.status}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="proof rise d4">
          {PROOF.map((p) => (
            <div className="p" key={p.v}>
              <span className="v">{p.v}</span>
              <span className="c">{p.c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
