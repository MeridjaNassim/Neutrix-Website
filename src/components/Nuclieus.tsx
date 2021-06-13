import React, { ReactElement } from 'react'
import logo from '../images/nucleus.png'
interface Props {
    width : number,
    height: number
}

function Nuclieus({width,height}: Props): ReactElement {
    return (
        <img src={logo} width={width} height={height} alt="nuclieus">
            
        </img>
    )
}

export default Nuclieus
