import Image from 'next/image'
import React from 'react'

interface InstagramPostProps {
    imageWidth: number,
    imageHeight: number,
    imageUrl: string,
    code: string
}

export default function InstagramPost({ imageWidth, imageHeight, imageUrl, code }: InstagramPostProps) {
    return (
        <a
            href={`https://instagram.com/p/${code}`}
            className='aspect-square border-[1px] overflow-hidden'
            target='_blank'
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
                alt='Imagen de post de Instagram'
                src={`/${imageUrl}`}
                width={imageWidth}
                height={imageHeight}
                className='object-cover h-full'
            />
        </a>
    )
}
