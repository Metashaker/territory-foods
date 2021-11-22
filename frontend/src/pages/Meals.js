import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../components/reusable/banner";
import TitleAndSubtitle from "../components/reusable/titleAndSubtitle";

import BannerURL from "../assets/tf-banner-darken.png";

const MealsPage = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default MealsPage;
