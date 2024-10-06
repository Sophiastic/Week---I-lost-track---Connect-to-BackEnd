import { Card } from "react-bootstrap";
import BackOfCardEdit from "./BackOfCardEdit";

type Recipe = {
  id: number;
  name: string;
  photo: string;
  description: string;
  instructions: string;
  ingredients: string;
};

type BackOfCardProps = {
  id: number;
  ingredients: string;
  instructions: string;
  onEdit: (updatedRecipe: Recipe) => void;
};
//This will have similar structure as RecipeCard, but it's the other card!!
export default function BackOfCard({
  id,
  ingredients,
  instructions,
  onEdit,
}: BackOfCardProps) {
  return (
    <div className="card-body">
      <Card>
        <Card.Body>
          <Card.Title>Instructions to Cook! 👩🏽‍🍳</Card.Title>
          <Card.Text className="ingredients">
            {ingredients || "No ingredients!"}
          </Card.Text>
          <Card.Text className="instructions">
            {instructions || "No instructions!"}
          </Card.Text>
          <div>
            <BackOfCardEdit
              ingredients={ingredients}
              instructions={instructions}
              onEdit={onEdit}
              id={id}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
