import React from 'react'
import { FormLogin } from '../components/Form'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className='col-lg-4 mt-5'>
        <div className='card'>
        <FormLogin/>
        <Link to="/password" className='ms-3'>Olvide mi contraseña</Link>
    </div>
    </div>
  )
}

export default Login