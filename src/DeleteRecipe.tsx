import { Button } from "react-bootstrap";

type DeleteRecipeProps = {
  id: number;
  onDelete: (id: number) => void;
};

//beginning of delete funtions
export default function DeleteRecipe({ id, onDelete }: DeleteRecipeProps) {
  const handleDeleteId = () => {
    onDelete(id);
  };

  return (
    <div>
      <Button
        variant="btn btn-outline-danger btn-sm p-2 m-2"
        onClick={handleDeleteId}
      >
        Delete Recipe
      </Button>
    </div>
  );
}
