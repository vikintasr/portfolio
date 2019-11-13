import React from "react"
import Portfolio from './Portfolio';
import Homepage from './Homepage';
import About from './About';
import Nav from './Nav';
import './Main.scss';
import { Route, HashRouter, Switch } from 'react-router-dom';



// export default class Main extends React.Component {
//   render () {
//     return (
//       <HashRouter basename='/'>
//       <div>
//         <Route exact={true} path="/" component={Homepage}/>
//         {/* <Route path="/" component={Homepage} /> */}
//         <Route path="/portfolio" component={Portfolio}/>
//       </div>
//       </HashRouter>
//     )
//   }
// }

export default function Main() {
  return (
    <HashRouter basename='/'>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Homepage">
            <Homepage />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}
