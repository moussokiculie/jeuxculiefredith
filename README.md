le lien de mon git hub : https://github.com/moussokiculie/jeuxculiefredith.git
le lien de mon jeux : https://leafy-maamoul-a2d8ee.netlify.app/

# ⚡ TypeRush — Test de Vitesse de Frappe

## 📌 Description

**TypeRush** est une application web de test de vitesse de frappe au clavier, jouable directement dans le navigateur. L'utilisateur doit reproduire un texte affiché à l'écran aussi rapidement et précisément que possible. L'application calcule en temps réel la vitesse de frappe en **Mots Par Minute (WPM)**, le **taux de précision**, affiche un **chronomètre**, et conserve le **meilleur score par niveau de difficulté**.

🔗 **Démo en ligne :** *[lien Netlify à insérer ici après déploiement]*
🔗 **Dépôt GitHub :** *[lien GitHub à insérer ici]*

---

## 🖼️ Capture d'écran

![Capture d'écran de TypeRush](capture.png)

*(Remplacer `capture.png` par une vraie capture d'écran de l'application, à placer à la racine du dépôt.)*

---

## ✅ Fonctionnalités implémentées

| # | Fonctionnalité | Statut |
|---|------------------------------------------------------------|--------|
| 1 | Texte aléatoire (6 textes par niveau, entre 30 et 120 mots) | ✅ |
| 2 | Coloration dynamique des caractères (vert / rouge en temps réel) | ✅ |
| 3 | Chronomètre automatique (démarre à la 1ʳᵉ frappe, s'arrête en fin de texte) | ✅ |
| 4 | Calcul de la vitesse en Mots Par Minute (WPM) | ✅ |
| 5 | Calcul du taux de précision (%) | ✅ |
| 6 | Écran de résultats (WPM, précision, temps, message de performance) | ✅ |
| 7 | Bouton "Nouveau Test" (texte aléatoire, sans rechargement de page) | ✅ |
| 8 | 3 niveaux de difficulté : Facile / Moyen / Difficile | ✅ |
| 9 | Meilleur score sauvegardé par niveau via `localStorage` | ✅ |
| 10 | Design responsive (mobile ≥ 375 px et bureau) | ✅ |

---

## 🛠️ Technologies et ressources utilisées

- **HTML5** — structure de la page (`index.html`)
- **CSS3** (personnalisé, sans framework) — mise en page, animations, responsive (`style.css`)
- **JavaScript ES6+** (vanilla, sans librairie) — logique du jeu (`script.js`)
- **Google Fonts** : [Fredoka](https://fonts.google.com/specimen/Fredoka), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono), [Nunito](https://fonts.google.com/specimen/Nunito)
- **localStorage** (API native du navigateur) — persistance du meilleur score
- **Assistant IA utilisé : Claude (Anthropic)**

Aucun framework (React, Vue, Angular, jQuery, Bootstrap) ni outil de build (Webpack, Vite, npm) n'a été utilisé, conformément aux contraintes techniques du cahier des charges.

---

## 🤖 Historique des prompts utilisés

> Conformément à la consigne de traçabilité, voici l'historique complet des échanges avec l'assistant IA ayant servi à concevoir cette application.

**Prompt N°1 — Outil : Claude**
Prompt : « II. Présentation de l'Application Application : TypeRush - Test de Vitesse de Frappe [...] (cahier des charges complet retranscrit à partir des photos du sujet de contrôle, incluant les sections I à V : consignes générales, présentation de l'application, cahier des charges fonctionnel en 10 points, contraintes techniques, livrables, et bonus Netlify) »
Résultat : Génération complète des trois fichiers du projet — `index.html` (structure des écrans accueil/jeu/résultats), `style.css` (design moderne avec dégradés, polices Google Fonts, animations, responsive dès 375px), et `script.js` (logique complète : banque de 6 textes par niveau, coloration caractère par caractère, chronomètre, calcul WPM et précision, gestion du localStorage pour le meilleur score par niveau, écran de résultats avec message de performance adapté).

**Prompt N°2 — Outil : Claude**
Prompt : « j'ai discuter avec chatgpt voici l'extrait de ce qu'il m'a dit [...] du coup il a evoquer certain truc que tu n'a pas m'informer de faire je veux mon traivaille soit complet »
Résultat : Finalisation du livrable avec la génération du `README.md` (présent fichier), incluant la description de l'application, les fonctionnalités, les technologies utilisées, l'historique des prompts, ainsi que les instructions détaillées de publication sur GitHub (3 commits) et de déploiement sur Netlify.

---

## 🚀 Déploiement

### Étapes GitHub

```bash
git init
git add index.html style.css script.js README.md
git commit -m "Initial commit : structure HTML et CSS de base"

# Après modification/ajout de la logique JS :
git add script.js
git commit -m "Ajout de la logique de jeu (chronomètre, WPM, précision)"

# Après ajout des finitions (README, capture d'écran) :
git add README.md capture.png
git commit -m "Ajout du README et de la capture d'écran"

git branch -M main
git remote add origin https://github.com/<ton-pseudo>/typerush-moussoki-culie.git
git push -u origin main
```

### Étapes Netlify

1. Créer un compte sur [netlify.com](https://www.netlify.com) (connexion possible via GitHub).
2. Cliquer sur **"Add new site" → "Import an existing project"**.
3. Sélectionner le dépôt `typerush-moussoki-culie` sur GitHub.
4. Laisser les champs de build vides (aucun outil de build n'est utilisé) et déployer.
5. Récupérer l'URL générée par Netlify et la soumettre avant la fin de la séance, avec le lien du dépôt GitHub.

---

## 📂 Structure du projet

```
typerush-moussoki-culie/
├── index.html
├── style.css
├── script.js
├── README.md
└── capture.png
```