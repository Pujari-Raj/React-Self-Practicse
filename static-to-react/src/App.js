import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/navbar';
import Banner  from '../src/components/banners';
import Footer from '../src/components/footer';

function App() {
  return (
    <div className="App"> 

      {/*Adding differenet Components*/}
      <Navbar></Navbar>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
}

export default App;
