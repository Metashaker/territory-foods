import styled from "styled-components";

const MealsGridContainer = styled.div`
  width: 80%;
  padding: 0 10%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    margin: 0 auto;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
`;

const MealCard = styled.div`
  height: auto;
  width: 15rem;
  /* White */
  background: #ffffff;
  /* Steam */
  padding-bottom: 1rem;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

    @media (max-width: 767px) {
    justify-self: center;
  }

  img {
    height: 10rem;
    width 100%;
  }

  h3 {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: #333335;
    margin: 0;
  }

  p {
    margin: 0.5rem 1rem;
    font-size: 0.8rem;
    color: #606060;
    font-weight: 500;
  }
`;

export { MealsGridContainer, MealCard };
