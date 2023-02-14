import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="Welcome to store"/>
      <ItemDetailContainer/>
      
    </>
  );
}

export default App;
