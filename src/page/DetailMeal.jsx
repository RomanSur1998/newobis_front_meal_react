import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../store/reducers/ActionCreator";
import { useParams } from "react-router";
import { DETAILS_MEAL } from "../constant/constant";

const DetailMeal = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.mealSlices);
  const { id } = useParams();
  console.log(id, "useParams");

  useEffect(() => {
    getApiData(`${DETAILS_MEAL}${id}`, dispatch);
  }, []);

  return (
    <div>
      {meals &&
        meals.map((meal) => (
          <div key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="" />
          </div>
        ))}
    </div>
  );
};

export default DetailMeal;
