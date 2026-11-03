import Link from "next/link"
import BoutonJaime from "@/componants/bouton-jaime"

type Props = {
    titre: string
    resume: string
    categorie: string
    href?: string
}

export default function Carte({ titre, resume, categorie, href }: Props) {
    return (
        <article className="rounded-lg border border-neutral-200 p-5">
            <p className="text-xs uppercase text-neutral-500">{categorie}</p>
            <h3 className="mt-1 font-semibold">
                {href ? <Link href={href}>{titre}</Link> : titre}
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{resume}</p>
            <div className="mt-4">
                <BoutonJaime />
            </div>
        </article>
    )
}
