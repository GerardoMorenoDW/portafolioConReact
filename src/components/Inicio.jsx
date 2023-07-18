import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home page'>

        <h1>
          ¡Hola! Mi nombre es <strong>Gerardo Moreno</strong>, apasionado del desarrollo web por la creación de sitios web <strong>interactivos</strong>  y funcionales.
        </h1>

        <h2>Si tienes alguna pregunta o te gustaría conocer más sobre mi trabajo. </h2>
        <Link to="/contacto" className='boton-inicio'>Contacta conmigo.</Link>

        <section className='last-works'>
          <h2 className='heading'>Algunos de mis proyectos</h2>
          <p>Aqui les presento algunos de mis trabajos de desarrollo web</p>

          <ListadoTrabajos limite="2" />

        </section>

    </div>
  )
}
