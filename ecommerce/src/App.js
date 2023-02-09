import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="Welcome to store"/>
      
    </>
  );
}

export default App;
