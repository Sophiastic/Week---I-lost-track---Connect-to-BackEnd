import { Link, Outlet, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);
  const viewType = location.pathname === "/dishes" ? "cards" : "back";

  useEffect(() => {
    fetchGet();
  }, []);

  const fetchGet = async () => {
    try {
      let response = await fetch("http://localhost:3000/recipes");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch recipes.");
    }
  };

  //all of our CRUD operations

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
      if (!response.ok) {
        console.error("Failed to update recipe!");
      } else {
        fetchGet();
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
      if (!response.ok) {
        console.error("Failed to delete recipe! 😢");
      } else {
        fetchGet();
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
              <Dropdown.Item as={Link} to="/dishes">
                Dishes
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/instructions">
                Instructions
              </Dropdown.Item>

              <Dropdown.Item as={Link} to="/addRecipe">
                Add a Recipe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
        {error && <div className="error-message">{error}</div>}
        {(location.pathname === "/" ||
          location.pathname === "/dishes" ||
          location.pathname === "/instructions") && (
          <RecipeCardList
            recipes={recipes}
            onDelete={fetchDelete}
            onEdit={fetchEdit}
            viewType={viewType}
          />
        )}
        <Outlet />
      </div>
    </>
  );
}
