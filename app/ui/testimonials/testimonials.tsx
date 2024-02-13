'use client'
import React, { useState, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import TestimonyCard from './testimonycard'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
    { name: 'Nombre Apellido 1', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido 2', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 3 },
    { name: 'Nombre Apellido 3', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido 4', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 4 },
    { name: 'Nombre Apellido 5', occupation: 'Ocupación de Ejemplo', review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 5 },
    { name: 'Nombre Apellido 6', occupation: 'Ocupación de Ejemplo', review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', image: '/testimonials/avatar_ph.png', imageAlt: 'Avatar del Cliente', rating: 2 },
]

export default function Testimonials() {
    const [currentTestimonials, setCurrentTestimonials] = useState(0)
    const nodeRef = useRef(null);

    const testimonialsToShow = testimonials.slice(currentTestimonials, currentTestimonials + 2)

    const handleTestimonialsNavigation = (action: string) => {
        if (action === 'next') {
            setCurrentTestimonials((prevState) => prevState === testimonials.length - 2 ? 0 : prevState + 1)
        }

        if (action === 'prev') {
            setCurrentTestimonials((prevState) => prevState === 0 ? testimonials.length - 2 : prevState - 1)
        }
    }

    return (
        <Section className='relative overflow-hidden z-10 bg-[#f8f8f8] py-20'>
            <SectionTitle
                title='Clientes'
                subtitle='Que dicen nuestros'
                className='z-10 my-0 mb-10'
            />
                <div className='flex flex-row flex-wrap gap-5 justify-center w-full max-w-[1200px] z-10'>
                    {testimonialsToShow.map(testimony => {
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

            <div className='flex flex-row gap-5 items-center justify-center mt-5'>
                <button
                    onClick={() => handleTestimonialsNavigation('prev')}
                    className='w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-r from-[#13cc3b] to-[#28a5db] rounded-full transition-all duration-200 hover:scale-105'
                >
                    <ArrowBackIosNewIcon sx={{ color: 'white' }} />
                </button>
                <button
                    onClick={() => handleTestimonialsNavigation('next')}
                    className='w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-r from-[#13cc3b] to-[#28a5db] rounded-full transition-all duration-200 hover:scale-105'
                >
                    <ArrowForwardIosIcon sx={{ color: 'white' }} />
                </button>
            </div>
        </Section>
    )
}
