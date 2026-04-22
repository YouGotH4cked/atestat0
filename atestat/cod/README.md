# Model atestat - Restaurante cu stele Michelin

Acesta este un site de atestat realizat in HTML, CSS si JavaScript, organizat ca o pagina principala clara si noua pagini separate pentru restaurante.

## Structura

- `site.html` - pagina principala cu introducere si preview interactiv
- `styles.css` - tema clara, cu alb si accente calde
- `script.js` - actualizeaza automat anul din footer
- `restaurant-*.html` - paginile individuale ale restaurantelor, lasate momentan goale

## Ce contine pagina principala

- o sectiune de introducere despre stelele Michelin
- un rezumat vizual pentru 1, 2 si 3 stele
- un preview interactiv grupat pe categorii
- linkuri catre 9 pagini separate:
  - 2 restaurante cu 1 stea
  - 2 restaurante cu 2 stele
  - 5 restaurante cu 3 stele

## Cum rulezi

1. Deschide `site.html` direct in browser.
2. Optional, ruleaza un server local simplu:

```powershell
python -m http.server 8000
```

Apoi acceseaza `http://localhost:8000/`.

## Ce poti extinde rapid

- completeaza fiecare pagina de restaurant cu text si imagini
- adauga o galerie foto pentru fiecare restaurant
- adauga surse si bibliografie
- transforma datele restaurantelor intr-un fisier JSON separat

