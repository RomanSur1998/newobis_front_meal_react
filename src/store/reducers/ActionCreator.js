import axios from "axios";
import { mealSlices } from "./MealSlice";

export async function getApiData(URL, dispatch) {
  try {
    const reposnse = await axios.get(URL);
    dispatch(mealSlices.actions.getMiles(reposnse.data.meals));
  } catch (error) {
    console.log("error", error);
  }
}
