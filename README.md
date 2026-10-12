# Portofolio - SCSS (7-1 pattern)

## Menjalankan

```bash
npm install
npm run dev     # dev server Vite
npm run build   # compile ke dist/
```

## Struktur

```
src/
  main.js            import SCSS + script.js
  script.js
  scss/
    abstracts/       variables, functions, mixins
    vendors/
    base/            reset, typography
    layout/          header, navigation, workspace, sidebar, footer
    components/      button, tags, card, form
    pages/           home, skills, projects
    themes/          custom properties (@each) + utilities (@for)
    main.scss
```
