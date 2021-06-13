import React, { ReactElement } from 'react'
import classnames from 'classnames'
interface Props {
    title : string,
    onClick : () => void
    primary : boolean ,
    className : string
}

function Button({title,className,onClick,primary}: Props): ReactElement {
    return (
        <button className={classnames("px-4 py-2 rounded-sm shadow-md transition-all duration-75 ease-in",{
            "bg-black text-white hover:bg-transparent hover:text-black outline-none" : primary,
            "bg-white text-black" : !primary,
            
        },className)} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
