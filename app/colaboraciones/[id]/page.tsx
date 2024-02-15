'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import WorkWithUsButton from '@/components/workwithusbutton/workwithusbutton';

interface Partner {
    name: string;
    image: string;
    imageAlt: string;
    href: string;
}

interface PartnerKVM {
    [key: string]: number
}

const partnerId: PartnerKVM = {
    "/colaboraciones/racing": 0,
    "/colaboraciones/afa": 1,
    "/colaboraciones/lnfa": 2,
    "/colaboraciones/csds": 3,
    "/colaboraciones/asart": 4,
    "/colaboraciones/gatorade": 5,
    "/colaboraciones/furious": 6,
    "/colaboraciones/9z": 7,
    "/colaboraciones/ait": 8,
    "/colaboraciones/instituto-md": 9,
    "/colaboraciones/um": 10,
    "/colaboraciones/fedua": 11,
    "/colaboraciones/gei": 12
}

const partners = [
    { name: 'Racing', image: '/partners/2_racing.png', imageAlt: 'Logo Racing', href: '/colaboraciones/racing' },
    { name: 'Asociación de Futbol Argentino', image: '/partners/6_AFA.png', imageAlt: 'Logo AFA', href: '/colaboraciones/afa' },
    { name: 'Liga Nacional de Futsal Argentina', image: '/partners/4_LNFA.png', imageAlt: 'Logo LNFA', href: '/colaboraciones/lnfa' },
    { name: 'Club Sportivo Dock Sud', image: '/partners/11_csds.png', imageAlt: 'Logo Club Sportivo Dock Sud', href: '/colaboraciones/csds' },
    { name: 'Asociación Argentina de Truco', image: '/partners/1_asart.png', imageAlt: 'Logo ASART', href: '/colaboraciones/asart' },
    { name: 'Gatorade', image: '/partners/5_gatorade.png', imageAlt: 'Logo Gatorade', href: '/colaboraciones/gatorade' },
    { name: 'Furious Gaming', image: '/partners/7_furious.png', imageAlt: 'Logo Furious Gaming', href: '/colaboraciones/furious' },
    { name: '9z', image: '/partners/9_z.png', imageAlt: 'Logo 9z', href: '/colaboraciones/9z' },
    { name: 'AIT - Desconocido', image: '/partners/partner_ph.png', imageAlt: 'Logo AIT', href: '/colaboraciones/ait' },
    { name: 'Instituto Madre Deus', image: '/partners/12_md.png', imageAlt: 'Logo Instituto Madre Deus', href: '/colaboraciones/instituto-md' },
    { name: 'Universidad de Morón', image: '/partners/3_uni_moron.png', imageAlt: 'Logo Universidad de Morón', href: '/colaboraciones/um' },
    { name: 'FeDUA', image: '/partners/8_fedua.png', imageAlt: 'Logo FeDUA', href: '/colaboraciones/fedua' },
    { name: 'GEI Desconocido', image: '/partners/partner_ph.png', imageAlt: 'Logo GEI', href: '/colaboraciones/gei' }
]

export default function Page() {
    const [activePartner, setActivePartner] = useState<Partner>({} as Partner)

    const pathname = usePathname();
    const correctId = partnerId[pathname] | 0

    useEffect(() => {
        setActivePartner(partners[correctId])
    }, [correctId])

    return (
        <div className="flex flex-col w-full max-w-[1200px] mx-auto items-start px-5">
            <Image
                src={activePartner.image}
                width={150}
                height={150}
                alt={activePartner.imageAlt}
                className='mt-24 mx-auto'
            />
            <h1 className='text-[2rem] sm:text-[3rem] font-semibold bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>
                {activePartner.name}
            </h1>

            <div className="flex flex-col items-center justify-center gap-5">
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
                    <br></br> <br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
                </p>
            </div>
            <div className='mt-5'>
                <WorkWithUsButton />
            </div>
            <div className='my-5 pt-3 border-t-[1px] border-t-stone-200 w-full'>
                <h2 className='inline-block text-[2rem] mb-5 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text font-semibold'>
                    Mas Colaboraciones
                </h2>
                <div className='flex flex-row gap-4 flex-wrap'>
                    {partners.map((partner) => {
                        if (activePartner.name !== partner.name) return (
                            <Link
                                key={partner.name}
                                href={partner.href}
                                className='transition-all duration-150 hover:scale-125'
                            >
                                <Image
                                    src={partner.image}
                                    width={150}
                                    height={150}
                                    alt={partner.imageAlt}
                                    className='max-w-[70px] max-h-[70px] min-w-[70px] min-h-[70px]'
                                />
                            </Link>
                        )
                    })}
                </div>
                Wd</div>
        </div>
    )
}