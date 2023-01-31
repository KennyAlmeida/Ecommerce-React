import './App.css';
import { Fragment } from 'react';
import NavBar from './components/header/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer titulo="Welcome to store"/>
    </>
  );
}

export default App;
