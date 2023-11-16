import { Form, Link, useNavigate } from "react-router-dom";
import MainPage from "./page/MainPAge";
import MainRoutes from "./routes/MainRoutes";
import "../src/styles/Meal.css";
import { useState } from "react";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <h1 onClick={() => navigate("/")}>THE MEAL</h1>
      </header>
      <MainRoutes />
    </>
  );
}

export default App;
