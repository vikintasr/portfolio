import React, {Component} from "react"
import './Main.scss';
import Projects from '../Projects';
import Item from './Item';

 const Portfolio = () => {
   const portfolioItem = Projects.map((project, i) => {
     return <Item
     key={i}
     name={Projects[i].name}
     image={Projects[i].image}/>
   })
   return (
     <div  className='intro'>
     {portfolioItem}
     </div>
   )
 }

 
export default Portfolio;