import Bouton from "@/components/bouton"
import Section from "@/components/section"

type Contact = {
    id: number
    label: string
    href: string
    variante: "plein" | "contour"
}

const CONTACTS: Contact[] = [
    { id: 1, label: "Écrire un mail", href: "mailto:pfery@outlook.fr", variante: "plein" },
    { id: 2, label: "GitHub", href: "https://github.com/mincho95", variante: "contour" },
    { id: 3, label: "LinkedIn", href: "https://www.linkedin.com/in/paul-fery/", variante: "contour" },
]

export default function ContactPage() {
    return (
        <>
            <div className="py-16">
                <h1 className="text-4xl font-semibold">Contact</h1>
                <p className="mt-4 max-w-lg text-neutral-600">
                    Je cherche une alternance en développement. Le plus simple pour me joindre est le mail.
                </p>
            </div>
            <Section titre="Me joindre">
                <div className="flex flex-wrap gap-4">
                    {CONTACTS.map((contact) => (
                        <Bouton
                            key={contact.id}
                            label={contact.label}
                            href={contact.href}
                            variante={contact.variante}
                        />
                    ))}
                </div>
            </Section>
        </>
    )
}
