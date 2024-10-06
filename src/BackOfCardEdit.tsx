import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
  ingredients: string;
  instructions: string;
};

type BackEditRecipesProp = {
  id: number;
  ingredients: string;
  instructions: string;
  onEdit: (updatedRecipe: Recipe) => void;
};

/*okay so i want to update only the name and description. i will create a new object copying in the data from root.tsx. when the edit button is pressed, a little form will open to update that info. */

//beginning of edit function
export default function BackEditRecipe({
  id,
  instructions,
  ingredients,
  onEdit,
}: BackEditRecipesProp) {
  //update every portion individually

  const [updateIngredients, setUpdateIngredients] = useState(ingredients);
  const [updateInstructions, setUpdateInstructions] = useState(instructions);

  const [showModal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const handleSave = () => {
    const updatedRecipe: Recipe = {
      id,
      instructions: updateInstructions,
      ingredients: updateIngredients,
      name: "",
      photo: "",
      description: "",
    };

    onEdit(updatedRecipe);
    handleClose();
  };

  return (
    <>
      <Button variant="secondary btn-sm p-2 m-2" onClick={handleShow}>
        Edit Recipe
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            {/*ingredients*/}
            <label>Ingredients: </label>
            <textarea
              value={updateIngredients}
              onChange={(e) => setUpdateIngredients(e.target.value)}
            ></textarea>
          </div>
          {/*instructions*/}
          <div>
            <label>Instructions: </label>
            <textarea
              value={updateInstructions}
              onChange={(e) => setUpdateInstructions(e.target.value)}
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
