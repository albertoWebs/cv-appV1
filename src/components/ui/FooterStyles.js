import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: black;
  bottom: 0;
  width: 100%;

   position: relative;
  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
`;


   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 30px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 15px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: none;
  font-size: 10px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 18px;
  color: #A866CC;
  margin-bottom: 0px;
  font-weight: bold;
`;