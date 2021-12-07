import React from "react";
import styled from "styled-components";
import Home from "../Home/Home";
import Home2 from "../Home2/Home2";
import Home3 from "../Home3/Home3";

const HomeMain = (props) => {
  return (
    <Container>
      <Home theme={props.theme} setTheme={props.setTheme} />
      <Home2 theme={props.theme} setTheme={props.setTheme} />
      <Home3 />
    </Container>
  );
};

export default HomeMain;

const Container = styled.div`
  height: 100%;
  width: 100%;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  color: ${(props) => props.theme.textColor};
`;
