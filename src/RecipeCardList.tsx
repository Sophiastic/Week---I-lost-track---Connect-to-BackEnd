import RecipeCard from "./RecipeCard";
import BackOfCard from "./BackOfCard";

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
  viewType: "cards" | "back";
};

export default function RecipeCardList({
  recipes,
  onDelete,
  onEdit,
  viewType,
}: RecipeCardListProps) {
  if (!recipes || recipes.length === 0) {
    return <div>❌ No recipes available. ❌</div>;
  }

  return (
    <div className="recipeHolder">
      {recipes.map((recipe) => {
        if (viewType === "cards") {
          return (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              photo={recipe.photo}
              name={recipe.name}
              description={recipe.description}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        } else if (viewType === "back") {
          return (
            <BackOfCard
              key={recipe.id}
              id={recipe.id}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              onEdit={onEdit}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
