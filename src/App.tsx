/* Okay. The vision is to have cards displayed in the main page. There will be an 'add recipe' button on the top of the page. Each recipe will be shown with a delete and edit button. the end. 


A new card was added to hold the instructions and ingredients.*/
import TopBar from "./TopBar";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import "./App.css";
import BackOfCard from "./BackOfCard";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
  instructions: string;
  ingredients: string;
};
//the main app consists of a top banner with the add recipe button. then it holds a card for every recipe
export default function RecipeApp() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchGet();
  }, []);

  //all of our CRUD operations

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
          body: JSON.stringify(updatedRecipe),
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
    <div className="container bg-secondary bg-opacity-25" id="bodyView">
      <TopBar onAddRecipe={fetchPost} />

      <h3 className="text-center">Recipes</h3>

      <div className="recipeHolder">
        {recipes.map((recipe) => (
          <div className="bothCards">
            {/* The row and col portions are so that the cards show up next to eachother instead of one on top of the other.*/}
            <Row>
              <Col md={5}>
                <div className="front">
                  <RecipeCard
                    id={recipe.id}
                    photo={recipe.photo}
                    name={recipe.name}
                    description={recipe.description}
                    onEdit={fetchEdit}
                    onDelete={fetchDelete}
                  />
                </div>
              </Col>
              <Col md={5}>
                <div className="back">
                  <BackOfCard
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}
