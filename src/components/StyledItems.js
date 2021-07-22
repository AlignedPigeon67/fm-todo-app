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
