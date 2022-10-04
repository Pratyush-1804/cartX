import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Login from './Components/Login';
import ProductList from './Components/ProductList';
import Register from './Components/Register';
import ViewProduct from './Components/ViewProduct';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";
import Payment from './Components/Pay';
import Success from './Components/Success';
function App() {
  const user = true;
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ViewProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/pay" element={<Payment />}></Route>
        <Route path="/success" element={<Success />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
