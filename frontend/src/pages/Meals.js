import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";

import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../components/reusable/banner";
import TitleAndSubtitle from "../components/reusable/titleAndSubtitle";
import Filters from "../components/filters/filters";
import { GET_MEALS } from "../api/meals";

import BannerURL from "../assets/tf-banner-darken.png";

const MealsPage = () => {
  const { data: meals } = useQuery(GET_MEALS);
  const [activeFilters, setActiveFilters] = useState({
    tags: [],
    mealTypes: [],
  });

  useEffect(() => {
    console.log(activeFilters);
  }, [activeFilters, meals]);

  return (
    <div style={{ width: "100vw", overflowX: "hidden" }}>
      <Header />
      <Banner
        imageURL={BannerURL}
        title="see what we’re serving up next week"
        subtitle="Get local, fresh, chef-made meals, designed by nutritionists and free from refined sugars, gluten and dairy*."
      />
      <TitleAndSubtitle
        title="nutrition is on the menu"
        subtitle="Our meals are designed by nutritionists and crafted by local chefs. Free of gluten, refined sugars or dairy* and responsibly sourced.  "
      />
      <Filters
        meals={meals}
        setActiveFilters={setActiveFilters}
        activeFilters={activeFilters}
      />
      <Footer />
    </div>
  );
};

export default MealsPage;
