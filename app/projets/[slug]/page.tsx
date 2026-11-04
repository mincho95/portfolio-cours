import { notFound } from "next/navigation"
import Bouton from "@/componants/bouton"
import BoutonJaime from "@/componants/bouton-jaime"
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
            <img src={projet.image} alt={projet.titre} className="mb-8 h-64 w-full rounded bg-neutral-100 object-contain" />
            <p className="text-xs uppercase text-neutral-500">{projet.categorie} - {projet.annee}</p>
            <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
            <p className="mt-6 max-w-xl text-neutral-600">{projet.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
                {projet.tags.map((tag) => (
                    <li key={tag} className="rounded border border-neutral-300 px-2 py-0.5 text-xs">
                        {tag}
                    </li>
                ))}
            </ul>
            <div className="mt-8 flex gap-4">
                <BoutonJaime />
                <Bouton label="Tous les projets" href="/projets" variante="contour" />
            </div>
        </article>
    )
}
