import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from "./EditRecipe";
import "./App.css";
import { ButtonGroup, Card } from "react-bootstrap";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
};

type RecipeCardProps = {
  id: number;
  photo: string;
  name: string;
  description: string;
  onDelete: (id: number) => void;
  onEdit: (updatedRecipe: Recipe) => void;
  onFlip: () => void;
};

//each card will have a photo, name and description along with an edit and delete button
export default function RecipeCard({
  id,
  photo,
  name,
  description,
  onDelete,
  onEdit,
  onFlip,
}: RecipeCardProps) {
  return (
    <div id="card-body">
      <Card style={{ width: "25rem" }} onClick={onFlip}>
        <div className="front" /*onClick = {() => setFlip)(!flip)}*/>
          {photo && (
            <Card.Img
              variant="top"
              src={photo || "https://via.placeholder.com/150"}
              alt={name}
            />
          )}
          <Card.Body /*onClick={HandleFlip} */>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <ButtonGroup role="group" className="card-btn">
              <EditRecipe
                photo={photo}
                name={name}
                description={description}
                ingredients={ingredients}
                instructions={instructions}
                onEdit={onEdit}
                id={id}
              />
              <DeleteRecipe id={id} onDelete={onDelete} />
            </ButtonGroup>
          </Card.Body>
        </div>
        <div className="back" /*onClick = {() => setFlip)(!flip)}*/>
          {/*
        <Card.Body onClick={HandleFlip}>
        <Card.Title>Instructions</Card.Title>
        <Card.Text>{instructions}</Card.Text>
        
        </Card.Body>


        */}
        </div>
      </Card>
    </div>
  );
}
