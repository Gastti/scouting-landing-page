import Image from 'next/image'
import Link from 'next/link'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RatingStars from '@/components/ratingstars/ratingstars';

interface TestimonyCardProps {
    name: string,
    occupation: string,
    review: string,
    image: string,
    imageAlt: string,
    rating: number,
    className: string
}

export default function TestimonyCard({ name, occupation, review, image, imageAlt, rating, className }: TestimonyCardProps) {
    return (
        <div className={`${className} flex-col justify-between items-center gap-3 max-w-[400px] border-slate-200 border-[1px] rounded-md p-3 bg-white h-[270px]`}>
            <div className='flex items-center justify-center h-full'>
                <p className='italic text-center'>{review}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-3'>
                <RatingStars filled={rating} total={5} className='mx-auto' />
                <div className='flex flex-row gap-3 items-center border-t-[#dfdfdf] border-t-[1px] pt-3'>
                    <div
                        className='flex justify-center items-center w-[60px] h-[60px] overflow-hidden rounded-full bg-transparent'
                    >
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={150}
                            height={150}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div>
                        <h3 className='text-[#000000] text-[1rem] font-semibold uppercase'>{name}</h3>
                        <h3 className='text-[#989898]'>{occupation}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
