import React from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className=' bg-slate-100'>
            <div className='flex max-w-[1200px] flex-row items-center justify-between gap-20 px-10 mx-auto'>
                <Image
                    src='/logo.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={158}
                    height={191}
                    className='block md:hidden h-[60px] w-[50px]'
                />

                <Image
                    src='/logo-full.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={406}
                    height={191}
                    className='hidden md:block h-[60px] w-[128px]'
                />

                <div className='flex flex-row gap-10 items-center'>
                    <NavLinks />
                </div>
            </div>
        </div>
    )
}
