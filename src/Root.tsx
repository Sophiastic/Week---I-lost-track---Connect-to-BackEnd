import { Link, Outlet } from "react-router-dom";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useEffect, useState } from "react";
import RecipeCardList from "./RecipeCardList";

//the main app consists of a top banner with the add recipe button. then it holds a card for every recipe

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
  instructions: string;
  ingredients: string;
};

export default function Root() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  //all of our CRUD operations

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      let response = await fetch("http://localhost:3000/recipes");
      let data = await response.json();
      setRecipes(data); // Do something with the data here!
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
        fetchRecipes();
      } else {
        console.error("Failed to update recipe! 😢");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditRecipe = (updatedRecipe: Recipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const fetchDelete = async (id: number) => {
    try {
      let response = await fetch(`http://localhost:3000/recipes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        fetchRecipes(); // Refresh the list
      } else {
        console.error("Failed to delete recipe! 😢");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="nav nav-tabs bg-light">
        <nav>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click for more!</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                {" "}
                <Link to="/"> Dishes </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                {" "}
                <Link to="/addRecipe">Add a Recipe</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                {" "}
                <Link to="/recipe/:id/back">Instructions</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        <RecipeCardList
          recipes={recipes.length > 0 ? recipes : []}
          onDelete={fetchDelete}
          onEdit={fetchEdit}
        ></RecipeCardList>
        <Outlet />
      </div>
    </>
  );
}
