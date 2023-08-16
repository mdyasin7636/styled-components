import './App.css';
import { StyledButton } from './components/styled/Button';

function App() {
   return (
      <div className='App'>
         <div className='button_box'>
            <StyledButton>Live</StyledButton>
            <StyledButton variant='primary' >Github</StyledButton>
         </div>
      </div>
   );
}

export default App;
