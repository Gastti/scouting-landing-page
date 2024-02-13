interface SectionProps {
    children: React.ReactNode,
    className?: string,
    id?: string
}

export default function Section({ children, className, id }: SectionProps) {

    return (
        <div id={id} className={`flex flex-col items-center w-full px-5 ${className}`}>{children}</div>
    )
}
