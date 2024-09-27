import { useState } from "react";
import { Button } from "react-bootstrap";

type DeleteRecipeProps = {
  id: number;
  onDelete: (id: number) => void;
};
//beginning of delete funtions
export default function DeleteRecipe({ id, onDelete }: DeleteRecipeProps) {
  const [deleteId, setDeleteId] = useState<number[]>([]);
  const handleDeleteId = () => {
    setDeleteId([...deleteId, id]);
    onDelete(id);
  };

  //setRecipes(recipes.filter((r) => r.id !== onDelete));
  return (
    <div>
      <Button
        variant="btn"
        style={{
          backgroundImage: "url('./assets/trash-can-solid.svg')",
          backgroundSize: "cover",
        }}
        onClick={handleDeleteId}
      >
        Delete Recipe
      </Button>
    </div>
  );
}

/*const deleteRecipe = (idToDelete: number) => {
  };*/
