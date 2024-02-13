'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './nav-links';
import Link from 'next/link';

export default function NavbarResponsive() {
    const [opened, setOpened] = useState(false)

    const handleOpened = () => {
        setOpened(prevState => !prevState)
    }

    return (
        <div className='w-full fixed bg-white top-0 left-0 border-b-[1px] border-b-stone-200'>
            <div className='flex flex-row justify-between items-center h-[80px] px-5'>
                <Image
                    src='/logo.png'
                    alt='Logo de Scouting Consultoría y Gestión Deportiva'
                    width={158}
                    height={191}
                    className='h-[40px] w-[35px]'
                />
                <div>
                    <button className='p-2' onClick={handleOpened}>
                        {!opened ? <MenuIcon sx={{ fontSize: '2.5rem' }} /> : <CloseIcon sx={{ fontSize: '2.5rem' }} />}
                    </button>
                </div>
            </div>
            <div className={`w-full h-[calc(100dvh-80px)] top-0 left-0 py-5 flex-col justify-between ${opened ? 'flex' : 'hidden'}`} onClick={handleOpened}>
                <div className='flex flex-col gap-5 items-start'>
                    <NavLinks className='text-[1.5rem] grow-0' />
                </div>
                <div className='flex flex-row gap-3 items-center px-6'>
                    <Image
                        src='/logo.png'
                        width={158}
                        height={191}
                        alt='Logo Scouting'
                        className=' h-[60px] w-[50px]'
                    />
                    <h3>
                        <span className='text-[1.5rem] leading-tight bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text font-semibold'>Scouting</span>
                        <br></br>
                        <span>Consultoria y Gestion Deportiva</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
