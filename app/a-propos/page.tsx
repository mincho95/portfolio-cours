import Bouton from "@/componants/bouton"
import Section from "@/componants/section"

type Etape = {
    id: number
    date: string
    titre: string
    texte: string
}

const PARCOURS: Etape[] = [
    {
        id: 1,
        date: "2025",
        titre: "Un serveur Minecraft moddé",
        texte: "Un vieux PC devenu serveur : Linux, Docker et SSH appris après chaque crash.",
    },
    {
        id: 2,
        date: "Juillet 2026",
        titre: "Un mois dans un atelier de rectification",
        texte: "Deux applis web en service, utilisées tous les jours par une dizaine de personnes.",
    },
    {
        id: 3,
        date: "Septembre 2026",
        titre: "Une extension Firefox",
        texte: "Un thème sombre pour le portail de l'école, publié sur le catalogue Firefox.",
    },
]

export default function APropos() {
    return (
        <>
            <div className="py-16">
                <h1 className="text-4xl font-semibold">A propos</h1>
                <p className="mt-4 max-w-lg text-neutral-600">
                    Paul Féry, étudiant en 2e année, IIM Paris Nanterre, axe coding.
                    Je cherche une alternance en développement.
                </p>
            </div>
            <Section titre="Parcours">
                <ul className="space-y-4">
                    {PARCOURS.map((etape) => (
                        <li key={etape.id} className="border-b border-neutral-200 pb-4">
                            <p className="text-xs uppercase text-neutral-500">{etape.date}</p>
                            <h3 className="mt-1 font-semibold">{etape.titre}</h3>
                            <p className="mt-2 text-sm text-neutral-600">{etape.texte}</p>
                        </li>
                    ))}
                </ul>
            </Section>
            <Section titre="Me contacter">
                <Bouton label="Page contact" href="/contact" />
            </Section>
        </>
    )
}
