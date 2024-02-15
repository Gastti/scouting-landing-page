import Section from '@/components/section/section'
import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';

export default function FinalHook() {
  return (
    <Section className='pb-10'>
        <div className='max-w-[1200px] flex flex-col items-center gap-5'>
            <h3 className='text-[1rem] sm:text-[3rem] text-center'>¡Si te <span className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>interesa</span> alguno de <span className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>nuestros servicios</span> no dudes en contactarnos!</h3>
            <a href='https://google.com/' className='flex flex-row justify-center items-center gap-5 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-white text-[1rem] sm:text-[1.5rem] px-5 py-2 sm:px-8 sm:py-3 rounded-xl transition-transform duration-200 hover:scale-110'>
                <ReplyIcon />
                Contactarse
                </a>
        </div>
    </Section>
  )
}
