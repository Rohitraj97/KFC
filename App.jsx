import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import {Foodlist} from "./Components/FoodList"
import { Fooddetails } from './Components/FoodDetails';
import {Cart} from "./Components/Cart"
import {Home} from "./Components/Home"
import { Logout } from './Components/Logout';
import { Payment } from './Components/Payment';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/foodlist" element={<Foodlist/>}></Route>
        <Route path ="/foodlist/:id" element={<Fooddetails/>}></Route>
        <Route path ="/Cart" element={<Cart/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
