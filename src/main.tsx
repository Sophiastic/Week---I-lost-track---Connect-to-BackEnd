import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import BackOfCard from "./BackOfCard.tsx";
import AddRecipe from "./AddRecipe.tsx";
import RecipeCard from "./RecipeCard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/addRecipe",
        element: <AddRecipe onAddRecipe={() => {}} />,
      },
      {
        path: "/dishes",
        element: (
          <RecipeCard
            id={0}
            photo={""}
            name={""}
            description={""}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        ),
      },
      {
        path: "/instructions",
        element: (
          <BackOfCard
            id={0}
            ingredients={""}
            instructions={""}
            onEdit={() => {}}
          />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
