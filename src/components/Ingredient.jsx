const Ingredient = ({ ingredient, isAdd, handleBtnClick }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}

      <button onClick={handleBtnClick}>{isAdd ? "+" : "x"}</button>
    </li>
  );
};

export default Ingredient;
