import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Comment from './pages/Comment';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Analytics from './pages/Analytics'

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/comment' element={<Comment/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/productList' element={<ProductList/>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
