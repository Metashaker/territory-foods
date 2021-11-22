import { FiltersContainer, FilterDropdown } from "./styles";
import DownIcon from "../../../assets/tf-down.svg";

const Filters = () => {
  return (
    <FiltersContainer>
      <FilterDropdown isFirst>
        <p>Dietary preferences</p>
        <img src={DownIcon} alt="Down icon" />
      </FilterDropdown>
      <FilterDropdown>
        <p>Meal type</p>
        <img src={DownIcon} alt="Down icon" />
      </FilterDropdown>
    </FiltersContainer>
  );
};

export default Filters;
