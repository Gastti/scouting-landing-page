'use client'
import React, { useState, useRef, useEffect } from 'react'
import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import TestimonyCard from './testimonycard'

const testimonials = [
    { name: 'Nombre Apellido 1', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido 2', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido 3', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido 4', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 4 },
    { name: 'Nombre Apellido 5', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido 6', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 2 },
    { name: 'Nombre Apellido 7', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 2 },
]

export default function Testimonials() {
    const [currentTestimonials, setCurrentTestimonials] = useState(0)
    const testimonialsToShow = testimonials.slice(currentTestimonials, currentTestimonials + 2)
    
    const ref = useRef(0)
    
    useEffect(() => {
      const interval = setInterval(() => {
        // Usa `ref` para almacenar el valor actual de `currentTestimonials`
        ref.current = currentTestimonials
    
        // Usa `setTimeout` para actualizar el estado después del renderizado
        setTimeout(() => {
          setCurrentTestimonials((prevState) => prevState === testimonials.length - 2 ? 0 : prevState + 1)
        }, 0)
      }, 3000)
    
      return () => clearInterval(interval)
    }, [])

    return (
        <Section className='relative overflow-hidden z-10 bg-[#f8f8f8] py-20'>
            <SectionTitle
                title='Clientes'
                subtitle='Que dicen nuestros'
                className='z-10 my-0 mb-10'
            />
                    <div className='flex flex-row flex-wrap gap-5 justify-center w-full max-w-[1200px] z-10'>
                        {testimonials.map((testimony, index) => {
                            return (
                                <TestimonyCard
                                    key={testimony.name}
                                    name={testimony.name}
                                    occupation={testimony.occupation}
                                    image={testimony.image}
                                    imageAlt={testimony.imageAlt}
                                    review={testimony.review}
                                    rating={testimony.rating}
                                    className={`testimony ${index === currentTestimonials || index === currentTestimonials + 1 ? 'visible' : ''}`}
                                />
                            )
                        })}
                    </div>
        </Section>
    )
}
