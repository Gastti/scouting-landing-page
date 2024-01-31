import { Button } from '@/components/button/button';
import Image from 'next/image'

export default function Header() {
    return (
        <div className='flex flex-col gap-12 w-full min-h-[600px] overflow-hidden relative'>

            {/* Titulo y Descripción */}
            <div className='w-full max-w-[1000px] mx-auto z-10 p-5 mt-28'>
                <div className='flex flex-col gap-5 text-white max-w-[500px]'>
                    <h1 className='text-[1.5rem] font-medium'>
                        Consultoría y Gestión Deportiva
                    </h1>
                    <h2 className='text-[3rem] font-medium leading-tight'>
                        Desarrolla Tu Carrera con Nuestra Asesoría Deportiva
                    </h2>
                    <p className='text-[1rem] opacity-80'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    </p>

                    {/* Llamada a la Acción / CTA */}
                    <div className='z-10 flex flex-row gap-2'>
                        <Button variation='goto' className='text-[1.5rem]'>
                            Comenzar
                        </Button>
                    </div>
                </div>
            </div>

            {/* Imagen de Fondo */}
            <Image
                src='/home_bg_extra.png'
                alt='Fondo de la sección de inicio'
                width={1920}
                height={752}
                className='w-full h-full object-cover absolute z-0 select-none opacity-100'
            />
        </div>
    );
}