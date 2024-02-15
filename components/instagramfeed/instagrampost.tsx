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
            className='aspect-square border-[1px]'
            target='_blank'
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                alt='Imagen de post de Instagram'
                src={imageUrl}
            />
        </a>
    )
}
