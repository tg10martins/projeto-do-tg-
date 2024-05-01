import React from 'react';

const RecipeItem = ({ recipe, editRecipe, deleteRecipe }) => {
  return (
    <div>
      <h2>{recipe.nome}</h2>
      
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredientes.map((ingrediente, index) => (
          <li key={index}>
            {ingrediente.nome}: {ingrediente.quantidade} {ingrediente.unidade}
          </li>
        ))}
      </ul>
      
      <h3>Modo de Preparo:</h3>
      <p>{recipe.modoDePreparo}</p>
      
      <button onClick={() => editRecipe(recipe)}>Editar</button>
      <button onClick={() => deleteRecipe(recipe.nome)}>Deletar</button>
    </div>
  );
};

export default RecipeItem;
