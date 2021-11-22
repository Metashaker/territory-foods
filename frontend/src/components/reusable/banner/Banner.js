import { BannerContainer } from "./styles";

const Banner = ({ imageURL, title, subtitle }) => {
  return (
    <BannerContainer imageURL={imageURL}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </BannerContainer>
  );
};

export default Banner;
