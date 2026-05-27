# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/angular19-for-fun/
npm run watch      # dev build with watch mode
npm test           # unit tests via Karma + Jasmine in Chrome
```

Run a single spec file:
```bash
npx ng test --include='src/app/counter-app/counter-app.component.spec.ts'
```

## Architecture

Angular 19 standalone-component app. No NgModules — every component declares its own `imports: []`.

**Entry point:** `src/main.ts` bootstraps `AppComponent` with `appConfig` (zone-based change detection + router).

**Routing** (`src/app/app.routes.ts`):
- `/` → `LayoutComponent` — homepage listing all mini-projects as Bootstrap cards
- `/profile-card` → `ProfileCardComponent` — two-way data binding demo (`FormsModule`)
- `/counter` → `CounterAppComponent` — counter using plain class properties (not signals despite card description)
- `**` → `PageNotFoundComponent`

**Layout pattern:** Each routed page is self-contained and directly imports `HeaderComponent` and `FooterComponent`. There is no shared shell; every page wires up its own header/footer.

**Styling:** Bootstrap 5 is bundled globally via `angular.json` (`styles` and `scripts` arrays). Component-level CSS handles overrides. `src/styles.css` holds shared utility styles (`.project-card`, footer font size, etc.). Images are served from the `public/` directory (mapped as assets root).

**Adding a new mini-project:**
1. Generate the component: `npx ng generate component <name>`
2. Import `HeaderComponent` and `FooterComponent` in the new component's `imports` array
3. Add a route in `app.routes.ts`
4. Add a project card in `layout.component.html`

## Live deployment

Deployed to Netlify: https://angular19forfun.netlify.app/
