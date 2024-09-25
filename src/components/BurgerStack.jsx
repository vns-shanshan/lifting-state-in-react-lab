// `src/components/BurgerStack.jsx`
import Ingredient from "./Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            isAdd={false}
            handleBtnClick={() => removeFromBurger(ingredient)}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
