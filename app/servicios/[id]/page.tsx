'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';

interface Service {
    title: string;
    content: string;
    description: string;
    image: string;
    imageAlt: string;
    href: string;
    banner: string;
    bannerAlt: string;
}

interface ServiceKVM {
    [key: string]: number
}

const servicesId: ServiceKVM = {
    "/servicios/consultoria": 0,
    "/servicios/formacion": 1,
    "/servicios/ligas-deportivas": 2,
    "/servicios/eventos-deportivos": 3,
    "/servicios/asesoramiento": 4,
    "/servicios/scouting-social": 5,
    "/servicios/torneos-empresariales": 6,
}

const services: Array<Service> = [
    {
        title: 'Servicios de Consultoría',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/consultoria',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Formación Profesional',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/formacion',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Ligas Deportivas',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/ligas-deportivas',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Organización de Eventos Deportivos',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/eventos-deportivos',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Asesoramiento a Deportistas',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/asesoramiento',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Scouting Social',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/scouting-social',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    },
    {
        title: 'Organización de Torneos Empresariales',
        content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: '/service_icon_ph.png', imageAlt: 'Icono de Servicio', href: '/servicios/torneos-empresariales',
        banner: '/services_banner_ph.png', bannerAlt: 'Banner de Servicio'
    }
]

export default function Page() {
    const [activeService, setActiveService] = useState<Service>({} as Service)

    const pathname = usePathname();
    const correctId = servicesId[pathname] | 0

    useEffect(() => {
        setActiveService(services[correctId])
    }, [correctId])

    return (
        <div className="flex flex-col w-full max-w-[1200px] mx-auto px-5">
            <div className='mt-36 mx-auto my-5 text-center'>
                <h2 className='text-[1rem] sm:text-[2rem] font-semibold text-center leading-tight'>Scouting</h2>
                <h1 className='text-[2rem] sm:text-[3.5rem] font-semibold leading-tight bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>
                    {activeService.title}
                </h1>
            </div>
            <div className="flex flex-row gap-5 flex-wrap md:flex-nowrap">
                <div className='flex flex-col gap-5'>
                    <p className='text-justify'>
                        {activeService.content}
                    </p>
                    <a
                        href='/'
                        target='_blank'
                        className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] px-6 py-4 text-[1rem] text-white flex flex-row items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 max-w-[200px]'
                    >
                        Inscribirse
                        <AddIcon sx={{ marginLeft: '20px' }} />
                    </a>
                </div>
                <div className='min-w-[450px]'>
                    <Image
                        width={500}
                        height={500}
                        src={activeService.banner}
                        alt={activeService.bannerAlt}
                        className='hidden md:block'
                    />
                </div>
            </div>
            <div className='my-5 pt-6 border-t-[1px] border-t-stone-200'>
                <h2 className='inline-block text-[1.5rem] sm:text-[2rem] mb-2 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text font-semibold'>
                    Mas Servicios
                </h2>
                <div className='flex flex-row gap-2 flex-wrap'>
                    {services.map((service) => {
                        if (activeService.title !== service.title) return (
                            <Link
                                key={service.title}
                                href={service.href}
                                className='py-2 px-4 border-[1px] border-stone-200 bg-white rounded-md transition-all duration-150 hover:scale-105 hover:bg-gradient-to-r from-[#28a5db] to-[#13cc3b] hover:text-transparent bg-clip-text'
                            >
                                {service.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}