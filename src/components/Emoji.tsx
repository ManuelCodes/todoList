import React from 'react';

interface IEmoji {
    label?: string;
    //className?: string;
    children: React.ReactNode;
}

const Emoji: React.FC<IEmoji> = (props) => {
    return (
        <span
            
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
            {props.children}
        </span>
    )
}

export default Emoji;