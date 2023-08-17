import { styled } from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  background-color: ${({ variant }) =>
    variant === "primary" ? "#ffffff" : "transparent"};
  color: ${(props) => (props.variant === "primary" ? "#000000" : "#ffffff")};

  &:hover {
    background-color: white;
    color: black;
  }

  &:last-child {
    
  }
`;

export const StyledButtonWithHover = styled(StyledButton)`
  &:hover {
    background-color: white;
    color: black;
  }
`;
