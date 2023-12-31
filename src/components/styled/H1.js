import { styled } from "styled-components";

export const H1 = styled.h1`
  color: ${({ color }) => color};

  &:hover {
    background-color: white;
    color: black;
  }
`;
