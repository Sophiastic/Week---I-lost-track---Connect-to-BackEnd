/*import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

type Recipe = {
  ingredients: string;
  instructions: string;
};

type EditInstructionsProp = {
  id: number;
  ingredients: string;
  instructions: string;
  onEditInstructions: (editInstructions: Recipe) => void;
};

export default function EditInstructions({
  instructions,
  ingredients,
  onEditInstructions,
}: EditInstructionsProp) {
  const [updateInstructions, setUpdateInstructions] = useState(instructions);

  const [updateIngredients, setUpdateIngredients] = useState(ingredients);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    const updatedInstructions: Recipe = {
      instructions: updateInstructions,
      ingredients: updateIngredients,
    };

    onEditInstructions(updatedInstructions);
    handleClose();
  };
  return (
    <>
      <Button
        variant="btn"
        style={{
          backgroundImage: "url('./assets/pen-to-square-solid.svg')",
          backgroundSize: "cover",
        }}
        onClick={handleShow}
      ></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit the foods!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            
            <label>Ingredients: </label>
            <textarea
              value={updateIngredients}
              onChange={(e) => setUpdateIngredients(e.target.value)}
            ></textarea>
          </div>
         
          <label>Instructions: </label>
          <textarea
            value={updateInstructions}
            onChange={(e) => setUpdateInstructions(e.target.value)}
          ></textarea>
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
}*/
