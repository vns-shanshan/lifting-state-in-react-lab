// src/components/IngredientList.jsx
import Ingredient from "./Ingredient";

const IngredientList = ({ ingredientList, addToBurger }) => {
  return (
    <ul>
      {ingredientList.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          isAdd={true}
          handleBtnClick={() => addToBurger(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
