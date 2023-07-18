import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
      <h1 className='heading servicios-titulo'>Servicios</h1>
        <section className='services'>
          <article className='service'>
            <div className='contenedor-imagen'>
              <img src="/images/web.png" alt="logo de desarrollo web" />
            </div>
            <h2>Desarrollo de sitios web</h2>
            <p>Crear sitios web desde cero</p>
          </article>

          <article className='service'>
            <div className='contenedor-imagen'>
              <img src="/images/responsive.png" alt="logo responsivo" />
            </div>
            <h2>Diseño responsivo</h2>
            <p>Sitios web compatibles con diferentes dispositivos y tamaños de pantalla</p>
          </article>

          <article className='service'>
            <div className='contenedor-imagen'>
              <img src="/images/colab.png" alt="logo de Colaboracion en proyectos" />
            </div>
            <h2>Colaboración en proyectos</h2>
            <p>Colaborando en proyectos más grandes y complejos</p>
          </article>

          <article className='service'>
            <div className='contenedor-imagen'>
              <img src="/images/api.png" alt="logo de APIS" />
            </div>
            <h2>Integración de APIs</h2>
            <p>Integrar APIs de terceros en sus sitios web.</p>
          </article>

        </section>
    </div>
  )
}
