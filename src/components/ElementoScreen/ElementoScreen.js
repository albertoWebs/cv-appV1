import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getElementoById } from "../../selectors/getElementoById";
import { Accordion } from "react-bootstrap";
export const ElementoScreen = ({ history }) => {
  const { elementoId } = useParams();

  
  const elemento = useMemo(() => getElementoById(elementoId), [elementoId]);

  if (!elemento) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  const {
    imagen,
    nombre,
    entidad,
    certificadoId,
    tecnologiasApis,
    autor,
    Descripcion,
  } = elemento;
  return (
    <div className="row mt-5 ">
      <div className="col-4">

       <img
          src={`../assets/Images/tecnologias/${imagen}.jpg`}
          alt={imagen}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
 
      <div className="col-8 animate__animated animate__fadeIn">
        <h3 className="moradotxt__main"> {nombre} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b className="moradotxt__main"> Entidad que imparte el curso: </b> {entidad}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b className="moradotxt__main"> Autor del curso: </b> {autor}{" "}
          </li>
           <br />
         <br />
          <li className="list-group-item">
            {" "}
            <b className="moradotxt__main"> Descripción: </b> {Descripcion}{" "}
          </li>
        </ul>

        <br />
 <br />
                      <br />
        <br />
         <br />
        <br />
         <br />
        <h5 className="moradotxt__main"> Tecnologías/Apis </h5>
        <p> {tecnologiasApis} </p>

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header >Certificado</Accordion.Header>
            <Accordion.Body>
              <img
                width="700px"
                src={`../assets/Images/certificados/${certificadoId}.jpg`}
                alt={certificadoId}
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
 <br />
         <br />
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
        <br />
         <br/>
      </div>
    </div>
  );
};
