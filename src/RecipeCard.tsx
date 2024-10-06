import DeleteRecipe from "./DeleteRecipe";
import EditRecipe from "./EditRecipe";
import "./App.css";
import { ButtonGroup, Card } from "react-bootstrap";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
  instructions: string;
  ingredients: string;
};

type RecipeCardProps = {
  id: number;
  photo: string;
  name: string;
  description: string;
  onEdit: (updatedRecipe: Recipe) => void;
  onDelete: (id: number) => void;
};

//each card will have a photo, name and description along with an edit and delete button
export default function RecipeCard({
  id,
  photo,
  name,
  description,
  onDelete,
  onEdit,
}: RecipeCardProps) {
  return (
    <>
      <h3 className="text-center">Recipes</h3>
      <div className="card-body">
        <Card>
          <div className="front">
            {photo && (
              <Card.Img
                variant="top"
                src={photo || "https://via.placeholder.com/150"}
                alt={name}
              />
            )}
            <Card.Body>
              <Card.Title>{name || "No information available!"}</Card.Title>
              <Card.Text>
                {description || "No information available!"}
              </Card.Text>
              <ButtonGroup
                className="card-btn"
                style={{ width: "100%", justifyContent: "space-between" }}
              >
                <EditRecipe
                  photo={photo}
                  name={name}
                  description={description}
                  onEdit={onEdit}
                  id={id}
                  ingredients={""}
                  instructions={""}
                />
                <DeleteRecipe id={id} onDelete={onDelete} />
              </ButtonGroup>
            </Card.Body>
          </div>
        </Card>
      </div>
    </>
  );
}
