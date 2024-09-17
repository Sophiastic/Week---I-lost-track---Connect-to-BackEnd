import AddRecipe from "./AddRecipe";
import "./App.css";

type TopBarProps = {
  onAddRecipe: (newRecipe: {
    id: number;
    photo: string;
    name: string;
    description: string;
  }) => void;
};

export default function TopBar({ onAddRecipe }: TopBarProps) {
  return (
    <div className="nav nav-tabs bg-dark" id="nav-tab">
      <AddRecipe onAddRecipe={onAddRecipe}></AddRecipe>
    </div>
  );
}
