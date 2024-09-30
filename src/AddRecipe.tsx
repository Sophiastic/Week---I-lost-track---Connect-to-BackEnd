//beginning of my add recipe button
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export type AddRecipesProps = {
  onAddRecipe: (newRecipe: {
    photo: string;
    name: string;
    description: string;
    ingredients: string;
    instructions: string;
  }) => void;
};

type ID = {
  id: number;
  name: string;
};
//all portions of the recipe being added in one piece, but showing up on both cards
export default function AddRecipe({ onAddRecipe }: AddRecipesProps) {
  const [addPhoto, setAddPhoto] = useState("");
  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addIngredients, setAddIngredients] = useState("");
  const [addInstructions, setAddInstructions] = useState("");
  const [showModal, setModal] = useState(false);
  const [addId, setAddId] = useState<ID[]>([]);
  let nextId = 1;

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  const handleAddId = () => {
    const newId: ID = {
      id: nextId++,
      name: `${nextId}`,
    };
    setAddId([...addId, newId]);
  };

  const handleSave = () => {
    onAddRecipe({
      photo: addPhoto,
      name: addName,
      description: addDescription,
      ingredients: addIngredients,
      instructions: addInstructions,
    });
    handleAddId();
    handleClose();
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
