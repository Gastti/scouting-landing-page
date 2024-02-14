import Link from 'next/link';
import './button.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

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
            className={`btn ${variation} ${className} text-[1rem] md:text-[1.5rem]`}
        >
            <>
                {children}
                {variation === 'goto' ? <ArrowForwardRoundedIcon sx={{fontSize: '1.7rem'}} /> : null}
            </>
        </Link>
    );
}