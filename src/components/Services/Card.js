import React from 'react'
import {CardComponent,CardTitle, CardDescription,CardTitleIconContainer} from './ServicesElements'
import './services.scss'
const Card = ({Icon,title,description}) => {
    return (
        <CardComponent >
            <CardTitleIconContainer>
            <Icon className="serviceicon"/>
            <CardTitle>{title}</CardTitle>
            </CardTitleIconContainer>
            <CardDescription>{description}</CardDescription>
        </CardComponent>
    )
}

export default Card
