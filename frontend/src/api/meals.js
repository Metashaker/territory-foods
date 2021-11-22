import gql from "graphql-tag";

export const GET_MEALS = gql`
  query Meals {
    meals {
      title
      description
      img
      mealType
      chef
      price
      tags
    }
  }
`;
