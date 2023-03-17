import React from "react";
import { useNavigate } from "react-router-dom";
import helpHttp from "../helper/helpHttp";
import useForm from "../hook/useForm";



export const FormLogin = () => {
  const navigate=useNavigate();
  const { username, password, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });
  const handleSubmit=(e)=>{
    e.preventDefault();
    //consumir api para buscar usuario
    let peticion=helpHttp();
    let url="http://localhost:5000/users"
    //fetch(url).then(response=>response.json()).then(data=>console.log(data))
    console.log(peticion.get(url))
    

    alert('comprobando usuario.')
    //redirecciono
    /*navigate('/dashboard',{
      replace:true,
      state:{
        logged:true,//para saber si esta logeado o no
        username,
        password
      }
    })*/
    handleReset()
    
  }
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <h3>Iniciar sesion</h3>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Usuario"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <input type="submit" value="Login" className="btn btn-primary" />
      </div>
    </form>
  );
};

export const FormRegister = () => {
  const navigate=useNavigate();
  const {name,lastname, username,email,password,password1,handleChange,handleReset}=useForm({
    name:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    password1:""

  })
  const handleSubmit=(e)=>{
    e.preventDefault();

    //consumir api para crear usuario post
    navigate('/login',{
      replace:true,
      state:{
        name,
        lastname,
        username,
        email,
        password
      }
    })
    handleReset()
    
  }
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <h3>Registrar</h3>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="lastname" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          name="lastname"
          id="apellido"
          placeholder="Apellido"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="username" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Usuario"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="email" className="form-label">
          Correo
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password1" className="form-label">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          name="password1"
          id="password1"
          placeholder="Confirmar Contraseña"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <input type="submit" value="Login" className="btn btn-primary" />
      </div>
    </form>
  );
};

export const FormPassword = () => {
  const navigate=useNavigate();
  const {email,password,password1,handleChange,handleReset}=useForm({
    email:"",
    password:"",
    password1:""
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/login',{
      replace:true,
      state:{
        email,
        password
      }
    })
  handleReset()
  }
  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-group mt-2">
        <label htmlFor="email" className="form-label">
          Correo
        </label>
        <input
          type="password"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password" className="form-label">
          Nueva Contraseña
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Nueva Contraseña"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password1" className="form-label">
          Confirmar Contraseña
        </label>
        <input
          type="password"
          name="password1"
          id="password1"
          placeholder="Confirmar Contraseña"
          className="form-control"
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <input type="submit" value="Login" className="btn btn-primary" />
      </div>
    </form>
  );
};
