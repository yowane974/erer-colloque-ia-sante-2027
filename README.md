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
css/style.css   identité visuelle (palette basalte / molasse / lagon)
js/script.js    menu mobile
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

## Prochaines mises à jour prévues

- Dates précises (appel, deadlines, colloque)
- Composition du comité scientifique
- Intervenant·es confirmé·es
- Modalités de soumission (gabarit, longueur)
- Adresse de contact définitive
