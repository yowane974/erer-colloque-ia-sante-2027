# Colloque IA & Santé — ERER Réunion (mars 2027)

Site vitrine du colloque, sur le modèle structurel du site IA&IV 2026
(Université Paris 8) : une page unique avec navigation par ancres —
Thématique, Axes, Programme, Calendrier, Appel à communication, Comité,
Contact.

## Contenu actuel

Le contenu factuel déjà connu a été intégré : lieu (Musée Stella
Matutina), format en deux journées, triptyque généraliser / normaliser /
singulariser, axe transversal environnemental, coordination (Yohan
Mauve). Tout le reste est marqué explicitement comme provisoire
(« à confirmer », « en cours de constitution ») plutôt que rempli de
texte inventé — à mettre à jour au fil de l'avancement du comité
d'organisation.

## Structure

```
index.html      page unique
css/style.css   charte ERER (vert, violet, mauve, bleu)
js/script.js    menu mobile
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

## Logos

Les logos (ERER, ARS, FHF, FEHAP, FHP, FAS, Université de La Réunion) sont
actuellement chargés directement depuis erer.re (hotlink), faute d'accès
réseau à ce domaine depuis l'environnement où ce site a été généré. Pour la
mise en production, il est préférable de télécharger ces fichiers et de les
héberger dans un dossier `images/logos/` du dépôt, pour ne pas dépendre de
la disponibilité du site erer.re.

## Prochaines mises à jour prévues

- Dates précises (appel, deadlines, colloque)
- Composition du comité scientifique
- Intervenant·es confirmé·es
- Modalités de soumission (gabarit, longueur)
- Adresse de contact définitive
