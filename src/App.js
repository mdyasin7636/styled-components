import "./App.css";
import { StyledButton, StyledButtonWithHover } from "./components/styled/Button";
import { StyledDiv } from "./components/styled/StyledDiv";
// import { H1 } from "./components/styled/H1";

function App() {
  return (
    <div className="App">
      <div className="button_box">
        <StyledButton>Live</StyledButton>
        <StyledButton variant="primary">Github</StyledButton>
        {/* <H1 color="red">Demo 1</H1>
        <H1 color="green">Demo 2</H1>
        <H1 color="yellow">Demo 3</H1> */}
      </div>
      <StyledDiv>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nisi!
          <a href="b">Inside p tag</a>
        </p>
        <a href="a">Link</a>
      </StyledDiv>
      <StyledButtonWithHover>Hover Me</StyledButtonWithHover>
    </div>
  );
}

export default App;
