'use client'
import Section from '@/components/section/section';
import Image from 'next/image'
import Partners from '../partners/partners';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useRef } from 'react';
import Services from '../services/services';

export default function Header() {
    const componentRef = useRef<HTMLDivElement>(null);
    const handleCTAClick = () => {
        if (componentRef.current) {
            const offsetTop = componentRef.current.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth' // Esto hará que el scroll sea suave
            });
        }
    }
    return (
        <div className='w-full'>
            <Section className='min-h-[600px] relative'>
                {/* Titulo y Descripción */}
                <div className='w-full max-w-[1200px] z-10 md:p-0 md:pt-24 pt-32'>
                    <div className='flex flex-col gap-5 text-white max-w-[500px]'>
                        <h1 className='text-[1.5rem] font-bold bg-gradient-to-r from-[#13cc3b] to-[#28a5db] text-transparent bg-clip-text'>
                            Scouting Consultoría y Gestión Deportiva
                        </h1>
                        <h2 className='text-[2rem] sm:text-[3rem] font-medium leading-tight'>
                            Desarrolla Tu Carrera con Nuestra Asesoría Deportiva
                        </h2>
                        <p className='text-[1rem] opacity-80'>
                            Transforma tu pasión en logros tangibles. <br />
                        </p>

                        {/* Llamada a la Acción / CTA */}
                        <div className='z-10 flex flex-row gap-2'>
                            <button
                                onClick={handleCTAClick}
                                className='flex flex-row gap-5 bg-gradient-to-r cta-button from-[#13cc3b] to-[#28a5db] px-10 py-4 rounded-lg text-[1rem] md:text-[1.2rem] transition-all duration-200 hover:gap-6 active:scale-95'
                            >
                                Servicios
                                <ArrowDownwardIcon sx={{ fontSize: '1.7rem' }} />
                            </button>
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

            <Services ref={componentRef} />
        </div>
    );
}