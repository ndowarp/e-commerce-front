import React from 'react';
import {Typography,Button,Card,CardActions,CardContent,CardMedia} from '@material-ui/core';

import useStyles from './cartItemStyles';

const CartItem = ({ item }) => {
    const classes = useStyles();
  
    return (
      <Card className="cart-item">
        <CardMedia image={item.itemInCart.image} alt={item.name} className={classes.media} />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.itemInCart.description}</Typography>
          <Typography variant="h5">{}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button type="button" size="small">-</Button>
            <Typography>&nbsp;{item.itemAmount }&nbsp;</Typography>
            <Button type="button" size="small">+</Button>
          </div>
          <Button variant="contained" type="button" color="secondary" >Remove</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default CartItem;