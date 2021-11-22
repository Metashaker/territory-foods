import { MealsGridContainer, MealCard } from "./styles";

const MealsGrid = ({ meals }) => {
  return (
    <MealsGridContainer>
      {meals &&
        meals.map((meal) => {
          return (
            <MealCard key={meal?.id}>
              <img src={meal?.img} alt="meal" />
              <h3>{meal?.title}</h3>
              <p>{`by ${meal?.chef}`}</p>
            </MealCard>
          );
        })}
    </MealsGridContainer>
  );
};

export default MealsGrid;
