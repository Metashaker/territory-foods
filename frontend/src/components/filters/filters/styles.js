import styled from "styled-components";

const FiltersContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 2.2rem 10% 1.2rem 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const FilterButton = styled.button`
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  margin: ${({ isFirst }) => (isFirst ? "0 0.5rem 0 0" : "0")};
  cursor: pointer;
  p {
    margin: 0.75rem 0.5rem;
  }
`;

const FiltersDropdown = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  transform: translate(6rem, 12rem);
  height: 20.5rem;
  width: 21.5rem;
  background-color: red;
  z-index: 50;
`;
export { FiltersContainer, FilterButton, FiltersDropdown };
