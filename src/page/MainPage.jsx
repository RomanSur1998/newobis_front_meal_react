import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../store/reducers/ActionCreator";
import { RANDOM_MEAL, SEARCH_MEAL } from "../constant/constant";
import { useNavigate } from "react-router";
import { getSerchMeal } from "../store/reducers/SearchAction";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.mealSlices);
  const search_meal = useSelector((state) => state.searchSlice);
  const find = search_meal.meals.meals;

  const [searach, setSearch] = useState("");

  useEffect(() => {
    getApiData(RANDOM_MEAL, dispatch);
  }, []);

  function searchMeal() {
    event.preventDefault();
    getSerchMeal(`${SEARCH_MEAL}${searach}`, dispatch);
  }
  console.log(find, "данные с redux");

  return (
    <div>
      {meals.map((elem) => (
        <div
          className="main_container"
          onClick={() => {
            navigate(`/details/${elem.idMeal}`);
          }}
        >
          <div className="header_title">
            <h3>Meal of the day</h3>
            <h2>{elem.strMeal}</h2>
            <div className="header_area">
              <h3>{elem.strCategory}</h3>
              <hr />
              <h3>{elem.strArea}</h3>
            </div>
          </div>
          <div
            key={elem.idMeal}
            onClick={() => {
              navigate(`/details/${elem.idMeal}`);
            }}
          >
            <img className="meal_image" src={elem.strMealThumb} alt="" />
          </div>
        </div>
      ))}
      <section className="search_block">
        <h2>Find your meal</h2>
        <form onSubmit={(event) => searchMeal(event)}>
          <input
            className="search_meals"
            type="text"
            placeholder="Find your meal"
            value={searach}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {find
            ? find.map((elem) => (
                <div
                  className="main_container"
                  onClick={() => {
                    navigate(`/details/${elem.idMeal}`);
                  }}
                >
                  <div key={elem.idMeal}>
                    <img
                      className="meal_image"
                      src={elem.strMealThumb}
                      alt=""
                    />
                  </div>
                  <div className="header_title">
                    <h3>Meal of the day</h3>
                    <h2>{elem.strMeal}</h2>
                    <div className="header_area">
                      <h3>{elem.strCategory}</h3>
                      <hr />
                      <h3>{elem.strArea}</h3>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
