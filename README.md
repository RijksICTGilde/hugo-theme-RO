# hugo-theme-ro

Hugo theme for Rijksoverheid websites, integrating the [MOx design system](https://github.com/MinBZK/moza-mox-nlds).

## Architecture

```
MOx (git submodule: MinBZK/moza-mox-nlds)
  ↓
hugo-theme-ro (mounts MOx CSS, provides layouts)
  ↓
Projects (import theme as Hugo module)
```

### Key decisions

- **MOx CSS is served as static files**, not processed through Hugo Pipes. MOx uses `@import` chains and `@layer` declarations that the browser resolves natively. The mount `MOx/src/moxCss → static/css/mox` makes the full directory tree available.
- **Theme CSS uses Hugo's asset pipeline** (`resources.Concat`) so projects can optionally provide `assets/css/main.css` for project-specific styles.
- **MOx is a git submodule**, not a Hugo module, because it's not a Hugo project. Pin to a specific commit for stability.

## Project structure

- `hugo.yaml` — module mounts configuration
- `layouts/` — base template, partials, default content types
- `assets/css/theme.css` — theme layout overrides using MOx tokens
- `MOx/` — git submodule pointing to `github.com/MinBZK/moza-mox-nlds`

## Usage

Import as a Hugo module in your project's `hugo.yaml`:

```yaml
module:
  imports:
    - path: github.com/RijksICTGilde/hugo-theme-ro
```

Override styles by placing `assets/css/main.css` in your project.

## License

[EUPL v1.2](LICENSE)
