# AGENTS.md - Galyna Heiwa Project Guidelines

## Project Overview

**Galyna Heiwa** is a local fashion brand from South Kalimantan (Kalimantan Selatan) focused on preserving culture through **Sasirangan** and **Ecoprint** fabrics. Founded in 2018, the brand targets international markets using natural dyes to create sustainable, elegant products.

- **Vision**: Introduce Banjar traditional textiles (wastra) to the global market
- **Target Market**: International (High-end, Conscious Fashion)
- **Brand Character**: Elegant, Natural, Ethnic-Modern, Exclusive

---

## Build/Lint/Test Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- --help

# Type checking (if needed)
npm run astro check
```

**Note**: No test framework is currently configured. Tests may be added later.

---

## Tech Stack

- **Framework**: Astro 5.x (Static Site Generator)
- **Language**: TypeScript (strict mode enabled via `astro/tsconfigs/strict`)
- **Module System**: ESM (`"type": "module"` in package.json)
- **Styling**: Tailwind CSS (utility-first, modern syntax) + scoped CSS in `<style>` blocks
- **Data Storage**: No database. All data in static files (JSON, Markdown, or const files in `/src/data/`)
- **Image Optimization**: Use Astro's `<Image />` component

---

## Project Structure

```
/
├── public/              # Static assets served directly
├── src/
│   ├── assets/          # Assets processed by Astro (images, SVGs)
│   ├── components/      # Reusable UI components (Button, Navbar, Footer)
│   ├── content/         # Content collections (articles, product catalogs)
│   ├── data/            # Static data files (products.json, testimonials.json)
│   ├── layouts/         # Page layout templates
│   └── pages/           # File-based routing
│       ├── index.astro  # Default language (ID)
│       └── en/          # English version pages
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

---

## Code Style Guidelines

### Imports

```typescript
// Use ESM imports with explicit extensions for local files
import Layout from '../layouts/Layout.astro';
import astroLogo from '../assets/astro.svg';

// Astro components use .astro extension in imports
import Button from '../components/Button.astro';
```

### Astro Component Structure

```astro
---
// Frontmatter: TypeScript/JavaScript runs at build time
import ComponentA from './ComponentA.astro';

const props = Astro.props;
---

<!-- Template: HTML-like markup -->
<div class="container">
  <ComponentA />
</div>

<style>
  /* Scoped CSS - only affects this component */
  .container { }
</style>

<script>
  // Client-side JavaScript (optional)
</script>
```

### TypeScript

- Strict mode is enabled - ensure proper typing
- Use `// @ts-check` at the top of `.mjs` config files
- Define prop types using TypeScript interfaces or `Astro.props`

```typescript
interface Props {
  title: string;
  lang?: 'id' | 'en';
}

const { title, lang = 'id' } = Astro.props as Props;
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ProductCard.astro`, `NavBar.astro`)
- **Pages**: lowercase with hyphens (e.g., `about-us.astro`, `product-detail.astro`)
- **Folders**: lowercase (e.g., `components/`, `layouts/`)
- **CSS classes**: Use Tailwind utilities first; custom classes in kebab-case

### CSS & Styling

1. **Prefer Tailwind CSS** for styling
2. Use scoped `<style>` blocks for component-specific styles
3. Primary brand color: `oklch(68.5% 0.169 237.323)` / Tailwind `sky-500`
4. Use earth tones as secondary colors to emphasize "Natural Dyes"

```html
<!-- Prefer Tailwind utilities -->
<button class="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600">
  Click me
</button>
```

---

## Design Philosophy (High-Fashion Editorial)

- **Layout**: Magazine-style, asymmetrical grids, avoid generic "business" layouts
- **Typography**: Serif for headings (elegant feel), clean Sans-serif for body text
- **Whitespace**: Generous padding/margins for a premium feel
- **Visual**: Use large typography as design elements, smooth transitions

---

## Internationalization (i18n)

- Two languages: Indonesian (`id`) and English (`en`)
- Folder-based routing for translations:
  - `/` or `/id/` for Indonesian
  - `/en/` for English
- Always provide translation variables for text content:

```typescript
const translations = {
  id: { welcome: 'Selamat Datang' },
  en: { welcome: 'Welcome' }
};
```

---

## AI Agent Rules

When working on this project:

1. **Performance First**: Use client directives (`client:load`, `client:visible`, etc.) only when interactivity is truly needed
2. **No Placeholders**: Never use "Lorem Ipsum". Use relevant Sasirangan/fashion context
3. **Tone of Voice**: Elegant, poetic, yet informative copywriting
4. **i18n Awareness**: Always provide both ID and EN versions for text content
5. **No Database**: All data must be stored in static files (`/src/data/`, `/src/content/`)

---

## Error Handling

- Use TypeScript's strict mode to catch errors at build time
- Validate props in components using TypeScript interfaces
- Handle missing data gracefully with fallback values

```typescript
const { title = 'Default Title' } = Astro.props as Props;
```

---

## File Conventions

- **Pages**: Place in `src/pages/` for automatic routing
- **Components**: Place reusable UI in `src/components/`
- **Layouts**: Place page wrappers in `src/layouts/`
- **Data**: Store JSON data in `src/data/`
- **Content Collections**: Use `src/content/` for markdown/MDX content

---

## VS Code Setup

Recommended extension: `astro-build.astro-vscode`

The project includes VS Code configuration for the Astro extension and development server launch configuration.
