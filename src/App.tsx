import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import RecipesLayout from "./recipes/RecipesLayout";
import Recipe from "./recipes/Recipe";
import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
//import Logout from "./security/_Logout";
import NavHeader from "./NavHeader";
import Home from "./Home";
import "./App.css";

export default function App() {
  //const auth = useAuth();
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes">
          <Route index element={<Recipes />} />
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
    </>
  );
}
