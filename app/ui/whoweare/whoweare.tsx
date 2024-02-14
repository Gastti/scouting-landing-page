import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import Image from 'next/image'
import React from 'react'

export default function WhoWeAre() {
    return (
        <Section className='relative overflow-hidden justify-center min-h-[500px]'>
            <div className='flex w-full md:flex-row items-center md:justify-center gap-5 max-w-[1200px] py-20 sm:py-5 z-10 flex-col-reverse justify-center'>
                <div className='flex-grow'>
                    <div className='flex'>
                        <SectionTitle
                            title='Quienes Somos'
                            subtitle='Conoce más acerca de'
                            className='mb-5 mx-auto md:mx-0'
                        />
                    </div>
                    <p className='max-w-[600px] text-center md:text-start'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
                    </p>
                </div>
                <div className='flex-grow max-w-[300px] md:max-w-[400px]'>
                    <Image
                        src='/whoweare_logo.png'
                        width={813}
                        height={372}
                        alt='Logo Scouting'
                        className='flex-grow'
                    />
                </div>
            </div>
            <Image
                src='/whoweare_bg.png'
                alt='Fondo de la sección de quienes somos'
                width={1920}
                height={800}
                className='w-full h-full object-cover absolute z-0 select-none opacity-20'
            />
        </Section>
    )
}
