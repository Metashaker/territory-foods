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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  padding: 1.5rem;
  transform: ${({ isMeal }) =>
    isMeal ? "translate(7.5rem,7.4rem)" : "translate(6rem, 10rem)"};
  height: auto;
  min-height: 10rem;
  width: 21.5rem;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 50;

  h3 {
    font-size: 1rem;
    color: #333335;
    font-weight: bold;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const CheckboxesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem 0;
`;
export { FiltersContainer, FilterButton, FiltersDropdown, CheckboxesContainer };
