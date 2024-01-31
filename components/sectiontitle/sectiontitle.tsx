import React from 'react'

interface SectionTitleProps {
    title: string,
    subtitle: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className='flex flex-col items-center'>
            <h3 className='text-[1.2rem] font-medium leading-tight'>{subtitle}</h3>
            <h2 className='text-[3rem] font-semibold text-[#09c732] leading-tight'>{title}</h2>
        </div>
    )
}
