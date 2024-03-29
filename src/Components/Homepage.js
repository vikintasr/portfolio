import React from "react"
import './Main.scss';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div className='intro'>
      <h1 className='mainHeading'>Vikintas Raudavicius</h1>
      <p className='subHeading'>Front-End Developer you need</p>
      <div className='buttons'>
        <Link className='buttonIntro' to='/Portfolio'>Portfolio</Link>
      </div>
    </div>
  )
}

export default Homepage;

