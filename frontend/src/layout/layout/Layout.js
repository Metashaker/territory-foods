import Header from "../header";
import Footer from "../footer";
import { LayoutContainer } from "./styles";

const Layout = ({ childen }) => {
  return (
    <LayoutContainer>
      <Header />
      {childen}
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
