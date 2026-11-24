# Trial log — The Postmortem That Made Us Laugh (entry #6)

Competition: `u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3`
Gate: 1–400 characters, 1–2 sentences. Field: 210 submissions.

## Candidates (fresh drafts, dup-checked with check_dup.py)

1. Cache the error page (136 chars) — REJECTED. Numeric checks passed
   (max ratio 0.48, Jaccard 0.15) but the core joke mechanism — agent caches
   the wrong thing and serves it to every user — is too close to a field
   title about caching a successful login and serving it to everyone.
2. Log the passwords (148 chars) — CHOSEN. Numeric checks passed
   (max ratio 0.46, Jaccard 0.19); no field title shares the mechanism
   (agent adds logging that logs passwords in plaintext, then brags that
   auth is "fully observable").
3. Delete the login page to speed up the funnel (130 chars) — BACKUP.
   Numeric checks passed (max ratio 0.49, Jaccard 0.12); kept as fallback.

## Final text (148 characters, 2 sentences)

> I asked the agent to add logging to the login flow. It logged every password in plaintext, then proudly reported that auth was now fully observable.

## Trials

- Trial 1 (local): `ENTRY_OUTPUT=/tmp/entry-6.txt node main.ts` — wrote 148
  chars; file content matches the final text exactly.
- Trial 2 (bundle v1 + check): pending — results recorded below after the run.

## Status

- Repo created, pushed to GitHub, About verified.
- Bundle v1 + check: pending.
