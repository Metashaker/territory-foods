import styled from "styled-components";

const MealsGridContainer = styled.div`
  width: 100%;
  padding: 0 10%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;

const MealCard = styled.div`
  height: 17.875rem;
  width: 15rem;
  background-color: red;
`;

export { MealsGridContainer, MealCard };
