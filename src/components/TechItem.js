import React from 'react';
import PropTypes from 'prop-types'

function TechItem({ tech, onDelete}){
    return (
        <li >{tech}
            <button onClick={onDelete} type="button">Remover</button>
        </li>  
    )
}
//Ao utilizar o componente e não passar propriedade, coloca propriedade default
TechItem.defaultProps = {
    tech: 'Oculto'
}

//Cria regras para as propriedades do componente
TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}
export default TechItem