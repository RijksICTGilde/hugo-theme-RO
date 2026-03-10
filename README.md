# hugo-theme-ro

Hugo theme for Rijksoverheid websites, integrating the [MOx design system](https://github.com/MinBZK/moza-poc).

## Architecture

```
MOx (MinBZK/moza-poc) — CSS, tokens, and assets vendored into static/
  ↓
hugo-theme-ro (serves MOx CSS as static files, provides layouts)
  ↓
Projects (import theme as Hugo module)
```

### Key decisions

- **MOx CSS is served as static files**, not processed through Hugo Pipes. The main `style.css` uses `@import` chains for design tokens that the browser resolves natively. The files live in `static/style/`.
- **Theme CSS uses Hugo's asset pipeline** (`resources.Concat`) so projects can optionally provide `assets/css/main.css` for project-specific styles.
- **MOx files are vendored** (copied directly into `static/`) instead of using a git submodule. This is necessary because Hugo's module system (`hugo mod get`) downloads dependencies as Go modules — which do not include git submodules. When a project imports this theme via `module.imports`, Hugo fetches only the theme's own files. By vendoring the MOx files directly into the repo, they are always included when Hugo downloads the theme. A GitHub Actions workflow automatically syncs with the upstream MOx repo weekly and opens a PR when changes are detected.
- **Storybook** is included for component documentation and development. Run `npm run storybook` to view components in isolation.
- **Design tokens** from Figma/Tokens Studio are stored in `tokens/tokens.json` and compiled to CSS custom properties via Style Dictionary.

## Project structure

- `hugo.yaml` — module mounts configuration
- `layouts/` — base template, partials, default content types
- `assets/css/theme.css` — theme-specific layout overrides
- `static/style/` — vendored MOx CSS files from MinBZK/moza-poc
- `static/assets/` — fonts, images, and icons from MinBZK/moza-poc
- `tokens/` — design token source files
- `style-dictionary/` — token-to-CSS build pipeline
- `.storybook/` — Storybook configuration
- `stories/` — Storybook component stories
- `.github/workflows/sync-mox.yaml` — automated MOx sync workflow

## Usage

Import as a Hugo module in your project's `hugo.yaml`:

```yaml
module:
  imports:
    - path: github.com/RijksICTGilde/hugo-theme-ro
```

Override styles by placing `assets/css/main.css` in your project.

## Development

```bash
npm install                  # Install Storybook dependencies
npm run storybook            # Start Storybook dev server on port 6006
npm run tokens               # Regenerate CSS from design tokens
```

## Development

```bash
npm install                  # Install Storybook dependencies
npm run storybook            # Start Storybook dev server on port 6006
npm run tokens               # Regenerate CSS from design tokens
```

## MOx synchronization

MOx CSS, assets, tokens, and stories are kept in sync with the upstream [MinBZK/moza-poc](https://github.com/MinBZK/moza-poc) repository via a GitHub Actions workflow that runs weekly. When changes are detected, a PR is automatically created.

To manually trigger a sync, go to Actions > "Sync MOx CSS" > Run workflow.

## License

[EUPL v1.2](LICENSE)
