import Section from '@/components/section/section'
import SectionTitle from '@/components/sectiontitle/sectiontitle'
import Image from 'next/image'
import React from 'react'

export default function WhoWeAre() {
    return (
        <Section className='relative overflow-hidden justify-center min-h-[500px]'>
            <div className='flex w-full flex-row items-center justify-between max-w-[1000px] px-5 pb-5 z-10 '>
                <div>
                    <div className='flex'>
                        <SectionTitle
                            title='Quienes Somos'
                            subtitle='Conoce más acerca de'
                            className='mb-5 text-[#fff]'
                        />
                    </div>
                    <p className='max-w-[600px] text-[#fff]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim. Tempor commodo ullamcorper a lacus. Id interdum velit laoreet id donec. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Eget aliquet nibh praesent tristique magna sit amet. Mollis nunc sed id semper risus in hendrerit gravida rutrum.
                    </p>
                </div>
                {/* <Image
                    src='/logo_hd.png'
                    width={247}
                    height={300}
                    alt='Logo Scouting'
                /> */}
            </div>
            <Image
                src='/whoweare_bg.png'
                alt='Fondo de la sección de quienes somos'
                width={1920}
                height={800}
                className='w-full h-full object-cover absolute z-0 select-none opacity-100'
            />
        </Section>
    )
}
