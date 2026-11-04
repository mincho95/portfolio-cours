import { notFound } from "next/navigation"
import Bouton from "@/components/bouton"
import BoutonJaime from "@/components/bouton-jaime"
import Etiquette from "@/components/etiquette"
import ImageProjet from "@/components/image-projet"
import { PROJETS } from "@/data/projets"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function PageProjet({ params }: Props) {
    const { slug } = await params
    const projet = PROJETS.find((p) => p.slug === slug)

    if (!projet) {
        notFound()
    }

    return (
        <article className="py-12">
            <ImageProjet src={projet.image} alt={projet.titre} grande />
            <p className="text-xs uppercase text-neutral-500">{projet.categorie} - {projet.annee}</p>
            <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
            <p className="mt-6 max-w-xl text-neutral-600">{projet.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                    <Etiquette key={tag} texte={tag} />
                ))}
            </ul>
            <div className="mt-8 flex gap-4">
                <BoutonJaime />
                <Bouton label="Tous les projets" href="/projets" variante="contour" />
            </div>
        </article>
    )
}
