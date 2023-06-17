import React from 'react'

const Button = ({ className, children, type, bgColor, onClick, width }) => {
    return (
        <button onClick={onClick} type={type} className={` ${width} ${className} px-4 py-3 rounded-full transition-all duration-300 ${bgColor ? bgColor : 'bg-primary'} `}>
            {children}
        </button>
    )
}

export default Button