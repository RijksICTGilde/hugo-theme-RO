# hugo-theme-ro

Hugo theme for Rijksoverheid websites, integrating the [MOx design system](https://github.com/MinBZK/moza-mox-nlds).

## Architecture

```
MOx (MinBZK/moza-mox-nlds) — CSS vendored into static/
  ↓
hugo-theme-ro (serves MOx CSS as static files, provides layouts)
  ↓
Projects (import theme as Hugo module)
```

### Key decisions

- **MOx CSS is served as static files**, not processed through Hugo Pipes. MOx uses `@import` chains and `@layer` declarations that the browser resolves natively. The files live in `static/css/mox/`.
- **Theme CSS uses Hugo's asset pipeline** (`resources.Concat`) so projects can optionally provide `assets/css/main.css` for project-specific styles.
- **MOx files are vendored** (copied directly into `static/`) instead of using a git submodule. This is necessary because Hugo's module system (`hugo mod get`) downloads dependencies as Go modules — which do not include git submodules. When a project imports this theme via `module.imports`, Hugo fetches only the theme's own files. Any git submodule (like MOx) would be missing, causing broken CSS and missing images. By vendoring the MOx files directly into the repo, they are always included when Hugo downloads the theme. A GitHub Actions workflow automatically syncs with the upstream MOx repo weekly and opens a PR when changes are detected.

## Project structure

- `hugo.yaml` — module mounts configuration
- `layouts/` — base template, partials, default content types
- `assets/css/theme.css` — theme layout overrides using MOx tokens
- `static/css/mox/` — vendored MOx CSS files from MinBZK/moza-mox-nlds
- `static/images/` — logo and other images
- `.github/workflows/sync-mox.yaml` — automated MOx sync workflow

## Usage

Import as a Hugo module in your project's `hugo.yaml`:

```yaml
module:
  imports:
    - path: github.com/RijksICTGilde/hugo-theme-ro
```

Override styles by placing `assets/css/main.css` in your project.

## MOx synchronization

MOx CSS files are kept in sync with the upstream [MinBZK/moza-mox-nlds](https://github.com/MinBZK/moza-mox-nlds) repository via a GitHub Actions workflow that runs weekly. When changes are detected, a PR is automatically created.

To manually trigger a sync, go to Actions > "Sync MOx CSS" > Run workflow.

## License

[EUPL v1.2](LICENSE)
