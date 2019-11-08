import React from "react"
import Portfolio from './Portfolio';
import Homepage from './Homepage';
import About from './About';
import './Main.scss';
import { Route, HashRouter } from 'react-router-dom';



export default class Main extends React.Component {
  render () {
    return (
      <HashRouter basename='/'>
      <div className="wrapper">
        <Route exact={true} path="/" component={Homepage}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
      </div>
      </HashRouter>
    )
  }
}
