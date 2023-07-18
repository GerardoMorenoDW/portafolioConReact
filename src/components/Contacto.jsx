import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
        <form className='contact' action='mailto:gdmg507@gmail.com'>
          <input type="text" placeholder='Nombre' />
          <input type="text" placeholder='Apellido' />
          <input type="email" placeholder='Email' />
          <textarea placeholder='Motivo de contacto'></textarea>
          <input type="submit" value="Enviar"/>
        </form>
  </div>
  )
}
