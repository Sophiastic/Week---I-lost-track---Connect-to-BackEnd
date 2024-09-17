/* Okay. The vision is to have cards displayed in the main page. There will be an 'add recipe' button on the top of the page. Each recipe will be shown with a delete and edit button. the end. */
import TopBar from "./TopBar";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import "./App.css";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
};
//the main app consists of a top banner with the add recipe button. then it holds a card for every recipe
export default function RecipeApp() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetchGet();
  }),
    [];

  const fetchGet = async () => {
    try {
      let response = await fetch("http://localhost:3000/recipes");
      let data = await response.json();
      setRecipes(data); // Do something with the data here!
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchPost = async (newRecipe: Recipe) => {
    try {
      let response = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        fetchGet();
      } else {
        console.error("Failed to add recipe!! 😢");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchEdit = async (updatedRecipe: Recipe) => {
    try {
      let response = await fetch(
        `http://localhost:3000/recipes/${updatedRecipe.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecipe), // Your item can go here instead of making the object inline.
        }
      );

      if (response.ok) {
        fetchGet();
      } else {
        console.error("Failed to update recipe! 😢");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchDelete = async (id: number) => {
    try {
      let response = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchGet(); // Refresh the list
      } else {
        console.error("Failed to delete recipe! 😢");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container bg-secondary bg-opacity-25">
      <TopBar onAddRecipe={fetchPost} />
      <h3 className="text-center">Recipes</h3>
      <div className="container" id="recipeHolder">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            photo={recipe.photo}
            name={recipe.name}
            description={recipe.description}
            onEdit={fetchEdit}
            onDelete={fetchDelete}
          ></RecipeCard>
        ))}
      </div>
    </div>
  );
}
