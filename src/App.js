import React, {Component} from "react";
import './App.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
import Contact from './Components/Contact';
import Nav from './Components/Nav';

const App = () => (
  <BrowserRouter>
    <Main />
    <Nav />
    <Contact />
  </BrowserRouter>
)


export default App;