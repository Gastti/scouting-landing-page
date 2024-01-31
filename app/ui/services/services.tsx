import SectionTitle from '@/components/sectiontitle/sectiontitle'
import React from 'react'
import ServiceCard from './servicecard'

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
        <div className='flex flex-col items-center w-full min-h-[600px] overflow-hidden relative'>
            <SectionTitle
                title='Nuestros Servicios'
                subtitle='Potencia tu rendimiento con'
            />
            <div className='flex flex-row justify-center gap-5 max-w-[1000px] flex-wrap mt-10'>
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
        </div>
    )
}
