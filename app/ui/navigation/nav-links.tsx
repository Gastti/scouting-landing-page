
import Link from 'next/link';

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Consultoria', href: '/consultoria' },
    { name: 'Curso de Capacitación', href: '/capacitacion' },
    { name: 'Pasantías y Giras Deportivas', href: '/pasantias-y-giras' },
    { name: 'Asesoramiento', href: '/asesoramiento' }
];

export default function NavLinks() {
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='flex h-[80px] grow items-center justify-center font-medium transition duration-300'
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}
