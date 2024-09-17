//beginning of my add recipe button
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export type AddRecipesProps = {
  onAddRecipe: (newRecipe: {
    photo: string;
    name: string;
    description: string;
  }) => void;
};

type ID = {
  id: number;
  name: string;
};

export default function AddRecipe({ onAddRecipe }: AddRecipesProps) {
  const [addPhoto, setAddPhoto] = useState("");
  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
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
          {/* id 
          <div>
            <label>ID:</label>
            <input
              type="number"
              value={addId}
              onChange={(e) => newId(Number(e.target.value))}
            />
          </div>*/}

          {/* photo */}
          <div>
            <label>Photo URL:</label>
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
            <label>Description:</label>
            <textarea
              value={addDescription}
              onChange={(e) => setAddDescription(e.target.value)}
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
