import './services.css'
import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface ServiceCardProps {
    title: string,
    description: string,
    image: string,
    imageAlt: string,
    href: string
}

export default function ServiceCard({ title, description, image, imageAlt, href }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className='service-card flex flex-col justify-between gap-5 basis-1 min-w-[300px] bg-white md:min-w-[380px] border-slate-200 transition-colors duration-200 hover:bg-[#ffffff80] hover:outline outline-2 outline-white select-none rounded-md p-5 shadow-lg shadow-[#00000010]'
        >
            <div className='flex flex-col gap-5'>
                <div
                    className='flex justify-center items-center w-[80px] h-[80px] p-2 rounded-full bg-gradient-to-r from-[#13cc3b] to-[#28a5db]'
                >
                    <Image
                        src={image}
                        alt={imageAlt}
                        width={150}
                        height={150}
                    />
                </div>
                <h3 className='text-[#28a5db] text-[1.8rem] font-bold bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>{title}</h3>
                <p>{description}</p>
            </div>
            <button
                className='flex flex-row gap-2 font-semibold transition-all duration-100 hover:gap-4 text-[#28a5db]'
            >
                Leer más
                <ArrowForwardRoundedIcon />
            </button>
        </Link>
    )
}
