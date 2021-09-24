import React, { useMemo } from "react";
import queryString from "query-string";
import { ElementoCard } from "../ElementoScreen/ElementoCard";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import { getElementoByTecnologia } from "../../selectors/getElementoByTecnologia";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { Container, Col, Row } from "react-bootstrap";

export const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const elementoFiltered = useMemo(() => getElementoByTecnologia(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <Container>
      <br/>
      <h2 className="moradotxt__main">Buscador de tecnologías</h2>
      <hr />
      <div className="row">
        <div className="col-5">
          <br />
           <br/>
          <p className="moradotxt__main"> Formulario de busqueda </p>
          <hr />
          
          <form onSubmit={handleSearch}>
          
            <Row>
              <Col xs={10} md={10}>
                <SearchBox
                  placeholder="Busca la tecnología que le interese"
                  autoComplete="on"
                  value={searchText}
                  name="searchText"
                  multiple={true}
                  onChange={handleInputChange}
                  underlined={true}
                />
              </Col>
              <Col xs={2} md={2}>

                 <button className="btn btn-outline-info" type="submit">
                  Buscar
                </button>
              
              </Col>
            </Row>
            <br/>
          </form>
          <br />
           <br/>
        </div>

        <div className="Row">
           <p className="moradotxt__main"> Resultado </p>
          <hr />

          {q === "" && (
            <div className="alert alert-info moradotxt__main">
              Buscador de Experiencia o trabajo por tecnología
            </div>
          )}

          <div className="Row">
            {q !== "" && elementoFiltered.length === 0 && (
              <div className="alert alert-danger">
                No hay elementos con esa técnología{q}
              </div>
            )}

            <div className="card-columns animate__animated animate__fadeIn">
              {elementoFiltered.map((elemento) => (
                <ElementoCard key={elemento.id} {...elemento} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br /> <br />
      <br />
    </Container>
  );
};
