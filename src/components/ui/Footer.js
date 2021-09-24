import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Acerca de</Heading>
            <FooterLink target="_blank" href="https://drive.google.com/file/d/1sVH3o_iqJMTJ64PucQ5_DzQ5XxvmVMha/view?usp=sharing">Mi cv en formato PDF</FooterLink>
          </Column>
          
          <Column>
            <Heading>Contacta con</Heading>
            <FooterLink target="_blank" href="./pdf">Alberto Salgueiro Roche</FooterLink>
           
          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
           
            <FooterLink  target="_blank" href="https://www.linkedin.com/in/alberto-salgueiro-roche-4b41742a">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Linkedin
                </span>
              </i>
            </FooterLink>
          </Column>
           <Column>
            <Heading>Enlaces de interés</Heading>
            <FooterLink target="_blank" href="https://reactjs.org/">React</FooterLink>
            <FooterLink target="_blank" href="#">GitUp</FooterLink>
            <FooterLink target="_blank" href="#">NodeJs</FooterLink>
            <FooterLink target="_blank" href="#">JavaScript</FooterLink>
            <FooterLink target="_blank" href="#">.NET</FooterLink>
            <FooterLink target="_blank" href="#">Animación CSS</FooterLink>
            <FooterLink target="_blank" href="#">Bootstrap</FooterLink>
            <FooterLink target="_blank" href="#">Fluent UI</FooterLink>
            <FooterLink target="_blank" href="#">SASS</FooterLink>
            <FooterLink target="_blank" href="#">Entity Framework</FooterLink>
           
          </Column>
           <Column>
            <Heading>Programación</Heading>
            <FooterLink target="_blank" href="#">Xataka</FooterLink>
            <FooterLink target="_blank" href="#">Lawebdelprogramador</FooterLink>
            <FooterLink target="_blank" href="#">Bricogeek</FooterLink>
            <FooterLink target="_blank" href="#">Stack Overflow</FooterLink>
            <FooterLink target="_blank" href="#">Campus MVP</FooterLink>
            <FooterLink target="_blank" href="https://www.udemy.com">Udemy</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;