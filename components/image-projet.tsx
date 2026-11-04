type Props = {
    src: string
    alt: string
    grande?: boolean
}

export default function ImageProjet({ src, alt, grande = false }: Props) {
    const hauteur = grande ? "mb-8 h-64" : "mb-4 h-32"

    return (
        <img src={src} alt={alt} className={`${hauteur} w-full rounded bg-neutral-100 object-contain`} />
    )
}
