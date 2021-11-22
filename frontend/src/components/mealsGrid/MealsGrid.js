import { MealsGridContainer, MealCard } from "./styles";

const MealsGrid = ({ meals }) => {
  return (
    <MealsGridContainer>
      {meals &&
        meals.map((meal) => {
          return (
            <MealCard key={meal.id}>
              <p>Here</p>
            </MealCard>
          );
        })}
    </MealsGridContainer>
  );
};

export default MealsGrid;
