import axios from "axios";
import { searchSlice } from "./SearchSlice";
export async function getSerchMeal(URL, dispatch) {
  try {
    const response = await axios.get(URL);
    dispatch(searchSlice.actions.getMiles(response.data));
  } catch (error) {
    console.log("error", error);
  }
}
