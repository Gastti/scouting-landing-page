import { Button } from '@/components/button/button';
import Section from '@/components/section/section';
import Image from 'next/image'
import Partners from '../partners/partners';

export default function Header() {
    return (
        <Section className='min-h-[600px] relative'>
            {/* Titulo y Descripción */}
            <div className='w-full max-w-[1200px] z-10 p-5 md:p-0 md:pt-24'>
                <div className='flex flex-col gap-5 text-white max-w-[500px]'>
                    <h1 className='text-[1.5rem] font-bold bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text'>
                        Scouting Consultoría y Gestión Deportiva
                    </h1>
                    <h2 className='text-[3rem] font-medium leading-tight'>
                        Desarrolla Tu Carrera con Nuestra Asesoría Deportiva
                    </h2>
                    <p className='text-[1rem] opacity-80'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    </p>

                    {/* Llamada a la Acción / CTA */}
                    <div className='z-10 flex flex-row gap-2'>
                        <Button variation='goto' className='text-[1.5rem] py-3 px-5'>
                            Comenzar
                        </Button>
                    </div>
                </div>
            </div>

            <Partners />

            {/* Imagen de Fondo */}
            <Image
                src='/home_bg_extra_2.png'
                alt='Fondo de la sección de inicio'
                width={1920}
                height={752}
                className='w-full h-full object-cover absolute z-0 select-none opacity-100'
            />
        </Section>
    );
}