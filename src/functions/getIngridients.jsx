export function getIngridients(meal, meals) {
  const newobj = Object.keys(meals[0]).filter((elem) => {
    return elem.includes("strIngredient");
  });

  return newobj.map(
    (item, index) =>
      meal[item] &&
      meal["strMeasure" + (index + 1)] && (
        <p key={index}>
          - {meal[item]}:<span>{meal["strMeasure" + (index + 1)]}</span>
        </p>
      )
  );
}
