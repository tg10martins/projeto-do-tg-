import React, { useState } from 'react';

const RecipeForm = ({ addRecipe, editRecipe, recipe }) => {
  const [nome, setNome] = useState(recipe ? recipe.nome : '');
  const [ingredientes, setIngredientes] = useState(recipe ? recipe.ingredientes : []);
  const [modoDePreparo, setModoDePreparo] = useState(recipe ? recipe.modoDePreparo : '');
  
  const addIngredient = () => {
    setIngredientes([...ingredientes, { nome: '', quantidade: 0, unidade: '' }]);
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredientes = [...ingredientes];
    updatedIngredientes[index][field] = value;
    setIngredientes(updatedIngredientes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newRecipe = {
      nome,
      ingredientes,
      modoDePreparo,
    };

    if (recipe) {
      editRecipe(newRecipe);
    } else {
      addRecipe(newRecipe);
    }
    
    // Clear fields after submission
    setNome('');
    setIngredientes([]);
    setModoDePreparo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome da Receita:
        <input 
          type="text" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
      </label>
      
      {ingredientes.map((ingrediente, index) => (
        <div key={index}>
          <label>
           INGREDIENTES COM TG {index + 1}:
    
            <input 
              type="text" 
              value={ingrediente.nome} 
              onChange={(e) => handleIngredientChange(index, 'nome', e.target.value)} 
            />
          </label>
          
          <label>
            Quantidade:
            <input 
              type="number" 
              value={ingrediente.quantidade} 
              onChange={(e) => handleIngredientChange(index, 'quantidade', e.target.value)} 
            />
          </label>
          
          <label>
            Unidade:
            <input 
              type="text" 
              value={ingrediente.unidade} 
              onChange={(e) => handleIngredientChange(index, 'unidade', e.target.value)} 
            />
          </label>
        </div>
      ))}
      
      <button type="button" onClick={addIngredient}>
        ADICIONAR INGREDIENTE
      </button>
      
      <label>
        MODO DE PREPARA:
        <textarea 
          value={modoDePreparo} 
          onChange={(e) => setModoDePreparo(e.target.value)} 
        />
      </label>
      
      <button type="submit">Salvar Receita</button>
    </form>
  );
};

export default RecipeForm;
