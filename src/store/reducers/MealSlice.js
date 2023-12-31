import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [
    {
      idMeal: "52771",
      strMeal: "Spicy Arrabiata Penne",
      strCategory: "Vegetarian",
      strArea: "Italian",
      strInstructions:
        "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
      strMealThumb:
        "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
      strTags: "Pasta,Curry",
      strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
    },
  ],
};

export const mealSlices = createSlice({
  name: "meals",
  initialState,
  reducers: {
    getMiles(state, action) {
      state.meals = action.payload;
    },
  },
});

export default mealSlices.reducer;
