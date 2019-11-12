import React from "react"
import './Main.scss';
import Projects from '../Projects';
import Item from './Item';
import PortfIntro from './PortfIntro';


const Portfolio = () => {
  const portfolioItem = Projects.map(( i) => {
    return <Item
    key={i}
    image={i.image}
    description={i.description}
    name={i.name}
    tech={i.tech.map((t) =>
    <span> {t} </span>
    )}
    />
  })
   return (
     <div className='container'>
      <PortfIntro />
      <div className='portfGrid'>
      {portfolioItem}
      </div>
     </div>
   )
 }

 
export default Portfolio;

