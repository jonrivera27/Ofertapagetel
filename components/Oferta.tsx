import React, { FC, ReactNode } from 'react'

interface Props {
    children?: ReactNode,
    md: number,
    title: string,
}
export const Oferta: FC<Props> = ({ md, title ,  }) => {
  return (
    <div className={`col-md-${md}`} style={{ backgroundColor: 'white', border: '1px solid #111'}} >
        <img src="./logo.png" alt="imagen-oferta"/>
        <p>
            <b>{title}</b>
        </p>
        <p>
            Descripción de la oferta [{md}] 
        </p>

        <a className="btn btn-red" href="#" role="button">IR A LA OFERTA</a>
    </div>
  )
}
