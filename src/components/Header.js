import styled from "styled-components";
import darkLogo from "../images/icon-moon.svg";
import lightLogo from "../images/icon-sun.svg";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 320px;
  z-index: 2;

  color: ${({ theme }) => theme.headingText};
`;

const Logo = styled.h2`
  letter-spacing: 10px;
  margin: 0;
`;

const ThemeToggle = styled.img`
  height: 24px;

  &:hover {
    cursor: pointer;
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
