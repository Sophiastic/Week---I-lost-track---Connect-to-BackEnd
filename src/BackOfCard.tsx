import { Card, CardBody } from "react-bootstrap";

type BackOfCardProps = {
  ingredients: string;
  instructions: string;
};
//This will have similar structure as RecipeCard, but it's the back !!
export default function BackOfCard({
  ingredients,
  instructions,
}: BackOfCardProps) {
  return (
    <div id="card-body">
      <Card style={{ width: "25rem" }}>
        <CardBody>
          <Card.Title>Instructions to Cook! 👩🏽‍🍳</Card.Title>
          <Card.Text>{ingredients}</Card.Text>
          <Card.Text>{instructions}</Card.Text>
        </CardBody>
      </Card>
    </div>
  );
}
