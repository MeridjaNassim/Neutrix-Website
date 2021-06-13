import React, { ReactElement } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDownload} from '@fortawesome/free-solid-svg-icons'
import Nuclieus from '../../components/Nuclieus'
import Button from '../../components/Button'
import DownloadCard from './DownloadCard'
interface Props {
    
}

function Download({}: Props): ReactElement {
    return (
        <div id="download" className="flex relative  flex-col justify-center items-center mb-20">
            <div className="absolute top-0 animate-spin opacity-30" style={{
                left: -50,
                animationDuration : "10s"
            }}>
            <Nuclieus width={200} height={200}></Nuclieus>
            </div>
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-semibold">Download</h1>
          <FontAwesomeIcon className="ml-4" icon={faDownload} size="4x"/>
        </div>
        <p className="text-2xl mt-10 font-thin text-center p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis voluptates quibusdam animi amet impedit, repudiandae, quod distinctio excepturi porro modi a quisquam veniam asperiores accusantium recusandae nostrum, incidunt aspernatur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum quia perspiciatis distinctio ullam est corporis pariatur id nihil ea officia odit iusto, eaque dolor cum? Aperiam in aspernatur id.</p>
        <div className="flex flex-col xl:flex-row mt-4 items-center justify-center">
          
            <DownloadCard
                title="ETA"
                className="xl:w-1/6 m-4"
                description="the very lightweight distribution designed for very limited hardware. based on XFCE"
                download="#"
            />
            <DownloadCard
                title="ZETA"
                className="xl:w-1/6 m-4"
                description="the distribution that balances between performance and a user friendly environnement. based on LXQT"
                download="#"
            />

            <DownloadCard
                title="GAMMA"
                className="xl:w-1/6 m-4"
                description="The distribution that pushes your hardware to the limit providing you with the best user experience. based on GNOME"
                download="#"
            />

        </div>
       
      </div>
    )
}

export default Download
