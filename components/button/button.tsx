import Link from 'next/link';
import './button.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ButtonProps {
    children: React.ReactNode;
    variation?: string;
    className?: string;
    href?: string;
}

export function Button({ children, variation, className, href = '/' }: ButtonProps) {

    return (
        <Link
            href={href}
            className={`btn ${variation} ${className} text-[1rem] md:text-[1.2rem]`}
        >
            <>
                {variation === 'backto' ? <ArrowBackIcon /> : null}
                {children}
                {variation === 'goto' ? <ArrowForwardRoundedIcon sx={{ fontSize: '1.7rem' }} /> : null}
            </>
        </Link>
    );
}