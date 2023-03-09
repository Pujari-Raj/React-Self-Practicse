import './App.css';
import TodoList from './Components/TodoList';
import SearchUsers from './Components/UserList';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <h2>Higher Order Components</h2>
      <div className='section'>
        <div>
        {/* <UserList/> */}
        <SearchUsers/>
        </div>
        <div>
          <TodoList/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
