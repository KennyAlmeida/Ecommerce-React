import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="Welcome to store"/>
      <ItemCount stock="5" initial="1"/>
      
    </>
  );
}

export default App;
