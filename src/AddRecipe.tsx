//beginning of my add recipe button
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

//all portions of the recipe being added in one piece, but showing up on both cards
type AddRecipeProps = {
  onAddRecipe: (newRecipe: {
    photo: string;
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
  }) => void;
};
export default function AddRecipe({ onAddRecipe }: AddRecipeProps) {
  const [addPhoto, setAddPhoto] = useState("");
  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addIngredients, setAddIngredients] = useState("");
  const [addInstructions, setAddInstructions] = useState("");
  const [showModal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  const handleSave = async () => {
    const newRecipe = {
      photo: addPhoto,
      name: addName,
      description: addDescription,
      ingredients: addIngredients,
      instructions: addInstructions,
    };
    const addedRecipe = await fetchPost(newRecipe);
    if (addedRecipe) {
      onAddRecipe(addedRecipe);
      handleClose();
    }
  };

  const fetchPost = async (newRecipe: {
    photo: string;
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
  }) => {
    try {
      let response = await fetch("http://localhost:3000/recipes", {
        method: "POST",
        body: JSON.stringify(newRecipe),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to save the recipe");
      }
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  return (
    <>
      <Button variant="btn btn-secondary p-2 m-2" onClick={handleShow}>
        New Recipe
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* photo */}
          <div>
            <label>Photo URL: </label>
            <input
              type="text"
              value={addPhoto}
              onChange={(e) => setAddPhoto(e.target.value)}
            ></input>
          </div>
          {/* name */}
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={addName}
              onChange={(e) => setAddName(e.target.value)}
            ></input>
          </div>
          {/* description */}
          <div>
            <label id="idLabel">Description: </label>
            <textarea
              value={addDescription}
              onChange={(e) => setAddDescription(e.target.value)}
            ></textarea>
          </div>
          {/* ingredients */}
          <div>
            <label>Ingredients: </label>
            <textarea
              value={addIngredients}
              onChange={(e) => setAddIngredients(e.target.value)}
            ></textarea>
          </div>
          {/* Instructions */}
          <div>
            <label> Instructions: </label>
            <textarea
              value={addInstructions}
              onChange={(e) => setAddInstructions(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <ButtonGroup
            className="card-btn"
            style={{ width: "50%", justifyContent: "space-between" }}
          >
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </ButtonGroup>
        </Modal.Footer>
      </Modal>
    </>
  );
}
