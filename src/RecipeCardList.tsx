import RecipeCard from "./RecipeCard";

//type Recipe = {
//  id: number;
//  name: string;
//  photo: string;
//  description: string;
//  ingredients: string;
//  instructions: string;
//};
type Recipe = {
  id: number;
  photo: string;
  name: string;
  description: string;
  ingredients: string;
  instructions: string;
};
type RecipeCardListProps = {
  recipes: Recipe[]; // Recipes passed down from the parent
  onDelete: (id: number) => void;
  onEdit: (updatedRecipe: Recipe) => void;
};

const RecipeCardList: React.FC<RecipeCardListProps> = ({
  recipes,
  onDelete,
  onEdit,
}) => {
  if (recipes.length < 1) {
    return <div>❌ No recipes available. ❌</div>; // Display a message or a placeholder
  }

  return (
    <div className="recipeHolder">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          photo={recipe.photo}
          name={recipe.name}
          description={recipe.description}
          ingredients=""
          instructions=""
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default RecipeCardList;
