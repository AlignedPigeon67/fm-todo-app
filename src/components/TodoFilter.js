import styled from "styled-components";
import { MutedText } from "./StyledItems";
import { Item } from "./TodoItem";

const FilterContainer = styled(Item)`
  width: 90%;
  min-height: 50px;
  margin: 20px 0;
  border-radius: 5px;
  border: none;
  justify-content: center;
  gap: 14px;

  @media (min-width: 700px) {
    width: 350px;
  }
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

const TodoFilter = ({ filterClickHandler, currentFilter }) => {
  return (
    <FilterContainer>
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
  );
};

export default TodoFilter;
