import { useState } from "react";
import useWindowSize from "./hooks/useWindowSize";
import styled, { ThemeProvider } from "styled-components";
import Themes from "./context/Themes";
import lightMobBg from "./images/bg-mobile-light.jpg";
import darkMobBg from "./images/bg-mobile-dark.jpg";
import lightDeskBg from "./images/bg-desktop-light.jpg";
import darkDeskBg from "./images/bg-desktop-dark.jpg";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import initialState from "./data/initialState";
import { v4 as uuidv4 } from "uuid";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  z-index: 0;
  padding: 45px 10px;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.headingText};

  @media (min-width: 700px) {
    padding: 65px 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 700px) {
    height: 300px;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [todos, setTodos] = useState(initialState);
  const windowSize = useWindowSize();

  const bgImage =
    windowSize.width > 375
      ? isDarkMode
        ? darkDeskBg
        : lightDeskBg
      : isDarkMode
      ? darkMobBg
      : lightMobBg;

  const addTodoHandler = (e) => {
    e.preventDefault();
    const input = e.target.lastChild.value.trim();
    if (input.length < 1) return;
    const newTodo = {
      id: uuidv4(),
      message: input,
      isComplete: false,
    };
    setTodos((curr) => [newTodo, ...curr]);
    e.target.lastChild.value = "";
  };

  const themeToggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  const completedToggleHandler = (e, id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteHandler = (e, id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearCompletedHandler = () => {
    const newTodos = todos.filter((todo) => !todo.isComplete);
    setTodos(newTodos);
  };

  return (
    <ThemeProvider theme={isDarkMode ? Themes.dark : Themes.light}>
      <Main>
        <Image src={bgImage} alt="background" />
        <Header
          themeToggleHandler={themeToggleHandler}
          isDarkMode={isDarkMode}
        />
        <TodoInput addTodoHandler={addTodoHandler} isDarkMode={isDarkMode} />
        <TodoList
          todos={todos}
          deleteHandler={deleteHandler}
          completedToggleHandler={completedToggleHandler}
          clearCompletedHandler={clearCompletedHandler}
          windowSize={windowSize}
        />
      </Main>
    </ThemeProvider>
  );
}

export default App;
