import styled from "styled-components";

export const CircleIcon = styled.div`
  border: 1px solid ${({ theme }) => theme.borderCircle};
  border-radius: 100%;
  height: 22px;
  width: 22px;

  &:hover {
    cursor: pointer;
  }
`;

export const MutedText = styled.div`
  opacity: 0.5;
  font-size: 12px;
  color: ${({ theme }) => theme.textMain};

  &:hover {
    cursor: ${(props) => (props.clickable ? "pointer" : "inherit")};
  }
`;
