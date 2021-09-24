import { elementos } from '../data/elementos';
export const getElementoById = ( id ) => {

    return elementos.find( elemento => elemento.id === id );

}
