import React, { useEffect, useState } from 'react'
import { trabajos } from '../data/trabajos';
import { useParams } from 'react-router-dom';

export const Proyecto = () => {
    
    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    useEffect(() => {
    
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);

    }, [])


  return (
    <div className='page pagina-proyecto'>
      <h1 className='heading'>{proyecto.nombre}</h1>
        <div className='imagen-proyecto'>
            <img src={"/images/"+proyecto.id+".png"} alt="proyecto" />
        </div>
        <h3>Tecnologias utilizadas: {proyecto.tecnologias}</h3>
        <p>{proyecto.descripcion}</p>

        <a href={proyecto.url} target='_blank'>Ir al proyecto</a>
            
    </div>

  )
}
