import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, editRecipe, deleteRecipe }) => {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <RecipeItem 
          key={index} 
          recipe={recipe} 
          editRecipe={editRecipe} 
          deleteRecipe={deleteRecipe} 
        />
      ))}
    </div>
  );
};

export default RecipeList;
