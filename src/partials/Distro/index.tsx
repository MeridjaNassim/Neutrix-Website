import React, { ReactElement } from 'react'
import logo from '../../images/nucleus.png'
import linux from '../../images/Linux-Logo.png'
interface Props {

}

function Distro({ }: Props): ReactElement {
    return (
        <div id="about" className="flex relative  flex-col md:flex-row justify-center items-center mb-20">
            <div className="flex flex-col md:flex-row flex-1 justify-center">
                   
                <div className="flex flex-col justify-center items-center">

                    <img width="100px" height="100px" src={logo} alt="logo" style={{
                        animationDuration: "5s"
                    }} />

                    <h1 className="text-6xl font-semibold">NeutrixOS</h1>
                </div>
                 <img  width="300"  src={linux} alt="logo"  />
            </div>
            <div className="flex-1 p-2 m-2 text-center md:text-left">
                <h1 className="text-5xl font-semibold">About NeutrixOS</h1>
                <p className="text-2xl font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptates quibusdam animi amet impedit, repudiandae, quod distinctio excepturi porro modi a quisquam veniam asperiores accusantium recusandae nostrum, incidunt aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum quia perspiciatis distinctio ullam est corporis pariatur id nihil ea officia odit iusto, eaque dolor cum? Aperiam in aspernatur id.</p>
            </div>
        </div>
    )
}

export default Distro
