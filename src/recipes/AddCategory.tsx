import { addCategory } from "../services/apiFacade";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCategory() {
    const category = useRef("");
    const navigate = useNavigate();

    async function submitNewCategory() {
        const name = category.current?.valueOf;
        try {
            await addCategory(name);
            navigate("/categories");
            category.current.value = "";
        } catch (error) {
            console.log(error);
        }
    }


    return (
      <>
        <h2>Add Category</h2>
        <label htmlFor="name"> Name </label> &nbsp;
        <input type="text" id="name" ref={category}></input>
        <button className="" onClick={submitNewCategory}>
          {" "}
          Add
        </button>
      </>
    );
}
