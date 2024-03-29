import Section from '@/components/section/section'
import Image from 'next/image'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';

const socials = [
    { name: 'Instagram', icon: <InstagramIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />, href: 'https://www.instagram.com/scouting_cygd' },
    { name: 'X', icon: <TwitterIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />, href: 'https://x.com/scouting_cygd' },
    // { name: 'Facebook', icon: <FacebookIcon sx={{ fontSize: '2.5rem', color: '#13cc3b' }} />, href: 'https://facebook.com/' }
]

export default function Footer() {
    return (
        <Section className='mt-10 py-10 bg-[#f2f2f2]'>
            <div className='flex flex-row justify-between w-full max-w-[1200px] flex-wrap gap-10'>
                <div className='flex flex-row gap-3 items-center select-none'>
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
                                    className='flex items-center justify-center transition-all duration-100 hover:scale-110 p-1 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] rounded-lg'
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
