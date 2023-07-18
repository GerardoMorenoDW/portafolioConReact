import React from 'react';
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = (limite) => {
  return (
      <div className='proyectos'>
        {
          trabajos.map(trabajo => {
            return(
              <article className='proyecto' key={trabajo.id}>
                <div className='proyecto-imagen'>
                  <Link to={"/proyecto/"+trabajo.id}><img src={"/images/"+trabajo.id+".png"} alt="proyecto" /></Link>
                </div>
                <span>{trabajo.categorias}</span>
                <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            );
          })
        }
      </div>

  )
}