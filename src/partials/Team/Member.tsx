import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import Nuclieus from '../../components/Nuclieus'

interface Props {
    image: string,
    title: string,
    description: string,
    role: string,
    className: string
}

function Member({
    image,
    title,
    description,
    role,
    className,
}: Props): ReactElement {
    return (
        <div className={classNames("flex flex-col relative items-center p-4 rounded-md shadow-xl bg-transparent ", className)}>
            <div className="absolute opacity-30" style={{
                top : 5,
                right : 5
            }}>
                <Nuclieus width={50} height={50}>

                </Nuclieus>
            </div>
            <img
                src={image}
                width="150px"
                height="100px"

                className="rounded-full object-cover"
                alt="title"
                style={{ marginBottom: `1.45rem` }}
            />
            
            <h2 className="text-2xl font-semibold">
               {title}
            </h2>
            <p className="p-4 text-center font-thin">
                {description}
            </p>
            <p className="px-4 font-normal text-
            xl text-center opacity-75">
                {role}
            </p>
        </div>
    )
}

export default Member
