'use client'
import React, { useState, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavLinks from './nav-links';
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function NavbarResponsive() {
    const [opened, setOpened] = useState(false)
    const nodeRef = useRef(null);

    const handleOpened = () => {
        setOpened(prevState => !prevState)
    }

    return (
        <div className='w-full fixed bg-white top-0 left-0'>
            <div className='flex flex-row justify-between items-center h-[70px] px-5'>
                <Link href='/' className='transition-transform duration-200 active:scale-95'>
                    <Image
                        src='/logo-mobile.png'
                        alt='Logo de Scouting Consultoría y Gestión Deportiva'
                        width={250}
                        height={81}
                        className='h-[40px] w-[124px]'
                    />
                </Link>
                <div>
                    <button className='p-2 transition-transform duration-200 active:scale-50' onClick={handleOpened}>
                        {!opened ? <MenuIcon sx={{ fontSize: '2rem' }} /> : <CloseIcon sx={{ fontSize: '2rem' }} />}
                    </button>
                </div>
            </div>
            <CSSTransition
                nodeRef={nodeRef}
                in={opened}
                timeout={300}
                classNames="my-node"
                unmountOnExit
            >
                <div ref={nodeRef} className={`my-node flex w-full h-[calc(100dvh-70px)] top-0 left-0 py-5 justify-between flex-col`} onClick={handleOpened}>
                    <div className='flex flex-col gap-5 items-start'>
                        <NavLinks className='text-[1rem] grow-0' />
                    </div>
                    <div>
                        <div className='flex flex-col gap-2 mb-10 mx-6 border-t-[1px] border-b-[1px] border-stone-200 py-5'>
                            <b className='bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text'>Redes Sociales</b>
                            <a className='font-semibold' href='https://www.instagram.com/scouting_cygd/'>
                                <InstagramIcon sx={{ marginRight: '0.5rem' }} />
                                Instagram
                            </a>
                            <a className='font-semibold' href='https://www.instagram.com/scouting_cygd/'>
                                <TwitterIcon sx={{ marginRight: '0.5rem' }} />
                                Twitter
                            </a>
                        </div>
                        <div className='flex flex-row gap-3 items-center px-6'>
                            <Link href='/'>
                                <Image
                                    src='/logo.png'
                                    width={158}
                                    height={191}
                                    alt='Logo Scouting'
                                    className=' h-[60px] w-[50px]'
                                />
                            </Link>
                            <h3>
                                <span className='text-[1.5rem] leading-tight bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text font-semibold'>Scouting</span>
                                <br></br>
                                <span>Consultoria y Gestion Deportiva</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}
