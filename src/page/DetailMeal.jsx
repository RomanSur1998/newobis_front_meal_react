import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../store/reducers/ActionCreator";
import { useParams } from "react-router";
import { DETAILS_MEAL } from "../constant/constant";
import "../styles/Details.css";
import { getIngridients } from "../functions/getIngridients";

const DetailMeal = () => {
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.mealSlices);
  const { id } = useParams();

  useEffect(() => {
    getApiData(`${DETAILS_MEAL}${id}`, dispatch);
  }, []);

  return (
    <>
      {meals &&
        meals.map((meal) => (
          <div key={meal.idMeal} className="d_flex details_container">
            <div className="d_flex aline_center details_info">
              <div className="d_flex details_info-left">
                <div>
                  <h2>{meal.strMeal}</h2>
                  <div className="d_flex info_area">
                    <h4>{meal.strCategory}</h4>
                    <hr />
                    <h4>{meal.strArea}</h4>
                  </div>
                </div>
                <div className="d_flex ingridients">
                  {getIngridients(meal, meals)}
                </div>
              </div>
              <div>
                <img src={meal.strMealThumb} alt="" />
              </div>
            </div>

            <div className="d_flex instruction">
              <h2>Instruction</h2>
              <p className="instr_text">{meal.strInstructions}</p>
              <a
                className=" d_flex  aline_center btn_youtube"
                href={meal.strYoutube}
              >
                YouTube
              </a>
            </div>
          </div>
        ))}
    </>
  );
};

export default DetailMeal;
