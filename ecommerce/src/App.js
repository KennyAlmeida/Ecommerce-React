import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/itemCount/index.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
