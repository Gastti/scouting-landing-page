import React from 'react'

interface SectionTitleProps {
    title: string,
    subtitle: string,
    className?: string
}

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
    return (
        <div className={`flex flex-col items-center my-10 ${className}`}>
            <h3 className={`text-[1.2rem] font-medium leading-tight`}>{subtitle}</h3>
            <h2 className={`text-[3rem] font-semibold text-[#09c732] leading-tight bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text text-center`}>{title}</h2>
        </div>
    )
}
