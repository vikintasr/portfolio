import React, { Component } from 'react';
import './Main.scss';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import Projects from '../Projects';

// const live = Projects.map(( i) => {
//   return (
//     i.live
//   )
//   });


  const Item = ({ image, description, name, tech, code, live }) => {
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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div class='modalItem'>
        <Fade in={open}>
        <Card>
        <CardMedia
          component="img"
          height="250"
          image={image}
        />
        <CardContent>
          <h1 style={{paddingLeft: ".5em"}}>{name}</h1>
          <div className='techItems'>{tech}</div>
          <p className='description'>{description}</p>
        </CardContent>
      <CardActions>
      <div style={{paddingLeft: ".5em"}}>
      <a href={live}>
        <Button size="small" color="primary">
          Live
        </Button>
        </a>
        <a href={code}>
        <Button size="small" color="primary">
          Code
        </Button>
        </a>
        </div>
      </CardActions>
      
    </Card>
    </Fade>
        </div>
      </Modal>
    </div>
  );
}


export default Item;