'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NavLinks from './nav-links';
import Image from 'next/image';

export default function Navbar() {
    const [isFixed, setIsFixed] = useState<boolean>(false)
    const [isHome, setIsHome] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 66) setIsFixed(true)
            else setIsFixed(false)
        }

        setIsHome(pathname === '/')

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    return (
        <div className={`flex justify-center w-full z-20 left-0 ${isFixed || !isHome ? 'bg-white fixed border-b-[1px] border-b-stone-200 text-black' : 'absolute'}`}>
            <div
                className='flex flex-row items-center justify-between gap-20 w-full max-w-[1200px] text-white rounded-full px-5 py-2'
            >
                <Image
                    src='/logo.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={158}
                    height={191}
                    className='h-[60px] w-[50px]'
                />

                <div className='flex-row gap-5 items-center flex'>
                    <NavLinks isFixed={isFixed} isHome={isHome}/>
                </div>
            </div>
        </div>
    )
}
