# Atif Mubashar — Portfolio

**Backend systems, full stack products, and applied AI.**

**Stack:** React · Vite · CSS Modules · Vercel

[Portfolio presentation](https://atifmubashar.vercel.app/work) · [Author](https://atifmubashar.vercel.app/) · [Contact](mailto:atifmubashar353@gmail.com)

**[Visit the live portfolio →](https://atifmubashar.vercel.app/)**

[LinkedIn](https://www.linkedin.com/in/atifmubashar-dev/) · [Email](mailto:atifmubashar353@gmail.com)

Personal portfolio of Atif Mubashar, a full stack software engineer focused on backend systems and LLM applications.

Built with React 19, React Router 7 and Vite. Styling is plain CSS Modules on top of a small set of design tokens, with light and dark themes.

## Getting started

```bash
npm install
npm run dev
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/work` | Projects |
| `/experience` | Experience |
| `/about` | About, skills, education, certifications |
| `/contact` | Contact form |

## Project structure

```
src/
  app/                 Route table
  features/            One folder per page
    home/  work/  experience/  about/  contact/  not-found/
      <Page>.jsx       Page component
      components/      Components used only by that page
  shared/
    components/layout/ Navbar, theme toggle, footer, page shell
    components/ui/     Shared primitives (button, chip, headings, container)
    context/           Theme provider
    hooks/             useTick, useScrollToTop
  data/                All site content (profile, projects, experience, skills)
  styles/              Design tokens and base styles
public/                Favicon, portrait, resume PDF
```

The `@` import alias points to `src`. Content lives in `src/data`; edit those files to update copy, projects or links.

## Theming

Colour tokens are defined in `src/styles/tokens.css` and switched with the `data-theme` attribute on `<html>`. The saved choice is stored in `localStorage` under `am-portfolio-theme` and falls back to the system preference. A small inline script in `index.html` applies it before first paint to avoid a flash.

## Contact form

The form posts JSON to `/api/contact`, a serverless function (`api/contact.js`) that validates the message and emails it through [Resend](https://resend.com). The API key never reaches the browser.

Create a `.env` file (see `.env.example`):

```
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=where_messages_should_arrive
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

`npm run dev` serves the same handler locally. With the default `onboarding@resend.dev` sender, Resend only delivers to the email address of your Resend account; verify a domain to use another sender or recipient. On Vercel, add the same three variables under Project Settings, Environment Variables.

## Deployment

Deployed on Vercel. `vercel.json` rewrites all paths to `index.html` so client-side routes work on refresh.
