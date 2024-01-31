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
        <div className='flex flex-col justify-between gap-5 max-w-[300px] border-slate-200 border-[1px] rounded-md p-5'>
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
            <Link
                href={href}
                className='flex flex-row gap-2 font-bold transition-all duration-100 hover:gap-4'
            >
                Leer más
                <ArrowForwardRoundedIcon />
            </Link>
        </div>
    )
}
