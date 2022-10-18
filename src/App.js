import logo from './logo.svg';
import './App.css';
import Form from './form-submit/Form';
import Posts from './form-submit/posts';
import Products from './form-submit/products';
import Productdetail from './form-submit/productDetail';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element ={<Form/>} />
      <Route path="posts" element ={<Posts/>} />
      <Route path="products" element ={<Products/>}/>
      <Route path="products/:productid" element ={<Productdetail/>}/>
      {/* <Posts></Posts> */}
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
