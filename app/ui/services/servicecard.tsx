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
            className='service-card flex flex-col justify-between items-start gap-3 basis-1 flex-grow bg-white min-w-[200px] md:min-w-[300px] border-slate-200 transition-all duration-200 hover:bg-[#ffffff80] select-none rounded-md p-5 active:scale-95'
        >
            <div className='flex flex-col gap-3'>
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
                <h3 className='text-[#28a5db] text-[1.5rem] md:text-[1.8rem] font-semibold bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text'>
                    {title}
                </h3>
                {/* Descripcion desactivada hasta su elaboracion. */}
                {/* <p>{description}</p> */}
            </div>
            <button
                className='flex flex-row gap-2 font-semibold transition-all duration-100 hover:gap-4 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'
            >
                Inscribirse
                <ArrowForwardRoundedIcon sx={{ color: '#13cc3b' }} />
            </button>
        </Link>
    )
}
