'use client'
import React, { useState, useEffect } from 'react'
import NavLinks from './nav-links'
import Image from 'next/image'

export default function Navbar() {
    const [isFixed, setIsFixed] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY
            if (offset > 66) setIsFixed(true)
            else setIsFixed(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`flex justify-center w-full py-3 z-20 ${isFixed ? 'bg-white fixed border-b-[1px] border-b-stone-200' : 'absolute'}`}>
            <div
                className='flex flex-row items-center justify-between gap-20 w-full max-w-[1200px] bg-white rounded-full px-5 py-2'
            >
                <Image
                    src='/logo.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={158}
                    height={191}
                    className='block md:hidden h-[60px] w-[50px]'
                />

                <Image
                    src='/logo.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={406}
                    height={191}
                    className='hidden md:block h-[40px] w-[35px]'
                />

                <div className='flex flex-row gap-5 items-center'>
                    <NavLinks />
                </div>
            </div>
        </div>
    )
}
