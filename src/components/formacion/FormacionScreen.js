import React from 'react'
import { ElementoList } from '../ElementoScreen/ElementoList'

export const FormacionScreen = () => {
    return (
        <div>
            <br/>
            <h2 className="moradotxt__main">Formación</h2>
            <hr />
            <ElementoList tipo="Formación" />
        </div>
    )
}
