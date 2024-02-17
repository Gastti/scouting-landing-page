import { Button } from '@/components/button/button'
import Section from '@/components/section/section'
import Image from 'next/image'
import React from 'react'

export default function Custom404() {
    return (
        <Section>
            <div className='w-full max-w-[1200px] flex flex-row justify-start items-start gap-5'>
                <div className='flex flex-col items-start gap-5'>
                    <div className='flex flex-row items-center justify-start gap-5'>
                        <h2 className='text-[1.5rem] sm:text-[3rem] font-semibold leading-tight bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text'>404<br></br>Pagina no encontrada</h2>
                    </div>
                    <p>Lo sentimos, la página que estás buscando no existe o fue eliminada.</p>
                    <Button variation='backto' href='/'>Volver al Inicio</Button>
                </div>
            </div>
        </Section>
    )
}
