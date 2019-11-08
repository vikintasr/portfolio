import React, {Component} from "react";
import './App.scss';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
import Contact from './Components/Contact';

const App = () => (
  <BrowserRouter>
    <Main />
    <Contact />
  </BrowserRouter>
)


export default App;