# Colloque IA & Santé — ERER Réunion (mars 2027)

Site vitrine du colloque, sur le modèle structurel du site IA&IV 2026
(Université Paris 8) : une page unique avec navigation par ancres —
Thématique, Axes, Programme, Calendrier, Appel à communication, Comité,
Contact.

## Contenu actuel

Le contenu de fond (thématique, triptyque généraliser/normaliser/singulariser,
enjeux, questions de recherche, axes, références) provient du rationnel
scientifique du colloque. Les éléments encore indéterminés — dates précises,
comité scientifique, intervenant·es, frais de participation — sont marqués
explicitement comme provisoires plutôt que remplis de texte inventé.

## Structure

```
index.html      page unique
css/style.css   charte ERER (vert, violet, mauve, bleu)
js/script.js    menu mobile
images/         logos hébergés dans le dépôt
documents/      PDF à déposer (programme, actes)
```

Aucune dépendance de build : le site s'ouvre tel quel dans un navigateur,
et se déploie tel quel sur GitHub Pages.

## Publier sur GitHub

Je n'ai pas accès à ton compte GitHub (aucune connexion n'est configurée
dans cette conversation), donc je ne peux pas créer le dépôt à ta place.
Le dépôt Git est déjà initialisé localement avec un premier commit — il
ne reste qu'à le pousser :

```bash
# 1. Crée un dépôt vide sur github.com (sans README ni .gitignore)
# 2. Depuis ce dossier :
git remote add origin git@github.com:<ton-compte>/erer-colloque-2027.git
git branch -M main
git push -u origin main
```

Pour l'héberger gratuitement via GitHub Pages : Settings → Pages →
Deploy from branch → `main` / `/ (root)`.

## Structures prêtes à remplir

Deux blocs sont en place mais vides, en attente de contenu réel :

- **Programme PDF** — le visionneur intégré et les boutons
  consulter/télécharger sont écrits dans `index.html` mais mis en
  commentaire. Voir `documents/README.md` pour les activer une fois le
  programme validé.
- **Références scientifiques** — section `#references` avec cinq entrées
  numérotées vides, à compléter au format : Auteur·es. Titre. Revue, année,
  volume, pages. DOI.

## Logos et pictogrammes

Hébergés dans le dépôt : le logo ERER (`images/logo-erer.png`), le logo ARS
(`images/logo-ars-reunion.png`) et les pictogrammes de la charte ERER
(`images/icons/`).

Les logos des signataires de la convention (FHF, FEHAP, FHP, FAS, Université
de La Réunion) sont encore chargés depuis erer.re. Pour la mise en
production, mieux vaut les télécharger et les placer eux aussi dans
`images/`, pour ne pas dépendre de la disponibilité du site erer.re.

### Utiliser les pictogrammes

Les pictogrammes monochromes sont appliqués en masque CSS, ce qui leur fait
prendre la couleur du texte environnant :

```html
<span class="picto picto-md" style="--picto:url('images/icons/icon-004.svg')"></span>
```

Tailles disponibles : `picto-sm` (20px), `picto-md` (34px), `picto-lg` (48px).
Les pictogrammes déjà multicolores (icon-005 à icon-008) sont insérés
directement en `<img>` pour conserver leurs couleurs d'origine.

### Favicon et icônes

Générés à partir de la marque ERER (carré à quatre quadrants) :
`favicon.ico` à la racine, `images/favicon-16x16.png`,
`images/favicon-32x32.png`, `images/favicon-96x96.png`,
`images/apple-touch-icon.png` (fond blanc, iOS ne gère pas la
transparence) et `images/icon-192.png` / `images/icon-512.png` pour le
manifeste `site.webmanifest`.

Pour les régénérer après un changement de logo, repartir de
`images/logo-erer-marque.png` (marque détourée, fond transparent).

### Palette

Couleurs extraites des fichiers de marque fournis : vert `#49B25E`, violet
`#26045A`, mauve `#B081F5`, bleu `#7498F6`.

## Prochaines mises à jour prévues

- Dates précises (appel, deadlines, colloque)
- Composition du comité scientifique
- Intervenant·es confirmé·es
- Modalités de soumission (gabarit, longueur)
- Adresse de contact définitive
