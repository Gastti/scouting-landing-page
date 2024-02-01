import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface RatingStarsProps {
    filled: number;
    total: number;
    className?: string;
}

export default function RatingStars({ filled, total, className }: RatingStarsProps) {

    const Star = ({ isFilled }: { isFilled: boolean }) => {
        return (
            <span>
                {isFilled ? <StarIcon /> : <StarBorderIcon />}
            </span>
        );
    };

    const rating = Array.from({ length: total }, (_, index) => (
        <Star key={index} isFilled={index < filled} />
    ));

    return (
        <div className={className}>
            {rating}
        </div>
    )
}
