import { navigate } from 'gatsby'
import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import logo from '../../images/nucleus.png'
interface Props {
    
}

export default function Landing({}: Props): ReactElement {
    return (
        <div className="flex h-screen  flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img width="100px" height="100px" src={logo} alt="logo" className="animate-spin" style={{
              animationDuration : "5s"
          }} />
          <h1 className="text-8xl font-semibold">NeutrixOS</h1>
        </div>
        <div className="mt-11">
          <p className="text-md sm:text-3xl font-thin ">The minimal educative linux distribution for the modern era</p>
          <div className="flex justify-center items-center mt-4">
            <Button title="Download Neutrix" onClick={()=>{
                navigate("#download")
            }} primary/>
            <Button className="ml-4" title="Learn more" onClick={()=>{
                navigate("#about")
            }}/>
            
          </div>
        </div>
      </div>
    )
}
