import { useState } from "react";
import styled from "styled-components";
import TodoItem, { Item } from "./TodoItem";
import TodoFilter from "./TodoFilter";
import { MutedText } from "./StyledItems";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: auto;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 20px 100px 30px rgba(0, 0, 0, 0.1);

  > * {
    &:first-child {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    &:last-child {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border: none;
    }
  }

  @media (min-width: 700px) {
    width: 560px;
    margin-top: 25px;
  }
`;

const TodoList = ({
  todos,
  deleteHandler,
  completedToggleHandler,
  clearCompletedHandler,
  windowSize,
}) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const filterClickHandler = (e) => {
    setCurrentFilter(e.target.innerText.toLowerCase());
  };

  let filteredTodos;

  if (currentFilter === "all") filteredTodos = todos;
  else if (currentFilter === "active")
    filteredTodos = todos.filter((todo) => !todo.isComplete);
  else if (currentFilter === "completed")
    filteredTodos = todos.filter((todo) => todo.isComplete);

  return (
    <>
      <List>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            completedToggleHandler={completedToggleHandler}
            windowSize={windowSize}
          />
        ))}
        <Item>
          <MutedText>
            {todos.filter((todo) => !todo.isComplete).length} items left
          </MutedText>
          {windowSize.width > 375 && (
            <TodoFilter
              filterClickHandler={filterClickHandler}
              currentFilter={currentFilter}
            />
          )}
          <MutedText clickable onClick={clearCompletedHandler}>
            Clear Completed
          </MutedText>
        </Item>
      </List>
      {windowSize.width > 375 || (
        <TodoFilter
          filterClickHandler={filterClickHandler}
          currentFilter={currentFilter}
        />
      )}
    </>
  );
};

export default TodoList;
