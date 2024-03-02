import { useParams } from "react-router-dom";
import { getRecipe, Recipe as ApiRecipe } from "../services/apiFacade";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Recipe() {
  const [queryString] = useSearchParams();
  const initialCategory = queryString.get("category");
  // Remove the existing line that sets initialCategory to null

  const { id } = useParams();
  console.log("id", id);

  const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
  useEffect(() => {
    getRecipe(Number(id), initialCategory).then((res) => setRecipe(res));
  }, [id, initialCategory]);

  return (
    <>
      {recipe ? (
        <>
          <h3>
            {" "}
            {recipe.name} ({recipe.id})
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 200, margin: 10, flexDirection: "column" }}
              src={recipe.thumb}
              alt={recipe.name}
            />
            <p style={{ display: "inline", flexDirection: "column" }}>
              {recipe.ingredients}
            </p>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions}</p>
        </>
      ) : (
        <h2>Sorry. Recipe not found</h2>
      )}
    </>
  );
}
