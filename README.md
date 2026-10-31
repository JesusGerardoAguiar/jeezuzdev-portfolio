# jeezuz.dev

My portfolio. SvelteKit + Tailwind, prerendered and deployed on Vercel.

## Developing

```bash
npm install
npm run dev
```

`npm run build` builds the static site and `npm run preview` serves it.

## Where things live

- `src/lib/data/work.ts`: every project (selected client work, my own products, systems). Each entry gets a page at `/work/<slug>` and shows up on the home page and in the work sidebar.
- `src/lib/data/stack.ts`: the stack icons and how they're grouped on the home page. Logos come from `simple-icons`, and anything without a logo uses a drawn glyph.
- `static/cv/`: the two CVs behind the floating button. `Jesus_Aguiar_CV.pdf` is the designed one and `Jesus_Aguiar_CV_ATS.pdf` is the ATS-friendly one. Replace the files and keep the names.
- `src/lib/components/MacWindow.svelte`: the Mac-style window frame used for every card.
- `src/routes/writing/`: my Medium stories, readable on the site at `/writing/<slug>`. Each page links back to Medium for claps and comments and sets Medium as the canonical URL.

## Writing

Posts come from my Medium RSS feed when the site builds, so a new story shows up on the next deploy (push anything, or hit Redeploy in Vercel).

Medium's feed only has the latest 10 stories, so `src/lib/data/posts.json` keeps a saved copy of everything. It's also the fallback if Medium is down during a build. Refresh it every now and then:

```bash
npm run posts:sync
```

To keep a story on Medium but off the site, add its slug to `hidden` in `src/lib/server/posts.ts`.
