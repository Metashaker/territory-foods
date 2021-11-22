import { useState, useEffect } from "react";
import { FiltersContainer, FilterButton, FiltersDropdown } from "./styles";
import DownIcon from "../../../assets/tf-down.svg";

const Filters = ({ meals }) => {
  const [areTagsOpen, setTagsOpen] = useState(false);
  const [areMealTypesOpen, setMealTypesOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const [mealTypes, setMealTypes] = useState([]);

  useEffect(() => {
    const mTypes = meals?.meals?.map((meal) => meal?.mealType);
    setMealTypes([...new Set(mTypes)]);
  }, [meals]);

  useEffect(() => {
    const tgs = [];
    meals?.meals?.map((meal) => {
      meal.tags.map((tag) => tgs.push(tag));
      return 1;
    });
    setTags([...new Set(tgs)]);
  }, [meals]);

  const toggleTagsDropdown = () => {
    if (areMealTypesOpen) {
      setMealTypesOpen(false);
    }
    setTagsOpen(!areTagsOpen);
  };
  const toggleMealTypesDropdown = () => {
    if (areTagsOpen) {
      setTagsOpen(false);
    }
    setMealTypesOpen(!areMealTypesOpen);
  };
  return (
    <FiltersContainer>
      {console.log(mealTypes)}
      {console.log(tags)}
      <FilterButton onClick={toggleTagsDropdown} isFirst>
        <p>Dietary preferences</p>
        <img src={DownIcon} alt="Down icon" />
        <FiltersDropdown isOpen={areTagsOpen} />
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
