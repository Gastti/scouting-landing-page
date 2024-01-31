import './button.css'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variation?: string;
}

export function Button({ children, variation, ...rest }: ButtonProps) {
    const { className } = rest;
    return (
        <button
            {...rest}
            className={`btn ${variation} ${className}`}
        >
            {children}
            {variation === 'goto' ? <ArrowForwardRoundedIcon /> : null}
        </button>
    );
}