
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinksProps {
    isFixed?: boolean;
    isHome?: boolean;
    className?: string;
}

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Consultoria', href: '/consultoria' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Pasantías y Giras', href: '/pasantias-y-giras' },
    { name: 'Asesoramiento', href: '/asesoramiento' }
];

export default function NavLinks({isFixed, isHome, className}: NavLinksProps) {
    const pathname = usePathname()

    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={
                            `flex px-6 py-2 grow items-center justify-center rounded-full hover:bg-gradient-to-r from-[#13cc3b] to-[#28a5db] hover:text-transparent bg-clip-text
                            ${isFixed && pathname !== link.href || !isHome && pathname!== link.href ? 'text-black' : !isFixed && pathname !== link.href ? 'text-white' : ''} ${pathname === link.href ? 'bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent font-bold' : null} ${className}`
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}
