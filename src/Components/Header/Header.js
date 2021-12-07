import React from "react";
import styled from "styled-components";
import Lg from "../Image/ttlogo.png";

const Header = (props) => {
  const changeTheme = () => {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  };

  return (
    <Container>
      <Wrapper>
        <LogoDiv src={Lg} alt="" />
        <SignDiv>
          <SignBtn>Sign Up</SignBtn>
          <SignBtn>Log In</SignBtn>
          <SignBtn onClick={changeTheme}>Change</SignBtn>
        </SignDiv>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
  padding-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoDiv = styled.img`
  width: 50px;
  margin: 10px;
`;
const SignDiv = styled.div``;
const SignBtn = styled.button`
  height: 34px;
  width: 120px;
  margin: 12px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.94);
  }
`;
