import React from 'react'

interface SubsectionProps {
    children: React.ReactNode
}

export default function Subsection({ children }: SubsectionProps) {
    return (
        <div className='flex flex-row'>
            {children}
        </div>
    )
}
