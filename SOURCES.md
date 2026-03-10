# Source attribution

This theme combines components from multiple sources within the Rijksoverheid ecosystem.
Each file contains a source comment at the top for traceability.

## Sources

### MOx design system — [MinBZK/moza-poc](https://github.com/MinBZK/moza-poc)

CSS framework, design tokens, fonts, icons, and base templates (Nunjucks/Eleventy).
CSS synced automatically via `.github/workflows/sync-mox.yaml`.

| Files | Derived from |
|---|---|
| `static/style/` | `style/` (CSS: style.css, _mox.css, _rijkshuisstijl.css, _reset.css) |
| `static/assets/fonts/` | `assets/fonts/` (RijksSans variable fonts) |
| `static/assets/icons/` | `assets/icons/` (SVG icon set) |
| `static/assets/images/` | `assets/images/` (Rijksoverheid beeldmerk) |
| `tokens/tokens.json` | `tokens/tokens.json` (design token definitions) |
| `layouts/_default/baseof.html` | `_includes/base.njk` (base document structure) |
| `layouts/partials/header.html` | `_includes/header-rijksoverheid.njk` (site header) |
| `layouts/partials/footer.html` | `_includes/footer-overheid.njk` (site footer) |
| `layouts/partials/head.html` | `_includes/base.njk` head section (meta, stylesheets) |
| `layouts/partials/breadcrumbs.html` | `style/style.css` breadcrumb styles (template logic: hugo-theme-RO) |
| `assets/css/theme.css` | `style/style.css` (skip-link, visually-hidden patterns) |

### moza-site — [MinBZK/moza-site](https://github.com/MinBZK/moza-site)

Hugo layouts and component patterns adapted for reuse as a theme.

| Files | Derived from |
|---|---|
| `layouts/_default/home.html` | `layouts/hero.html` (homepage with hero) |
| `layouts/_default/list.html` | `layouts/list.html` (section listing with card grid) |
| `layouts/_default/single.html` | `layouts/page.html` (single page with optional TOC) |
| `layouts/partials/hero.html` | `layouts/_partials/hero.html` (hero banner) |
| `layouts/partials/card.html` | `layouts/_partials/card.html` (card component) |
| `layouts/partials/card-grid.html` | `layouts/_partials/card-grid.html` (card grid wrapper) |
| `layouts/shortcodes/card-grid.html` | `layouts/_shortcodes/card-grid.html` (card grid shortcode) |
| `layouts/partials/head.html` | `layouts/_partials/head.html` (Hugo CSS asset pipeline) |
| `assets/css/components/hero.css` | `assets/css/components/hero.css` (hero styling) |
| `assets/css/components/card-grid.css` | `assets/css/components/card-grid.css` (card grid styling) |

### hugo-theme-RO (original)

Components not present in either upstream source.

| Files | Description |
|---|---|
| `layouts/404.html` | Error page |