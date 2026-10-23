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
