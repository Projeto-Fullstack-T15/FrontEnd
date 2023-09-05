import { styled } from "styled-components"
import background from "../../assets/background.jpg"

export const Main = styled.main`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
