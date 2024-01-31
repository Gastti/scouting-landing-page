
import Link from 'next/link';

const links = [
    { name: 'Inicio', href: '/' },
    { name: 'Consultoria', href: '/consultoria' },
    { name: 'Cursos', href: '/cursos' },
    { name: 'Pasantías y Giras', href: '/pasantias-y-giras' },
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
                        className='flex px-6 py-2 grow items-center justify-center rounded-full font-medium hover:bg-opacity-5 hover:bg-black '
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}
