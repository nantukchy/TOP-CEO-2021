import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart} = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }


    return (
        <div>
             <h2>Therir life time Contribution </h2>
            <h3>Items Orderd: {props.cart.length}</h3>
            <p>Doner:{props.cart.length}</p>
            <p>Total before tax:{total.toFixed(2)}</p>
            <h1>
                   {
                       cart.map( product=> <li>{product.name}</li>)
                   }
               </h1>

        </div>
    );
};

export default Cart;