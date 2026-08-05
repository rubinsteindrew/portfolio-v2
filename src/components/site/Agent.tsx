import { useEffect, useRef, useState } from 'react';
import { DEFAULT_CHIPS, FALLBACK, findTopic } from '@/data/agentTopics';

type Turn = { q: string; a: string };

/** Set VITE_AGENT_ENDPOINT to a Cloudflare Worker URL to run on real Claude. */
const ENDPOINT = import.meta.env.VITE_AGENT_ENDPOINT as string | undefined;

const Agent = () => {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [typed, setTyped] = useState('');
  const [draft, setDraft] = useState('');
  const [chips, setChips] = useState<string[]>(DEFAULT_CHIPS);
  const [chipLabel, setChipLabel] = useState('try asking');
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number>();

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: reduced ? 'auto' : 'smooth' });
  }, [typed, turns, reduced]);

  const stream = (full: string) => {
    if (reduced) {
      setTyped(full);
      setBusy(false);
      return;
    }
    let i = 0;
    const tick = () => {
      setTyped(full.slice(0, i));
      if (i < full.length) {
        i += 2;
        timer.current = window.setTimeout(tick, 10);
      } else {
        setTyped(full);
        setBusy(false);
      }
    };
    tick();
  };

  const ask = async (question: string) => {
    const q = question.trim();
    if (busy || !q) return;

    setBusy(true);
    setTurns((t) => [...t, { q, a: '' }]);
    setTyped('…');

    let answer = '';
    let followUps: string[] | null = null;

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: q }),
        });
        if (res.ok) {
          const data = await res.json();
          answer = (data.answer || '').trim();
        }
      } catch {
        /* fall through to the local knowledge base */
      }
    }

    if (!answer) {
      const topic = findTopic(q);
      answer = topic ? topic.a : FALLBACK;
      followUps = topic ? topic.f : null;
    }

    setChips(followUps ?? DEFAULT_CHIPS);
    setChipLabel(followUps ? 'follow up' : 'try asking');
    stream(answer);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    ask(draft);
    setDraft('');
  };

  return (
    <section className="section agent-sec" id="ask">
      <div className="wrap">
        <p className="label">Ask directly</p>
        <h2 className="big">
          Or skip all that and <em>ask my agent.</em>
        </h2>
        <p className="lede">
          It knows my resume, my products, and what I actually did on each of them. If you're
          vetting me, this is faster than reading.
        </p>

        <div className="agent">
          <div className="agent-head">
            <span className="nm">drew-agent</span>
            <span>· grounded in resume + shipped products</span>
            <span className="rd">ready</span>
          </div>

          <div className="agent-log" ref={logRef}>
            {turns.length === 0 && (
              <div className="turn">
                <p className="a hint">
                  Ask me what he built, how he built it, or whether he's worth your time.
                </p>
              </div>
            )}
            {turns.map((t, i) => (
              <div className="turn" key={i}>
                <div className="q">
                  <b>›</b> {t.q}
                </div>
                <p className="a">{i === turns.length - 1 ? typed : t.a}</p>
              </div>
            ))}
          </div>

          <div className="ask-zone">
            <p className="ask-lab">Type your question</p>
            <form className="ask-form" onSubmit={submit}>
              <span className="caret" aria-hidden="true">›</span>
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="e.g. what has he actually shipped?"
                aria-label="Ask the agent a question about Drew"
                autoComplete="off"
              />
              <button type="submit" disabled={busy || !draft.trim()}>
                Ask →
              </button>
            </form>

            <div className="agent-chips">
              <span className="lead">{chipLabel}</span>
              {chips.map((c) => (
                <button
                  type="button"
                  className="achip"
                  key={c}
                  onClick={() => ask(c)}
                  disabled={busy}
                >
                  {c.toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Only shown once the agent is actually running on Claude — setup
            instructions are for the repo, not for visitors. */}
        {ENDPOINT && (
          <p className="agent-note">
            // answers come from Claude, grounded in my resume and product docs.
          </p>
        )}
      </div>
    </section>
  );
};

export default Agent;
