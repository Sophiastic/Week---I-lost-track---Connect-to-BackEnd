/*import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export type InstructionProps = {
  onAddInstructions: (newInstructions: {
    ingredients: string;
    instructions: string;
  }) => void;
};

export default function addInstructions({
  onAddInstructions,
}: InstructionProps) {
  const [addIngredients, setAddIngredients] = useState("");
  const [addInstructions, setAddInstructions] = useState("");
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSave = () => {
    onAddInstructions({
      ingredients: addIngredients,
      instructions: addInstructions,
    });
    handleClose();
  };

  return (
    <>
      <Button
        variant="btn"
        style={{
          backgroundImage: "url('./assets/utensils-solid.svg')",
          backgroundSize: "cover",
        }}
        onClick={handleShow}
      ></Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions to Cook! 👩🏽‍🍳</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Ingredients: </label>
            <textarea
              value={addIngredients}
              onChange={(e) => setAddIngredients(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label> Instructions: </label>
            <textarea
              value={addInstructions}
              onChange={(e) => setAddInstructions(e.target.value)}
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
}*/
