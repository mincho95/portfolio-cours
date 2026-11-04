type Props = {
    texte: string
}

export default function Etiquette({ texte }: Props) {
    return (
        <li className="rounded border border-neutral-300 px-2 py-0.5 text-xs">
            {texte}
        </li>
    )
}
