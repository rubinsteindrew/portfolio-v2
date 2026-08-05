const Work = () => (
  <section className="section" id="work">
    <div className="wrap">
      <p className="label">Rubi Ventures · shipped</p>
      <h2 className="big">
        I started a studio so I could <em>ship my own things.</em>
      </h2>
      <p className="lede">
        Founded April 2026. I own design, engineering, and go-to-market end to
        end — which mostly means there's nobody else to blame when something
        doesn't work.
      </p>
      <a
        className="visit r studio-link"
        href="https://rubiventures.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        rubiventures.com ↗
      </a>

      {/* ── Your Clubhouse ── */}
      <div className="product">
        <div className="product-info">
          <h3 className="pname">
            Your Clubhouse <span className="pill live">live on iOS</span>
          </h3>
          <p className="pkind">Social golf-course ranking</p>
          <p className="body">
            Ranking golf courses on a 1–10 scale is impossible; picking between
            two is easy. So the app only ever asks which of two courses you
            liked better, then turns thousands of those matchups into your
            personal ranking — and your friends'.
          </p>
          <div className="statrow">
            <div className="stat">
              <div className="num g">250+</div>
              <div className="cap">users ranking</div>
            </div>
            <div className="stat">
              <div className="num g">20,000</div>
              <div className="cap">course catalog</div>
            </div>
          </div>
          <p className="techrow">
            react native · supabase · pairwise ranking engine
          </p>
          <a
            className="visit g"
            href="https://yourclubhouse.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            yourclubhouse.net ↗
          </a>
        </div>

        <div className="demo-col">
          <div className="device">
            <img
              src="/shots/ch-profile.jpg"
              alt="Your Clubhouse — a player's profile and ranked courses"
            />
          </div>
        </div>
      </div>

      {/* ── The Cube ── */}
      <div className="product">
        <div className="demo-col">
          <div className="device violet">
            <img
              src="/shots/cube.webp"
              alt="The Cube — gameplay"
              loading="lazy"
            />
          </div>
        </div>
        <div className="product-info">
          <h3 className="pname">
            The Cube <span className="pill soon">app store</span>
          </h3>
          <p className="pkind">Multiplayer card game</p>
          <p className="body">
            A card game I wanted to exist, so I built the whole thing —
            game-state logic, the animation system, and the iOS build pipeline
            that gets it onto a phone.
          </p>
          <div className="statrow">
            <div className="stat">
              <div className="num c">100%</div>
              <div className="cap">built solo</div>
            </div>
          </div>
          <p className="techrow">
            react · vite · capacitor · custom animation system
          </p>
          <a
            className="visit c"
            href="https://rubiventures.com/cube"
            target="_blank"
            rel="noopener noreferrer"
          >
            rubiventures.com/cube ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Work;
