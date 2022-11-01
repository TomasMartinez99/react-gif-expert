import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    // Setear los nuevos datos ingresados en el input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    // Enviar datos por formulario
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    // Formulario
    <form onSubmit={ (event) => onSubmit(event) }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
