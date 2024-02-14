import SectionTitle from '@/components/sectiontitle/sectiontitle'
import React from 'react'
import ServiceCard from './servicecard'
import Section from '@/components/section/section'
import Image from 'next/image'

const services = [
    {
        title: 'Servicios de Consultoría',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/consultoria'
    },
    {
        title: 'Formación Profesional',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/formacion'
    },
    {
        title: 'Ligas Deportivas',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/ligas-deportivas'
    },
    {
        title: 'Organización de Eventos Deportivos',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/eventos-deportivos'
    },
    {
        title: 'Asesoramiento a Deportistas',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/asesoramiento'
    },
    {
        title: 'Scouting Social',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/scouting-social'
    },
    {
        title: 'Organización de Torneos Empresariales',
        description: 'Breve descripción para el servicio.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/torneos-empresariales'
    }
]

export default function Services() {
    return (
        <Section id="services" className='relative mb-40'>
            <SectionTitle
                title='Nuestros Servicios'
                subtitle='Potencia tu rendimiento con'
                className='z-10'
            />
            <div className='flex flex-row justify-center gap-5 max-w-[1200px] flex-wrap w-full z-10'>
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
