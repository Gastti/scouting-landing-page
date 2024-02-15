import GroupsIcon from '@mui/icons-material/Groups';

export default function WorkWithUsButton() {
    return (
        <a
            href='https://docs.google.com/forms/u/0/'
            target='_blank'
            className='bg-gradient-to-r from-[#28a5db] to-[#13cc3b] px-6 py-4 text-[1rem] text-white flex flex-row items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 max-w-[200px]'
        >
            Colaborar
            <GroupsIcon sx={{ marginLeft: '20px' }} />
        </a>
    )
}
