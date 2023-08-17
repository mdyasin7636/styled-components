import { styled } from "styled-components";

export const StyledDiv = styled.div`
  background-color: steelblue;
  width: 200px;
  height: 200px;
  padding: 1rem;

  p {
    color: #ffff;
    font-weight: bold;

    a {
      color: orchid;

      &:hover {
        transform: rotate(45deg);
      }
    }
  }

  a {
    color: tomato;
    display: inline-block;
    margin-top: 1rem;
  }
`;
