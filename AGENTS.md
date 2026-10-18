# Repository Instructions

## Layout and Routing

- Each talk is a `Slidev` workspace at `YYYY-*/src`; edit its `slides.md`.
- Root workspace includes `*/src` packages (`pnpm-workspace.yaml`).
- Name new root talk folders `YYYY-*`; `scripts/picker.ts` filters this prefix.
- Keep `--base` and `--out` in `src/package.json` aligned with `vercel.json`.

## Commands

- `pnpm dev` prompts you to choose a talk.
- Target one talk with `pnpm --filter './2023-11-09/src' run dev`.
- Replace the path and script to run a different workspace command.
- `pnpm build` removes root `dist/` and builds all workspaces.
- A workspace's `export` script overwrites the tracked PDF beside `src/`.
- `pnpm lint` runs `oxlint` and `oxfmt`.
- ESLint checks Slidev Markdown, YAML, TOML, and rules `oxlint` lacks.
- There are no test or type check scripts.
