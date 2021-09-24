import React from "react";
import { Container, Col, Image, Row } from "react-bootstrap";
export const InicialScreen = () => {
  return (
    <Container>
      <br />
      <br />
      <Row>
        <Col xs={1} md={3}>
          <Image src="./assets/Images/perfil.jpg" roundedCircle />
        </Col>
      
      </Row>
      <br></br>
      <h2 className="moradotxt__main">
        Bienvenidos/as a la versión web de mi cv.{" "}
      </h2>
      <br />
      <p>
        En la web encontrarás mis <strong>experiencias</strong> y mis{" "}
        <strong>formaciones</strong> de una manera fácil y dinámica.
      </p>
      <p>
        Para ello cree el <strong>buscador de tecnologías</strong>, con dicho
        buscador puedes encontrar la <strong>información</strong> de mi{" "}
        <strong>carrera profesional por tecnología</strong>, de tal manera que
        se puede filtrar por las competencias que interesen.
      </p>
      <p>
        También se puede <strong>acceder</strong> a toda la formación y a todos
        los proyectos en los que participé en mi carrera, accediendo a las{" "}
        <strong>pestañas</strong> de <strong>Formación</strong> o{" "}
        <strong>Experiencias</strong>.
      </p>
      <p>
        La información la muestro en tarjetas con un <strong>link</strong> al{" "}
        <strong>detalle</strong> para darle dinamismo a la{" "}
        <strong>experiencia</strong> de <strong>navegación</strong>.
      </p>
      <p>
        La web está realizada con <strong>React</strong> y{" "}
        <strong>Bootstrap</strong> en la parte del <strong>FrontEnd</strong>.
        Respetando el apartado <strong>responsive</strong>.
      </p>

      <p>
        Por ultimo en el footer podemos encontrar diferentes links a sitios webs
        relacionados con la programación, contactar conmigo o ver la versión en
        PDF de mi cv.
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
};
