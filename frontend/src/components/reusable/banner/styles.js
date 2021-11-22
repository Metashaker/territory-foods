import styled from "styled-components";
import BannerImg from "../../../assets/tf-banner-darken.png";

const BannerContainer = styled.div`
  height: auto;
  width: 100vw;
  background-image: url(${BannerImg});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 0;
  margin-bottom: 0%.5rem;
  z-index: 0;

  h1 {
    margin: 0;
    font-size: 1.8rem;
    color: #ffffff;
    text-transform: uppercase;
    font-style: normal;
    font-weight: bold;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #ffffff;
  }
`;

export { BannerContainer };
