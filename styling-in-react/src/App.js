import './App.css';
import StyledBtn, { SubmitBtn } from './Button'

function App() {
  return (
    <div className="App">
      {/* Below button is styled using StyledBtn import*/}
      <StyledBtn type='submit'>Button using styled</StyledBtn>
      {/* Below button is styled using StyledBtn import and passing the props variety*/}
      <StyledBtn variety="outline">Button using styled</StyledBtn>
      {/* Hover Button */}
      <StyledBtn variety="outline">Button using styled</StyledBtn>
      <SubmitBtn>Submit Button</SubmitBtn>
      
    </div>
  );
}

export default App;
