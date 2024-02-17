import AddIcon from '@mui/icons-material/Add';

export default function RegisterButton() {
    return (
        <a
            href='https://docs.google.com/forms/u/0/'
            target='_blank'
            className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] px-6 py-4 text-[1rem] text-white flex flex-row items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 max-w-[200px] active:scale-95'
        >
            Inscribirse
            <AddIcon sx={{ marginLeft: '20px' }} />
        </a>
    )
}
