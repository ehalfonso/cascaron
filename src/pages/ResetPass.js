import React from "react";
import { FormPassword } from "../components/Form";

const ResetPass = () => {
  return (
    <div className="col-lg-4 mt-5">
    <h2>Cambiar Contraseña</h2>
      <div className="card">
        <FormPassword />
      </div>
    </div>
  );
};
export default ResetPass;
