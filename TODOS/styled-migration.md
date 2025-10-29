# TODO: Migrate styled-components → TailwindCSS

Goal: Create a UI library that preserves the main styled components created in this project while migrating styles to Tailwind utility classes (and small reusable CSS via @apply when needed). The library should centralize shared UI primitives/components so the project keeps its original styled intent but uses Tailwind for implementation and new development.

## High-level plan
- [ ] Install/configure Tailwind and scss
- [ ] Add global styles and design tokens (tailwind.config.js)
- [ ] Convert components one-by-one
- [ ] Replace shared styled files with utility classes / @apply in CSS
- [ ] Remove styled-components and unused CSS where appropriate
- [ ] apply accessibility best practices
- [ ] apply unit tests for each component, using vitest
- [ ] create a file documenting all the process
## Install & setup (Linux)
Run:
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- npm install clsx
Optional:
- npm uninstall styled-components

Update ./tailwind.config.js content paths to include src:
- content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]

Create ./src/index.css (or add to existing) with:
- @tailwind base;
- @tailwind components;
- @tailwind utilities;

## Search for styled-components usages
Commands:
- grep -R --line-number "styled(" src || true
- grep -R --line-number "from 'styled-components'" || true
- rg "styled" src --hidden

Make a checklist per file found.

## Per-component migration checklist
For each component file:
- [ ] Identify styled components at top or bottom of file
- [ ] Map each styled element to a plain element or component with className
  - styled.div -> <div className="...">
  - styled.button -> <button className="...">
- [ ] Translate CSS rules to Tailwind utilities
  - Layout: display, flex, grid → flex, grid, gap, items-*, justify-*
  - Spacing: margin/padding → m-*, p-*
  - Typography: font, size, weight, color → text-*, font-*, text-*
  - Colors: use theme colors configured in tailwind.config.js
  - Pseudo-classes: &:hover -> hover:, &:focus -> focus:
  - Media queries: use responsive prefixes sm:, md:, lg:, xl:
- [ ] For complex or repeated rules, create a class in src/styles/components.css using @apply
  - Example:
    .card { @apply bg-white rounded-lg shadow p-4 }
- [ ] Replace prop-based styles with conditional classNames using clsx
  - Example: className={clsx("base", active && "bg-blue-500")}
- [ ] Move preserved styled component APIs into the UI library as wrapper components that apply Tailwind classes (keep props and behavior)
- [ ] Remove the styled-component declarations and imports from the app code (they will live in the UI library if needed)
- [ ] Run the app to verify visual parity

## Examples

Before (styled-components):
```jsx
// ...existing code...
const Button = styled.button`
  background: ${p => p.primary ? 'blue' : 'transparent'};
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  &:hover { opacity: 0.9; }
`;
// ...existing code...
```

After (TailwindCSS + UI library wrapper):
```jsx
// ...existing code...
// filepath: src/ui/Button.jsx
import clsx from 'clsx';

export const Button = ({ primary, className, ...props }) => (
  <button
    className={clsx(
      "text-white rounded-[6px] px-4 py-2 transition-opacity",
      primary ? "bg-blue-500 hover:opacity-90" : "bg-transparent",
      className
    )}
    {...props}
  />
);
// ...existing code...
```