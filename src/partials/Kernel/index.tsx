import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import Nuclieus from '../../components/Nuclieus'
import logo from '../../images/nucleus.png'
import { download } from '../../utils/funcs'
interface Props {

}
export default function Kernel({ }: Props): ReactElement {
  return (
    <div className="flex relative  flex-col justify-center items-center mb-20">
      <div className="absolute opacity-30 animate-spin" style={{
        top : 0,
        right : -50,
        animationDuration : "20s"
      }}>
        <Nuclieus width={300} height={300}></Nuclieus>
      </div>
      
      <div className="flex flex-row justify-center items-center">

        <img width="100px" className="mr-4" height="100px" src={logo} alt="logo" style={{
          animationDuration: "5s"
        }} />

        <h1 className="text-7xl font-semibold">Neutrix Kernel</h1>
      </div>
      <p className="text-2xl font-thin">One of the best optimized kernels on the market, check stats</p>
      <div>
        <div className="flex text-center">
          <div className="p-4">
            <p className="text-7xl font-semibold">1.63<span className="text-3xl font-normal">s</span></p>
            <span className="text-2xl font-light"> boot time</span>
          </div>
          <div className="p-4">
            <p className="text-7xl font-semibold">7.92<span className="text-3xl font-normal">MB</span></p>
            <span className="text-2xl font-light">.deb package</span>
          </div>
          <div className="p-4">
            <p className="text-7xl font-semibold">40<span className="text-3xl font-normal">MB</span></p>
            <span className="text-2xl font-light">RAM on boot</span>
          </div>

        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <h3 className="text-4xl mb-5">Get Neutrix Kernel NOW</h3>
        <div>
          <Button className="mr-4" title="amd64 kernel" onClick={()=>{
            download("https://github.com/akram09/NeutrixOs/releases/download/1.0/linux-image-4.19.181-neutrix_4.19.181-neutrix-2_amd64.deb")
          }} primary></Button>
          <Button title="i386 kernel" onClick={()=>{
            download("https://github.com/akram09/NeutrixOs/releases/download/1.0/linux-image-4.19.181-neutrix32_4.19.181-neutrix32-1_i386.deb")
          }} primary></Button>
        </div>

      </div>
    </div>
  )
}
