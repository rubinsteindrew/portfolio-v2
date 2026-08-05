const STEPS = [
  {
    n: 'first',
    h: 'Scope it',
    p: "A client describes a process that's eating their week. I turn that into an agent that can actually be built — not a demo, a thing that ships.",
    accent: false,
  },
  {
    n: 'then',
    h: 'Build it',
    p: 'On whatever platform fits the problem — Cassidy, Sierra, or Claude. Data flows, message handling, task routing, all wired up.',
    accent: false,
  },
  {
    n: 'always',
    h: 'Prove it',
    p: "Every agent gets QC'd against real client data before release, and I peer-review my teammates' agents the same way. Failure modes get caught here, not by the client.",
    accent: true,
  },
];

const STACK = [
  { t: 'claude', key: true },
  { t: 'cassidy', key: true },
  { t: 'sierra', key: true },
  { t: 'rag', key: false },
  { t: 'python', key: false },
  { t: 'typescript', key: false },
  { t: 'sql', key: false },
  { t: 'react', key: false },
  { t: 'react native', key: false },
  { t: 'supabase', key: false },
  { t: 'tableau', key: false },
  { t: 'looker studio', key: false },
];

const Practice = () => (
  <section className="section" id="ai">
    <div className="wrap">
      <p className="label">SoftSnow AI · the day job</p>
      <h2 className="big">
        I build the agents companies <em>actually put in front of clients.</em>
      </h2>
      <p className="lede">
        Anyone can demo an agent. Getting one past QC, into production, and in front of a paying
        client is a different job — and that's the part I do.
      </p>

      <div className="pcards">
        {STEPS.map((s) => (
          <div className={'pcard' + (s.accent ? ' accent' : '')} key={s.h}>
            <p className="step-n">{s.n}</p>
            <h3>{s.h}</h3>
            <p>{s.p}</p>
          </div>
        ))}
      </div>

      <div className="creds">
        <div className="cred">
          <div className="cv">10+</div>
          <p className="ck">
            <strong>concurrent client workflows</strong> automated and running in production
          </p>
        </div>
        <div className="cred">
          <div className="cv">3</div>
          <p className="ck">
            <strong>agent platforms</strong> in rotation, chosen per workflow rather than by habit
          </p>
        </div>
        <div className="cred">
          <div className="cv sm">Certified</div>
          <p className="ck">
            <strong>Claude Certified Architect — Foundations</strong>, 2026
          </p>
        </div>
      </div>

      <div className="stackline">
        <p className="sh">Platforms &amp; stack</p>
        <div className="platforms">
          {STACK.map((s) => (
            <span key={s.t} className={s.key ? 'key' : undefined}>
              {s.t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Practice;
