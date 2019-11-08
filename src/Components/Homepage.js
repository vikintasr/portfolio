import React from "react"
import Portfolio from './Portfolio';
import About from './About';
import './Main.scss';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className='intro'>
      <h1 className='mainHeading'>Vikintas Raudavicius</h1>
      <p className='subHeading'>Front-End Developer you need</p>
      <div className='buttons'>
        <Link className='buttonIntro' to='/Portfolio'>Portfolio</Link>
        <Link className='buttonIntro' to='/About'>About</Link>
      </div>
    </div>
  )
}

export default Homepage;

