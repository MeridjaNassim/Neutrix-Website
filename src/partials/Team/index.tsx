import React, { ReactElement } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPeopleCarry} from '@fortawesome/free-solid-svg-icons'
import Nuclieus from '../../components/Nuclieus'
import Button from '../../components/Button'
import Member from './Member'
import nassim from '../../images/nassim.jpg'
import akram from '../../images/akram.jpg'
import moh from '../../images/moh.jpg'
import abdou from '../../images/abdou.jpg'
import anis from '../../images/anis.jpg'
// import DownloadCard from './DownloadCard'
interface Props {
    
}

function Team({}: Props): ReactElement {
    return (
        <div className="flex relative  flex-col justify-center items-center mb-20 z-0">
            <div className="absolute animate-spin opacity-30" style={{
                left: -20   ,
                bottom : 0,
                zIndex : -1,
                animationDuration : "10s"
            }}>
            <Nuclieus width={300} height={300}></Nuclieus>
            </div>
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-semibold">Neutrix Team</h1>
          <FontAwesomeIcon className="ml-4" icon={faPeopleCarry} size="4x"/>
        </div>
        <p className="text-2xl mt-10 font-thin text-center p-2">Designed and built as an academic project by a team of future computer scientists from Higher School of Computer Science Algiers</p>
        <div className="flex flex-col md:flex-row mt-4 items-center justify-center " >
          
           <Member title="Meridja Nassim" image={nassim} description="4th year student at ESI" role="Neutrix Kernel"></Member>
           <Member title="Boutouchent Akram" image={akram} description="4th year student at ESI" role="Neutrix ETA"></Member>
           <Member title="Habi Mohamed" image={moh} description="4th year student at ESI" role="Neutrix ZETA"></Member>
           <Member title="Tlili Abderahmen" image={abdou} description="4th year student at ESI" role="Neutrix GAMMA"></Member>
           <Member title="Chebah Anis" image={anis} description="4th year student at ESI" role="Neutrix Server"></Member>

        </div>
       
      </div>
    )
}

export default Team
