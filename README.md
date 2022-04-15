# Talks

Talks I've made.

In the first deploy you need to config GitHub pages in Settings point to the `gh-pages` branch.

Learn more about Slidev on [documentations](https://sli.dev/).

Inspired by <https://github.com/fguisso/talks>.

## Development

To start the slide show:

- `npm install`
- `npm run dev -- slides/<slides>.md`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

## Deploy in GitHub Pages

Deploys are dispatched by commit messages:

```bash
git add slides/<slide-name>.md

git commit -m "deploy: <slide-name>"

git push
```
