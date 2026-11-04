export type Projet = {
    id: number
    slug: string
    titre: string
    resume: string
    description: string
    categorie: string
    image: string
    annee: number
    tags: string[]
}

export const PROJETS: Projet[] = [
    {
        id: 1,
        slug: "inventaire-atelier",
        titre: "Inventaire de l'atelier",
        resume: "Retrouver une meule ou un diamant depuis n'importe quel poste.",
        description: "Une appli web qui met l'inventaire d'un atelier de rectification sur tous les postes, à partir des exports de l'ERP, avec commandes groupées le soir.",
        categorie: "Web",
        image: "/projets/inventaire-atelier.webp",
        annee: 2026,
        tags: ["PHP", "Python", "JavaScript", "Tailwind"],
    },
    {
        id: 2,
        slug: "gestion-programmes",
        titre: "Numéros de programme sans doublon",
        resume: "Un numéro unique par fiche, sans base de données.",
        description: "Attribuer un numéro unique à des fiches créées en même temps sur plusieurs postes, sans base de données : des réservations de 15 secondes sous verrou.",
        categorie: "Web",
        image: "/projets/gestion-programmes.webp",
        annee: 2026,
        tags: ["PHP", "Python", "JavaScript"],
    },
    {
        id: 3,
        slug: "serveur-minecraft",
        titre: "Serveur Minecraft moddé",
        resume: "Un serveur chez moi, sans jamais donner l'adresse IP.",
        description: "Un serveur Minecraft moddé sur un vieux PC : Ubuntu Server, Crafty dans Docker, TCPShield devant, et l'adresse IP de la maison jamais donnée aux joueurs.",
        categorie: "Système",
        image: "/projets/serveur-minecraft.webp",
        annee: 2025,
        tags: ["Ubuntu Server", "Docker", "SSH"],
    },
    {
        id: 4,
        slug: "extension-mydevinci",
        titre: "Thème sombre du portail De Vinci",
        resume: "Une extension Firefox publiée sur le catalogue Mozilla.",
        description: "Une extension Firefox qui passe le portail myDeVinci en thème sombre sans toucher à son code : recoloration par luminance, connexion auto, envoi à Mozilla.",
        categorie: "Extension",
        image: "/projets/extension-mydevinci.png",
        annee: 2026,
        tags: ["JavaScript", "CSS", "WebExtensions"],
    },
    {
        id: 5,
        slug: "portfolio",
        titre: "Mon portfolio",
        resume: "Un site statique avec du métal liquide en WebGL.",
        description: "Mon portfolio : un site statique sans dépendance, avec un fond en métal liquide en WebGL et une étude de cas pour chaque projet.",
        categorie: "Web",
        image: "/projets/portfolio.png",
        annee: 2026,
        tags: ["HTML", "CSS", "JavaScript", "WebGL"],
    },
]

export const PROJETS_ACCUEIL: Projet[] = [PROJETS[0], PROJETS[1], PROJETS[2]]
