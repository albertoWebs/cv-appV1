import React, { useMemo } from "react";
import { getElementosByTipo } from "../../selectors/getElementosByTipo";
import { ElementoCard } from "./ElementoCard";

export const ElementoList = ({ tipo }) => {
  const elementos = useMemo(() => getElementosByTipo(tipo), [tipo]);
  return (
   <>
         <div className="card-columns animate__animated animate__fadeIn">
           {
               elementos.map( elemento => (
                   <ElementoCard key={elemento.id} {...elemento} />
                   
               ))
      }
     
        </div>
  
</>

  );
};
