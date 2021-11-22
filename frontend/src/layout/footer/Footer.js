import { FooterContainer, ContentContainer } from "./styles";
import RedPinIcon from "../../assets/tf-pin.svg";

const Footer = () => {
  return (
    <>
      {/* <Divider /> */}
      <FooterContainer>
        <img src={RedPinIcon} alt="red pin icon" />
        <ContentContainer>
          <h3>TERRITORY FOODS</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </ContentContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
