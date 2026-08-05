/**
 * drew-agent — Cloudflare Worker fronting the Claude API.
 *
 * Keeps ANTHROPIC_API_KEY server-side so it never reaches the browser.
 * The site posts { question } and gets back { answer }.
 *
 * Deploy: see README.md in this folder.
 */

const MODEL = 'claude-sonnet-4-5';

const ALLOWED_ORIGINS = [
  'https://drewrubinstein.com',
  'https://www.drewrubinstein.com',
  'http://localhost:8080',
];

/**
 * Everything the agent is allowed to know. Edit this when the resume changes —
 * it is the single source of truth for what the agent can say.
 */
const GROUNDING = `
# Drew Rubinstein — source of truth

Contact: drewbinstein1703@gmail.com · (301) 814-5670 · North Potomac, MD (DC metro)
Studio: https://rubiventures.com

## Now (two roles in parallel)

**Founder — Rubi Ventures LLC** (April 2026 – present, remote)
- Venture studio building and shipping consumer mobile products; owns design, engineering, and go-to-market end to end.
- **Your Clubhouse** — social golf-course ranking app (React Native, Supabase). A head-to-head comparison engine turns pairwise matchups into personalized rankings. 250+ users, 20,000-course catalog. Live on iOS. https://yourclubhouse.net
- **The Cube** — multiplayer mobile card game (React, Vite, Capacitor). Built the full game-state logic, animation system, and iOS build pipeline. https://rubiventures.com/cube
- Built an asset-generation pipeline and locked brand system to run marketing solo, cutting campaign production from hours to minutes.

**AI Analyst — SoftSnow AI** (October 2025 – present, remote)
- Builds and deploys AI agents for internal and client workflows across Cassidy, Sierra, and Claude.
- Automated data flows, message handling, and task routing across 10+ concurrent client workflows.
- Designs tailored AI workflows for consulting engagements, translating client process gaps into scoped, shippable agent solutions.
- QCs agent outputs against real client data before deployment, including peer review of teammates' agents, to catch failure modes before release.
- Meets weekly with CEOs and leadership to align AI tooling against real business problems.

## Earlier

**Software Engineer Intern — Digital Infuzion** (June–August 2024, Germantown, MD)
- Designed and shipped the search page for FluHub (TypeScript, React, MUI), reducing average search time by 80% for healthcare researchers.
- Restructured backend content models to support search; delivered within a 3-month Agile Scrum internship.

**University of Florida, Warrington College of Business** (June 2021 – May 2025, Gainesville, FL)
- B.S. Information Systems and Operations Management; minor in Computer Science.
- A.I. Fundamentals and Applications Certification.
- Coursework: data structures & algorithms, database management, operating systems, computer organization, statistics.

## Skills & credentials
- Certification: **Claude Certified Architect — Foundations (2026)**
- AI & agents: agent building, prompt engineering, RAG, workflow automation; Cassidy, Sierra, Claude
- Languages: Python, TypeScript, JavaScript, SQL, C++
- Web & mobile: React, React Native, Supabase, Strapi, Material UI, HTML/CSS, Git
- Data: Tableau, Looker Studio, data analysis, forecasting

## Personal
- Memberships: Alpha Epsilon Pi, TAMID Group, UF Club Golf
- Interests: golf, fitness, pickleball, stocks & investing, traveling
- Open to full-time roles and consulting work. Both current roles are remote.
`.trim();

const SYSTEM = `You are drew-agent, the AI agent embedded on Drew Rubinstein's personal site.

Visitors are usually recruiters, hiring managers, or potential clients vetting Drew. Answer their questions about him directly and usefully.

Rules:
- Answer ONLY from the source of truth below. If something isn't there, say you don't have it rather than inventing a detail. Never invent numbers, dates, employers, or technologies.
- Speak about Drew in the third person. You are his agent, not him.
- Be conversational and confident, not salesy. Concrete specifics beat adjectives — cite the real numbers (250+ users, 20,000 courses, 10+ workflows, 80% faster) when they're relevant.
- Keep answers to 2-4 sentences unless asked for more.
- If asked about weaknesses or gaps, be genuinely honest: he's early-career (graduated May 2025), so he brings velocity and range rather than a decade of tenure. Honesty reads better than spin.
- If asked how to reach him, give drewbinstein1703@gmail.com.
- Plain prose only. No markdown, headers, or bullet lists.

<source_of_truth>
${GROUNDING}
</source_of_truth>`;

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== 'POST') {
      return new Response('POST only', { status: 405, headers: cors });
    }

    let question = '';
    try {
      const body = await request.json();
      question = String(body.question || '').slice(0, 500);
    } catch {
      return Response.json({ error: 'Bad request' }, { status: 400, headers: cors });
    }
    if (!question.trim()) {
      return Response.json({ error: 'Empty question' }, { status: 400, headers: cors });
    }

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 400,
          system: SYSTEM,
          messages: [{ role: 'user', content: question }],
        }),
      });

      if (!res.ok) {
        return Response.json(
          { error: 'Upstream error' },
          { status: 502, headers: cors }
        );
      }

      const data = await res.json();
      const answer = (data.content || [])
        .filter((b) => b.type === 'text')
        .map((b) => b.text)
        .join('')
        .trim();

      return Response.json({ answer }, { headers: cors });
    } catch {
      return Response.json({ error: 'Request failed' }, { status: 500, headers: cors });
    }
  },
};
