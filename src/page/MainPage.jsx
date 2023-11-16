import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../store/reducers/ActionCreator";
import { RANDOM_MEAL } from "../constant/constant";
import { useNavigate } from "react-router";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.mealSlices);

  useEffect(() => {
    getApiData(RANDOM_MEAL, dispatch);
  }, []);

  const [serach, setSearch] = useState("");
  console.log(meals, "данные с redux");

  return (
    <div>
      <div>
        <h3>Meal of the day</h3>
        {meals.map((elem) => (
          <div
            key={elem.idMeal}
            onClick={() => {
              navigate(`/details/${elem.idMeal}`);
            }}
          >
            <img src={elem.strMealThumb} alt="" />
          </div>
        ))}
      </div>

      <form>
        <input
          type="text"
          placeholder="Find your meal"
          value={serach}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default MainPage;
