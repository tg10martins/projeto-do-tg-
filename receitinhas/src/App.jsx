import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([
    {
      nome: "Bolo de Chocolate",
      ingredientes: [
        { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
        { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
        { nome: "Açúcar", quantidade: 200, unidade: "g" }
      ],
      modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
    },
    {
      nome: "Risoto de Funghi",
      ingredientes: [
        { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
        { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
        { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
      ],
      modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
    },
    {
      nome: "Salada de Frutas",
      ingredientes: [
        { nome: "Banana", quantidade: 2, unidade: "un" },
        { nome: "Maçã", quantidade: 2, unidade: "un" },
        { nome: "Laranja", quantidade: 2, unidade: "un" }
      ],
      modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
    }
  ]);

  // Funções para adicionar, editar, deletar, e pesquisar receitas
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const editRecipe = (updatedRecipe) => {
    const updatedRecipes = recipes.map(recipe => 
      recipe.nome === updatedRecipe.nome ? updatedRecipe : recipe
    );
    setRecipes(updatedRecipes);
  };

  const deleteRecipe = (recipeName) => {
    const updatedRecipes = recipes.filter(recipe => recipe.nome !== recipeName);
    setRecipes(updatedRecipes);
  };

  const searchRecipe = (searchTerm) => {
    return recipes.filter(recipe => 
      recipe.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className='h1-cor'>RECEITINHAS CULINARIAS </h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} editRecipe={editRecipe} deleteRecipe={deleteRecipe} />
    </div>
  );
};

export default App;
