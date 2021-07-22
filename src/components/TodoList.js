import { useState } from "react";
import styled from "styled-components";
import TodoItem, { Item } from "./TodoItem";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 50px 15px 1px rgba(0, 0, 0, 0.05);

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
  }
`;

const MutedText = styled.div`
  opacity: 0.5;
  font-size: 12px;
  color: ${({ theme }) => theme.textMain};

  &:hover {
    cursor: ${(props) => (props.clickable ? "pointer" : "inherit")};
  }
`;

const FilterContainer = styled(Item)`
  width: 320px;
  min-height: 50px;
  margin: 20px 0;
  border-radius: 5px;
  border: none;
  justify-content: center;
  gap: 14px;
  display: ${({ hidden }) => (hidden ? "none" : "")};
`;

const FilterText = styled(MutedText)`
  font-size: 16px;
  opacity: 0.75;
  color: ${(props) => (props.active ? "#1DA1F2" : "")};

  &:hover {
    cursor: pointer;
    opacity: 1;
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
          />
        ))}
        <Item>
          <MutedText>
            {todos.filter((todo) => !todo.isComplete).length} items left
          </MutedText>
          <FilterContainer hidden={windowSize.width < 700 ? true : false}>
            <FilterText
              active={currentFilter === "all" ? "active" : ""}
              onClick={filterClickHandler}
            >
              All
            </FilterText>
            <FilterText
              active={currentFilter === "active" ? "active" : ""}
              onClick={filterClickHandler}
            >
              Active
            </FilterText>
            <FilterText
              active={currentFilter === "completed" ? "active" : ""}
              onClick={filterClickHandler}
            >
              Completed
            </FilterText>
          </FilterContainer>
          <MutedText clickable onClick={clearCompletedHandler}>
            Clear Completed
          </MutedText>
        </Item>
      </List>
      <FilterContainer hidden={windowSize.width >= 700 ? true : false}>
        <FilterText
          active={currentFilter === "all" ? "active" : ""}
          onClick={filterClickHandler}
        >
          All
        </FilterText>
        <FilterText
          active={currentFilter === "active" ? "active" : ""}
          onClick={filterClickHandler}
        >
          Active
        </FilterText>
        <FilterText
          active={currentFilter === "completed" ? "active" : ""}
          onClick={filterClickHandler}
        >
          Completed
        </FilterText>
      </FilterContainer>
    </>
  );
};

export default TodoList;
