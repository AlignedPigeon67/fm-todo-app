import styled from "styled-components";
import darkLogo from "../images/icon-moon.svg";
import lightLogo from "../images/icon-sun.svg";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  z-index: 2;

  color: ${({ theme }) => theme.headingText};

  @media (min-width: 700px) {
    width: 560px;
  }
`;

const Logo = styled.h2`
  letter-spacing: 10px;
  margin: 0;

  @media (min-width: 700px) {
    font-size: 44px;
    letter-spacing: 14px;
  }
`;

const ThemeToggle = styled.img`
  height: 24px;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    height: 28px;
  }
`;

const Header = ({ themeToggleHandler, isDarkMode }) => {
  return (
    <Container>
      <Logo>TODO</Logo>
      <ThemeToggle
        src={isDarkMode ? lightLogo : darkLogo}
        alt="click to switch between light and dark mode"
        onClick={themeToggleHandler}
      />
    </Container>
  );
};

export default Header;
