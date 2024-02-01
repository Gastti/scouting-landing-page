import SectionTitle from '@/components/sectiontitle/sectiontitle'
import React from 'react'
import ServiceCard from './servicecard'
import Section from '@/components/section/section'
import Image from 'next/image'

const services = [
    {
        title: 'Servicios de Consultoría',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Formación Profesional',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Ligas Deportivas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Organización de Eventos Deportivos',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Asesoramiento a Deportistas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Scouting Social',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    },
    {
        title: 'Organización de Torneos Empresariales',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/'
    }
]

export default function Services() {
    return (
        <Section className='relative'>
            <SectionTitle
                title='Nuestros Servicios'
                subtitle='Potencia tu rendimiento con'
                className='z-10'
            />
            <div className='flex flex-row justify-center gap-5 max-w-[1000px] flex-wrap mt-10 mx-5 z-10'>
                {services.map(service => {
                    return (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            imageAlt={service.imageAlt}
                            href={service.href}
                        />
                    )
                })}
            </div>
            <Image
                src='/bg_g_1.png'
                alt='Fondo Degradado'
                width={1920}
                height={1080}
                className='absolute top-0 opacity-50 z-0 w-full h-full object-cover'
            />
        </Section>
    )
}
