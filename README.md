# Business Context AI

A Nuxt 4, Vue 3, and TypeScript site for Business Context AI: services, free rotating courses, and the Guatemala AI Executive Workshop. On the workshop page, visitors can join a waiting list with their email. Each signup is written to [this Google Sheet](https://docs.google.com/spreadsheets/d/1B3UhsQG6u5M-euundej28Yia2fR5Mjt0err5fg1vXsw/edit?gid=0#gid=0).

Date and time are presented as to be announced. Confirmed details can be sent later to the addresses on the list.

## Setup

```bash
pnpm install
cp .env.example .env
```

Connect the spreadsheet using **one** of the two methods below, then start the site:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect Google Sheets

The sheet is private, so the app cannot write to it until you authorize it. Use either option.

### Option 1 — Google Apps Script (about three minutes)

1. Open the [spreadsheet](https://docs.google.com/spreadsheets/d/1B3UhsQG6u5M-euundej28Yia2fR5Mjt0err5fg1vXsw/edit?gid=0#gid=0).
2. Go to **Extensions → Apps Script**.
3. Replace any placeholder code with the contents of `scripts/google-apps-script.js`.
4. Click **Deploy → New deployment**.
5. Choose type **Web app**.
6. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
7. Deploy, copy the web app URL, and put it in `.env`:

```bash
NUXT_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

8. Restart `npm run dev`.

The first signup writes a header row: Timestamp, Email, Name, Organization, Source.

## Site structure

- `/` Business Context AI: services, diagnostic offer and contact form (content in `shared/utils/servicios.ts`).
- `/cursos` free courses hub; `/cursos/claude` and `/cursos/agentes` course pages; `/cursos/confirmacion?s=<session-id>` after signup.
- `/taller` the $799 Taller Ejecutivo.
- Old links `/servicios`, `/claude`, `/agentes` redirect (see `routeRules` in `nuxt.config.ts`).

## Free courses (rotating Claude / Agentes)

**To schedule the next session, add one entry to `SESSIONS` in `shared/utils/courses.ts`** (id, course, UTC start/end, Meet link, labels). The site always features the next session that has not ended; past ones show as "realizada". With no upcoming date, a course page shows an "Avíseme" form.

Signups (email only) go to the first tab of [the training spreadsheet](https://docs.google.com/spreadsheets/d/17cuqf_ER5ZL_wrS-6WsJVLwXmqJ3no9cUSFDov1wLuM/edit?gid=0#gid=0): Timestamp, Email, Source, Event. Event is the session id (e.g. `claude-2026-12-03`) or `<course>-waitlist`; older rows say `Claude`/`Agentes`. The same email can sign up for every session.

The confirmation page has an optional form (name, company, process). Those go to the servicios leads sheet with Source `curso:<session-id>`. The home contact form uses Source `servicios`.

Calendar files: `/calendario/<session-id>.ics`.

After changing `scripts/claude-training-apps-script.js` or `scripts/servicios-apps-script.js`, deploy a **new version of the existing web app** so the URL stays the same.

PostHog events: `course_signup`, `course_qualified`, `diagnostic_request`.

To connect the training sheet, repeat Option 1 above in **that** spreadsheet, using `scripts/claude-training-apps-script.js`, and put the web app URL in `.env`:

```bash
NUXT_CLAUDE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

If you use a service account instead, share this spreadsheet with it as **Editor** too. `NUXT_CLAUDE_SHEET_ID` is already set to this spreadsheet.

### Option 2 — Google Cloud service account

1. In Google Cloud, create a project (or use an existing one) and enable the **Google Sheets API**.
2. Create a service account and download a JSON key.
3. Share the spreadsheet with the service account email, as **Editor**.
4. Put the values in `.env`:

```bash
NUXT_GOOGLE_SHEET_ID=1B3UhsQG6u5M-euundej28Yia2fR5Mjt0err5fg1vXsw
NUXT_GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
NUXT_GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Keep the private key on one line, with `\n` for newlines, and wrap it in quotes.

If both methods are configured, Apps Script is used.

## Production

```bash
npm run build
npm run preview
```

Set the same `NUXT_*` variables on the host. Nuxt does not read `.env` after the server is built, so production values must be provided as environment variables.
# AIWorkshop
