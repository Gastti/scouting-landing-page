import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Button } from '@/components/button/button';

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

export default function Partners() {
    return (
        <div className='flex flex-col gap-5 z-10 max-w-[1200px] w-full p-5 bg-[#f8F8F8] rounded-md mt-5'>
            <div className='flex flex-row gap-5 justify-center flex-wrap'>
                {partners.map((partner) => {
                    return (
                        <Link
                            key={partner.name}
                            href={partner.href}
                            className='min-w-[40px] max-w-[45px] md:max-w-[70px] transition-all duration-100 hover:scale-125'
                        >
                            <Image
                                src={partner.image}
                                alt={partner.imageAlt}
                                width={150}
                                height={150}
                                className='w-full'
                            />
                        </Link>
                    )
                })}
            </div>
            <div className='flext flex-col items-center mt-2'>
                <div className='text-center'>
                    Ellos <b className='font-bold bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text text-center'>confían en nosotros</b>, conoce nuestras
                </div>
                <div className='flex justify-center mt-5'>
                    <Button href='/colaboraciones/racing' variation='goto' className=''>
                        Colaboraciones
                    </Button>
                </div>
            </div>
        </div>
    )
}
