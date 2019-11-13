import React from "react"
import './Main.scss';
import { Link, HashRouter } from 'react-router-dom';
import homeLogo from '../assets/house.svg';
import Homepage from './Homepage';


// const Nav = () => {
//   return (
//     <div className='navigation'>
//      {/* <a href='/Homepage'><img className='home' src={homeLogo} /></a> */}
//      <Link to='/Homepage'><img className='home' src={homeLogo} /></Link>
//     </div>
//   )
// }


export default class Nav extends React.Component {
  render () {
    return (
      <HashRouter basename='/'>
      <div className='navigation'>
      <Link to='/Homepage'><img className='home' src={homeLogo} /></Link>

      </div>
      </HashRouter>
    )
  }
}

// export default Nav;
