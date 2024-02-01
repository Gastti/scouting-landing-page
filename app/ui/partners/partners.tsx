import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { Button } from '@/components/button/button';

const partners = [
    { name: 'Racing', image: '/partners/2_racing.png', imageAlt: 'Logo Racing', href: '' },
    { name: 'Asociación de Futbol Argentino', image: '/partners/6_AFA.png', imageAlt: 'Logo AFA', href: '' },
    { name: 'Liga Nacional de Futsal Argentina', image: '/partners/4_LNFA.png', imageAlt: 'Logo LNFA', href: '' },
    { name: 'Club Sportivo Dock Sud', image: '/partners/11_csds.png', imageAlt: 'Logo Club Sportivo Dock Sud', href: '' },
    { name: 'Asociación Argentina de Truco', image: '/partners/1_asart.png', imageAlt: 'Logo ASART', href: '' },
    { name: 'Gatorade', image: '/partners/5_gatorade.png', imageAlt: 'Logo Gatorade', href: '' },
    { name: 'Furious Gaming', image: '/partners/7_furious.png', imageAlt: 'Logo Furious Gaming', href: '' },
    { name: '9z', image: '/partners/9_z.png', imageAlt: 'Logo 9z', href: '' },
    { name: 'AIT - Desconocido', image: '/partners/partner_ph.png', imageAlt: 'Logo AIT', href: '' },
    { name: 'Instituto Madre Deus', image: '/partners/12_md.png', imageAlt: '', href: '' },
    { name: 'Universidad de Morón', image: '/partners/3_uni_moron.png', imageAlt: 'Logo Universidad de Morón', href: '' },
    { name: 'FeDUA', image: '/partners/8_fedua.png', imageAlt: 'Logo FeDUA', href: '' },
    { name: 'GEI Desconocido', image: '/partners/partner_ph.png', imageAlt: '', href: '' }
]

export default function Partners() {
    return (
        <div className='flex flex-col gap-5 z-10 max-w-[1000px] w-full p-5 bg-[#ffffff] rounded-md mt-5'>
            <div className='flex flex-row gap-5 justify-center flex-wrap md:flex-nowrap'>
                {partners.map((partner) => {
                    return (
                        <Link
                            key={partner.name}
                            href={partner.href}
                            className='min-w-[50px] max-w-[50px] transition-all duration-100 hover:scale-125'
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
            <div className='text-center mt-2'>
                Ellos <b className='font-bold bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text text-center'>confían en nosotros</b>, conoce nuestras
                <Button href='/' variation='goto' className='max-w-[240px] hover:max-w-[250px] mx-auto mt-5'>
                    Colaboraciones
                </Button>
            </div>
        </div>
    )
}
