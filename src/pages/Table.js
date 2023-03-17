import React from 'react'

const Table = () => {
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Usuario</th>
      <th scope="col">Correo</th>
      <th scope="col">Telefono</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Eric</td>
      <td>Herrera</td>
      <td>ehalfonso</td>
      <td>ehalfonso@gmail.com</td>
      <td>12345678</td>
      <button className='btn btn-warning '>Editar</button>
      <button className='btn btn-danger ms-1'>Eliminar</button>
    </tr>
   
  </tbody>
</table>
  )
}

export default Table