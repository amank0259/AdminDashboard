import React from 'react';

function Button({ text, className }) {
    return (
        <>
            <button className={`min-w-10 h-10 w-10 hover:bg-blue-100 active:bg-blue-200 active:duration-100 rounded-full flex items-center justify-center self-center ${className}`}>
                {text}
            </button>
        </>
    );
}

export default Button;