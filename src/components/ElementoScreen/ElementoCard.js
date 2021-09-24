import React from "react";
import { Link } from "react-router-dom";
export const ElementoCard = ({ id, nombre, imagen, tipo, tecnologiasApis }) => {
  return (
    <div
      className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg  ms-3 animate__animated animate__fadeIn"
      style={{ maxWidth: 600 }}
    >
      <div className="row no-gutters">
        <div className="col-md-5">
          <img
            src={`./assets/Images/tecnologias/${imagen}.jpg`}
            className="card-img"
            alt={imagen}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <p className="moradotxt__main"> {nombre} </p>
            <p className="moradotxt__main"> Tipo: {tipo}</p>

            <p className="card-text">
              <small className="text-muted">
                {" "}
                Tecnologías: {tecnologiasApis}{" "}
              </small>
            </p>

            <Link  className="titulo" to={`./elemento/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
