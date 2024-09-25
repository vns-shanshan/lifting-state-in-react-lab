// src/components/IngredientList.jsx
const IngredientList = ({ ingredientList, addToBurger }) => {
  return (
    <ul>
      {ingredientList.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;
