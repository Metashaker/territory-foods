import { MealsGridContainer, MealCard } from "./styles";

const MealsGrid = ({ meals, filteredMeals }) => {
  console.log(meals);
  return (
    <MealsGridContainer>
      {filteredMeals?.length === 0
        ? meals?.meals?.map((meal) => {
            return (
              <MealCard key={meal?.title}>
                <img src={meal?.img} alt="meal" />
                <h3>{meal?.title}</h3>
                <p>{`by ${meal?.chef}`}</p>
              </MealCard>
            );
          })
        : filteredMeals?.map((meal) => {
            return (
              <MealCard key={meal?.chef}>
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
