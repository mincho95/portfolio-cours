import Accordeon from "@/componants/accordeon"
import Bouton from "@/componants/bouton"
import Carte from "@/componants/carte"
import Hero from "@/componants/hero"
import Section from "@/componants/section"
import { PROJETS } from "@/data/projets"

export default function Accueil() {
    return (
        <>
            <Hero
                titre="Mon portfolio"
                texte="Étudiant en développement web, voici quelques-uns de mes projets."
            />
            <Section titre="Mes projets">
                <div className="grid gap-4 sm:grid-cols-3">
                    {PROJETS.slice(0, 3).map((projet) => (
                        <Carte
                            key={projet.id}
                            titre={projet.titre}
                            resume={projet.resume}
                            categorie={projet.categorie}
                            href={`/projets/${projet.slug}`}
                        />
                    ))}
                </div>
                <div className="mt-8">
                    <Bouton label="Tous les projets" href="/projets" variante="contour" />
                </div>
            </Section>
            <Section titre="Questions fréquentes">
                <Accordeon question="Qui suis-je ?">
                    Un étudiant en développement web.
                </Accordeon>
                <Accordeon question="Comment me contacter ?">
                    Rendez-vous sur la page Contact.
                </Accordeon>
            </Section>
        </>
    )
}
