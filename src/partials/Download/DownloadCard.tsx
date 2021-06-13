import classNames from 'classnames'
import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import Nuclieus from '../../components/Nuclieus'

interface Props {
   title : string,
   description : string,
   download : string,
   className : string
}

function DownloadCard({
    title,
    description,
    className,
    download
}: Props): ReactElement {
    return (
        <div className={classNames("flex flex-col relative items-center p-4 rounded-md shadow-xl bg-transparent ",className)}>
                <Nuclieus width={50} height={50}></Nuclieus>
                <h2 className="text-4xl text-center">
                    Neutrix <span className="font-thin">{title}</span>
                </h2>
                <p className="p-4 text-center">
                   {description}
                </p>
                <Button title={"GET "+title} primary></Button>
            </div>
    )
}

export default DownloadCard
