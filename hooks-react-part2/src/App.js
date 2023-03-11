import './App.css';
import ParentComponent from './Components/ParentComponent';
import UseMemoCounter from './Components/UseMemoCounter';
import UseRefForm from './Components/UseRefForm';

function App() {
  return (
    <div className="App">
      {/* <ParentComponent/> */}
      {/* <UseMemoCounter/> */}
      <UseRefForm/>
    </div>
  );
}

export default App;
