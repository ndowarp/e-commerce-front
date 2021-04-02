import React from 'react';
import { useEffect, useState } from 'react';

import {Products, Navbar, Cart} from './components/component_index';

const App = () => {

    const [commerceItems, setItems] =  useState([]);
    const [cart, setCart] =  useState([]);
    const [loading, setLoading] = useState(false);


    const  getItems = async () => {
        setLoading(true);
        await fetch('http://localhost:8080/shopping-cart/shopping-cart-items')
            .then((response) => response.json()
            ).then(items => {
                console.log(items);
                setCart(items);
            }).finally(()=>{
                setLoading(false);
            });
            
    }

    const listAllItems = async () => {
        await fetch('http://localhost:8080/commerce-items-store')
            .then ((response) => response.json()
            ).then(items => {
                console.log(items);
                setItems(items);
            });
    }

    useEffect(() => {
        
        listAllItems();
        getItems();

    },[]);

 

    if(loading){
        return <p>Datos cargando.........</p>
    }

    return (
        <div>
            <Navbar totalItems={cart.totalItems}/>
            {console.log(cart)}
            <Cart cartItems={cart}/> 
            {/*<Products products={commerceItems}/>*/}
            
        </div>
    )
}

export default App;
