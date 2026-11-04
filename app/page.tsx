import Accordeon from "@/components/accordeon"
import Bouton from "@/components/bouton"
import Carte from "@/components/carte"
import Hero from "@/components/hero"
import Section from "@/components/section"
import { PROJETS_ACCUEIL } from "@/data/projets"

export default function Accueil() {
    return (
        <>
            <Hero
                titre="Mon portfolio"
                texte="Étudiant en développement web, voici quelques-uns de mes projets."
            />
            <Section titre="Mes projets">
                <div className="grid gap-4 sm:grid-cols-3">
                    {PROJETS_ACCUEIL.map((projet) => (
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
