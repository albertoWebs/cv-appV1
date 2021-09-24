import { elementos } from '../data/elementos';

export const getElementoByTecnologia = ( name = '' ) => {

    if ( name === '' ) {
        return [];
    }

    name = name.toLocaleLowerCase();
    return elementos.filter( elemento => elemento.tecnologiasApis.toLocaleLowerCase().includes( name )  );

}