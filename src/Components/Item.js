import React, { Component } from 'react';
import './Main.scss';
import Projects from '../Projects';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

  
  const Item = ({ image, description, name, tech }) => {
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <img className='portfolioItem' onClick={handleOpen} src={image}/>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div class='modalItem'>
        <Card>
        <CardMedia
          component="img"
          height="250"
          image={image}
        />
        <CardContent>
          <h1>{name}</h1>
          <div>{tech}</div>
          <p>{description}</p>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Live
        </Button>
        <Button size="small" color="primary">
          Code
        </Button>
      </CardActions>
    </Card>
        </div>
      </Modal>
    </div>
  );
}


export default Item;