import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.tsx";
import RecipeCardList from "./RecipeCardList.tsx";
import BackOfCard from "./BackOfCard.tsx";
import AddRecipe from "./AddRecipe.tsx";
import RecipeCard from "./RecipeCard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <RecipeCardList />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeCard />,
      },
      {
        path: "/addRecipe",
        element: <AddRecipe />,
      },
      {
        path: "/recipe/:id/back",
        element: <BackOfCard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
