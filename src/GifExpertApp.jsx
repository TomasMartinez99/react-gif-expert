import { useState } from 'react';

import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Boca']);

  const onAddCategory = ( newCategory ) => {

    // Convertir en mayusculas
    newCategory = newCategory.toUpperCase()

    if ( categories.includes(newCategory) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* Listado GIF */}
      { 
        categories.map( ( category ) => (
          <GifGrid key={ category } category={ category } />
        ))
      }
    </>
  )
}
