import './App.css';
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ItemList} from "./components/ItemList"

function App() {
  return (  
    <>
    <BrowserRouter/>
    <NavBar />
    <Routes>
      <Route path='/' element={ItemListContainer}/>
    </Routes>
    <ItemListContainer texto='Bienvenido' />
    <ItemList />
    <Cart />
    </>
  );
}

export default App;
