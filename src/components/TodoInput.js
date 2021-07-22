import styled from "styled-components";
import { CircleIcon } from "./StyledItems";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  min-height: 50px;
  z-index: 2;
  padding: 0 20px;
  margin-top: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.cardBackground};
`;

const Input = styled.input`
  width: 85%;
  height: 95%;
  border: none;
  font-family: "Josefin Sans", sans-serif;
  background-color: ${({ theme }) => theme.cardBackground};
  /* color: ${({ theme }) => theme.textMain}; */
  color: ${(props) => (props.isDarkMode ? "hsl(234, 39%, 85%)" : "")};

  &:focus {
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => (props.isDarkMode ? "hsl(234, 39%, 85%)" : "")};
  }
  :-ms-input-placeholder {
    color: ${(props) => (props.isDarkMode ? "hsl(234, 39%, 85%)" : "")};
  }
`;

const Circle = styled(CircleIcon)`
  color: ${({ theme }) => theme.borderCircle};
  &:hover {
    cursor: inherit;
  }
`;

const TodoInput = ({ addTodoHandler, isDarkMode }) => {
  return (
    <Form onSubmit={addTodoHandler}>
      <Circle />
      <Input
        isDarkMode={isDarkMode}
        type="text"
        placeholder="Create a new todo..."
      />
    </Form>
  );
};

export default TodoInput;
