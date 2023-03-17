import React from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate();
  const { state } = useLocation();
  console.log(state);
  const handleLogout=(e)=>{
    e.preventDefault();
    navigate('/',{
        replace: true 
    })
  }

  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {state?.logged ? (
            <div className="">
              <span className="me-2">Bienvenido {state?.username}</span>
              <button className="btn btn-secondary" onClick={handleLogout}>Cerrar Sesion</button>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/login">
                    Iniciar Sesion
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/register">
                    Registrar
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
