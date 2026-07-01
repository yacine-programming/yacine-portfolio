# Portfolio Yacine Doukhi

Site statique — aucun serveur requis.

## Structure

```
portfolio-static/
├── index.html         ← Structure HTML de la page
├── styles.css         ← Design (couleurs, mise en page)
├── script.js          ← Comportement (animations, filtres...)
├── data.js            ← TOUT le contenu du site (MODIFIER ICI)
└── assets/
    ├── images/        ← Photos des projets
    └── files/         ← cv.pdf
```

## Comment modifier le site

**Une seule règle : modifier `data.js`, puis publier.**

1. Ouvre `data.js` dans un éditeur (Notepad, VS Code…)
2. Cherche la section à modifier (bien commentée en français)
3. Change la valeur
4. Enregistre (Ctrl+S)
5. Ouvre `index.html` dans ton navigateur → tu vois direct le résultat

## Comment publier une mise à jour

Dans le dossier, ouvre la fenêtre noire :

```
git add .
git commit -m "Description du changement"
git push
```

Netlify redéploie automatiquement en 30 secondes.

## Tester en local

Ouvre simplement `index.html` dans un navigateur (double-clic). Aucun serveur nécessaire.

Ou avec un mini serveur pour éviter certaines limitations navigateur :
```
npx serve .
```

Puis va sur http://localhost:3000
