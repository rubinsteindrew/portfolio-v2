/**
 * Local knowledge base for drew-agent.
 *
 * This is the offline fallback. When VITE_AGENT_ENDPOINT is set, the agent
 * calls that endpoint (a Cloudflare Worker fronting Claude) instead, and only
 * falls back to this file if the request fails. See worker/README.md.
 *
 * `k` = phrases (weighted 4), `w` = single keywords matched as prefixes (weighted 1.6).
 */
export type Topic = {
  id: string;
  k: string[];
  w: string[];
  a: string;
  f: string[];
};

export const TOPICS: Topic[] = [
  {
    id: 'overview',
    k: ['what has he ship', 'what did he build', 'what has he built', 'overview', 'summary', 'tell me about him', 'who is he', 'what does he do', 'introduce'],
    w: ['ship', 'shipped', 'built', 'build', 'made', 'summary', 'overview'],
    a: "Short version: he builds two kinds of things. Consumer apps under his own studio — Your Clubhouse, a social golf-course ranking app with 250+ users, and The Cube, a multiplayer card game, both on the App Store. And AI agents in production at SoftSnow AI, where 10+ concurrent client workflows run on things he built. Before both of those, he shipped FluHub's search page as an intern and made research 80% faster for the people who use it.",
    f: ['How does Your Clubhouse work?', 'What does he do at SoftSnow?', 'Why should I hire him?'],
  },
  {
    id: 'softsnow',
    k: ['softsnow', 'soft snow', 'day job', 'current job', 'ai analyst', 'his job', 'employer'],
    w: ['softsnow', 'analyst', 'job', 'employed', 'client', 'clients'],
    a: "He's an AI Analyst at SoftSnow AI — started October 2025, remote. The work is: a client describes a process eating their week, he scopes it into an agent that can actually be built, ships it on whatever platform fits (Cassidy, Sierra, or Claude), and QCs it against real client data before anyone sees it. He peer-reviews his teammates' agents the same way. Then he sits with CEOs weekly and explains what changed in plain language.",
    f: ['What is his QC process?', 'Which AI platforms does he use?', 'Is he good with executives?'],
  },
  {
    id: 'clubhouse',
    k: ['your clubhouse', 'yourclubhouse', 'golf app', 'ranking app', 'ranking engine', 'comparison engine', 'pairwise', 'head to head'],
    w: ['clubhouse', 'golf', 'ranking', 'rank', 'courses', 'course', 'pairwise'],
    a: "Your Clubhouse solves a real problem: nobody can honestly rank 40 golf courses on a 1–10 scale, but anyone can tell you which of two they liked more. So the app only asks that — and the head-to-head engine turns all those matchups into your personal ranking, and your friends'. 250+ users, a 20,000-course catalog, built in React Native on Supabase. You can see it at yourclubhouse.net.",
    f: ['What is The Cube?', 'What is Rubi Ventures?', 'What stack does he use?'],
  },
  {
    id: 'cube',
    k: ['the cube', 'card game', 'cube app', 'game he built'],
    w: ['cube', 'card', 'game', 'gaming', 'multiplayer'],
    a: 'The Cube is a multiplayer mobile card game he built end to end — the full game-state logic, a custom animation system, and the iOS build pipeline to get it shipped. React, Vite, and Capacitor. He built it because he wanted to play it, which is generally how his projects start. It lives at rubiventures.com/cube.',
    f: ['What is Your Clubhouse?', 'What is Rubi Ventures?', 'Does he do design too?'],
  },
  {
    id: 'rubi',
    k: ['rubi ventures', 'rubiventures', 'his studio', 'his company', 'founder', 'venture studio', 'started a company'],
    w: ['rubi', 'ventures', 'studio', 'founder', 'founded', 'company', 'business'],
    a: 'Rubi Ventures is his own venture studio, founded April 2026, building and shipping consumer mobile products. He owns design, engineering, and go-to-market — all of it. Two apps shipped so far. He also built an asset-generation pipeline and a locked brand system that cut campaign production from hours to minutes, which is the only reason one person can run marketing for a whole studio. rubiventures.com.',
    f: ['What has the studio shipped?', 'Does he do design too?', 'How does he juggle that with a job?'],
  },
  {
    id: 'ai',
    k: ['rag', 'retrieval', 'agents', 'agent building', 'prompt engineering', 'llm', 'ai skills', 'automation', 'workflow automation', 'ai experience'],
    w: ['rag', 'agent', 'agents', 'prompt', 'llm', 'llms', 'automation', 'automate', 'ai'],
    a: "It's the job, not a side interest. Agent building, RAG, prompt engineering, and workflow automation — all in production, across Cassidy, Sierra, and Claude. He's a Claude Certified Architect (Foundations, 2026). What actually sets him apart isn't building the agent, it's the discipline after: nothing ships until it's been run against real client data and reviewed.",
    f: ['What is his QC process?', 'Which AI platforms does he use?', 'How does he pick a platform?'],
  },
  {
    id: 'qc',
    k: ['qc', 'quality', 'testing', 'test', 'evaluation', 'eval', 'peer review', 'failure mode', 'how does he know it works'],
    w: ['qc', 'quality', 'test', 'testing', 'eval', 'evals', 'review', 'reliable', 'reliability'],
    a: "This is the part he's actually opinionated about. Agent outputs get QC'd against real client data before deployment — not toy examples, the client's own messy data — and he peer-reviews teammates' agents the same way. The point is catching failure modes before release rather than hearing about them from the client. A demo that works once isn't a product.",
    f: ['What does he do at SoftSnow?', 'Why should I hire him?', 'What are his weaknesses?'],
  },
  {
    id: 'platforms',
    k: ['cassidy', 'sierra', 'claude', 'which platform', 'what platforms', 'what model', 'pick a model', 'model selection'],
    w: ['cassidy', 'sierra', 'claude', 'platform', 'platforms', 'model', 'models'],
    a: 'Cassidy, Sierra, and Claude — picked per workflow rather than by preference. Some problems want a hosted agent platform with guardrails built in; some want direct API work. He holds the Claude Certified Architect cert (Foundations, 2026) and treats platform choice as a fit question, not a loyalty one.',
    f: ['Is he good at RAG?', 'What is his QC process?', 'What is his stack?'],
  },
  {
    id: 'hire',
    k: ['why should i hire', 'why hire', 'should we hire', 'is he good', 'sell me', 'pitch', 'stand out', 'strengths', 'best qualities'],
    w: ['hire', 'hiring', 'recruit', 'strength', 'strengths', 'pitch', 'candidate'],
    a: "Because almost nothing on his resume is a claim — it's a link. Two apps you can download, a search feature real healthcare researchers use daily, client agents running in production right now. He founded a studio while holding down the AI job, and the rare combination is that he can build the agent, verify it works, and then explain it to a CEO without jargon. Email him: drewbinstein1703@gmail.com",
    f: ['What are his weaknesses?', 'What is he like to work with?', 'Is he available?'],
  },
  {
    id: 'weakness',
    k: ['weakness', 'weaknesses', 'limitations', 'downside', 'not good at', 'bad at', 'flaws', 'red flag'],
    w: ['weakness', 'weaknesses', 'limitation', 'limitations', 'downside', 'flaw', 'flaws', 'worst'],
    a: "Honest ones: he's early-career, so he brings range and velocity rather than a decade of scar tissue — if you need someone who's already run a large team, that's not him yet. He runs two workloads at once, which he handles, but it's fair to ask about. And he'll push back on shipping something that hasn't been tested, which is a feature unless you're in a hurry.",
    f: ['Why should I hire him?', 'What is he like to work with?', 'How much experience does he have?'],
  },
  {
    id: 'workstyle',
    k: ['work with', 'working style', 'collaborate', 'team', 'personality at work', 'what is he like'],
    w: ['collaborate', 'collaboration', 'team', 'teams', 'style', 'culture', 'communicate'],
    a: "Direct and low-drama. He works remote across two roles, meets weekly with CEOs and leadership, and reviews teammates' work as a matter of routine. He's comfortable being the person who says an agent isn't ready. And since he runs a studio solo, he defaults to owning a problem end to end rather than handing it off.",
    f: ['Is he good with executives?', 'What are his weaknesses?', 'Why should I hire him?'],
  },
  {
    id: 'exec',
    k: ['executive', 'executives', 'ceo', 'leadership', 'presentation', 'stakeholder', 'business side', 'non technical'],
    w: ['executive', 'executives', 'ceo', 'ceos', 'leadership', 'stakeholder', 'presenting', 'business'],
    a: "Yes — it's a real part of the job. He meets weekly with CEOs and leadership to align AI tooling against actual business problems and report progress. His degree is from UF's business school with a CS minor, which is exactly why he can sit on both sides of that table: technical enough to build it, business-minded enough to explain why it matters.",
    f: ['What does he do at SoftSnow?', 'What did he study?', 'Why should I hire him?'],
  },
  {
    id: 'fluhub',
    k: ['fluhub', 'flu hub', 'digital infuzion', 'infuzion', 'internship', 'intern', 'public health', 'search page'],
    w: ['fluhub', 'infuzion', 'intern', 'internship', 'search', 'health', 'healthcare'],
    a: "Summer 2024, Digital Infuzion, three-month internship. He designed and shipped FluHub's search page in TypeScript, React, and MUI — cutting average search time 80% for healthcare researchers — and restructured the backend content models so search had something solid underneath it. It's still live. Shipping a real feature inside a 3-month internship is the part worth noticing.",
    f: ['What has he shipped since?', 'What is his stack?', 'What did he study?'],
  },
  {
    id: 'stack',
    k: ['stack', 'tech stack', 'languages', 'programming languages', 'what does he code', 'technologies', 'tools he uses'],
    w: ['stack', 'language', 'languages', 'code', 'coding', 'python', 'typescript', 'javascript', 'sql', 'tech'],
    a: 'Python, TypeScript, JavaScript, SQL, and C++. React and React Native with Supabase for product work, Strapi and Material UI where they fit, Git throughout. On the data side, Tableau and Looker Studio, plus analysis and forecasting. On the AI side, Claude, Cassidy, and Sierra.',
    f: ['Can he do mobile?', 'Can he do data work?', 'Is he good at RAG?'],
  },
  {
    id: 'mobile',
    k: ['mobile', 'react native', 'ios', 'app store', 'supabase', 'native app', 'shipping apps'],
    w: ['mobile', 'native', 'ios', 'iphone', 'app', 'apps', 'supabase', 'capacitor'],
    a: 'Two apps on the App Store says most of it. Your Clubhouse is React Native on Supabase; The Cube is React, Vite, and Capacitor with a custom animation system. He built the iOS build pipelines himself, which is the unglamorous part most people avoid — getting a thing through review and onto a phone.',
    f: ['What is Your Clubhouse?', 'What is The Cube?', 'Does he do design too?'],
  },
  {
    id: 'data',
    k: ['data', 'analytics', 'tableau', 'looker', 'forecasting', 'dashboards', 'analysis', 'business intelligence'],
    w: ['data', 'analytics', 'analysis', 'tableau', 'looker', 'forecast', 'forecasting', 'dashboard'],
    a: 'Yes — the analyst half of the title is real. Tableau and Looker Studio for visualization, SQL for the underlying work, plus data analysis and forecasting. His degree is Information Systems and Operations Management, so the data work comes with a business framing rather than just charts.',
    f: ['What did he study?', 'What is his stack?', 'Is he good with executives?'],
  },
  {
    id: 'design',
    k: ['design', 'designer', 'brand', 'branding', 'marketing', 'ux', 'ui', 'visual'],
    w: ['design', 'designer', 'brand', 'branding', 'marketing', 'ux', 'ui'],
    a: 'He does — running a solo studio means there\'s no one else to. He owns design and go-to-market for every Rubi Ventures product, and built an asset-generation pipeline plus a locked brand system so campaign production went from hours to minutes. rubiventures.com is his own design work, and this site shares its DNA.',
    f: ['What is Rubi Ventures?', 'What has he shipped?', 'What is his stack?'],
  },
  {
    id: 'education',
    k: ['school', 'college', 'university', 'degree', 'education', 'study', 'studied', 'florida', 'graduate', 'major'],
    w: ['school', 'college', 'university', 'degree', 'study', 'studied', 'florida', 'uf', 'gator', 'major', 'minor', 'coursework'],
    a: "University of Florida, Warrington College of Business — B.S. in Information Systems and Operations Management, minor in Computer Science, class of 2025. He also picked up UF's A.I. Fundamentals and Applications certification. Coursework covered data structures and algorithms, database management, operating systems, computer organization, and statistics. And he was in Club Golf, which explains what he chose to build first.",
    f: ['What certifications does he have?', 'What is Your Clubhouse?', 'How much experience does he have?'],
  },
  {
    id: 'certs',
    k: ['certification', 'certifications', 'certified', 'credentials', 'claude certified'],
    w: ['certification', 'certifications', 'certified', 'cert', 'credential', 'credentials'],
    a: "Claude Certified Architect — Foundations (2026), plus UF's A.I. Fundamentals and Applications certification. The first one matters more day to day: it's the platform he builds on the most.",
    f: ['Is he good at RAG?', 'Which platforms does he use?', 'What did he study?'],
  },
  {
    id: 'experience',
    k: ['how much experience', 'how long', 'how old', 'years of experience', 'junior', 'senior', 'seniority', 'his age'],
    w: ['experience', 'years', 'old', 'age', 'junior', 'senior', 'entry', 'level'],
    a: 'He graduated in May 2025, so on paper he\'s early-career — but the resume is unusually dense for it: an internship where he shipped a live feature, an AI Analyst role with agents in production, and a studio with two apps on the App Store, all within about two years. The honest framing is high velocity and real shipped work rather than long tenure.',
    f: ['What are his weaknesses?', 'Why should I hire him?', 'What has he shipped?'],
  },
  {
    id: 'availability',
    k: ['available', 'availability', 'hiring', 'open to', 'looking for', 'contact', 'email', 'reach him', 'get in touch', 'resume', 'phone number'],
    w: ['available', 'availability', 'contact', 'email', 'reach', 'resume', 'opportunity', 'role', 'roles'],
    a: "He's open to full-time roles and consulting work, and he answers fast. drewbinstein1703@gmail.com, or grab the resume from the header. He's in North Potomac, MD, and both of his current roles are remote — so remote or hybrid both work.",
    f: ['Why should I hire him?', 'Where is he based?', 'What is he working on now?'],
  },
  {
    id: 'location',
    k: ['where is he', 'based', 'location', 'remote', 'relocate', 'where does he live', 'maryland', 'washington dc'],
    w: ['based', 'location', 'remote', 'relocate', 'maryland', 'located'],
    a: "North Potomac, Maryland — DC metro area. Both of his current roles are remote, so he's comfortable working that way and isn't tied to an office by default.",
    f: ['Is he available?', 'What does he do at SoftSnow?', 'Why should I hire him?'],
  },
  {
    id: 'now',
    k: ['working on now', 'currently', 'right now', 'what is next', 'future', 'goals', 'plans'],
    w: ['now', 'currently', 'next', 'future', 'plans', 'goal', 'goals', 'upcoming'],
    a: "Two things in parallel: growing the client agent work at SoftSnow, and building the next Rubi Ventures product. He keeps a standing habit of trying whatever's new in AI the week it ships — which is roughly how the agent you're talking to got built.",
    f: ['What is Rubi Ventures?', 'What does he do at SoftSnow?', 'Is he available?'],
  },
  {
    id: 'whyai',
    k: ['why ai', 'how did he get into ai', 'interest in ai', 'passionate', 'why does he like'],
    w: ['passion', 'passionate', 'interested', 'obsessed', 'motivation'],
    a: "It started at UF — the A.I. Fundamentals certification alongside a CS minor and a business degree — and turned into the whole career pretty quickly. The appeal for him is less the models themselves and more what they collapse: a process that ate a client's week becomes an agent that runs it. He picks up new tools fast because he's genuinely curious, not because a job description asked.",
    f: ['Is he good at RAG?', 'What does he do at SoftSnow?', 'What is he working on now?'],
  },
  {
    id: 'learn',
    k: ['learn', 'learning', 'pick up new', 'new technology', 'keeps up', 'stay current', 'self taught'],
    w: ['learn', 'learning', 'taught', 'curious', 'adapt'],
    a: "Fast, and by building. Every platform he uses at SoftSnow — Cassidy, Sierra, Claude — he learned by shipping something on it. Same with React Native and Capacitor, which he picked up to get his own apps onto the App Store. He's not the person who takes the course; he's the person who has a working thing by the weekend.",
    f: ['What is his stack?', 'What has he shipped?', 'What is he working on now?'],
  },
  {
    id: 'fun',
    k: ['fun', 'hobbies', 'hobby', 'interests', 'outside of work', 'personality', 'pickleball', 'travel', 'stocks', 'investing'],
    w: ['fun', 'hobby', 'hobbies', 'interest', 'interests', 'pickleball', 'fitness', 'gym', 'travel', 'stocks', 'investing', 'personal'],
    a: 'Golf — to the degree that he founded a company around it. Also fitness, pickleball, investing, and travel. At UF he was in Alpha Epsilon Pi, TAMID Group, and Club Golf. He will happily talk your ear off about any of the above, especially the first one.',
    f: ['What is Your Clubhouse?', 'What did he study?', 'What is he like to work with?'],
  },
  {
    id: 'meta',
    k: ['this site', 'this page', 'this website', 'are you real', 'how do you work', 'who built you', 'are you claude', 'chatbot', 'this agent'],
    w: ['chatbot', 'bot', 'website', 'mockup'],
    a: "I'm Drew's agent — Claude under the hood, grounded in his resume and product docs, called through a small Cloudflare Worker so no API key ever touches your browser. If the connection drops I fall back to a local knowledge base, which is what you might be reading now. Either way the point stands: he'd rather hand you a working thing than a bulleted list.",
    f: ['Why should I hire him?', 'Is he good at RAG?', 'What has he shipped?'],
  },
  {
    id: 'greeting',
    k: ['hi', 'hey', 'hello', 'yo', 'good morning', 'good afternoon'],
    w: [],
    a: "Hey. I'm Drew's agent — I know his work history, his products, and what he actually did on each one. Ask me anything: what he's shipped, what he does at SoftSnow, or whether he's worth your time.",
    f: ['What has he shipped?', 'What does he do at SoftSnow?', 'Why should I hire him?'],
  },
  {
    id: 'thanks',
    k: ['thanks', 'thank you', 'appreciate it'],
    w: ['thanks', 'thank'],
    a: "Anytime. If you'd rather have the human than the agent: drewbinstein1703@gmail.com — he answers fast.",
    f: ['Is he available?', 'Why should I hire him?', 'What is he working on now?'],
  },
];

export const DEFAULT_CHIPS = [
  'What has he shipped?',
  'What does he do at SoftSnow?',
  'How does Your Clubhouse work?',
  'Why should I hire him?',
  'What are his weaknesses?',
];

export const FALLBACK =
  "I don't have a confident answer for that one. What I know well: his apps, the SoftSnow agent work, his stack, his background, and what he's like to work with — try one of those.";

const norm = (s: string) =>
  ' ' + s.toLowerCase().replace(/[^a-z0-9+#'\s]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';

/** Scored retrieval: phrase hits outweigh single-keyword hits. */
export function findTopic(query: string): Topic | null {
  const q = norm(query);
  let top: Topic | null = null;
  let topScore = 0;

  for (const t of TOPICS) {
    let s = 0;
    for (const phrase of t.k) if (q.includes(phrase)) s += 4;
    for (const word of t.w) if (q.includes(' ' + word)) s += 1.6;
    if (s > topScore) {
      topScore = s;
      top = t;
    }
  }
  return topScore >= 1.6 ? top : null;
}
