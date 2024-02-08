interface SectionProps {
    children: React.ReactNode,
    className?: string
}

export default function Section({ children, className }: SectionProps) {

    return (
        <div className={`flex flex-col items-center w-full px-5 ${className}`}>{children}</div>
    )
}
