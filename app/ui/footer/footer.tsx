import Section from '@/components/section/section'
import Image from 'next/image'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const socials = [
    { name: 'Instagram', icon: <InstagramIcon sx={{ fontSize: '2.5rem', color: '#13cc3b' }} />, href: 'https://instagram.com/' },
    { name: 'X', icon: <XIcon sx={{ fontSize: '2.5rem', color: '#13cc3b' }} />, href: 'https://x.com/' },
    { name: 'Facebook', icon: <FacebookIcon sx={{ fontSize: '2.5rem', color: '#13cc3b' }} />, href: 'https://facebook.com/' }
]

export default function Footer() {
    return (
        <Section className='mt-10 py-10 bg-[#f2f2f2]'>
            <div className='flex flex-row justify-between w-full max-w-[1200px] flex-wrap gap-10'>
                <div className='flex flex-row gap-3 items-center'>
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
                <div className='flex flex-col gap-2'>
                    <ul className='list-none'>
                        <li>contacto@scouting.com</li>
                        <li>+54 2974 000000</li>
                        <li>Dirección si se desea</li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        {socials.map(social => {
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target='_blank'
                                    className='text-white flex items-center justify-center transition-all duration-200 hover:scale-125'
                                >
                                    {social.icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}
