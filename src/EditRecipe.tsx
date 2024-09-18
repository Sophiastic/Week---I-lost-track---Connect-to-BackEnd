import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
};

type EditRecipesProp = {
  id: number;
  photo: string;
  name: string;
  description: string;
  onEdit: (updatedRecipe: Recipe) => void;
};

/*okay so i want to update only the name and description. i will create a new object copying in the data from app.tsx. when the edit button is pressed, a little form will open to update that info. */
//beginning of edit function
export default function editRecipe({
  id,
  photo,
  name,
  description,
  onEdit,
}: EditRecipesProp) {
  //update every portion individually
  const [updatePhoto, setUpdatePhoto] = useState(photo);
  const [updateName, setUpdateName] = useState(name);
  const [updateDescription, setUpdateDescription] = useState(description);
  const [showModal, setModal] = useState(false);

  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

  const handleSave = () => {
    const updatedRecipe: Recipe = {
      id,
      name: updateName,
      photo: updatePhoto,
      description: updateDescription,
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
          {/* photo */}
          <div>
            <label>Photo URL:</label>
            <input
              type="text"
              value={updatePhoto}
              onChange={(e) => setUpdatePhoto(e.target.value)}
            ></input>
          </div>
          {/* name */}
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            ></input>
          </div>
          {/* description */}
          <div>
            <label>Description:</label>
            <textarea
              value={updateDescription}
              onChange={(e) => setUpdateDescription(e.target.value)}
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
