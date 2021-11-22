import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  margin-bottom: 1.5rem;
  //margin: 1.5rem;

  img {
    transform: scale(0.375);
  }
`;

const Divider = styled.hr`
  position: absolute;
  width: 80vw;
  margin: 0 auto;
  background-color: #e5e5e5;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 0;

  h3 {
    font-size: 1.25rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export { FooterContainer, ContentContainer, Divider };
