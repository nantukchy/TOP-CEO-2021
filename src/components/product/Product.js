import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';
import './Product.css';


const Product = (props) => {
    // console.log(props);
    const { name, seller, price, img, stock } = (props.product);
    const element = <FontAwesomeIcon icon={faDonate} />
    return (
        <div className='products'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='details'>
            <h3>{name}</h3>
            <p>by :{seller}</p>
            <h4>${price}</h4>
                <p>Only {stock} left in stock - Order Soon</p>
                <button
                    onClick={() =>props.handleAddToCart(props.product)}
                    className='purchase'>{element} add to cart
                </button>
            </div>
        </div>
    );
};

export default Product; <h1>this is product</h1>


