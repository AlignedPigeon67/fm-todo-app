import styled from "styled-components";
import { CircleIcon } from "./StyledItems";
import CheckIcon from "../images/icon-check.svg";
import CrossIcon from "../images/icon-cross.svg";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 2;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderCircle};
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.textLight};

  @media (min-width: 700px) {
    height: 60px;
  }
`;

const Text = styled.p`
  width: 80%;
  font-size: 12px;
  color: ${({ theme }) => theme.textMain};

  text-decoration: ${(props) => (props.isComplete ? "line-through" : "none")};
  opacity: ${(props) => (props.isComplete ? "0.5" : "1")};

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

const Image = styled.img`
  height: 14px;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }
`;

const CheckedCircleIcon = styled(CircleIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: linear-gradient(to bottom right, #64a4fc, #8431c7);

  &:hover {
    cursor: pointer;
  }
`;

const TodoItem = ({ todo, deleteHandler, completedToggleHandler }) => {
  return (
    <Item>
      {todo.isComplete ? (
        <CheckedCircleIcon onClick={(e) => completedToggleHandler(e, todo.id)}>
          <Image src={CheckIcon} style={{ height: "8px" }} />
        </CheckedCircleIcon>
      ) : (
        <CircleIcon onClick={(e) => completedToggleHandler(e, todo.id)} />
      )}
      <Text isComplete={todo.isComplete}>{todo.message}</Text>
      <Image src={CrossIcon} onClick={(e) => deleteHandler(e, todo.id)} />
    </Item>
  );
};

export default TodoItem;
