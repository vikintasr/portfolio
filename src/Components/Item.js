import React, {Component} from 'react';
import './Main.scss';
import Projects from '../Projects';

const Item = ({ image, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} />
    </div>
  )
}

export default Item;