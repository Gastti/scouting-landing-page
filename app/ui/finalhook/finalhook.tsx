import Section from '@/components/section/section'
import React from 'react'
import ReplyIcon from '@mui/icons-material/Reply';

export default function FinalHook() {
  return (
    <Section className='pb-10'>
      <div className='max-w-[1200px] flex flex-col items-center gap-5'>
        <h3 className='text-[1rem] sm:text-[1.5rem] text-center font-bold'>¡Si te <span className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>interesa</span> alguno de <span className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-transparent bg-clip-text'>nuestros servicios</span> no dudes en contactarnos!</h3>
        <a href='https://google.com/' className='text-[1rem] sm:text-[1.3rem] flex flex-row justify-center items-center gap-5 bg-gradient-to-r from-[#28a5db] to-[#13cc3b] text-white px-8 py-4 sm:px-8 sm:py-3 rounded-xl transition-all duration-200 hover:gap-8 active:scale-95'>
          <ReplyIcon />
          Contactarse
        </a>
      </div>
    </Section>
  )
}
