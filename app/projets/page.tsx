import Carte from "@/components/carte"
import Section from "@/components/section"
import { PROJETS } from "@/data/projets"

export default function Projets() {
    return (
        <Section titre="Mes projets">
            <div className="grid gap-4 sm:grid-cols-2">
                {PROJETS.map((projet) => (
                    <Carte
                        key={projet.id}
                        titre={projet.titre}
                        resume={projet.resume}
                        categorie={projet.categorie}
                        image={projet.image}
                        annee={projet.annee}
                        tags={projet.tags}
                        href={`/projets/${projet.slug}`}
                    />
                ))}
            </div>
        </Section>
    )
}
