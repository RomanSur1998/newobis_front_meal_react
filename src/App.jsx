import { useNavigate } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import "../src/styles/Meal.css";

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
