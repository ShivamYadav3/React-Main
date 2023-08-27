import { useContext } from "react";
import { ThemeContext } from "./theme";
import Header from "./header";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => (props.theme !== "dark" ? "white" : "black")};
`;

const Text = styled.div`
  height: 100vh;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const About = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <Header />
      <Text theme={theme}>This is my About : {theme}</Text>
    </Container>
  );
};

export default About;
