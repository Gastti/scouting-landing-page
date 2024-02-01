import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import Image from 'next/image'
import React from 'react'
import TestimonyCard from './testimonycard'

const testimonials = [
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 4 },
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 2 },
]

export default function Testimonials() {
    return (
        <Section className='relative overflow-hidden'>
            <SectionTitle
                title='Testimonios'
                subtitle='Mira que dicen nuestros'
                className='z-10'
            />
            <div className='flex flex-row flex-wrap gap-5 justify-center w-full max-w-[1000px] mx-5'>
                {testimonials.map(testimony => {
                    return (
                        <TestimonyCard
                            key={testimony.name}
                            name={testimony.name}
                            occupation={testimony.occupation}
                            image={testimony.image}
                            imageAlt={testimony.imageAlt}
                            review={testimony.review}
                            rating={testimony.rating}
                        />
                    )
                })}
            </div>
            {/* <Image
                src='/bg_g_2.png'
                alt='Fondo Degradado'
                width={1920}
                height={1080}
                className='absolute top-0 opacity-80 z-0 w-full h-full object-cover'
            /> */}
        </Section>
    )
}
