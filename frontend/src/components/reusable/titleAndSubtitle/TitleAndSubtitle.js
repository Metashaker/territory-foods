import { Container } from "./styles";

const TitleAndSubtitle = ({ title, subtitle }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </Container>
  );
};

export default TitleAndSubtitle;
