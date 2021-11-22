import { useState } from "react";
import { FiltersContainer, FilterButton, FiltersDropdown } from "./styles";
import DownIcon from "../../../assets/tf-down.svg";

const Filters = () => {
  const [isTagsOpen, setTagsOpen] = useState(false);
  const [areMealTypesOpen, setMealTypesOpen] = useState(false);

  const toggleTagsDropdown = () => setTagsOpen(!isTagsOpen);
  const toggleMealTypesDropdown = () => setMealTypesOpen(!areMealTypesOpen);
  return (
    <FiltersContainer>
      <FilterButton onClick={toggleTagsDropdown} isFirst>
        <p>Dietary preferences</p>
        <img src={DownIcon} alt="Down icon" />
        <FiltersDropdown isOpen={isTagsOpen} />
      </FilterButton>

      <FilterButton onClick={toggleMealTypesDropdown}>
        <p>Meal type</p>
        <img src={DownIcon} alt="Down icon" />
        <FiltersDropdown onCl isOpen={areMealTypesOpen} />
      </FilterButton>
    </FiltersContainer>
  );
};

export default Filters;
