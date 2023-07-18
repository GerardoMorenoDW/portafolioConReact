import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {

  return (
    <header className='header'>
            <div className='logo'>
                <span>G</span>
                <h3>Gerardo Moreno DW</h3>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" 
                        className={({isActive}) => isActive ? "activado" : ""}
                        >Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" 
                        className={({isActive})=> isActive ? "activado" : ""}
                        >Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios"
                        className={({isActive})=> isActive ? "activado" : ""}
                        >Servicios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculum" 
                        className={({isActive})=> isActive ? "activado" : ""}
                        >Curriculum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contacto" 
                        className={({isActive})=> isActive ? "activado" : ""}
                        >Contacto</NavLink>
                    </li>
                </ul>
            </nav>
    </header>
  )
}
