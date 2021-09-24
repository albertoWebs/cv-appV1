import { elementos } from '../data/elementos';

export const getElementosByTipo = ( tipo ) => {

    const validTipo = ['Formación', 'Experiencia'];

    if ( !validTipo.includes( tipo ) ) {
        throw new Error(`Tipo "${ tipo }" no es correcto`);
    }

    return elementos.filter( elemento => elemento.tipo === tipo );

}
