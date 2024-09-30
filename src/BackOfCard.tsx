import { Card } from "react-bootstrap";

type BackOfCardProps = {
  ingredients: string;
  instructions: string;
};
//This will have similar structure as RecipeCard, but it's the other card!!
export default function BackOfCard({
  ingredients,
  instructions,
}: BackOfCardProps) {
  return (
    <div id="card-body">
      <Card style={{ width: "25rem", height: "30rem" }}>
        <Card.Body>
          <Card.Title>Instructions to Cook! 👩🏽‍🍳</Card.Title>
          <Card.Text className="ingredients">{ingredients}</Card.Text>
          <Card.Text className="instructions">{instructions}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
