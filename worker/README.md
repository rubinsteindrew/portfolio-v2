# drew-agent — Cloudflare Worker

The site's "ask my agent" section works out of the box using a local knowledge base
(`src/data/agentTopics.ts`). To make it answer *any* question using real Claude, deploy
this Worker and point the site at it.

The Worker exists for one reason: your Anthropic API key must never be in the browser.
The site posts a question to the Worker, the Worker calls Claude with the key, and only
the answer comes back.

## Deploy

1. **Install Wrangler and log in**

   ```bash
   npm install -g wrangler
   wrangler login
   ```

2. **Deploy the Worker**

   ```bash
   cd worker
   wrangler deploy
   ```

3. **Add your API key as a secret** (never commit it)

   ```bash
   wrangler secret put ANTHROPIC_API_KEY
   ```

   Paste your key from https://console.anthropic.com when prompted.

4. **Point the site at it.** Create `.env` in the project root:

   ```
   VITE_AGENT_ENDPOINT=https://drew-agent.<your-subdomain>.workers.dev
   ```

   For the deployed site, add the same variable to the GitHub Actions build step
   (Settings → Secrets and variables → Actions), then reference it in
   `.github/workflows/static.yml`:

   ```yaml
   - run: npm run build
     env:
       VITE_AGENT_ENDPOINT: ${{ secrets.VITE_AGENT_ENDPOINT }}
   ```

Rebuild and the agent switches over automatically. If the Worker is ever unreachable,
the site quietly falls back to the local knowledge base — it never shows an error.

## Keeping the agent accurate

`GROUNDING` in `worker.js` is the agent's entire world. When your resume changes, edit
that block — the agent is instructed to refuse to invent anything outside it.

Mirror any important changes into `src/data/agentTopics.ts` so the offline fallback
stays consistent.

## Cost and abuse

Each question is one short Claude call (~400 output tokens max), so this is
inexpensive at portfolio traffic. If you ever get hammered, add Cloudflare Rate
Limiting on the Worker route — that's the simplest lever.
