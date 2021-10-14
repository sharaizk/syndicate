import React from 'react'
import {CardComponent,CardTitle} from './ServicesElements'
import './services.scss'
const Card = ({Icon,title}) => {
    return (
        <CardComponent>
            <Icon className="serviceicon"/>
            <CardTitle>{title}</CardTitle>
        </CardComponent>
    )
}

export default Card
