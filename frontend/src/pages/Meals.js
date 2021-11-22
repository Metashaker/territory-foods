import Header from "../layout/header";
import Footer from "../layout/footer";
import Banner from "../components/reusable/banner";
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
      <Footer />
    </>
  );
};

export default MealsPage;
