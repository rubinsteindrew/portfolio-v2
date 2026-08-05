const LEGS = [
  {
    when: 'Apr 2026 — Present',
    role: 'Founder',
    where: 'Rubi Ventures',
    detail: 'Venture studio shipping consumer mobile products. Design, engineering, go-to-market, all of it.',
  },
  {
    when: 'Oct 2025 — Present',
    role: 'AI Analyst',
    where: 'SoftSnow AI',
    detail: 'Agents in production for real clients, across 10+ concurrent workflows.',
  },
  {
    when: 'Jun 2024 — Aug 2024',
    role: 'Software Engineer Intern',
    where: 'Digital Infuzion',
    detail:
      "Shipped FluHub's search page in a three-month internship — 80% faster for the researchers who use it — and restructured the content models underneath it.",
  },
  {
    when: 'Jun 2021 — May 2025',
    role: 'B.S. Information Systems',
    where: 'University of Florida',
    detail:
      'Warrington College of Business, minor in Computer Science, A.I. Fundamentals certification. Club Golf, which explains a lot about the first item on this list.',
  },
];

const Path = () => (
  <section className="section">
    <div className="wrap">
      <p className="label">How I got here</p>
      {LEGS.map((l) => (
        <div className="leg" key={l.where}>
          <span className="when">{l.when}</span>
          <div>
            <div className="what">
              {l.role} · <span className="where">{l.where}</span>
            </div>
            <p className="detail">{l.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Path;
