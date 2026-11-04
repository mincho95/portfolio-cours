# Mon portfolio

Voici mon portfolio realisé pour le cours de NextJS

Le site est en ligne ici : https://portfolio-cours.vercel.app

## Ce qu'il y a dedans

- **Accueil** : une présentation, trois projets, un bouton vers tous les autres et quelques questions qui se déplient.
- **Projets** (`/projets`) : les cinq projets, chacun avec son image, son année, ses tags et un bouton J'aime.
- **Page d'un projet** (`/projets/[slug]`) : le détail d'un projet. Si l'adresse n'existe pas, on tombe sur la page 404.
- **À propos** : mon parcours en quelques lignes.
- **Contact** : mon mail, mon GitHub et mon LinkedIn.

## Les projets présentés

1. **Inventaire de l'atelier** : une appli web pour retrouver le matériel d'un atelier de rectification. (Réalisé durant mon job d'été pour une entreprise)
2. **Numéros de programme sans doublon** : attribuer un numéro unique aux fiches créées sur plusieurs postes, sans base de données. (Egalement du job d'été)
3. **Serveur Minecraft moddé** : un serveur hébergé chez moi, sans jamais donner l'adresse IP de la maison.
4. **Thème sombre du portail De Vinci** : une extension Firefox publiée sur le catalogue Mozilla. (Avec une version Chrome mais la publier est payant)
5. **Mon portfolio** : mon site statique avec du métal liquide en WebGL. (Mon vrai portfolio: https://paul-fery.pages.dev/)

## Lancer le site chez soi

Il faut Node.js installé. Ensuite :

```bash
npm install
npm run dev
```

Le site est alors visible sur http://localhost:3000.

Les autres commandes :

```bash
npm run build   # construit le site comme sur Vercel
npm run lint    # vérifie le code avec ESLint
```

## Comment c'est organisé

```
app/
  layout.tsx            menu et pied de page
  page.tsx              accueil
  projets/page.tsx      liste des projets
  projets/[slug]/       page d'un projet
  a-propos/ contact/    deux autres pages
components/             10 composants du site
data/projets.ts         type Projet et le tableau des projets
public/projets/         images des projets
```

Les composants :

| Composant | Rôle |
|---|---|
| `Menu` | liens de navigation |
| `PiedDePage` | mentions de fin de page |
| `Hero` | bandeau d'accueil |
| `Section` | titre et contenu |
| `Bouton` | lien en forme de bouton |
| `Carte` | projet dans une liste |
| `ImageProjet` | image d'un projet |
| `Etiquette` | tag |
| `BoutonJaime` | bouton J'aime |
| `Accordeon` | question qui se déplie |

`BoutonJaime` et `Accordeon` sont les seuls composants qui réagissent au clic. Ils utilisent `useState` et sont les seuls à avoir `"use client"` pour garder une mémoire coté user.

## Ce que j'ai utilisé

- Next.js 16 et React 19
- TypeScript, avec les props de chaque composant typées
- Tailwind CSS pour le style
- Déploiement sur Vercel