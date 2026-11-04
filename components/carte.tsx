import Link from "next/link"
import BoutonJaime from "@/components/bouton-jaime"
import Etiquette from "@/components/etiquette"
import ImageProjet from "@/components/image-projet"

type Props = {
    titre: string
    resume: string
    categorie: string
    image: string
    annee: number
    tags: string[]
    href?: string
}

export default function Carte({ titre, resume, categorie, image, annee, tags, href }: Props) {
    return (
        <article className="rounded-lg border border-neutral-200 p-5">
            <ImageProjet src={image} alt={titre} />
            <p className="text-xs uppercase text-neutral-500">{categorie} - {annee}</p>
            <h3 className="mt-1 font-semibold">
                {href ? <Link href={href}>{titre}</Link> : titre}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{resume}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <Etiquette key={tag} texte={tag} />
                ))}
            </ul>
            <div className="mt-4">
                <BoutonJaime />
            </div>
        </article>
    )
}
