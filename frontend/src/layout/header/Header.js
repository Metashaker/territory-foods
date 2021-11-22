import { HeaderContainer } from "./styles";

import TFLogo from "../../assets/tf-logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={TFLogo} alt="territory foods logo" />
    </HeaderContainer>
  );
};

export default Header;
