import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../store/reducers/ActionCreator";
import { useParams } from "react-router";
import { DETAILS_MEAL } from "../constant/constant";

const DetailMeal = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.mealSlices);
  const { id } = useParams();
  console.log(meals, "meals");

  useEffect(() => {
    getApiData(`${DETAILS_MEAL}${id}`, dispatch);
  }, []);

  return (
    <div>
      {meals &&
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <div>
              <div>
                <h2>{meal.strMeal}</h2>
                <div>
                  <h4>{meal.strCategory}</h4>
                  <hr />
                  <h4>{meal.strArea}</h4>
                </div>
              </div>
              <ul>
                <li>{meal.strIngredient1}</li>
                <li>{meal.strIngredient2}</li>
                <li>{meal.strIngredient3}</li>
                <li>{meal.strIngredient4}</li>
                <li>{meal.strIngredient5}</li>
                <li>{meal.strIngredient6}</li>
                <li>{meal.strIngredient7}</li>
                <li>{meal.strIngredient8}</li>
                <li>{meal.strIngredient9}</li>
                <li>{meal.strIngredient10}</li>
              </ul>
              <div>
                <img src={meal.strMealThumb} alt="" />
              </div>
            </div>

            <div>
              <h2>Instruction</h2>
              <p>{meal.strInstructions}</p>
              <a href={meal.strYoutube}>YouTUBE</a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DetailMeal;
