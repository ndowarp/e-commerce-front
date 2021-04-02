import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './cartStyles';



const Cart = ({ cartItems  }) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,</Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={4} key={item.itemInCart.id}>
              {console.log(item)}
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button className={classes.checkoutButton}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      {console.log(cartItems)}
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cartItems  ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;